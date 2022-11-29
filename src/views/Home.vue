<template>
  <div class="home">
    <h2>Refs</h2>
    <p>{{ ninja1.nome }} - {{ ninja1.idade }}</p>
    <button @click="atualizaNinja1">Atualiza Ninja 1</button>

    <h2>Reactive</h2>
    <p>{{ ninja2.nome }} - {{ ninja2.idade }}</p>
    <button @click="atualizaNinja2">Atualiza Ninja 2</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: 'Home',
  setup(){ //roda antes dos livecycle hooks
    const ninja1 = ref({nome: "Mario", idade: 42});
    const ninja2 = reactive({nome: "Luigi", idade: 45});

    function atualizaNinja1(){
      ninja1.value.idade++;
    }
    function atualizaNinja2(){
      ninja2.idade++;
    }

    return {ninja1, ninja2, atualizaNinja1, atualizaNinja2};
  }
}
</script>
