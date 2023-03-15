import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('testing into TodoReducer', () => { 

    const initialState = [{
        id:1,
        description:'Demo Todo',
        done: false
    }]
    
    test('should return initial state', () => { 
        
        const newState = todoReducer( initialState, {} )
        expect( newState).toBe(initialState)

     })
    
 })