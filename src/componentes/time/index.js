import Colaborador from '../colaborador'
import './time.css'


const Time = (props) => {
    return(
        (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: props.corSegundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome}   nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
    )
}

export default Time