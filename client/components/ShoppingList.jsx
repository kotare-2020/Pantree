import React from 'react'
import { connect } from 'react-redux'
import { fetchShoppingList } from '../actions/shoppingList'

// auth is mapped to props so we can get the userId, should prob eventually refactor so that we get userId from somewhere else

class ShoppingList extends React.Component {
    
    componentDidMount() {
        const userId = this.props.auth.user.id
        this.props.dispatch(fetchShoppingList(userId))
    }
    
    render() {
        return (
            <div className="container">
                <div className="shoppinglist">
                <h3>Shopping list</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th className="right-align">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.shoppingList.map(ingredient => {
                        return (
                        <tr>
                            <td>{ingredient.ingredientName}</td>
                            <td className="right-align">{ingredient.quantity} {ingredient.ingredientUnit}</td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table> 
                {/* <ul className="collection">
                    {this.props.shoppingList.map(ingredient => {
                        return <li className="collection-item"><div>{ingredient.ingredientName}<span className="secondary-content">{`${ingredient.quantity} ${ingredient.ingredientUnit}`}</span></div></li>
                    })}
                </ul> */}
                </div>
            </div>
        )
    }
}

function mapStateToProps (globalState) {
    return {
        auth: globalState.auth,
        shoppingList: globalState.shoppingList
    }
}

export default connect(mapStateToProps)(ShoppingList)