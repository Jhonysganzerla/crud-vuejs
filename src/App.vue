<template>
  <Navbar></Navbar>
  <div class="container">
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
import { mapActions } from "vuex";
export default {
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(["carregarLocal"]),
  },
  created() {
    this.carregarLocal();
  },
};
</script>

<style></style>
