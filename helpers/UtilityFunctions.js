export const sendSuccessResponse = (res, success, message, data, status) =>
  res.status(status).json({ success: success, message, data });
export const sendErrorResponse = (res, success, type, message, status) =>
  res.status(status).json({ success: success, message, errType: type });

export const checkReciveDataValidations = (arr) => {
  try {
    let check = [];
    arr.forEach((element) => {
      if (element.length < 2) {
        check.push(false);
      } else {
        check.push(true);
      }
    });

    if (check.includes(false)) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.log("the error is ", error);
    return {
      error: true,
      message: error.message,
    };
  }
};
