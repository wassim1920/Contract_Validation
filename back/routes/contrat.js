import express from "express";
import { GetAllContrat } from "../controllers/contrat.js";
import { getAllFolders } from "../controllers/file.js";
import { GetAllCustomer, searchByCin,  searchByName,  searchContractsByCreationDate, searchContractsByMSISDN} from "../controllers/recherche.js";
import { processFiles, processImage, processImageVerso } from "../controllers/test.js";



const router = express.Router();
router.get("/process_files" , processFiles)
router.get("/search/name" , searchByName)
router.get("/search",searchContractsByMSISDN)
router.get("/date" ,searchContractsByCreationDate)
router.get("/process_images_verso", processImageVerso)
router.get("/folders/", getAllFolders)
router.get("/all", GetAllContrat)
router.get("/process_images", processImage)
router.get('/search/cin', searchByCin)
router.get('/customers', GetAllCustomer)




export default router;
