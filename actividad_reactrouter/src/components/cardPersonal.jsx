function CardPersonal({titulo, subtitulo, info}) {
    return (
      <>
      <div className="bodyinfo">
      <div className="card" style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">{subtitulo}</h6>
      <p className="card-text">{info}</p>
    </div>
  </div>
      </div>
      </>
    )
  }
  
  export default CardPersonal