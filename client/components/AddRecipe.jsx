import React from 'react'
import { connect } from 'react-redux'
import { saveRecipe } from '../actions/recipes'

class AddRecipe extends React.Component {
    state = {
        name: '',
        image: '',
        method: '',
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(saveRecipe(this.state))
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>Name : </label>
                    <input type="text" name="name" onChange={this.handleChange}/>
                    
                    <label>Image URL : </label>
                    <input type="text" name="image" onChange={this.handleChange}/>

                    <label>Method : </label>
                    <input type="text" name="method" onChange={this.handleChange}/>

                    <input type="submit" value="Submit"/>
                </form>
            </>
        )
    }
}

export default connect()(AddRecipe)