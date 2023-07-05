import React, {Component} from 'react'

export default class RapidComponent extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const data = this.props.datas.data; // Array de dados

        return(
            <div>
                <h1>Esta é uma classe do componente</h1>

                <table>
                <thead>
                    <tr>
                    <th>Abreviatura</th>
                    <th>Nome</th>
                    <th>Nome Completo</th>
                    <th>Cidade</th>
                   <th>Conferencia</th>
                   <th>Divisao</th>
                    {/* Adicione outras colunas conforme necessário */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                    <tr key={index}>
                         <td>{item.abbreviation}</td>
                         <td>{item.name}</td>
                         <td>{item.full_name}</td>
                         <td>{item.city}</td>
                         <td>{item.conference}</td>
                        <td>{item.division}</td>
                        
                        {/* Adicione outras células de dados conforme necessário */}
                    </tr>
                    ))}
                </tbody>
                </table>

                <button type="button">Clique aqui!</button>
            </div>
        )
    }
}