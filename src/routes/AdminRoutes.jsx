import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../layout/AdminLayout'
import AdminIndex from '../pages/Admin/Index/AdminIndex'
import Products from '../pages/Admin/Products/Products'
import ProductProvider from '../context/ProductContext'
import { CategoriesProvider } from '../context/CategoryContext'
import ProductsTable from '../pages/Admin/Components/ProductsTable/ProductsTable'
import AddProduct from '../pages/Admin/Components/AddProduct/AddProduct'

const AdminRoutes = () => {
  return (
    <AdminLayout>
        <Routes>
            <Route path='/manage' element={
              <CategoriesProvider>
                <ProductProvider>
                  <AdminIndex />
                </ProductProvider>
              </CategoriesProvider>
            } />
            <Route path='/manage/products' element={
              <ProductProvider>
                <ProductsTable />
              </ProductProvider>
            } />
        </Routes>          
    </AdminLayout>
  )
}

export default AdminRoutes