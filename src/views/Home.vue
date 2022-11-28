<template>
  <div class="home">
    <p ref="texto">Meu nome é {{ nome }} e minha idade é {{ idade }}</p>
    <button @click="clicar">Aperte</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Home',
  setup(){ //roda antes dos livecycle hooks
    const texto = ref(null);

    let nome = "Mario";
    let idade = 42;

    function clicar(){
      console.log("clicou!");
      texto.value.textContent = "Bah dai né, tava frio";
    }

    return {nome, idade, clicar, texto};
  }
}
</script>
