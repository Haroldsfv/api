import { Router } from "express";
import infoController from "../controllers/infoController.js";

const router=new Router()
//ontener informacion disponibles
router.get('/info',infoController.index)
// crear un nuevo info
//router.get('/info',infoController.store)
// obtiene detaññes del info por el id 
//router.get('/info/:id',infoController.details)


export default router