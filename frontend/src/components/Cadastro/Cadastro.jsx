import { useState, useEffect} from "react"
import api from "../../api/api"

function Cadastro () {
    const [fcategorias, seCategorias] = useState([
        {_id: 0, name: "Carregando categorias..."},
    ]);


    async function loadCategories () {
        const categoriadoBanco =await API.category.list()
        const categoriasCarregadas = await categoriadoBanco.json()
        console.log("Carregou")
        seCategorias (categoriasCarregadas);
    }

    useEffect (function(){
        loadCategories();
    },[])

    return (
        <form className = "Container">
            <h1>Cadastro de Item</h1>
                <div className="form-group mt-2">
                    <label>Nome- </label>
                    <input type="texto" name= "nome"/>
                </div>

                <div className="form-group mt-2">
                    <label>Url da Imagem </label>
                    <input type="url" name= "url"/>
                </div>

                <div className="form group mt-2">
                    <label>Categoria</label>
                    <select className="form-control" name = "categoria">
                
                    </select>                 
                </div>

                <div className="form group mt-2">
                    <button type="submit" className="btn btn-primary">Cadastrar</button>                 
                </div>          
        </form>
    )
}

export default Cadastro