import { Router } from "express";
import { addProduct, allProducts, deleteProduct, getProduct, updateProduct } from "./product.controller.js";





const  productRouter = Router()
productRouter
.route('/')
.post(addProduct)
.get(allProducts)

productRouter
.route('/:id')
.get(getProduct)
.put(updateProduct)
.delete(deleteProduct)




export default productRouter