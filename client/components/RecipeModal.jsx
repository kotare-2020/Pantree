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

    // componentDidUpdate(prevProps) {
    //     const id = this.props.match.params.id
    //     if (prevProps.match.params.id != id) {
    //         this.props.dispatch(fetchSelectedRecipe(id))
    //     }
    // }

    closeRecipeModal = () => {
        this.setState (
            { showRecipeModal: false}
        )
    }

    render() {
        console.log(this.props.selectedRecipeId)
        console.log(this.props)
        const selectedRecipe = this.props.selectedRecipe

        return (
            <>
                {selectedRecipe &&

                    <main className="container modal open" id="recipe-summary">
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
                                    <a href="/plans" className="waves-effect waves-green btn-flat" onClick={this.closeRecipeModal}>CLOSE</a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="model-overlay"></div> */}
                    </main>

                }
            </>
        )
    }
}

function mapStateToProps(globalState) {
    console.log(globalState)
    return {
        selectedRecipe: globalState.selectedRecipe
    }
}

export default connect(mapStateToProps)(RecipeModal)