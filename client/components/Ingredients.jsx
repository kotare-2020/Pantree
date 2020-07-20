import React from "react"

const Ingredients = (props) => {

  return (
    props.ingredients.map((val, idx)=> {
      let nameId = `name-${idx}`
      let unitId = `unit-${idx}`
      let quanId = `quantity-${idx}`
      return (
        <div key={idx}>
          <label>{`Ingredient #${idx + 1}`}</label>
          <input
            type="text"
            name={nameId}
            data-id={idx}
            id={nameId}
            value={props.ingredients[idx].name} 
            className="name"
          />
          <label>Unit (kg/each)</label>
          <input
            type="text"
            name={unitId}
            data-id={idx}
            id={unitId}
            value={props.ingredients[idx].unit} 
            className="unit"
          />
          <label>Quantity</label>
          <input
            type="text"
            name={quanId}
            data-id={idx}
            id={quanId}
            value={props.ingredients[idx].quantity} 
            className="quantity"
          />
        </div>
      )
    })
  )
}
export default Ingredients