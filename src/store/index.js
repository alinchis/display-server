import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userProfile: {
      name: 'Alin',
      id: '0'
    },
    projects: []
  },
  // calls that will commit changes to your store
  actions: {
    // load projects from DB
    LOAD_PROJECT_LIST: function ({ commit }) {
      axios.get('/api/projects').then((response) => {
        commit('SET_PROJECT_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    },
    // add new project to DB
    ADD_NEW_PROJECT: function ({ commit }) {
      axios.post('/api/projects/add').then((response) => {
        commit('ADD_PROJECT', { project: response.data })
      }, (err) => {
        console.log(err)
      })
    }
  },
  // calls that update the store
  mutations: {
    // update the project list
    SET_PROJECT_LIST: (state, { list }) => {
      state.projects = list.data
    },
    // add new project
    ADD_PROJECT: (state, { project }) => {
      state.projects.push(project)
    }
  },
  // calls that grab computed data from the store
  getters: {
    // get only completed projects
    // openProjects: state => {
    //   return state.projects.filter(project => !project.completed)
    // }
  },
  // multiple stores, part of the same store tree
  modules: {
  }
})

export default store
