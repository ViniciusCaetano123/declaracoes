<template>
<div style="padding:10pxs 50px;"> 
  <div class="conteudo" v-for="n in 5" :key="n">
    <div class="acompanhamento">
        <div class="quadradro">

        </div>
        <div class="linha">

        </div>
    </div>
    <div>
        <p>dasduashdas</p>
        <p>dasuduhas</p>
        <p>asidasdas</p>
        <p>dasduashdas</p>
        <p>dasuduhas</p>
        <p>asidasdas</p>
        <p>dasduashdas</p>
        <p>dasuduhas</p>
        <p>asidasdas</p>
        <p>dasduashdas</p>
        <p>dasuduhas</p>
        <p>asidasdas</p>
    </div>
</div>
 </div>
  
</template>

<script>
export default {
    data(){
        return{
            dados:[]
        }
    },
    methods:{   
         

    },
    mounted(){
        
    }

}
</script>

<style> 
p{
    margin:0px
}
.conteudo .acompanhamento .quadradro{
    width:20px;
    height: 20px;
    background: #4A154B;
}
.conteudo .acompanhamento .linha{
    height:100%;
    width: 1px ;
    background: #707070;
    margin-top:10px

}
.conteudo .acompanhamento {
    display: flex;
    align-items: center;
    width: 80px;
    justify-content: center;
    flex-direction: column;
}
.conteudo{
    display: flex;
    margin-top:40px
    
}
</style>