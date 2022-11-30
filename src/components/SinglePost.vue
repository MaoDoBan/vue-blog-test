<template>
  <div class="post">
    <router-link :to="{name: 'Details', params: {id: post.id}}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ inicioTexto }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ["post"],
  setup(props){
    const inicioTexto = computed(() => {
      return props.post.body.substring(0, 35) + "...";
    });

    return { inicioTexto };
  }
}
</script>

<style>

</style>