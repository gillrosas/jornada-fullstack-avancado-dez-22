import MarcaOcean from "../../assets/brand.svg"
import "./Header.css"

function Header (){
  return(
    <header className='cabecalho'> 
        <div className='container'>
          <div className = "row align-items-center"> </div>
          <div className='row'>
            <div className='col-2'>
              <img src={MarcaOcean} alt="" width={50}/>        
            </div>
            <div className='col-10'>
              <a className="link"> Link 1</a>
              <a className="link"> Link 2</a>
              <a className="link"> link 3</a>
            </div>
          </div>
         </div>   
    </header>
  )
}
export default Header;