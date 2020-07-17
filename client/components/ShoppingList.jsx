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
                <h3>Shopping list</h3>
                <ul className="collection">
                    {this.props.shoppingList.map(ingredient => {
                        return <li className="collection-item"><div>{ingredient.ingredientName}<span className="secondary-content">{`${ingredient.quantity} ${ingredient.ingredientUnit}`}</span></div></li>
                    })}
                </ul>
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