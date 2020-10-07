import React, { Component } from 'react';
import Content from "./Content"
import "./style/inputField.css"


class AddItem extends Component {
    constructor() {
        super()
        this.state = {
            value: "",
            todo: []
        }
    }


    changeHandler = (e) => {
        const { value } = e.target
        this.setState({
            value: value
        })
    }


    submit = (e) => {
        e.preventDefault()
        const value = this.state.value
        if (value !== "") {
            const todo = (this.state.todo)
            todo.push(value)
            this.setState({ value: "" })
        }
    }



    render() {
        return (
            <div>
                <Content items={this.state.todo} />
                <div className="inpField">
                    <form>
                        <input type="text" value={this.state.value} onChange={this.changeHandler} />
                        <button type="submit" onClick={this.submit}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddItem;
