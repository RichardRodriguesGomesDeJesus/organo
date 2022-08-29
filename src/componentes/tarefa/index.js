import './tarefa.css'

const Tarefa = (props) => {
    return(
        <div className='tarefa'>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo }} >
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.data}</h5>
            </div>
        </div>
    )
}


export default Tarefa