<template>
  <form @submit.prevent="procesar">
    <Input :tarefa="tarefa" />
  </form>
  <ListaTarefas />
</template>

<script>

import Input from "../components/Input";
import ListaTarefas from "../components/ListaTarefas";

import { mapActions } from "vuex";
const shortid = require("shortid");

export default {
  name: "Home",
  components: {
    Input,
    ListaTarefas,
  },
  data() {
    return {
      tarefa: {
        id: "",
        nome: "",
        categorias: [],
        situacao: "",
        numero: 0,
        disabled: false,
      },
    };
  },
  methods: {
    ...mapActions(["setTarefa"]),
    procesar() {
      if (this.tarefa.nome.trim() === "") {
        return;
      }

      // gera id usando esse shortid ai
      this.tarefa.id = shortid.generate();
      console.log(this.tarefa.id);

      // enviar os dados
      this.setTarefa(this.tarefa);

      this.tarefa = {
        id: "",
        nome: "",
        categorias: [],
        situacao: "",
        numero: 0,
        disabled: false,
      };
    },
  },
};
</script>
