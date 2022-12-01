import { ref } from "vue";

export default function getPosts(id){
  const post = ref(null);
  const erro = ref(null);

  async function load(){
    try{
      let data = await fetch("http://localhost:3000/posts/"+id);
      if(!data.ok) throw Error("ERRO: o post ta no ancapistão!");
      post.value = await data.json();
    }catch(deuRuin){
      erro.value = deuRuin.message;
      console.log("ERRO:", erro.value);
    }
  };

  return {post, erro, load};
}