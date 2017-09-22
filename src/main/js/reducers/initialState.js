export default {
  visible: {
    visible: false
  },
  dashboardDetails: {
    dashboardDetails: '',
    defaultServices: [{name: 'MyResources', text: 'Book My Resources'}, {name: 'MyRewards', text: 'View My Pay and Rewards'}, {name: 'MyReview', text: 'Review My L & D'}, {name: 'MyActivities', text: 'View My Activities'}, {name: 'MyPerformance', text: 'Review My Performance'}, {name: 'MyInformation', text: 'Update My Information'}, {name: 'MyTravel', text: 'Book My Travel'}, {name: 'MyTime', text: 'Manage My Time'}],
    defaultManagerServices: [{name: 'MyEmpInformation', text: 'Update My Employee Information'}, {name: 'MyEmpResources', text: 'View My Employee Resources'}, {name: 'MyEmpTravel', text: 'View My Employee Travel'}, {name: 'MyEmpTime', text: 'Review My Employee Time'}, {name: 'MyRecruitment', text: 'My Recruitment'}, {name: 'MyEmpPerformance', text: 'Review My Employee Performance'}, {name: 'MyEmpL&D', text: 'Review My Employee L & D'}, {name: 'MyEmpPay', text: 'Review My Employee Pay and Reward'}],
    tasks: [{id: 1, text: 'Review Tom\'s Overtime', status: 'New'}, {id: 2, text: 'Review John\'s Expense Claim', status: 'New'}, {id: 3, text: 'Submit Time Report', status: 'New'}],
    tempService: {name: '', text: ''},
    tempManagerService: {name: '', text: ''},
    error: null,
    empNumber: '',
    btnVisible: true,
    view: ''
  },
  personalDetails: {
    personalDetails: '',
    privateDetails: '',
    bankDetails: '',
    contactDetails: '',
    emergencyContactDetails: '',
    btnVisible: true,
    error: null
  },
  professionalDetails: {
    professionalDetails: '',
    btnVisible: true,
    error: null
  },
  qualifications: {
    qualifications: '',
    error: null
  }
}
