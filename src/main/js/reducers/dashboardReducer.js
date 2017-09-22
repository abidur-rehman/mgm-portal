import initialState from './initialState'
import toastr from 'toastr'

export default function reducer (state = initialState.dashboardDetails, action) {
  switch (action.type) {
    case 'FETCH_SUMMARY_REJECTED': {
      return {...state, error: action.payload}
    }
    case 'FETCH_SUMMARY_FULFILLED': {
      let dashboardDetails = action.payload
      dashboardDetails.btnVisible = true
      dashboardDetails.view = ''
      return {
        ...state,
        dashboardDetails: dashboardDetails,
        empNumber: action.payload.personalDetailsSummary.empNumber
      }
    }
    case 'SET_TEMP_SERVICE': {
      return {
        ...state,
        tempService: action.payload
      }
    }
    case 'SET_TEMP_MANAGER_SERVICE': {
      return {
        ...state,
        tempManagerService: action.payload
      }
    }
    case 'UPDATE_TEMP_VIEW': {
      let dashboardDetails = { ...state.dashboardDetails }
      dashboardDetails.btnVisible = false
      dashboardDetails.view = action.payload
      return {
        ...state,
        dashboardDetails: dashboardDetails
      }
    }
    case 'UPDATE_SERVICE': {
      let defaultServices = state.defaultServices
      let obj = findByName(defaultServices, state.tempService.name)
      if (obj !== undefined) {
        toastr.warning('Service ' + state.tempService.name + ' is already on your list')
        return {
          ...state,
          error: 'Service already in your list'
        }
      }
      let result = findByName(defaultServices, action.payload.name)
      result.name = state.tempService.name
      result.text = state.tempService.text
      return {
        ...state,
        defaultServices: defaultServices,
        tempService: {}
      }
    }
    case 'UPDATE_MANAGER_SERVICE': {
      let defaultManagerServices = state.defaultManagerServices
      let obj = findByName(defaultManagerServices, state.tempManagerService.name)
      if (obj !== undefined) {
        toastr.warning('Service ' + state.tempManagerService.name + ' is already on your list')
        return {
          ...state,
          error: 'Service already in your list'
        }
      }
      let result = findByName(defaultManagerServices, action.payload.name)
      result.name = state.tempManagerService.name
      result.text = state.tempManagerService.text
      return {
        ...state,
        defaultManagerServices: defaultManagerServices,
        tempManagerService: {}
      }
    }
    case 'COMPLETE_TASK': {
      let tasks = Object.assign([], state.tasks)
      let result = findById(tasks, action.payload.id)
      result.status = 'Done'
      return {
        ...state,
        tasks: tasks
      }
    }
  }
  return state
}

function findByName (services, name) {
  return services.filter(function (obj) {
    return obj.name === name
  })[0]
}

function findById (services, id) {
  return services.filter(function (obj) {
    return obj.id === id
  })[0]
}
