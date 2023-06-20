import { Express } from "express";
import { Router } from "express";
import controllers from "../controllers"
import upload from "../multer"

const router = Router();

router.get("/getProducts", controllers.Product.getProducts)
router.get("/createProducts", controllers.Product.createProducts)
router.get("/updateProducts", controllers.Product.updateProducts)
router.get("/deleteProducts", controllers.Product.deleteProducts)

// Subir archivo
router.post("/upload", upload.single('file'), controllers.Product.uploadImageProduct)

export default router