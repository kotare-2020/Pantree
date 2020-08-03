import React from 'react'
import { connect } from 'react-redux'
import { fetchShoppingList } from '../actions/shoppingList'
import pluralize from 'pluralize'

class ShoppingList extends React.Component {
  componentDidMount() {
    const userId = this.props.auth.user.id
    const plans = this.props.plans

    this.props.dispatch(fetchShoppingList(userId, plans))
  }

  render() {
    return (
      <div className='container'>
        <div className='shoppinglist'>
          <h3>Shopping list</h3>
          <table>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th className='right-align'>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {this.props.shoppingList.map(ingredient => {
                return (
                  <tr key={`shopping${ingredient.ingredientId}`}>
                    <td>
                      {ingredient.quantity > 1
                        ? capitaliseShoppingListItem(
                            pluralize(
                              ingredient.ingredientName,
                              ingredient.quantity
                            )
                          )
                        : capitaliseShoppingListItem(ingredient.ingredientName)}
                    </td>
                    <td className='right-align'>
                      {ingredient.quantity}{' '}
                      {ingredient.ingredientUnit != 'each' &&
                        ingredient.ingredientUnit}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

function capitaliseShoppingListItem(item) {
  return item.charAt(0).toUpperCase() + item.slice(1)
}

function mapStateToProps(globalState) {
  return {
    auth: globalState.auth,
    shoppingList: globalState.shoppingList,
    plans: globalState.plans,
  }
}

export default connect(mapStateToProps)(ShoppingList)
