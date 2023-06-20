import Express  from "express";
import mongoose from "mongoose"
import userModel from "../models/user.model"
import  Jwt  from "jsonwebtoken";

export const login = async(req: Express.Request,res: Express.Response)=>{
    // {
    //     user:
    //     password:
    // }
    try {
        let {username,password}=req.body

        //buscar el usuario
        let user = await userModel.findOne({username})

        if(!user) throw {status:404, msg: "EL usuario no existe"}
        //revisar si la contraseña es correcta 
        console.log({user})
        //general el token 
        user = user.toObject()
        // delete user.password
        let secret = process.env.SECRET_KEY

        // if(!secret) throw new Error({ status:"404", msg: "no hay como encritar el token" }); 
        if( !secret ) throw new Error( "No hay como encritar el token"  );

        const token =Jwt.sign({user}, secret, {expiresIn: "2h"})
        // responder login 
        return res.status(200).json({msg: "sesion Iniciada correctamente",token})

    } catch (error) {
        console.log(error)
        // return res.status(error.status || 400).json({msg:error.msg || error})
        return res.status( 400 ).json( { msg: error } );
    }
}

export const getUsers = async (req: Express.Request,res:Express.Response)=>{
    try {
        const result = await userModel.find() //los usuarios existentes
        res.status(200).json({result})
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "ha ocurrido un error",error})
        
    }
}

export const createUser = async (req: Express.Request,res: Express.Response)=>{
   try {
     let newUser = req.body
     const userCreated = await userModel.create(newUser)

     if(userCreated) return res.status(201).json({msg: "Usuario creado"})
     throw {msg: "Error al crear el usuario "}
   } catch (error) {
    console.log(error)
    return res.status(400).json({msg: "ha ocurrido un error",error})
    
   }
} 

export const updateUser = async (req: Express.Request,res:Express.Response)=>{
    // {
    //     _id:
    //     dataToUpdate:{}
    // }
    try {
        let {dataToUpdate, _id}= req.body
        const updatedData = await userModel.findByIdAndUpdate(_id, dataToUpdate)

        return res.status(200).json({msg: "Usuario actualizdo"})

    } catch (error) {
        console.log(error)
        return res.status(400).json ({msg: "ha acurrido un error",error})
    }
}

export const deleteUser = async (req: Express.Request, res: Express.Response)=>{
    try {
        let {_id} = req.params

        const deleted = await userModel.findByIdAndDelete(_id)
        return res.status(200).json({msg: "usuario elimibado"})
    } catch (error) {
        return res.status(400).json({msg: "ha ocurriod un error",error})
    }
}
