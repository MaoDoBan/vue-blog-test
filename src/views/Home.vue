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
import getPosts from "../composables/getPosts";

export default {
  name: "Home",
  components: { PostList },
  setup(){ //roda antes dos livecycle hooks
    const {posts, erro, load} = getPosts();
    load();

    return { posts, erro };
  }
}
</script>
