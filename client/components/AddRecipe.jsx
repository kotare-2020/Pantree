import React from 'react'
import Ingredients from './Ingredients'
import { connect } from 'react-redux'
import { saveRecipe } from '../actions/recipes' 

class AddIngredients extends React.Component {

    state = {
        recipe: {
            name: "",
            image: "https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg",
            method: "",
        },
        ingredients: [
            {name:"", unit:"kg", quantity: null}
        ],
    }
    
    handleChange = (e) => {
        const fieldName = e.target.className.split(' ')[0]
        console.log(fieldName, e.target.name)
        if (["name", "unit", "quantity"].includes(fieldName) ) {
          let ingredients = [...this.state.ingredients]
          ingredients[e.target.dataset.id][fieldName] = e.target.value
          this.setState({ ingredients }, () => console.log(this.state.ingredients))
        } else {
            this.setState ({
                recipe: {
                    ...this.state.recipe,
                    [e.target.name]: e.target.value,
                },
            })
        }
      }

    addIngredient = (e) => {
        e.preventDefault()
        this.setState((prevState) => ({
            ingredients: [...prevState.ingredients, {name:"", unit:"", quantity: null}],
        }))
    }

    handleSubmit = (e) => { 
        e.preventDefault()
        this.props.dispatch(saveRecipe(this.state.recipe, this.state.ingredients))
        this.setState(({
            recipe: {
                name: "",
                image: "https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg",
                method: "",
            },
            ingredients: [
                {name:"", unit:"kg", quantity: null}
            ],
        }))
    }

    render() {
        let { recipe, ingredients } = this.state
        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                <label>Name : </label>
                <input type="text" name="name" defaultValue={recipe.name}/>
                
                <label>Image URL : </label>
                <input type="url" name="image" defaultValue={recipe.image}/>

                <Ingredients ingredients={ingredients} />
                <button onClick={this.addIngredient}>Add more ingredients</button>

                <label>Method : </label>
                <input type="text" name="method" defaultValue={recipe.method}/>

                <input type="submit" value="Submit" /> 
            </form>
        )
    }
}

export default connect()(AddIngredients)