<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="mostrarPosts" :posts="posts"/>
    <button @click="mostrarPosts = !mostrarPosts">Toggle posts</button>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from 'vue';

export default {
  name: "Home",
  components: { PostList },
  setup(){ //roda antes dos livecycle hooks
    const posts = ref([
      { title: "welcome to the blog", body: "Lorem ipsum", id: 1 },
      { title: "top 5 CSS tips", body: "lorem ipsum dois", id: 2 },
    ]);

    const mostrarPosts = ref(true);

    return { posts, mostrarPosts };
  }
}
</script>
