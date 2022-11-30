<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="erro">{{ erro }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts"/>
    </div>
    <div v-else>Carregando...</div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from 'vue';

async function espera(tempo){ //usar com await antes
  return new Promise(resolva => setTimeout(resolva, tempo));
}

export default {
  name: "Home",
  components: { PostList },
  setup(){ //roda antes dos livecycle hooks
    const posts = ref([]);
    const erro = ref(null);

    const load = async () => {
      await espera(1500);
      try{
        let data = await fetch("http://localhost:3000/posts");
        if(!data.ok) throw Error("BD foi de arrasta pra cima!");
        posts.value = await data.json();
      }catch(deuRuin){
        erro.value = deuRuin.message;
        console.log("ERRO:", erro.value);
      }
    };
    load();

    return { posts, erro };
  }
}
</script>
