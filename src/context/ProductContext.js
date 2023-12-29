import axios from "axios"
import { createContext, useEffect, useState } from "react"
import apiUrl from "../utils/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getProducts = async () => {
          await axios.get(`${apiUrl.productsUrl}`)
                    .then(response => setProducts(response.data.products))
                    .catch(error => console.log(error))
        }
    
        getProducts()
    }, [])


    const GetProductsByCategory = async (categoryName) => {
        try {
            if ( categoryName === '' || categoryName === 'all' ) {
                const resp = await axios.get(`${apiUrl.productsUrl}`)
                if (resp) setProducts(resp.data.products)
            } else {
                const resp = await axios.get(`${apiUrl.productsUrl}/category/${categoryName}`)
                if (resp) setProducts(resp.data.products)
            }            
        } catch (error) {
            console.log(error)
        }
    }

    const removeProduct = async (productId) => {
        try {
          const response  = await axios.delete(`${apiUrl.productsUrl}/${productId}`)
          if (response) {
            console.log("Successfuly deleted");
          }
        } catch (error) {
          console.log(error);
        }
    }



    const addProduct = async (newProduct) => {
        try {
          setProducts((prevProducts) => [...prevProducts, newProduct])

          console.log('Product added successfully!')
          navigate('/manage/products')
        } catch (error) {
          console.log(error);
        }
      }


    return (
        <ProductContext.Provider value={{ products, GetProductsByCategory, addProduct, removeProduct }}>
            {children}
        </ProductContext.Provider>
    )
}


export default ProductProvider