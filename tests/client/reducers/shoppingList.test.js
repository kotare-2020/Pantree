import shoppingListReducer from '../../../client/reducers/shoppingList'


test('SET_SHOPPING_LIST save shopping list to globalState',()=>{

//Arrange 
 const initialState = []

 const ingredientOne = {id:1, ingredientName:'banana'}
 const ingredientTwo = {id:2, ingredientName:'pineapple'}
 
 const list = [ingredientOne, ingredientTwo]

 const expected = [ingredientOne, ingredientTwo]

  
 const action = {

    type:'SET_SHOPPING_LIST',
    list:list
 }

 //Act
 const actual = shoppingListReducer(initialState, action)

 //Assert
 expect(actual).toEqual(expected)

})