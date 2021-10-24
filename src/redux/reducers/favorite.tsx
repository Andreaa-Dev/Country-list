import {
  AddFavorite,
  AllAction,
  FavoriteState,
  RemoveFavorite,
} from '../../misc/types'

const initialState: FavoriteState = { favoriteList: [] }

export default function favorite(
  state = initialState,
  action: AllAction
): FavoriteState {
  switch (action.type) {
    case AddFavorite:
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.payload.id],
      }
    //   can use filter here
    case RemoveFavorite:
      const firstNum = state.favoriteList.indexOf(action.payload.id)
      const favoriteArray = [...state.favoriteList]
      favoriteArray.splice(firstNum, 1)
      return {
        ...state,
        favoriteList: favoriteArray,
      }
    default:
      return state
  }
}
