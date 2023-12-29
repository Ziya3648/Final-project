import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Categories from '../../components/dynamic/Categories/Categories'
import Products from '../Products/Products'
import { CategoriesProvider } from '../../context/CategoryContext'



const Home = () => {

  return (
    <div>
      <div className='row bg-light rounded-2 p-2'>
        <div className='col-lg-3'>
          <CategoriesProvider>
            <Categories data={'home'} />
          </CategoriesProvider>
        </div>
        <div className='col-lg-9'>
          <Swiper slidesPerView={3} >
            <SwiperSlide>
              <img src="https://i.dummyjson.com/data/products/1/1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.dummyjson.com/data/products/1/2.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='row gy-3 my-4 p-0'>
          <h3 className='bg-light fw-bold my-4 p-2 rounded-2'>Məhsullar</h3>
          <Products data={'home'} />
      </div>
    </div>
  )
}

export default Home