import {
  CountryState,
  FetchCountry,
  AllAction,
  SearchCountry,
} from '../../misc/types'

const initialState: CountryState = { country: [], search: string }

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
      return {
        ...state,
        search: action.payload.userInput,
      }
    default:
      return state
  }
}
