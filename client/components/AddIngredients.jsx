import React from 'react'
import Ingredients from './Ingredients'
import { connect } from 'react-redux'
import { addIngredients } from '../apis/ingredients'

class AddIngredients extends React.Component {

    state = {
        ingredients: [
            {name:"", unit:""}
        ]
    }
    
    handleChange = (e) => {
        if (["name", "unit"].includes(e.target.className) ) {
          let ingredients = [...this.state.ingredients]
          ingredients[e.target.dataset.id][e.target.className] = e.target.value
          this.setState({ ingredients }, () => console.log(this.state.ingredients))
        }
      }

    addIngredient = (e) => {
        this.setState((prevState) => ({
            ingredients: [...prevState.ingredients, {name:"", unit:""}],
        }))
    }

    handleSubmit = (e) => { 
        e.preventDefault()
        this.props.dispatch(addIngredients(this.state.ingredients))
    }

    render() {
        let { ingredients } = this.state
        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                <Ingredients ingredients={ingredients} />
                <button onClick={this.addIngredient}>Add more ingredients</button>
                
                <input type="submit" value="Submit" /> 
            </form>
        )
    }
}

export default connect()(AddIngredients)