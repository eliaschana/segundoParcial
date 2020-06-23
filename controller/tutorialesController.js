const {pool} = require('../config/config');

const getTutoriales = async () => {
    const tutoriales = await pool.query('SELECT * FROM TUTORIAL');
    return tutoriales.rows;
};

const getTutorial = async (id) => {
    const query = {
        text: 'SELECT * FROM TUTORIAL WHERE ID = $1',
        values: [id]
      }

    const tutoriales = await pool.query(query);
    return tutoriales.rows[0];
};

const removeTutorial = async (id) => {
    const query = {
        text: 'DELETE FROM TUTORIAL WHERE ID = $1',
        values: [id]
      }
    const removeRow = await pool.query(query);
    return removeRow.rowCount;
};
 
const removeTutoriales = async () => {
    const removeRow = await pool.query('DELETE FROM TUTORIAL');
    return removeRow.rowCount;
};
 

const addTutorial = async (tutorial) => {

    const {titulo,descripcion,publicado}=tutorial // asi me reconocio la columna titulo
    const query = {
        text: 'INSERT INTO TUTORIAL (titulo,descripcion,publicado) VALUES ($1, $2, $3)',
        values: [titulo,descripcion,publicado]
      }
    const   addRow = await pool.query(query);
    return   addRow.rowCount;
}

const updateTutorial = async (tutorial,id) => {
  const query = {
      text: 'UPDATE TUTORIAL SET titulo=$1, descripcion=$2, publicado=$3 WHERE id=$4',
       values:[tutorial.titulo, tutorial.descripcion, tutorial.publicado,id]
    }
  const   addRow = await pool.query(query)
  return   addRow.rowCount;
}
module.exports =  { getTutoriales, addTutorial, getTutorial, removeTutorial, removeTutoriales,updateTutorial};

