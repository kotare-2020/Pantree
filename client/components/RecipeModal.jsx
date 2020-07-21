import React from 'react'
import { connect } from 'react-redux'
import { fetchSelectedRecipe } from '../actions/selectedRecipe'

class RecipeModal extends React.Component {

    state = {
        showRecipeModal: true
    }

    componentDidMount() {
        this.props.dispatch(fetchSelectedRecipe(this.props.selectedRecipeId))
    }

    closeRecipeModal = () => {
        this.props.closeRecipeModal()
    }

    render() {

        const selectedRecipe = this.props.selectedRecipe

        return (
            <>
                {selectedRecipe &&
                    <section className="container modal" id="recipe-summary">
                        <div className="row modal-content">
                            <div className="col s12 m12">
                                <div className="center-align">
                                    <h3>{selectedRecipe.recipeName}</h3>
                                </div>
                                <h5>Ingredients:</h5>
                                <ul className="browser-default">
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
                            </div>
                            <div className="modal-footer">
                                <a className="modal-close waves-effect waves-green btn-flat" onClick={this.closeRecipeModal}>CLOSE</a>
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