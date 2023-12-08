const {getConnection} = require("../dataBase/connection")

const getTareaById = async(id)=>{
    const querry = `SELECT * from Tarea where id = ?`
    let connection = null

    try{
        connection = await getConnection()
        const [row] = await connection.execute(querry,[id])
        console.log(row.length)
        return row.length > 0  
        
    }catch{
        throw new Error('No se ha podido hacer la consulta')
    }finally{
        if(connection) await connection.end()
    }
}
const getTareas = async(req,res)=>{
    const querry = `SELECT t.id id, t.text text, e.descripcion estado, created_at fecha FROM Tarea t, Estados e where e.id = t.estado`
    let connection = null
    try{
        connection = await getConnection();
        const [rows] = await connection.execute(querry)

        return res.status(200).send({
            tareas: rows
        })
    }catch(error){
        console.error("No se ha podido acceder a la base de datos", error)
        return res.status(500).send({
            message:"No se ha podido acceder a la base de datos"
        })
    }finally{
        if (connection) await connection.end();
    }
}

const createTarea = async(req,res) =>{
    const text = req.text
    
    const querry = `INSERT INTO Tarea(text, estado, created_at) VALUES (?, 1, NOW());`
    let connection = null
    try{
        connection = await getConnection();
        await connection.execute(querry,[text])
        return res.status(200).send({
            message: 'Tarea creada correctamente'
        })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            message:"No se ha podido crear la tarea"
        })
    }finally{
        if(connection) await connection.end()
    }

}

const updateTarea = async (req, res) => {
    const id = req.id;
    const estado = req.estado
 
    const query = `UPDATE Tarea SET estado = ? WHERE id = ?`;

    let connection = null;

    try {
        connection = await getConnection();
        await connection.execute(query, [estado, id]);
        return res.status(200).send({
            message: "Tarea actualizada correctamente"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: "Error al actualizar la tarea"
        });
    } finally {
        if (connection) await connection.end();
    }
};


const deleteTarea = async(req, res)=>{
    const {id} = req

    if(!await getTareaById(id)) {
        return res.status(404).send({
            message:"Tarea no encontrada"
        })
    }

    const querry = `DELETE FROM Tarea where id = ?`

    let connection = null

    try{
        connection = await getConnection()
        await connection.execute(querry, [id])
        return res.status(200).send({
            message: "Tarea eliminada correctamente"
        })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            message: "Error interno en el servidor"
        })
    }finally{
        if(connection) await connection.end()
    }

    
}
module.exports = {
    getTareas,
    createTarea,
    updateTarea,
    deleteTarea
}