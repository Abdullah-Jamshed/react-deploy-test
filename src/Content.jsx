import React, { Component } from 'react';
import "./style/content.css"


class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiData:[]
        } 
    }

    del = (e) => {
        e.target.parentElement.remove()
    }


    async componentDidMount() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const json = await response.json();
        this.setState({ apiData: json.slice(0,10) });
    }


    render() {
        return (
            <div className="content">

                <ul>

                    {this.state.apiData.map((data,key) => (
                        <li key={key}>
                            {data.title}
                            <button className="btn" onClick={this.del}>delete</button>
                        </li>
                    ))}


                    {this.props.items.map((val, key) => {
                        return (

                            <li key={key}>{val}<button className="btn" onClick={this.del}>delete</button></li>



                        )
                    })}
                </ul>

            </div>
        );
    }
}

export default Content;
