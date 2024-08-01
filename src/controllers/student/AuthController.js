class StudentAuthRouteController {
    static handleStudentLogin = async (req,res) =>{
        try {
            return res.status(200).json({success:true, message:"hello world "})
        } catch (error) {
            
        }
    }
}

export default StudentAuthRouteController