import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Index/Home'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Products from '../pages/Products/Products'
import ProductProvider from '../context/ProductContext'
import { CategoriesProvider } from '../context/CategoryContext'
import BasketProvider from '../context/BasketContext'
import Basket from '../pages/Basket/Basket'


const PublicRoutes = () => {
  return (
    <BasketProvider>
      <Layout>
          <Routes>
              <Route path='/' element={
                <ProductProvider>
                  <Home />
                </ProductProvider>
              } />

              <Route path='/products' element={
                <CategoriesProvider>
                  <ProductProvider>
                    <Products />
                  </ProductProvider>
                </CategoriesProvider>
              } />

              <Route path='/products/category/:category' element={
                <CategoriesProvider>
                  <ProductProvider>
                    <Products />
                  </ProductProvider>
                </CategoriesProvider>
              } />            

              <Route path='/products/:id' element={<ProductDetails />} />
              <Route path='/basket' element={<Basket />} />
          </Routes>
      </Layout>
    </BasketProvider>
  )
}

export default PublicRoutes