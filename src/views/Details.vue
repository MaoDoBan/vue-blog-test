<template>
  <div v-if="erro">{{ erro }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title}}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
</template>

<script>
import getPost from "../composables/getPost";

export default {
  props: ["id"],
  setup(props){
    const {post, erro, load} = getPost(props.id);
    load();

    return {post, erro};
  }
}
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre{
  white-space: pre-wrap;
}
</style>