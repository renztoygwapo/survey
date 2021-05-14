export const strict = false

/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 1,
    width: 0,
    member: null,
    loading: false,
    fullPage: true,
    street_types: [],
    fields: {},
    submitForm: {
      memberid: '',
      surveyid: 'Survey_Supporter21',
      status: 'inProgress',
      currentPage: 1,
      startDate: moment().format('MM-DD-YYYY h:mm'),
      lastView: '',
      endDate: ''
    },
    answers: {},
    token: '',
    donation: null,
    donation_settings: null
  },
  getters: {
    step: state => state.step,
    width: state => state.width,
    member: state => state.member,
    loading: state => state.loading,
    fullPage: state => state.fullPage,
    street_types: state => state.street_types,
    fields: state => state.fields,
    currentPage: state => state.currentPage,
    answers: state => state.answers,
    submitForm: state => state.submitForm,
    token: state => state.token,
    donation: state => state.donation,
    donation_settings: state => state.donation_settings
  },
  mutations: {
    setDonationSettings (state, payload) {
      state.donation_settings = payload
    },
    setProgress (state, payload) {
      state.width = payload
    },
    setMember (state, payload) {
      state.member = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setStreetTypes (state, payload) {
      state.street_types = payload
    },
    setFields (state, payload) {
      state.fields = payload
    },
    setCurrentPage (state, payload) {
      state.step = payload
    },
    setAnswers (state, payload) {
      state.answers = payload
    },
    setToken (state, payload) {
      state.token = payload
    },
    setDonationResponse (state, payload) {
      state.donation = payload
    }
  },
  actions: {
    async getMember ({ commit, state }, payload) {
    }
  },
  modules: {
  }
})
