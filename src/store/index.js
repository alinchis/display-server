import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user_profile: {},
    projects: [],
    saved_state: {}
  },

  // calls that will commit changes to your store
  actions: {
    // load projects from JSON file on the control server for testing
    LOAD_DATASET: function ({ commit }) {
      axios.get('/api/dataset').then((response) => {
        commit('SET_DATASET', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    },
    // // load projects from DB
    // LOAD_PROJECT_LIST: function ({ commit }) {
    //   axios.get('/api/projects').then((response) => {
    //     commit('SET_PROJECT_LIST', { list: response.data })
    //   }, (err) => {
    //     console.log(err)
    //   })
    // },
    // // add new project to DB
    // ADD_NEW_PROJECT: function ({ commit }) {
    //   axios.post('/api/projects/add').then((response) => {
    //     commit('ADD_PROJECT', { project: response.data })
    //   }, (err) => {
    //     console.log(err)
    //   })
    // },
    // close project tab
    CLOSE_PROJECT_TAB: function ({ commit, state }, { index }) {
      commit('CLOSE_PROJECT', { index })
    },
    // close project tab
    SET_PROJECT_TAB_ACTIVE: function ({ commit, state }, { id, index }) {
      console.log(`@store: set active project ${id} tab ${index}`)
      if (store.getters.projects_tablist.length > 0) {
        commit('SET_ACTIVE_PROJECT', { id, index })
      } else {
        // no projects are found active, reset route to /projects
        console.log('@router: reset route')
        this.$router.push({path: '/'})
      }
    },
    // change stage for current project
    CHANGE_STAGE_TAB: function ({ commit, state }, { stage }) {
      console.log('@store: CHANGE_STAGE_TAB ', stage)
      commit('CHANGE_STAGE', { stage })
    },

    // /////////////////////////////////////////////////////////////////////////
    // stage questions
    // add new question item
    ADD_QUESTION_ITEM: function ({ commit, state }) {
      console.log('@store: ADD_QUESTION_ITEM ')
      commit('ADD_QUESTION')
    },
    // clear question text
    CLEAR_QUESTION_ITEM: function ({ commit, state }, { index }) {
      console.log('@store: CLEAR_QUESTION_ITEM ', index)
      commit('CLEAR_QUESTION', { index })
    },
    // delete question item
    DELETE_QUESTION_ITEM: function ({ commit, state }, { index }) {
      console.log('@store: DELETE_QUESTION_ITEM ', index)
      commit('DELETE_QUESTION', { index })
    }
  },
  // calls that update the store
  mutations: {
    // set dataset from file
    SET_DATASET: (state, { list }) => {
      console.log('@SET_DATASET: ', list.data)
      store.state.user_profile = list.data.user_profile
      state.projects = list.data.projects
      state.saved_state = list.data.saved_state
    },
    // update the project list
    // SET_PROJECT_LIST: (state, { list }) => {
    //   state.projects = list.data
    //   state.projects_tablist = list.data.map(function (a) {
    //     return {
    //       name: a.name,
    //       id: a.id,
    //       selected: a.selected
    //     }
    //   })
    // },
    // // add new project
    // ADD_PROJECT: (state, { project }) => {
    //   state.projects.push(project)
    // },
    // close project
    CLOSE_PROJECT: (state, {index}) => {
      console.log('@store: CLOSE_PROJECT tab: ' + index)
      var l = state.saved_state.opened_projects.length
      var tabIndex = store.getters.project_selected_tab_index
      // remove the closed tab from the array
      state.saved_state.opened_projects.splice(index, 1)
      // the active selection is affected only if the current tab is the one closed
      if (index === tabIndex && l > 1) {
        // closing the first item
        if (index === 0) {
          state.saved_state.opened_projects[0].selected = true
        // closing the last item
        } else if (index + 1 === l) {
          state.saved_state.opened_projects[index - 1].selected = true
        // closing the middle item
        } else {
          state.saved_state.opened_projects[index].selected = true
        }
      }
    },
    // change active project
    SET_ACTIVE_PROJECT: (state, {id, index}) => {
      console.log('@store: SET_ACTIVE_PROJECT id: ' + id + ' tab: ' + index)
      console.log('test length: ', store.getters.projects_tablist.length > 0)
      // verify if there are items in the array
      if (store.getters.projects_tablist.length > 0) {
        state.saved_state.opened_projects.map(function (x) {
          x.selected = false
          return x
        })
        state.saved_state.opened_projects[index].selected = true
      }
    },
    // change stage for active project
    CHANGE_STAGE: (state, { stage }) => {
      console.log('@store: CHANGE_STAGE name: ', stage)
      state.saved_state.opened_projects[store.getters.project_selected_tab_index].stage = stage
    },

    // /////////////////////////////////////////////////////////////////////////
    // stage questions
    // add new question item
    ADD_QUESTION: (state) => {
      console.log('@store: ADD_QUESTION ')
      state.projects.filter(project => project.id === store.getters.project_selected_id)[0].stages[0].questions.push('')
    },
    // clear question text
    CLEAR_QUESTION: function (state, { index }) {
      console.log('@store: CLEAR_QUESTION ', index)
      state.projects.filter(project => project.id === store.getters.project_selected_id)[0].stages[0].questions[index] = ''
    },
    // delete question item
    DELETE_QUESTION: function (state, { index }) {
      console.log('@store: DELETE_QUESTION ', index)
      state.projects.filter(project => project.id === store.getters.project_selected_id)[0].stages[0].questions.splice(index, 1)
    }
  },
  // calls that grab computed data from the store
  getters: {
    project_selected_tab_index: state => {
      if (store.getters.projects_tablist.length > 0) {
        return state.saved_state.opened_projects.findIndex(project => project.selected)
      } else {
        return -1
      }
    },
    project_selected_id: state => {
      if (store.getters.projects_tablist.length > 0) {
        return state.saved_state.opened_projects.filter(project => project.selected)[0].id
      } else {
        return -1
      }
    },
    project_selected_stage: state => {
      if (store.getters.projects_tablist.length > 0) {
        return state.saved_state.opened_projects.filter(project => project.selected)[0].stage
      } else {
        return -1
      }
    },
    current_project: state => {
      if (store.getters.projects_tablist.length > 0) {
        return state.projects.filter(project => project.id === store.getters.project_selected_id)[0]
      } else {
        return -1
      }
    },
    projects_tablist: state => {
      return state.saved_state.opened_projects
    }
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
