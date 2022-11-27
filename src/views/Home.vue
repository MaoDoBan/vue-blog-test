<template>
  <div class="home">
    <p>Meu nome é {{ nome }} e minha idade é {{ idade }}</p>
    <button @click="clicar">Aperte</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  setup(){ //roda antes dos livecycle hooks
    let nome = "Mario";
    let idade = 42;

    function clicar(){
      console.log("clicou!");
    }

    return {nome, idade, clicar};
  }
}
</script>
