import React from 'react'
import postsData from './homepostsData.js'
import './Products.css'
import { Link } from 'react-router-dom';

export default function Products() {
  const renderProductCards = () => {
    return postsData.slice(0, 4).map(post => (
      <div className="card" id="card" key={post.id} style={{ width: "19rem", marginRight: "1rem", marginBottom: "1rem" }}>
        <Link to={post.product}>
          <img src={post.imageUrl} className="card-img-top" alt={`product-${post.id}`} />
        </Link>
      </div>
    ));
  };
  return (
    <>
    <div className="space"></div>
    <section id='products'>
        <div className="home-product">
          <p>Products</p>
        </div>
        <div className="cards">
          {renderProductCards()}
        </div>
      </section>
    </>
  )
}
