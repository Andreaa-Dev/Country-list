import { Dispatch } from 'redux'
import {
  CountryType,
  EachCountryType,
  FetchAction,
  FetchCountry,
  FetchEachCountry,
  FetchEachCountryAction,
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

export function fetchEachCountry(
  eachCountryData: EachCountryType[]
): FetchEachCountryAction {
  return {
    type: FetchEachCountry,
    payload: {
      eachCountry: eachCountryData,
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

export function fetchEachCountryData(name: string) {
  return (dispatch: Dispatch) => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((eachCountry) => {
        dispatch(fetchEachCountry(eachCountry))
      })
  }
}
