import React, { useState, useEffect } from "react";
import ProductCard from "../Card/ProductCard";
import FilterTab from "../FilterTab/FilterTab";
import { Products } from "../../lib/Products";

const FilterProducts = ({ handleCart }) => {
  const [filterProducts, setFilterProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await Products();
      setAllProducts(data);
      setFilterProducts(data);
      setLoading(false);
    };
    fetchProduct();
  }, []);

  const handleFilter = (newCategory, newPrice) => {
    let filteredProducts = allProducts;

    if (newCategory !== "All") {
      filteredProducts = filteredProducts.filter(product => product.category === newCategory);
    }

    if (newPrice !== "All") {
      const [minPrice, maxPrice] = newPrice.split('-').map(p => parseFloat(p.trim().split(" ")[1]));
      filteredProducts = filteredProducts.filter(product => product.price > minPrice && product.price < maxPrice);
    }

    setFilterProducts(filteredProducts);
  };

  const handleDropCSearch = (value) => {
    setCategory(value);
    handleFilter(value, price);
  };

  const handleDropPSearch = (value) => {
    setPrice(value);
    handleFilter(category, value);
  };

  return (
    loading ? <p>Loading...</p> : (
      <div className="w-10/12 m-auto space-y-5 mt-10">
        <FilterTab handleDropCSearch={handleDropCSearch} products={filterProducts} handleDropPSearch={handleDropPSearch} />
        <div className="flex gap-10 flex-wrap items-center justify-center">
          {filterProducts.map((product) => (
            <ProductCard key={product._id} product={product} handleCart={handleCart} />
          ))}
        </div>
      </div>
    )
  );
};

export default FilterProducts;
