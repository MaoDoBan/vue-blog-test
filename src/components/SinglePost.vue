<template>
  <div class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ inicioTexto }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ["post"],
  setup(props){
    const inicioTexto = computed(() => {
      return props.post.body.substring(0, 5) + "...";
    });

    return { inicioTexto };
  }
}
</script>

<style>

</style>