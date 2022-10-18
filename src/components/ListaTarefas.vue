<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Nome</th>
        <th scope="col">Categorias</th>
        <th scope="col">Situacao</th>
        <th scope="col">Numero</th>
        <th scope="col">Ação</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tarefas" :key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.nome }}</td>
        <td>
          <span v-for="(i, index) in item.categorias" :key="index">
            {{ item.categorias === index + 1 ? i : i + ", " }}
          </span>
        </td>
        <td>{{ item.situacao }}</td>
        <td>{{ item.numero }}</td>
        <td>
          <button class="btn btn-danger btn-sm" @click="deleteTarefa(item.id)">
            Delete
          </button>
          <router-link
            class="btn btn-warning btn-sm ml-2"
            :to="{
              name: 'Editar',
              params: {
                id: item.id,
              },
            }"
            >Editar</router-link
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["tarefas"]),
  },
  methods: {
    ...mapActions(["deleteTarefa"]),
  },
};
</script>

<style></style>
