import React from 'react'
import Rating from './Rating';

const Product = (props) => {
    const {product}=props;
  return (
    <div>
        <div key={product.id} className="card">
                      <a href={`/product/${product.id}`}>
                          <img 
                          className="medium" 
                          src={product.image} 
                          alt={product.name}
                          />
                      </a>
                      <div className="card-body">
                        <a href={`/product/${product.id}`}>
                              <h3>{product.name}</h3>
                          </a>
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