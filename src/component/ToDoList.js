import React, { Component } from 'react'

export default class ToDoList extends Component {
    state = {
        element: '',
        items: []
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            element: '',
            items: [...this.state.items, {element: this.state.element}]
        })
    }
    handleClick = (index) => {
        const arr = this.state.items
        arr.splice(index, 1)
        this.setState({
            items: arr
        })
    }
    renderTodo = () => {
        return this.state.items.map( (item,index) => {
            return (
                <div className="card mb-3" key= {index}>
                    <div className="card-body">
                        <h4>
                            {item.element}
                            <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }} onClick={() => this.handleClick(index)}></i>
                        </h4>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="card my-3">
                    <div className="card-header">
                        To-do Liste
                    </div>

                    <div className="card-body">
                        <form onSubmit={ this.handleSubmit } > 
                            <div className="form-group px-3">
                                <label htmlFor="element" className="card-body my-0 pt-3 pb-1">Chose à faire</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    name="element" 
                                    onChange={ this.handleChange } 
                                    value={ this.state.element }
                                />
                                <button type="submit" className="btn btn-primary btn-block" >Ajouter une chose à faire!</button>
                            </div>
                        </form>

                    </div>
                </div>
                
                {this.renderTodo()}

            </React.Fragment>
        )
    }
}
