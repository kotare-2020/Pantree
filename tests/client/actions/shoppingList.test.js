import { SET_SHOPPING_LIST, setShoppingList, fetchShoppingList } from '../../../client/actions/shoppingList'

jest.mock('../../../client/apis/plans', () => {
    return {
        getPlanIdByUserId: () => Promise.resolve({ planId: 7 }),
        updatePlanApi: () => Promise.resolve(),
    }
})

jest.mock('../../../client/apis/shoppingList', () => {
    return {
        getShoppingList: () => Promise.resolve([1,2,3]),
    }
})

test('setShoppingList action works', () => {
    // Arrange
    const list = [{id:1, ingredientName:'banana'}, {id:2, ingredientName:'pineapple'}]

    const expected = {
        type: SET_SHOPPING_LIST,
        list: list
    }

    // Act
    let actual = setShoppingList(list)

    // Assert
    expect(actual).toEqual(expected)
})

test('fetchShoppingList thunk works', () => {
    const fakeDispatch = jest.fn()
    
    const thunk = fetchShoppingList()

    return thunk(fakeDispatch)
        .then(() => {
            const expected = 'SET_SHOPPING_LIST'
            const expectedList = [1,2,3]

            const actual = fakeDispatch.mock.calls[0][0].type
            const actualList = fakeDispatch.mock.calls[0][0].list

            expect(fakeDispatch.mock.calls).toHaveLength(1)
            expect(actual).toEqual(expected)
            expect(actualList).toEqual(expectedList)
        })
})
