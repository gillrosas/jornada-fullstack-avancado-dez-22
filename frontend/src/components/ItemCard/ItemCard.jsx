function ItemCard(){
  return(
    <div className="card mb -5">
            <img 
              src="https://picsum.photos/300/200" 
              class="card-img-top"
               alt="...">
            </img>
            <div className="card-body">
              <h5 className="card-title">Nome do item</h5>
              <p className="card-text">Categoria</p>
              <a href="#" className="btn btn-danger">
                Remover
              </a>
            </div>
          </div>
  )     
}
export default ItemCard;
