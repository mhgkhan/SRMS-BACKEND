import express from "express"
import GetADMINPages from "../../../controllers/admin/getAdminPages";

const GetAdminPagesRoute = express.Router();

GetAdminPagesRoute.get("/", GetADMINPages)


export default GetAdminPagesRoute