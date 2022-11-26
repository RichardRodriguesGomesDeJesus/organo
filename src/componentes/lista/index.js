import Card from '../Card'
import './lista.css'


const Lista = (props) => {
    return(
        (props.cards.length > 0) && <section className='lista' style={{backgroundColor: props.corSegundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='cards'>
            {props.cards.map( card => <Card corDeFundo={props.corPrimaria} key={card.nome}   nome={card.nome} descricao={card.descricao} imagem={card.imagem} />)}
            </div>
        </section>
    )
}

export default Lista