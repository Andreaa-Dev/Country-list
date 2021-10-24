export type ColumnType = {
  id:
    | 'flag'
    | 'name'
    | 'population'
    | 'languages'
    | 'region'
    | 'others'
    | 'details'
  label: string
  format?: (value: string | LanguageType[]) => JSX.Element
  minWidth?: number
  align?: string
}

export type LanguageType = {
  name: string
}

export type CountryType = {
  flag: string
  name: string
  population: number
  languages: LanguageType[]
  region: string
  border: number
}

// Action types
export const FetchCountry = 'fetch_country'
export const AddFavorite = 'add_favorite'
export const RemoveFavorite = 'remove_favorite'
export const SearchCountry = 'search_country'

// A country
export type FetchAction = {
  type: typeof FetchCountry
  payload: {
    country: CountryType[]
  }
}

export type AddFavoriteAction = {
  type: typeof AddFavorite
  payload: {
    id: string
  }
}

export type RemoveFavoriteAction = {
  type: typeof RemoveFavorite
  payload: {
    id: string
  }
}

export type SearchCountryAction = {
  type: typeof SearchCountry
  payload: {
    userInput: string
  }
}
// Use this union in reducer
export type AllAction =
  | FetchAction
  | AddFavoriteAction
  | RemoveFavoriteAction
  | SearchCountryAction

export type CountryState = {
  country: CountryType[]
}

export type FavoriteState = {
  favoriteList: string[]
}

// export const SearchState = {
//   inputList: string[]
// }

// update state because App is global - only 1
export type AppState = {
  countryState: CountryState
  favoriteState: FavoriteState
}
