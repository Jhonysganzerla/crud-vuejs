<template>
  <form @submit.prevent="updateTarefa(tarea)">
    <Input :tarea="tarea" />
  </form>
</template>

<script>
import Input from "../components/Input";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Input,
  },
  computed: {
    ...mapState(["tarea"]),
  },
  methods: {
    ...mapActions(["setTarefas", "updateTarea"]),
  },
  created() {
    this.setTarefas(this.$route.params.id);
  },
};
</script>

<style></style>
