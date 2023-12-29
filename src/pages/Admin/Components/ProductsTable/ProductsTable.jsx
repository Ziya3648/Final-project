import React, { useContext, useState } from 'react'
import { ProductContext } from '../../../../context/ProductContext';
import { LuTrash2, LuBadgePlus  } from "react-icons/lu"
import { Spinner } from 'react-bootstrap';
import AddProduct from '../AddProduct/AddProduct';



const ProductsTable = () => {
  const {products, removeProduct} = useContext(ProductContext)

  if (!products || products.length === 0) {
    return (
        <div className='text-center'>
            <Spinner animation="border" variant="secondary" />
            <p>Məhsullar yüklənir...</p>
        </div>
    )
  }
  return (
      <div>
          <table className="table table-striped table-bordered">
              <thead>
                  <tr>
                  <th>S/s</th>
                  <th>Şəkil</th>
                  <th>Kareqoriya</th>
                  <th>Adı</th>
                  <th>Qiyməti</th>
                  <th></th>
                  </tr>
              </thead>
              <tbody>
                  {products && products.map((item, index) => (

                      <tr key={index}>
                          <td width="2%">{index + 1}</td>
                          <td> <img src={item.thumbnail} alt="" /> </td>
                          <td className='text-capitalize'>{item.category}</td>
                          <td>{item.brand}</td>
                          <td>{item.price} ₼</td>
                          <td>
                              <button onClick={() => removeProduct(item.id) } className='btn btn-danger btn-sm'><LuTrash2 /></button>
                              <button className='btn btn-warning btn-sm ms-2'><LuBadgePlus /> </button>
                          </td>
                      </tr>
                  ))}

              </tbody>
              </table>
      </div>
  )
}

export default ProductsTable