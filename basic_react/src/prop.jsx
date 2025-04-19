import React from 'react'

function Prop(props ) {
    
  return (
    <>
      <div className="card " style={{ width: "25rem" }}>
      <div className="coloum justify-content-center">
        <img src={props.img} className="card-img-top" alt="..." style={{height:'15rem'}} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      </div>
    </>
  )
}

export default Prop;
