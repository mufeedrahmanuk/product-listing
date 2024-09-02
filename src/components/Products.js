import React, { useEffect, useState } from 'react';
import './Products.css';

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Initial visible count
  const [showMore, setShowMore] = useState(false); // Track whether to show more or less
  const [loading, setLoading] = useState(true); // Track loading state

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products')
      .then((response) => response.json())
      .then((data) => {
        const initialProducts = data[0];
        const updatedProducts = initialProducts.map((product, index) => ({
          ...product,
          image: index < 10 ? images[index] : images[Math.floor(Math.random() * images.length)],
        }));
        setProducts(updatedProducts);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false); // Ensure loading state is updated even if there's an error
      });
  }, []);

  const handleToggleProducts = () => {
    if (showMore) {
      setVisibleCount(6); // Reset to show only initial 6 products
    } else {
      setVisibleCount(products.length); // Show all products
    }
    setShowMore(!showMore); // Toggle the state
  };

  return (
    <section className="products">
      {loading ? (
        <div className="loading">Loading...</div> // Placeholder content
      ) : (
        <>
          <div className="product-grid">
            {products.slice(0, visibleCount).map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.product_name} />
                <div className="product-card-text">
                  <h3>{product.product_name}</h3>
                  <p>£{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="load-more-container">
            <button className="load-more" onClick={handleToggleProducts}>
              {showMore ? 'Show Less' : 'Load More'}
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Products;
