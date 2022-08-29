import { useState } from 'react';
import Botao from '../botao';
import CampoData from '../campoData';
import CampoTexto from '../campoTexto';
import ListaSuspensa from '../listaSuspensa';
import './formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [data, setData] = useState('')
    const [imagem, setImagem] = useState('')
    const [lista, setLista] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            data,
            imagem,
            lista
        })
        setNome('')
        setData('')
        setImagem('')
        setLista('')
    }

    return (
        <section className="formulario" >
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de tarefa</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome da tarefa" 
                    valor={nome}
                    aoAlterado = { valor => setNome(valor)}
                    />
                <CampoData
                    obrigatorio={true} 
                    label="Data" 
                    placeholder="Digite a data de entrega" 
                    valor={data}
                    aoAlterado = { valor => setData(valor)}
                    />
                <CampoTexto
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite a url da sua foto" 
                    valor={imagem}
                    aoAlterado = { valor => setImagem(valor)}
                    />
                <ListaSuspensa 
                label="Listas de Tarefas" 
                itens={props.listas}
                valor={lista}
                aoAlterado={valor => setLista(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario