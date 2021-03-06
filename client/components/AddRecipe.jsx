import React from "react"
import Ingredients from "./Ingredients"
import { connect } from "react-redux"
import { saveRecipe } from "../actions/recipes"
import pluralize from 'pluralize'

class AddIngredients extends React.Component {
  state = {
    recipe: {
      name: "",
      image:
        "https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg",
      method: "",
    },
    ingredients: [{ name: "", unit: "kg", quantity: 0 }],
  }

  handleChange = (e) => {
    const fieldName = e.target.className.split(" ")[0]
    if (["name", "unit", "quantity"].includes(fieldName)) {
      let ingredients = [...this.state.ingredients]
      ingredients[e.target.dataset.id][fieldName] = e.target.value
      this.setState({ ingredients })
    } else {
      this.setState({
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
      ingredients: [
        ...prevState.ingredients,
        { name: "", unit: "kg", quantity: 0 },
      ],
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newIngredients = this.state.ingredients

    newIngredients.map(ingredient => {
      ingredient.name = ingredient.name.toLowerCase()
      ingredient.name = pluralize(ingredient.name, 1)
      return ingredient
    })

    this.props.dispatch(saveRecipe(this.state.recipe, newIngredients))
    this.setState({
      recipe: {
        name: "",
        image:
          "https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg",
        method: "",
      },
      ingredients: [{ name: "", unit: "kg", quantity: 0 }],
    }, () => {
      this.props.handleFormViewState()
    })
  }

  render() {
    let { recipe, ingredients } = this.state
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="col s8 offset-s2 new-recipe-header">
            <label>Name</label>
            <input type="text" name="name" onChange={this.handleChange} value={recipe.name} required/>

            <label>Image URL</label>
            <input type="url" name="image" onChange={this.handleChange} value={recipe.image} />
          </div>

          <div className="col s3">
            <Ingredients handleChange={this.handleChange} ingredients={ingredients} />
            <a
              className="btn-floating btn-medium waves-effect waves-light teal lighten-2"
              onClick={this.addIngredient}>
                <i className="material-icons">add</i>
            </a>
          </div>

          <div className="col s8 offset-s1">
            <div className="input-field">
              <label>Method</label>
              <textarea
                className="materialize-textarea"
                type="text"
                name="method"
                value={recipe.method}
                onChange={this.handleChange}
              ></textarea>
            </div>
          </div>

          <input
            type="submit"
            className="btn waves-effect waves-light btn-large right"
            value="Save"
          />
        </form>
      </div>
    )
  }
}

export default connect()(AddIngredients)
