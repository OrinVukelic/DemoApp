function Tool({name, src, accessKey, onClick}) {

  return(
    <div className="col-sm-3 tool">
      <button className="tbutton h-100" onClick={onClick}>
        <h3>{name}</h3>
        <img src={src} alt={name} className="img-fluid" />
      </button>
    </div>
  );
  
}

export default Tool;