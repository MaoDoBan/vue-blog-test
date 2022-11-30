<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts"/>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from 'vue';

export default {
  name: "Home",
  components: { PostList },
  setup(){ //roda antes dos livecycle hooks
    const posts = ref([]);
    const erro = ref(null);

    const load = async () => {
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

    return { posts };
  }
}
</script>
