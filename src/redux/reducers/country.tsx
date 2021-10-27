import {
  CountryState,
  FetchCountry,
  AllAction,
  SearchCountry,
  FetchEachCountry,
} from '../../misc/types'

const initialState: CountryState = { country: [], search: [], eachCountry: [] }

export default function country(
  state = initialState,
  action: AllAction
): CountryState {
  switch (action.type) {
    case FetchCountry:
      return {
        ...state,
        country: action.payload.country,
      }

    case SearchCountry:
      const filteredCountry = state.country.filter((country) => {
        return country.name.toLowerCase().includes(action.payload.userInput)
      })
      return {
        ...state,
        search: filteredCountry,
      }

    case FetchEachCountry:
      return {
        ...state,
        eachCountry: action.payload.eachCountry,
      }
    default:
      return state
  }
}
