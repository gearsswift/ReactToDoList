import React from "react";

class TODO_LIST_ITEM extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            todo_title: '',
            todo_description: '',
            todo_complete: false
        }
    }

    Complete()
    {
        this.setState({
            todo_title: this.state.title,
            todo_description: this.state.description,
            todo_complete: true
        })
        this.props.editTodo(this.props.index,true)
       console.log(this.props.index)
    }

    render()
    {
        return(
            <div className="todo-list-item">
                <div className="todo-list-item-info">
                    <h1>{this.props.todo_info.title}</h1>
                    <p>{this.props.todo_info.description}</p>
                    {this.props.todo_info.completed === false ? 
                        (
                            <button onClick={() => this.Complete()} className="btn-complete">
                                Completed
                            </button>
                        ) 
                        : null 
                    }
                    
                </div>
            </div>
        )
    }
}

class todo_list extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state= {
            showCompleted: false
        }
    }


    ShowCompletedList(value)
    {
        if(value)
        {
            console.log("Completed")
        }
        else
        {
            console.log("InCompleted")
        }
        this.setState({
            showCompleted: value
        })
    }
    render()
    {
        const todosList = this.props.todos.map((todo,index) => {
            if(this.state.showCompleted === true)
            {
                if(todo.completed === true)
                    return  <TODO_LIST_ITEM editTodo={this.props.editTodo} todo_info={todo} key={index} index={index}></TODO_LIST_ITEM>
            }
            else
            {
                if(todo.completed === false)
                    return  <TODO_LIST_ITEM editTodo={this.props.editTodo} todo_info={todo} key={index} index={index}></TODO_LIST_ITEM>
            }
            return <div></div>
        })
        return(
            <div className="todo_list">
            <div className="btn-area">
                <button onClick={() => this.ShowCompletedList(false)}>ToDo</button>
                <button onClick={() => this.ShowCompletedList(true)}>Completed</button>
            </div>
            <div className="todo-area">
                {/* {this.props.todos.map((todo,index)=>(
                <div className="todo-list-item" key={index}>
                    <div className="todo-list-item-info">
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                        <button className="btn-complete">Completed</button>
                    </div>
                </div>
                ))} */}
                {todosList}
                
              
            </div>
        </div>
        )
    }
}

export default todo_list