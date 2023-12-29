import React, { createContext, useContext, useEffect, useState } from 'react'

export const BasketContext = createContext()

export const BasketProvider = ({children}) => {
    const savedBasket = JSON.parse(localStorage.getItem('basket')) || []
    const [basket, setBasket] = useState(savedBasket)
    const [basketCount, setBasketCount] = useState(0)

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
        setBasketCount(basket.length)
    }, [basket])

    const addBasket = (product) => {
        setBasket(prevBasket => [...prevBasket, product])
    }

    const removeBasket = (product) => {
        setBasket(prevBasket => prevBasket.filter(item => item !== product))
    }

    useEffect(() => {
        if (!localStorage.getItem('basket')) {
            localStorage.setItem('basket', JSON.stringify(basket))
        }
    }, [])
    

    return (
        <BasketContext.Provider value={{ basket, basketCount, addBasket, removeBasket }}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider