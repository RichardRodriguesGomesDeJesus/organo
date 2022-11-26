import './card.css'

const Card = (props) => {
    return(
        <div className='card'>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo }} >
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.descricao}</h5>
            </div>
        </div>
    )
}


export default Card