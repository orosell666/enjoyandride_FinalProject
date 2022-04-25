<div className="card-group">
    <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
</div>


{
    store.respuesta.map((valor, index) => (<div key={index}>
        <p className="card-text">Telefono:{valor.telefono}</p>
        <p className="card-text">Email:{valor.email}</p></div>))
}