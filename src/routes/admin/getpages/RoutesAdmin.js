import express from "express"
import GetADMINPages from "../../../controllers/admin/getAdminPages.js";
import { VerifyAdminToken } from "../../../../middlewares/TokenVerification.js";

const GetAdminPagesRoute = express.Router();

GetAdminPagesRoute.get("/",VerifyAdminToken, GetADMINPages)


export default GetAdminPagesRoute