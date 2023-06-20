import jwt from "jsonwebtoken"
import { Express } from "express"

export const verifyToken = async (req: Express.Request, res: Express.Response, next: any)=>{
    console.log( req );
    
    next();
    // try {
        
    //     const token = req.headers.authorization
    //     const secret:any = process.env.SECRET_KEY

    //     if(!token) throw "no hay token! >:c"
    //     if(secret) throw "no hay llave secreta"

    //     const decoded = jwt.verify(token,secret)

    //     // req.login = decode 


    //     //envia al contralador o al siguiente middleware
    //     return next()

    // } catch (error) {
    //    return res.status(401).json({error})
    // }
}