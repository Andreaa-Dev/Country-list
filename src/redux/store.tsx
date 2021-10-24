import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { AppState } from '../misc/types'
import createRootReducer from './reducers'

const initState: AppState = {
  countryState: {
    country: [],
  },
  favoriteState: {
    favoriteList: [],
  },
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware, thunk]
  let composeEnhancers = compose
  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  let favoriteObject = localStorage.getItem('favoriteItem')

  let finalState
  if (favoriteObject) {
    let stored = JSON.parse(favoriteObject)
    finalState = stored
  } else {
    finalState = initState
  }
  const store = createStore(
    createRootReducer(),
    finalState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
  // each dispatch an action => run
  // all thing put in localStorage had to be string
  store.subscribe(() => {
    const state = store.getState()
    localStorage.setItem('favoriteItem', JSON.stringify(state))
  })

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
