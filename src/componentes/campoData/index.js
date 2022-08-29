import './campoData.css'


const CampoData = (props) => {
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    return(
        <div className="campoData">
        <label>{props.label}</label>
        <input type="date" value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
    )
}



export default CampoData