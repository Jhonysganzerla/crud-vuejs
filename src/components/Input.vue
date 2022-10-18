<template>
  <input
    type="text"
    class="form-control my-2"
    placeholder="Insira o nome"
    v-model="tarefa.nome"
  />

  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="checkbox"
      id="check-1"
      v-model="tarefa.categorias"
      value="JavaScript"
    />
    <label class="form-check-label" for="check-1">Javascript</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="checkbox"
      id="check-2"
      v-model="tarefa.categorias"
      value="node.js"
    />
    <label class="form-check-label" for="check-2">Node.js</label>
  </div>

  <div class="my-2">
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="radio1"
        value="urgente"
        v-model.trim="tarefa.situacao"
      />
      <label class="form-check-label" for="radio1">Urgente</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="radio2"
        value="suave"
        v-model="tarefa.situacao"
      />
      <label class="form-check-label" for="radio2">Suave</label>
    </div>
  </div>
  <div class="mt-2">
    <input type="number" class="form-control" v-model.number="tarefa.numero" />
  </div>
  <button
    :disabled="toggleButton"
    class="btn btn-dark mt-2 btn-block"
    type="submit"
  >
    Adicionar
  </button>
</template>

<script>
export default {
  props: {
    tarefa: Object,
  },
  computed: {
    toggleButton() {
      return this.tarefa.nome.trim() === "" ? true : false;
    },
  },
};
</script>

<style></style>
