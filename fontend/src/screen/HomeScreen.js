import React from 'react'
import Product from '../component/Product'
import data from '../data'

export const HomeScreen = () => {
  return (
    <div>
        <div className="row center">
                  {
                    data.products.map((product)=>(
                      <Product key={product.id} product={product}/>
                    ))
                  }
        </div>
    </div>
  )
}
