import React from 'react'
import Ingredients from './Ingredients'
import { connect } from 'react-redux'
import { saveRecipe } from '../actions/recipes' //change thunk action
import { addRecipeIngredients } from '../apis/recipes'

class AddIngredients extends React.Component {

    state = {
        recipe: {
            name: "",
            image: "",
            method: "",
        },
        ingredients: [
            {name:"", unit:"", quantity: null}
        ],
    }
    
    handleChange = (e) => {
        if (["name", "unit", "quantity"].includes(e.target.className) ) {
          let ingredients = [...this.state.ingredients]
          ingredients[e.target.dataset.id][e.target.className] = e.target.value
          this.setState({ ingredients }, () => console.log(this.state.ingredients))
        } else {
            this.setState ({
                [e.target.name]: e.target.value,
            })
        }
      }

    addIngredient = (e) => {
        this.setState((prevState) => ({
            ingredients: [...prevState.ingredients, {name:"", unit:"", quantity: null}],
        }))
    }

    handleSubmit = (e) => { 
        const recipeId = this.props.match.params
        console.log(receipeId)
        console.log(this.props.match)
        e.preventDefault()
        this.props.dispatch(saveRecipe(this.state.recipe))
        this.props.dispatch(addRecipeIngredients(this.state.ingredients, recipeId))
    }

    render() {
        let { recipe, ingredients } = this.state
        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                <label>Name : </label>
                <input type="text" name="name" value={recipe.name}/>
                
                <label>Image URL : </label>
                <input type="text" name="image" value={recipe.image}/>

                <Ingredients ingredients={ingredients} />
                <button onClick={this.addIngredient}>Add more ingredients</button>

                <label>Method : </label>
                <input type="text" name="method" value={recipe.method}/>

                <input type="submit" value="Submit" /> 
            </form>
        )
    }
}

export default connect()(AddIngredients)