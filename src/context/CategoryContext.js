import axios from "axios";
import { createContext, useEffect, useState } from "react";
import apiUrl from "../utils/api";


export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategory = async () => {
            await axios.get(`${apiUrl.categoryUrl}`)
                        .then(response => setCategories(response.data))
                        .catch(error => console.log('Error:', error));
        }

        getCategory()
    }, [])

    return (
        <CategoriesContext.Provider value={ categories }>
            {children}
        </CategoriesContext.Provider>
    );
};
