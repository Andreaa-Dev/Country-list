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
  sortable?: boolean
}

export type LanguageType = {
  name: string
}

export type EachCountryType = {
  flags: {
    svg: string
  }
  name: {
    common: string
  }
  capital: {
    name: string
  }[]
  region: string
  subregion: string
  latlng: {
    direction: number
  }[]
  population: number
  independent: boolean
  languages: {
    [key: string]: { name: string }
  }
  currencies: {
    [key: string]: { name: string; symbol: string }
  }
  timezones: {
    timezone: string
  }[]
  maps: {
    googleMaps: string
  }
  coatOfArms: {
    png: string
  }
}

export type ParamsType = {
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
export type UserInputType = {
  userInput: string
}
// Action types
export const FetchCountry = 'fetch_country'
export const FetchEachCountry = 'fetch_eachCountry'
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

export type FetchEachCountryAction = {
  type: typeof FetchEachCountry
  payload: {
    eachCountry: EachCountryType[]
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
  | FetchEachCountryAction

export type CountryState = {
  country: CountryType[]
  search: CountryType[]
  eachCountry: EachCountryType[]
}

export type FavoriteState = {
  favoriteList: string[]
}

// update state because App is global - only 1
export type AppState = {
  countryState: CountryState
  favoriteState: FavoriteState
}
