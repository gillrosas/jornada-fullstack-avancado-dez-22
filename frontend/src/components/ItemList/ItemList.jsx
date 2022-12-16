import ItemCard from "../ItemCard/ItemCard";

function ItemList() {
    return(
        <div className="content container mb-3 mt-3">
        <div className='row'>
          <div className='col-4'>
            <ItemCard />
          </div>
          <div className='col-4'>
            <ItemCard />
          </div>
          <div className='col-4'>
            <ItemCard />
          </div>
        </div>
      </div>
    )
}

export default ItemList