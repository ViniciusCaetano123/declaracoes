<template>
  <div class="containerP">
      <div class="painel">
          <img src="../assets/LOGO.png" alt="">
      </div>      
      <div class="conteudoPrincipal">
          <div class="blocoBranco">
              <p>Encontre informações referentes a prazos e matérias sobre a principais Declarações a serem entregues pelos profissionais da área contábil, fiscal e trabalhista.</p>
              <button @click="irPar">Começar</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{           
        }
    },
    methods:{   
        irPar(){
            this.$router.push({name:'declaracoes'})
        }    
    },    
    created(){
        document.documentElement.scrollTop = 0;
    }
}
</script>

<style>

.containerP{
    margin:0 auto;
    max-width: 1160px; 
    background: #fff;
    min-height:80vh;
}
.painel{
    background-image: url('/ecdxecf/img/p.jpg');
    background-color: #4A154B;
    background-blend-mode: multiply;
    height: 55vh;
    display: flex;
    justify-content: center;
    align-items: center;   
    background-repeat: no-repeat;
}
.conteudoPrincipal{
    max-width: 1000px;
    margin:0px  auto;
}
.blocoBranco{
    background: #fff;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 50px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    top:-100px;
    height: 50vh;
    padding: 20px;
    
  }
.blocoBranco p{
    font-weight: bold;
    font-size: 26px;
    text-align: center;
    margin-top:100px;
    width:800px
}
.blocoBranco button{
    width: 150px;
    color: #fff;
    background: #4A154B;
    padding: 8px;
    border-radius: 5px;
    border:none;
    margin-top:100px
}
.blocoBranco button:focus{
    outline: none;
}
@media only screen and (max-width: 600px) {
  .painel{
    height: 23vh;
  }  
}
</style>
