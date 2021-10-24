import {
  AddFavoriteAction,
  AddFavorite,
  RemoveFavorite,
  RemoveFavoriteAction,
} from '../../misc/types'

export function addFavorite(id: string): AddFavoriteAction {
  return {
    type: AddFavorite,
    payload: {
      id,
    },
  }
}

export function removeFavorite(id: string): RemoveFavoriteAction {
  return {
    type: RemoveFavorite,
    payload: {
      id,
    },
  }
}
