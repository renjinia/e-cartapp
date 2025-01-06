import React from 'react'
import Header from '../components/Header'


const View = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
          <img width={'450px'} height={'200px'} src="https://cdn.shopify.com/s/files/1/0070/7032/articles/ecommerce_20shopping_20cart_4c343e41-1041-49d3-bca8-3d7d1aa06d90.png?v=1729263457" alt="" />
          <div>
            <h3 className='font-bold'>PID:id</h3>
            <h1 className='text-5xl font-bold'>Product Name</h1>
            <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
            <h4>Brand:brand</h4>
            <h4>Ctegory:category</h4>
            <p><span className='font-bold'>Description</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corporis mollitia harum, error earum molestias explicabo tempore soluta deleniti eius. Officiis eos voluptate accusamus iure. Quia, aliquid hic! Magnam, deserunt.
            <div className='flex justify-between mt-5'>
              <button className='bg-blue-600 text-white p-2'>Add to Wishlist</button>
              <button className='bg-green-600 text-white p-2'>Add to Cart</button>
            </div>
            </p>
          </div>
        </div>
      </div>
    </>    
  )
}

export default View