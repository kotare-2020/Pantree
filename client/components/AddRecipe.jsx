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

 

    // onKeyPress(event) {
    //     if (event.which === 13) {
    //       event.preventDefault();
    //     }
    // }

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
            <div className="row">
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>

                <div className="col s8 offset-s2 new-recipe-header">
                <label>Name : </label>
                <input type="text" name="name" defaultValue={recipe.name}/>
                
                <label>Image URL : </label>
                <input type="url" name="image" defaultValue={recipe.image}/>
                </div>

                <div className="col s3">
                <Ingredients ingredients={ingredients} />
                <button className="btn-floating btn-medium waves-effect waves-light teal lighten-2 add-ingredient" onClick={this.addIngredient}>+</button>
                </div>

                <div className="col s8 offset-s1">
                    <div className="input-field">
                <label>Method : </label>
                <textarea className="materialize-textarea" type="text" name="method" defaultValue={recipe.method}></textarea>
                    </div>
                </div>
                
                <input 
                className="btn waves-effect waves-light btn-large right" type="submit" value="Save"/> 
            </form>
            </div>
        )
    }
}

export default connect()(AddIngredients)