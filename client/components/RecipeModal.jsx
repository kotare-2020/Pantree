import React from 'react'
import { connect } from 'react-redux'
import { fetchSelectedRecipe } from '../actions/selectedRecipe'
import { addDayRecipe } from '../actions/plan'
import { Link } from 'react-router-dom'


class RecipeModal extends React.Component {

    state = {
        showRecipeModal: true
    }

    componentDidMount() {
        this.props.dispatch(fetchSelectedRecipe(this.props.selectedRecipeId))
    }

    //NB: Need to get modal to not display when clicked
    // closeRecipeModal = () => {
    //     this.setState (
    //         { showRecipeModal: false}
    //     )
    // }

    render() {

        const selectedRecipe = this.props.selectedRecipe

        return (
            <>
                {selectedRecipe &&
                    <section className="container modal open" id="recipe-summary">
                        <div className="row modal-content">
                            <div className="col s12 m12">
                                <div className="center-align">
                                    <h3>{selectedRecipe.recipeName}</h3>
                                </div>
                                <h5>Ingredients:</h5>
                                <ul>
                                    {selectedRecipe.ingredients.map((ingredient, i) => {
                                        return (
                                            <li key={i}>{ingredient.ingredientName}  <em>{ingredient.quantity} {ingredient.unit}</em></li>
                                        )
                                    })
                                    }
                                </ul>

                                <h5>Method:</h5>
                                <ol>
                                    {selectedRecipe.method.map((step, i) => {
                                        return <li key={i}>{step}</li>
                                    })}
                                </ol>

                                <div className="modal-footer">
                                    <a href="#" className="waves-effect waves-green btn-flat">CLOSE</a>
                                </div>
                            </div>
                        </div>
                    </section>
                }
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return {
        selectedRecipe: globalState.selectedRecipe
    }
}

export default connect(mapStateToProps)(RecipeModal)