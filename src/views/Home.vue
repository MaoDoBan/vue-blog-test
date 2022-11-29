<template>
  <div class="home">
    <p>Meu nome é {{ nome }} e minha idade é {{ idade }}</p>
    <button @click="clicar">Aperte</button>
    <button @click="idade++">+1 na idade</button>
    <input type="text" v-model="nome">
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Home',
  setup(){ //roda antes dos livecycle hooks
    const nome = ref("Mario");
    const idade = ref(42);

    function clicar(){
      console.log("clicou!");
      nome.value = "Luigi";
      idade.value += 1;
    }

    return {nome, idade, clicar};
  }
}
</script>
