import { types } from "./types"; 
import axios from "axios"
const addProduct = (product) => {
    return {
        type:ADD_PRODUCT,
        payload : product
    }
}

export {
    addProduct,
}