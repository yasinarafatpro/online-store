import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = (props) => {
    const {product}=props;
  return (
    <div>
        <div key={product.id} className="card">
                      <Link to={`/product/${product.id}`}>
                          <img 
                          className="medium" 
                          src={product.image} 
                          alt={product.name}
                          />
                      </Link>
                      <div className="card-body">
                        <Link to={`/product/${product.id}`}>
                              <h3>{product.name}</h3>
                          </Link>
                          <Rating 
                          rating={product.rating} 
                          Reviews={product.reviews}>
                          </Rating>
                          <div className="price"> 
                              {product.price} Tk
                          </div>
                      </div>
                  </div>
    </div>

  )
}
export default Product