import { useReducer } from 'react'
import { TYPE_CARSHOP, reducer, initialState } from '../reducer/ReducerCarShop'

export function useTypeCarShop () {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addProduct = product => dispatch({
    type: TYPE_CARSHOP.ADD_PRODUCT,
    payLoad: product
  })

  const deleteProduct = product => dispatch({
    type: TYPE_CARSHOP.DELETE_PRODUCT,
    payLoad: product
  })

  const clearCarShop = () => dispatch({ type: TYPE_CARSHOP.CLEAR_CARSHOP })

  return { state, addProduct, deleteProduct, clearCarShop }
}
