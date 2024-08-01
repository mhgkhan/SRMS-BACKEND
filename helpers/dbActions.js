export async function checkIfValueExistsInCollection(collection, field, value) {
  try {

    const findData = await collection.findOne({ [field]: value });


    if (findData == null || findData == undefined || findData == NaN)
      return {
        error: false,
        success: false,
        data: findData,
      };
    else
      return {
        error: false,
        success: true,
        data: findData,
      };
  } catch (error) {
    return {
      error: true,
      message: error.message,
      success: false,
      data: null,
    };
  }
}

export async function addSingleDocumentToCollection(collection, obj){
  try {

    const document = new collection({
      ...obj
    });
    const saving = await document.save();
    return {
      error:false,
      success:true,
      data: saving
    }
    
  } catch (error) {
    return {
      error:true,
      message: error.message,
      success:false,
      data:null
    }
  }
}



