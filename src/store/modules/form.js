const state = {
  firstName: '',
  lastName: ''
}

export const getters = {
  firstName: state => state.firstName,
  lastName: state => state.lastName
}

export const actions = {
  updateFields ({commit, state}, fieldObj) {
    commit('updateFirstName', fieldObj.firstName)
    commit('updateLastName', fieldObj.lastName)
  }
}

export const mutations = {
  updateFirstName (state, firstName) {
    state.firstName = firstName
  },
  updateLastName (state, lastName) {
    state.lastName = lastName
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
