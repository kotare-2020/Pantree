import React from 'react'
import Ingredients from './Ingredients'
import { connect } from 'react-redux'
import { addIngredients } from '../apis/ingredients'

class AddIngredients extends React.Component {

    state = {
        ingredients: [
            {name:"", unit:""}
        ]
    }
    
    handleChange = (e) => {
        if (["name", "unit"].includes(e.target.className) ) {
          let ingredients = [...this.state.ingredients]
          ingredients[e.target.dataset.id][e.target.className] = e.target.value
          this.setState({ ingredients }, () => console.log(this.state.ingredients))
        // } else {
        //   this.setState({ [e.target.name]: e.target.value })
        }
      }

    addIngredient = (e) => {
        this.setState((prevState) => ({
            ingredients: [...prevState.ingredients, {name:"", unit:""}],
        }))
    }

    handleSubmit = (e) => { 
        e.preventDefault()
        this.props.dispatch(addIngredients(this.state.ingredients))
    }

    render() {
        let { ingredients } = this.state
        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                <Ingredients ingredients={ingredients} />
                <button onClick={this.addIngredient}>Add more ingredients</button>
                
                <input type="submit" value="Submit" /> 
            </form>
        )
    }
}
    
    // state = [{name: '', unit:''}]

    // handleChange = (e) => {
    //     let ingredient = {
    //         [e.target.name]: e.target.value,
    //     }
    //     this.setState ({
    //         ...this.state, 
    //         ingredient
    //     })
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     this.props.dispatch(addIngredients(this.state))
    // }

    // render() {
    //     return (
    //         <>
    //             <form onSubmit={this.handleSubmit}>
    //                 <label>Name : </label>
    //                 <input type="text" name="name" onChange={this.handleChange}/>
                    
    //                 <label>Unit : </label>
    //                 <select name="unit" onChange={this.handleChange}>
    //                     <options value="each">each</options>
    //                     <options value="kg">kg</options>
    //                 </select>

    //                 <input type="submit" value="Submit"/>
    //             </form>
    //         </>
    //     )
//     }
// }   

export default connect()(AddIngredients)