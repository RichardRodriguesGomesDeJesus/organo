import { useState } from 'react';
import Botao from '../botao';
import CampoTexto from '../campoTexto';
import ListaSuspensa from '../listaSuspensa';
import './formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario" >
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado = { valor => setNome(valor)}
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado = { valor => setCargo(valor)}
                    />
                <CampoTexto
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite a url da sua foto" 
                    valor={imagem}
                    aoAlterado = { valor => setImagem(valor)}
                    />
                <ListaSuspensa 
                label="Times" 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario