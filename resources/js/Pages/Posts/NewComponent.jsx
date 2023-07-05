import React, {Component} from 'react'

export default class NewComponent extends Component{
    state={
        name: 'Edmar',
        idade: 31,
        phone:926218733,
        skills: ['react','Laravel','vue' ]
    }
    render(){
        return(
            <div>
                <h1>Está é uma classe do component</h1>
                <p>Nome: {this.state.name}</p>
                <p>Idade: {this.state.idade}</p>
                <p>Telemovel: {this.state.phone}</p>
                <p>Skills: {this.state.skills.join(', ')}</p>

                <button type="button">Clique aqui!</button>
            </div>
        )
    }
}