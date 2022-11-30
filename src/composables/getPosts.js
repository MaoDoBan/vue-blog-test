import { ref } from "vue";

async function espera(tempo){ //usar com await antes
  return new Promise(resolva => setTimeout(resolva, tempo));
}

export default function getPosts(){
  const posts = ref([]);
  const erro = ref(null);

  async function load(){
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

  return {posts, erro, load};
}