import { Dispatch } from 'redux'
import {
  CountryType,
  FetchAction,
  FetchCountry,
  SearchCountry,
  SearchCountryAction,
} from '../../misc/types'

export function fetchCountry(countryData: CountryType[]): FetchAction {
  return {
    type: FetchCountry,
    payload: {
      country: countryData,
    },
  }
}

export function searchCountry(input: string): SearchCountryAction {
  return {
    type: SearchCountry,
    payload: {
      userInput: input,
    },
  }
}
// redux-thunk
export function fetchData() {
  return (dispatch: Dispatch) => {
    fetch(' https://restcountries-v2.herokuapp.com/all')
      .then((res) => res.json())
      .then((country) => {
        dispatch(fetchCountry(country))
      })
  }
}
