const Prof = require('../models/prof_model')


//Criar serviço
const criar = async(req, res) => {
  const {
    Atividade,diaria,hora,valor,agendarData,agendarHorario,idUser
  }= req.body
  try{
    const newProf = new Prof({
      Atividade,diaria,hora,valor,agendarData,agendarHorario,idUser
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
   // const { listaUsuarioId } = req.query
  
    const prof = await Prof.find()
  /*  if(listaUsuarioId === prof.idUser){
      return prof
    }
    profResponse = prof.filter((p) => {
     return (
       p.idUser.toString().substr(0,listaUsuarioId) ===
       idUser
     );
     });
     */
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

//get por filtro
//consoleconst listaSerUser = (req, res) => {




module.exports = {
  lista,
  criar,
  excluir
}