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

//Criar serviço
const criar = async(req, res) => {
  const {
    Atividade,diaria,hora,valor,agendarData,agendarHorario
  }= req.body
  try{
    const newProf = new Prof({
      Atividade,diaria,hora,valor,agendarData,agendarHorario
    })
    const saveProf = await newProf.save()
    res.status(200).json({
      message:"Atividade cadastrada com sucesso "
    })

  }catch (error) {
    res.satus(500).json({
      message:error.message 
    })
  
  }
}

//Delete 
const excluir =async (req, res) => {
  try{
    const profile = await Prof.findByIdAndDelete(req.params.profile)
    res.satus(200).json({
      message:"Atividade deletada com sucesso " ,Prof
    })
  }catch (error) {
    res.status(500).json({
      messagen: error.message
    })
  }
}

module.exports = {
  lista,
  criar,
  excluir
}