import React, { useState } from 'react';
import './calculadora.css'

  const Calculadora = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleSumar = () => {
      const n1 = parseFloat(num1) || 0; 
      const n2 = parseFloat(num2) || 0; 
      const suma = n1 + n2;
      setResultado(suma);
  };

  const handleRestar = () => {
    const n1 = parseFloat(num1) || 0; 
    const n2 = parseFloat(num2) || 0; 
    const resta = n1 - n2;
    setResultado(resta);
};

const handleMultiplicar = () => {
  const n1 = parseFloat(num1) || 0; 
  const n2 = parseFloat(num2) || 0; 
  const multiplicar = n1 * n2;
  setResultado(multiplicar);
};

const handleDividir = () => {
  const n1 = parseFloat(num1) || 0; 
  const n2 = parseFloat(num2);

  if (!n2 || n2 === 0) {
    setResultado("Error: División entre 0 no permitida");
  } else {
    const dividir = n1 / n2;
    setResultado(dividir);
  }
};


const handleLimpiar = () => {
  setNum1("");
  setNum2("");
  setResultado("");
};
  

    return (
      <>
      <div className='bodycalc'>
      <div className="card" style={{width: "35rem", height: "30rem"}}>
    <div className="card-body">
      <h5 className="card-title">Calculadora</h5>
      <br/>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Número 1</span>
        <input type="text" className="form-control" placeholder="" aria-label="numero1" aria-describedby="basic-addon1" value={num1} onChange={(e) => setNum1(e.target.value)}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Número 2</span>
            <input type="text" className="form-control" placeholder="" aria-label="numero2" aria-describedby="basic-addon1" value={num2} onChange={(e) => setNum2(e.target.value)}/>
            </div>
            <br/>
            <button type="button" className="btn btn-secondary espacio" onClick={handleSumar}>Sumar</button>
            <button type="button" className="btn btn-secondary espacio" onClick={handleRestar}>Restar</button>
            <button type="button" className="btn btn-secondary espacio" onClick={handleMultiplicar}>Multiplicar</button>
            <button type="button" className="btn btn-secondary espacio" onClick={handleDividir}>Dividir</button>
            <button type="button" className="btn btn-primary espacio" onClick={handleLimpiar}>Limpiar</button>
            <br/>            
            <br/>
            <br/>
            <h5 className="card-title">Resultado: {resultado !== null ? resultado : ''}</h5>
    </div>
  </div>
      </div>
      </>
    );
  };
  
  export default Calculadora