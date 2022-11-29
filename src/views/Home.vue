<template>
  <div class="home">
    <input type="text" v-model="busca">
    <div v-for="nome in resultado" :key="nome">{{nome}}</div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  name: 'Home',
  setup(){ //roda antes dos livecycle hooks
    const busca = ref("");
    const nomes = ref(["maria", "luisa", "julia", "lais", "duda", "debora", "leia", "ana", "leticia"]);

    const resultado = computed(() => nomes.value.filter(
      nome => nome.includes(busca.value)
    ));

    return {busca, resultado};
  }
}
</script>
