import Express from "express"
import mongoose from "mongoose"
import productModel from "../models/product.model"

export const getProducts = async (req: Express.Request,res: Express.Response)=>{
    try {
        let result = await productModel.find()
        return res.status(200).json({result})
    } catch (error) {
        console.log(error)
        return res.status(400).json ({msg: `Error en la api`,error})
    }
}
export const createProducts = async (req: Express.Request,res: Express.Response)=>{
    try {
        let data = req.body
        let result = await productModel.create(data)
        return res.status(201).json({result})
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: `Error en la api`,error})   
    }
}

export const updateProducts = async (req: Express.Request, res: Express.Response)=>{
    try {
        let {_id } = req.body
        let data = req.body
        let result = await productModel.findByIdAndUpdate(_id,data)
        return res.status(200).json({msg: "Producto actualizado", result})
    } catch (error) {
        
    }
}

export const deleteProducts = async (req: Express.Request,res: Express.Response)=>{
    try {
        let {_id} = req.params

        const deleteProducts = await productModel.findByIdAndDelete(_id);
        
        if(!deleteProducts){
            return res.status(404).json({msg: "producto no encontrado"})
        }

        return res.status(200).json({msg: "producto eliminado"})
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "Ha ocurrido un error",error})
        
    }
}

export const uploadImageProduct = async (req: Express.Request,res: Express.Response)=>{
    try {
        let { } = req
        res.status(201).json({msg: "Archivo guardado correctamente"})
    } catch (error) {
        console.log(error);
        return res.status(400).json({ msg: "Ha ocurrido un error",error })
        
    }
}