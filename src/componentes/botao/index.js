import './botao.css'

const Botao = (props) => {
    return(
        <button className="botao" >
            {props.children}
        </button>
    )
}


export default Botao