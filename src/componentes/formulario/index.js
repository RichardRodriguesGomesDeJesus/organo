import { useState } from 'react';
import Botao from '../botao';
import CampoTexto from '../campoTexto';
import ListaSuspensa from '../listaSuspensa';
import './formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [lista, setLista] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            descricao,
            imagem,
            lista
        })
        setNome('')
        setDescricao('')
        setImagem('')
        setLista('')
    }

    return (
        <section className="formulario" >
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para adicionar no estoque </h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do prato" 
                    valor={nome}
                    aoAlterado = { valor => setNome(valor)}
                    />
                <CampoTexto
                    obrigatorio={true} 
                    label="Descrição" 
                    placeholder="Descrição do prato" 
                    valor={descricao}
                    aoAlterado = { valor => setDescricao(valor)}
                    />
                <CampoTexto
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite a url da foto do prato" 
                    valor={imagem}
                    aoAlterado = { valor => setImagem(valor)}
                    />
                <ListaSuspensa 
                label="Listas de pratos" 
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