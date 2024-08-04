import express from "express"
import GetADMINPages from "../../../controllers/admin/getAdminPages.js";
import { VerifyAdminToken } from "../../../../middlewares/TokenVerification.js";

const GetAdminPagesRoute = express.Router();

// GetAdminPagesRoute.get("/home",VerifyAdminToken, GetADMINPages.getIndexPage)
// commented with middleware 
GetAdminPagesRoute.get("/home", GetADMINPages.getIndexPage)


export default GetAdminPagesRoute