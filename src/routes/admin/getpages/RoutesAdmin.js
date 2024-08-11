import express from "express"
import GetADMINPages from "../../../controllers/admin/getAdminPages.js";
import { verifyAccessAdminToken } from "../../../../middlewares/TokenVerification.js";

const GetAdminPagesRoute = express.Router();

GetAdminPagesRoute.get("/", (req,res)=>{
    res.json({succes:true})
})
GetAdminPagesRoute.get("/home",verifyAccessAdminToken, GetADMINPages.getIndexPage)
GetAdminPagesRoute.get("/login",GetADMINPages.getLoginPage)
GetAdminPagesRoute.get("/classes", verifyAccessAdminToken, GetADMINPages.getClassesPageHandler)
GetAdminPagesRoute.get("/allresult", verifyAccessAdminToken, GetADMINPages.getClassesPageHandler)
GetAdminPagesRoute.get("/dmc", verifyAccessAdminToken, GetADMINPages.getClassesPageHandler)
// commented with middleware 
// GetAdminPagesRoute.get("/home", GetADMINPages.getIndexPage)


export default GetAdminPagesRoute