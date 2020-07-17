import React from 'react'
import { connect } from 'react-redux'
import { fetchShoppingList } from '../actions/shoppingList'
import Nav from './Nav'

class ShoppingList extends React.Component {

    componentDidMount() {
        console.log(this.props)
        this.props.dispatch(fetchShoppingList())
    }

    render() {
        console.log(this.props)
        return (
            <>
                <Nav/>
                <h1>BUY THINGS!</h1>
            </>
        )
    }
}

function mapStateToProps (globalState) {
    return {
        list: globalState.list
    }
}

export default connect(mapStateToProps)(ShoppingList)