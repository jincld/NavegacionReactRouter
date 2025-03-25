import React, { useState } from 'react';
import "./registro.css";

  const RegistroEstudiantes = () => {

        // Estado para manejar la lista
        const [estudiantes, setEstudiantes] = useState([]);
        // Estado para manejar el valor de Nombre
        const [student, setStudent] = useState("");

        // Estado para manejar el valor de Edad
        const [age, setAge] = useState("");

        // Estado para manejar el valor de Carnet
        const [carnet, setCarnet] = useState("");
        
        // Función para agregar un nuevo estudiante
        const addEstudiante = () => {
            if (student.trim() === "" || age.trim() === "" || carnet.trim() === "") return; // Evitar agregar registros vacíos
            setEstudiantes([...estudiantes, { id: Date.now(), text: student, age: age, carnet: carnet, completed: false }]);
            setStudent(""); // Limpiar el input
            setAge("");
            setCarnet("");
        };

        //Eliminar Todo con .filter
        const deleteStudent = (id) => {
        setEstudiantes(estudiantes.filter((estudiante) => estudiante.id !== id));
    };
  
    return (
      <>
        <div className="card cardHeight">
    <div className="card-body">
      <h5 className="card-title">Registro de Estudiantes</h5>
      <br/>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Nombre</span>
        <input type="text" className="form-control" placeholder="" aria-label="numero1" aria-describedby="basic-addon1" value={student} onChange={(e) => setStudent(e.target.value)}/>
        </div>

        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Edad</span>
        <input type="text" className="form-control" placeholder="" aria-label="numero1" aria-describedby="basic-addon1" value={age} onChange={(e) => setAge(e.target.value)}/>
        </div>

        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Carnet</span>
        <input type="text" className="form-control" placeholder="" aria-label="numero1" aria-describedby="basic-addon1" value={carnet} onChange={(e) => setCarnet(e.target.value)}/>
        </div>

        <button type="button" class="btn btn-primary espacio" onClick={addEstudiante}>Agregar</button>
        <br/>
        <br/>
        <ul class="list-group">
                {estudiantes.map((student) => (
                    <li class="list-group-item" key={student.id} >
                        <span>Nombre: {student.text} | Edad: {student.age} | Carnet: {student.carnet}</span>
                        <button class="btn btn-danger btnEliminar" onClick={() => deleteStudent(student.id)}>X</button>
                    </li>
                ))}
            </ul>
    </div>
  </div>
      </>
    );
  };
  
  export default RegistroEstudiantes