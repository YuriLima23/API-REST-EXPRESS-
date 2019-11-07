const Pg = require('pg').Pool;
const dataBase = new Pg({
    user:'postgres',
    host:'localhost',
    database:'maps',
    password:'postgres',
    port:5432,
})
const getAllUsers = (req,res)  =>{
     dataBase.query('SELECT * FROM pessoa',(error,result) =>{
         if(error){
            console.log("ESSE È O ERRO  : ",error);
         }
         res.status(200).json(result);
     })
}

const getUserId = (req,res) =>{
    const id = parseInt(req.params.id)
    dataBase.query('SELECT * FROM pessoa where id = $1',[id],(error,result) =>{
        if(error){
            console.log("ESSE È O ERRO  : ",error);
        }
        res.status(200).json(result);
    })
}

const createUser = (req,res) =>{
    const {nome,email,senha} = req.body
    dataBase.query('INSERT INTO pessoa (nome,email,senha) values ($1,$2 ,$3)',[nome,email,senha],(error,result) =>{
        if(error){
            console.log("ESSE È O ERRO  : ",error);
        }
        res.status(201).send(`pessoa adicionado com sucesso ${result.insertId}`);
    })
}
const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { nome, email,senha } = request.body
  
    pool.query(
      'UPDATE pessoa SET nome = $1, email = $2 ,senha = $3 WHERE id = $3',
      [nome, email,senha, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`usuario alterado com sucessoID: ${id}`)
      }
    )
  }
  
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM pessoa WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`usuario deletado com sucesso ID: ${id}`)
    })
  }


module.exports = {
    getAllUsers,
    getUserId,
    createUser,
    deleteUser,
    updateUser,
}