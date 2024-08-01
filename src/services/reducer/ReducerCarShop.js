export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const TYPE_CARSHOP = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
  CLEAR_CARSHOP: 'CLEAR_CARSHOP'
}

export const UpdateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const reducer = (state, action) => {
  const { type: typeAction, payLoad: actionPayLoad } = action

  switch (typeAction) {
    case TYPE_CARSHOP.ADD_PRODUCT:{
      const { id } = actionPayLoad

      const CarShopIndex = state.findIndex(item => item.id === id)

      if (CarShopIndex >= 0) {
        const newState = structuredClone(state)

        newState[CarShopIndex].quantity += 1

        UpdateLocalStorage(newState)

        return newState
      }

      const newState = [
        ...state,
        {
          ...actionPayLoad,
          quantity: 1
        }
      ]

      UpdateLocalStorage(newState)

      return newState
    }

    case TYPE_CARSHOP.DELETE_PRODUCT:{
      const { id } = actionPayLoad

      const CarShopIndex = state.findIndex(item => item.id === id)

      const newState = structuredClone(state)

      newState[CarShopIndex].quantity -= 1

      if (newState[CarShopIndex].quantity === 0) {
        const auxNewCarShop = state.filter(item => item.id !== actionPayLoad.id)

        UpdateLocalStorage(auxNewCarShop)

        return auxNewCarShop
      }

      UpdateLocalStorage(newState)

      return newState
    }
    case TYPE_CARSHOP.CLEAR_CARSHOP:{
      const newState = []

      UpdateLocalStorage(newState)

      return newState
    }
  }
}
