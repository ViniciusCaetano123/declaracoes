<template>
  <div class="containerP">
   <topoDecla />
   <p class="txtDecla">Declarações Federais</p>
   <Conteudo @spinerFalse="spiner = $event" v-if="spiner"/> 
   <Spiner v-else />
  </div>
</template>

<script>
import Conteudo from '../components/Conteudo.vue'
import Spiner from '../components/Spiner.vue'
export default {
components:{
  Conteudo,
  Spiner
},
data(){
  return{
    spiner:false
  }
},
methods:{
  GetDados(){
             setTimeout(()=>{
                console.log('vindo')
                this.spiner = true
            },3000)
        }
},
mounted(){
  this.GetDados()
}
}
</script>

<style>

</style>