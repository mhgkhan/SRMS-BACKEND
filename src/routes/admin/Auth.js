import express from "express"
import AuthAdminHandlers from "../../controllers/admin/Auth.js";
const AdminAuthRouter = express.Router();

// AdminAuthRouter.get("/signin", StudentAuthRouteController)

AdminAuthRouter.post("/login", AuthAdminHandlers.handleLoginAdmin)



export default AdminAuthRouter