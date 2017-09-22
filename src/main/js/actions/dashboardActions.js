import { get } from '../services/Api'
import toastr from 'toastr'

export function fetchSummary () {
  toastr.options.timeOut = 1700
  toastr.options.extendedTimeOut = 1700
  return function (dispatch) {
    return get('/dashboard/details/summary')
      .then((response) => {
        dispatch({type: 'FETCH_SUMMARY_FULFILLED', payload: response})
        toastr.success('Success! Details loaded')
      })
      .catch((err) => {
        dispatch({type: 'FETCH_SUMMARY_REJECTED', payload: err})
        toastr.error('Error! Loading details')
      })
  }
}

export function setTempServices (service) {
  return {type: 'SET_TEMP_SERVICE', payload: service}
}

export function setTempManagerServices (service) {
  return {type: 'SET_TEMP_MANAGER_SERVICE', payload: service}
}

export function updateServices (service) {
  return {type: 'UPDATE_SERVICE', payload: service}
}

export function updateManagerServices (service) {
  return {type: 'UPDATE_MANAGER_SERVICE', payload: service}
}

export function updateTempView (view) {
  return {type: 'UPDATE_TEMP_VIEW', payload: view}
}

export function completeTask (task) {
  return {type: 'COMPLETE_TASK', payload: task}
}
