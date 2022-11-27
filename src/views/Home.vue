<template>
  <div class="home">
    <p>Meu nome é {{ nome }} e minha idade é {{ idade }}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  setup(){ //roda antes dos livecycle hooks
    let nome = "Mario";
    let idade = 42;
    return {nome, idade};
  }
}
</script>
