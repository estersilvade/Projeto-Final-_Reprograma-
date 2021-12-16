const Prof = require('../models/prof_model')

//Lista de serviço
const lista  = async (req, res) => {
  try{
    const prof = await Prof.find()
    res.status(200).json({ 
      massagen:"Lista  de serviço", prof
    })
  }catch(error){
    res.status(500).json({
      message: error.message
    })
  }
}
//registro de serviços

module.exports = {
  lista
}