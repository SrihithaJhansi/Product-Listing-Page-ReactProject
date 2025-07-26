import React, { useState, useEffect } from 'react';
import './Sort.css';
import ProductList from '../ProductList';

const SortingBar = () => {
  const [productCount, setProductCount] = useState(0);
  const [showFilters, setShowFilters] = useState(true);
  const [sortBy, setSortBy] = useState('recommended');
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [filters, setFilters] = useState({
    customizable: false,
    occasion: '',
    work: '',
    fabric: '',
    segment: '',
    suitableFor: '',
    rawMaterials: '',
    pattern: '',
  });

  // Load Products from API
  const loadProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const items = await res.json();
      setAllProducts(items);
      setVisibleProducts(items);
      setProductCount(items.length);
    } catch (err) {
      console.error('Failed to load products:', err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // Sorting Logic
  const sortItems = (criteria) => {
    setSortBy(criteria);
    const sorted = [...visibleProducts];
    switch (criteria) {
      case 'newest':
        sorted.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
        sorted.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case 'high-to-low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'low-to-high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    setVisibleProducts(sorted);
  };

  // Handle Filter Input Changes
  const updateFilters = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Apply Filters
  useEffect(() => {
    let filtered = [...allProducts];
    for (const key in filters) {
      const val = filters[key];
      if (val) {
        filtered = filtered.filter((item) => {
          if (key === 'customizable') {
            return val ? item.title.toLowerCase().includes('custom') : true;
          }
          return item[key]?.toString().toLowerCase().includes(val.toLowerCase());
        });
      }
    }
    setVisibleProducts(filtered);
    setProductCount(filtered.length);
  }, [filters, allProducts]);

  return (
    <section className="sort-wrapper">
      <header className="sort-header">
        <span className="count-display">{productCount} Items</span>
        <div className="sort-actions">
          <button onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
          <select value={sortBy} onChange={(e) => sortItems(e.target.value)}>
            <option value="recommended">Recommended</option>
            <option value="newest">Newest First</option>
            <option value="popular">Popular</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="low-to-high">Price: Low to High</option>
          </select>
        </div>
      </header>

      <main className="main-content">
        {/* Sidebar Filters */}
        {showFilters && (
          <aside className="filters-panel">
            <div className="filter-block">
              <input
                type="checkbox"
                checked={filters.customizable}
                onChange={(e) => updateFilters('customizable', e.target.checked)}
              />
              <label>Customizable</label>
            </div>

            {[
              'occasion',
              'work',
              'fabric',
              'segment',
              'suitableFor',
              'rawMaterials',
              'pattern',
            ].map((filterKey) => (
              <div key={filterKey} className="filter-block">
                <label>{filterKey.toUpperCase()}</label>
                <select
                  onChange={(e) => updateFilters(filterKey, e.target.value)}
                >
                  <option value="">All</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>
            ))}
          </aside>
        )}

        {/* Product Listing */}
        <div className="product-display">
          <ProductList products={visibleProducts} />
        </div>
      </main>
    </section>
  );
};

export default SortingBar;
