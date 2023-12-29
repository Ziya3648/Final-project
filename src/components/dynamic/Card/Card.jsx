import axios from 'axios'
import React, { useEffect, useState } from 'react'
import apiUrl from '../../../utils/api'
import './card.css'
import Spinner from 'react-bootstrap/Spinner'
import { Link } from 'react-router-dom'


const Card = (props) => {
    const {id, brand, price, thumbnail} = props.data

    if (!props.data || Object.keys(props.data).length === 0) {
        return (
            <div className='text-center'>
                <Spinner animation="border" variant="secondary" />
            </div>
        )
    }


    return (
            <div className='col-lg-3 col-6' key={id}>
                <div className="card">
                    <div>
                        <img className="card-img-top" src={thumbnail} alt="Card image cap" />
                    </div>
                    
                    <div className="card-body">
                        <h5 className="card-title">{brand}</h5>
                        <p className="card-text">Qiyməti: {price} azn</p>
                        <Link to={`/products/${id}`} className='btn btn-primary w-100'>Ətraflı</Link>
                    </div>
                </div>
            </div>
    )
}

export default Card