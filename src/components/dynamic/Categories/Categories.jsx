import React, { useContext, useEffect, useState } from "react"
import "./categories.css"
import Spinner from 'react-bootstrap/Spinner'
import { CategoriesContext } from "../../../context/CategoryContext"
import { useNavigate, useParams } from "react-router-dom"
import { ProductContext } from "../../../context/ProductContext"


const Categories = ({ data }) => {
  const cat = useParams()
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false)
  const category = useContext(CategoriesContext)
  const { products, GetProductsByCategory } = useContext(ProductContext)
  const [selectedCategory, setSelectedCategory] = useState('')

  
  const handleCategoryClick = (category) => {
    navigate(`/products/category/${category}`);
    setSelectedCategory(category);
  };



  useEffect(() => {
    if (selectedCategory !== '') {
      GetProductsByCategory(selectedCategory);
    }
  }, [selectedCategory, GetProductsByCategory])



  const toggleCategories = () => {
    setIsExpanded(!isExpanded)
  }



  const handleSelectChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory)
    GetProductsByCategory(selectedCategory)
  }

  if (!category || category.length === 0) {
    return (
        <div className='text-center'>
            <Spinner animation="border" variant="secondary" />
        </div>
    )
  }



  if (data === 'home') {
    return (
      <div>
        <h4 className="p-0">Bütün kateqoriyalar</h4>
        <ul className="list-group categoryList border" style={{ maxHeight: isExpanded ? "none" : "370px" }}>
          
          {category && category.map((item, index) => {
            return (
              <li key={index} className="list-group-item border-0 text-capitalize" onClick={() => handleCategoryClick(item)}>
                <a href={`/products/category/${item}`} >
                  {item}
                </a>
              </li>
            )
          })}

        </ul>
        <li className="show-more border rounded-2" onClick={toggleCategories}>
          {isExpanded ? (
            <p className="m-0">
              Daha az <span>-</span>
            </p>
          ) : (
            <p className="m-0">
              Daha çox <span>+</span>
            </p>
          )}
        </li>
      </div>
    )
  } else {
    return (
      <select className="form-select text-capitalize" onChange={handleSelectChange} value={selectedCategory}>
        <option value="">Seçilməyib</option>
        {category && category.map((item, index) => {
            return (
              <option key={index} value={item} className="text-capitalize">{item}</option>
            )
        })}
      </select>
    )
  }
};

export default Categories
