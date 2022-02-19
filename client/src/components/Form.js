import React, { Component } from 'react'
import './profile.css';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            university: "",
            class: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    universityhandler = (event) => {
        this.setState({
            university: event.target.value
        })
    }

    classhandler = (event) => {
        this.setState({
            class: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName} ${this.state.university} ${this.state.class} Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            university: '',
            class: "",
        })
     event.preventDefault()
        
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>Profile Page</h1>
                    <label>First Name :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="First Name..." /><br />
                    <label>Last Name :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="Last Name..." /><br />
                    <label>University :</label> <input type="text" value={this.state.university} onChange={this.universityhandler} placeholder="University..." /><br />
                    <label>Class Name: </label><input type="text" value={this.state.class} onChange={this.classhandler} placeholder="Class..." /><br />
                    <input type="submit" value="Create Profile" />
                </form>

            </div>
            
        )
    }
}

export default Form