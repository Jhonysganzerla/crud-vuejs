<template>
  <form @submit.prevent="updateTarefa(tarefa)">
    <Input :tarefa="tarefa" />
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
    ...mapState(["tarefa"]),
  },
  methods: {
    ...mapActions(["setTarefas", "updateTarefa"]),
  },
  created() {
    this.setTarefas(this.$route.params.id);
  },
};
</script>

<style></style>
