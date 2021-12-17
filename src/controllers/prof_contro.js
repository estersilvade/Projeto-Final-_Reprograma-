const Prof = require('../models/prof_model')

const User = require('../models/usuarios')


//Criar serviço
const criar = async(req, res) => {
  const {
    atividade,diaria,hora,valor,agendarData,agendarHorario,
  }= req.body
  try{
    const newProf = new Prof({
      atividade,diaria,hora,valor,agendarData,agendarHorario,
    })
    const saveProf = await newProf.save()
    res.status(200).json({
      menssage:"Atividade cadastrada com sucesso ",
      saveProf
    })

  }catch (error) {
    res.status(500).json({
      menssage:error.message 
    })
  
  }
}

//Lista de serviço
const lista  = async (req, res) => {
 
  try{
    const { id} = req.params
  
    const prof = await User.find()
    .populate("profissaoRefId")
  
    res.status(200).json({ 
      manssagen:"Lista  de serviço", prof
    })
  }catch(error){
    console.log(error)
    res.status(500).json({

      menssage: error.message
    })
  }
}


//Delete 
const excluir = async (req, res) => {
  try{
    const profile = await Prof.findByIdAndRemove(req.params.id)
    res.status(200).json({
      menssage:"Atividade deletada com sucesso ",profile
    })
    console.log()
  }catch (error) {
    res.status(500).json({
      menssagen: error.message
    })
  }
}






module.exports = {
  lista,
  criar,
  excluir
}