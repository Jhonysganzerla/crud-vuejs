import { createStore } from 'vuex'
import router from '../router/index'
export default createStore({
  state: {
    tarefas: [],
    tarefa: {
      id: '',
      nome: '',
      categorias: [],
      situacao: '',
      numero: 0,
      disabled: false
    }
  },
  mutations: {
    carregar(state, payload) {
      state.tarefas = payload
    },
    set (state, payload) {
      state.tarefas.push(payload)
      localStorage.setItem('tarefas', JSON.stringify(state.tarefas))
    },
    apagar(state, payload) {
      state.tarefas = state.tarefas.filter((item) => item.id !== payload)
      localStorage.setItem('tarefas', JSON.stringify(state.tarefas))
    },
    tarefa (state, payload) {
      if (!state.tarefas.find((item) => item.id == payload)) {
        router.push('/')
        return
      }
      state.tarefa = state.tarefas.find((item) => item.id == payload)
      console.log(state.tarefa)
    },
    atualizar (state, payload) {
      state.tarefas = state.tarefas.map((item) =>
        item.id == payload.id ? payload : item
      )
      router.push('/')
      localStorage.setItem('tarefas', JSON.stringify(state.tarefas))
    }
  },
  actions: {
    setTarefa ({ commit }, tarefa) {
      commit('set', tarefa)
    },
    deleteTarefa({ commit }, id) {
      commit('apagar', id)
    },
    setTarefas ({ commit }, id) {
      commit('tarefa', id)
    },
    updateTarefa({ commit }, tarefa) {
      commit('atualizar', tarefa)
    },
    carregarLocal({ commit }) {
      if (localStorage.getItem('tarefas')) {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'))
        commit('carregar', tarefas)
        return
      }
      localStorage.setItem('tarefas', JSON.stringify([]))
    }
  },
  modules: {}
})