import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'
import { LuTrash2 } from "react-icons/lu"
import './basket.css'

const Basket = () => {
    const { basket, removeBasket } = useContext(BasketContext)

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
                    {basket && basket.map((item, index) => (

                        <tr key={index}>
                            <td width="2%">{index + 1}</td>
                            <td> <img src={item.thumbnail} alt="" /> </td>
                            <td className='text-capitalize'>{item.category}</td>
                            <td>{item.brand}</td>
                            <td>{item.price} ₼</td>
                            <td>
                                <button onClick={() => removeBasket(item)} className='btn btn-danger btn-sm'><LuTrash2 /></button>
                            </td>
                        </tr>
                    ))}

                </tbody>
                </table>
        </div>
    )
}

export default Basket