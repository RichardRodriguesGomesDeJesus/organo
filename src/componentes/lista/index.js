import Tarefa from '../tarefa'
import './lista.css'


const Lista = (props) => {
    return(
        (props.tarefas.length > 0) && <section className='lista' style={{backgroundColor: props.corSegundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='tarefas'>
            {props.tarefas.map( tarefa => <Tarefa corDeFundo={props.corPrimaria} key={tarefa.nome}   nome={tarefa.nome} data={tarefa.data} imagem={tarefa.imagem} />)}
            </div>
        </section>
    )
}

export default Lista