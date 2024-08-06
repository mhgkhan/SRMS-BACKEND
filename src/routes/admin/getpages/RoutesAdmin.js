import express from "express"
import GetADMINPages from "../../../controllers/admin/getAdminPages.js";
import { verifyAccessAdminToken } from "../../../../middlewares/TokenVerification.js";

const GetAdminPagesRoute = express.Router();

GetAdminPagesRoute.get("/", (req,res)=>{
    res.json({succes:true})
})
GetAdminPagesRoute.get("/home",verifyAccessAdminToken, GetADMINPages.getIndexPage)
GetAdminPagesRoute.get("/login",GetADMINPages.getLoginPage)
// commented with middleware 
// GetAdminPagesRoute.get("/home", GetADMINPages.getIndexPage)


export default GetAdminPagesRoute