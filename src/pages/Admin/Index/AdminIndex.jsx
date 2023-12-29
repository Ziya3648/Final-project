import React, { useContext } from 'react'
import { CategoriesContext } from '../../../context/CategoryContext'
import { ProductContext } from '../../../context/ProductContext'

const AdminIndex = () => {
  const categories = useContext(CategoriesContext)
  const {products} = useContext(ProductContext)

  return (
    <div className='row'>
      <div className='col-lg-5 bg-warning m-1 h-50 rounded-2 text-center text-white'>
        <h3>Məsulların sayı</h3>
        <h3>{products.length}</h3>
      </div>
      
      <div className='col-lg-5 bg-primary m-1 h-50 rounded-2 text-center text-white'>
        <h3>Kateqoriyların sayı</h3>
        <h3>{categories.length}</h3>
      </div>
    </div>
  )
}

export default AdminIndex