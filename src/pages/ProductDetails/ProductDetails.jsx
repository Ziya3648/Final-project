import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiUrl from '../../utils/api'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';
import './details.css'
import { BasketContext } from '../../context/BasketContext'

const ProductDetails = () => {
  const {id} = useParams()
  const [product, setProduct] = useState([])
  const [isAdded, setIsAdded] = useState(false)
  const { basket, addBasket } = useContext(BasketContext)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`${apiUrl.productsUrl}/${id}`);
        const fetchedProduct = response.data;
        setProduct(fetchedProduct);

        const isProductAdded = basket.some((item) => item.id === fetchedProduct.id);
        setIsAdded(isProductAdded);
      } catch (error) {
        console.error(error);
      }
    }

    getProduct()
  }, [id, basket])

  const handleAddToBasket = () => {
    addBasket(product)
    setIsAdded(true)
  }

  const { brand, category, description, price, rating, stock, discountPercentage, images } = product
  const rate = Math.floor(rating)



  return (
    <div className='row'>
      <div className="col-md-4">
        <Swiper spaceBetween={10} className="mb-3" >
          {images && images.length > 0 && (
            images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
      <div className="col-md-6">
        <div className="card border-0">
          <div className="card-body">
            <p className="card-text mb-2 text-muted text-capitalize">Kateqoriya: {category}</p>
            <h5 className="card-title">{brand}</h5>
            <p className="card-text"><i>{description}</i></p>
            <p className="card-text">Qiyməti: {price} ₼</p>
            <p className="card-text">Endirim faizi: {discountPercentage} %</p>
            <p className="card-text">Məhsulun sayı: {stock} ədəd</p>
            <div className='d-flex'>
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index} className={`fa fa-star ${index < rate ? 'checked' : ''}`}></span>
              ))}
            </div>
            <br />
            <button
              onClick={handleAddToBasket}
              className={`btn ${isAdded ? 'btn-success' : 'btn-primary'} w-50`}
              disabled={isAdded}
            >
              {isAdded ? 'Səbətə əlavə edilib' : 'Səbətə əlavə et'}
            </button>
          </div>
          
        </div>
        
      </div>
    </div>
  );
  
}

export default ProductDetails