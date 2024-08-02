import JWT from "jsonwebtoken";

export async function generateStudentAccessToken(obj, key) {
  try {
    const studentAccessToken = JWT.sign(obj, key);
    return {
      error: false,
      success: true,
      token: studentAccessToken,
    };
  } catch (error) {
    return {
      error: true,
      success: false,
      message: error.message,
    };
  }
}
