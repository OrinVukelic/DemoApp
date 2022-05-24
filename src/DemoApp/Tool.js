function Tool({name, src, onClick}) {

  return(
    <div className="col-md-4 tool">
      <button className="tbutton h-100" onClick={onClick}>
        <h3>{name}</h3>
        <img src={src} alt={name} className="img-fluid" width="400px" height="400px" />
      </button>
    </div>
  );
  
}

export default Tool;