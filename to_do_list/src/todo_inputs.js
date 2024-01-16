import React from "react";

class todo_inputs extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            title : '',
            description: ''
        } 
    }

    handleInputChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    handleAddTodo() 
    {
       const {title,description} = this.state
       if(title  && description )
       {
            this.props.addTodo({
                title:title,
                description: description,
                completed: false
            });

            //Reset the input fields after adding a todo
            this.setState({
                title: "",
                description: ""
            })
            console.log(this.state)
        }
    }

    render()
    {
        return(
            <div className="todo_inputs">
                <label>Title
                    <input className="todo_inputs_title" type="text" placeholder="title" value={this.state.title} name="title" onChange={this.handleInputChange}></input>
                </label>
                <label>Description
                    <input className="todo_inputs_description" type="text" placeholder="description" name="description" value={this.state.description} onChange={this.handleInputChange}></input>
                </label>
                <button onClick = {() => this.handleAddTodo()} className="add_button">ADD</button>
            </div>
        )
    }
}

export default todo_inputs