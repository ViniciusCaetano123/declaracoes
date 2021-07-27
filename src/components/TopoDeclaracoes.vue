<template>
  <div >
     <div class="painelDeclaracoes">
          <img src="../assets/LOGO.png" alt="" width="300px">
        
      </div>  
      <div :class="mostraMenu">
          <div class="blocoDeclaracoes" @click="$router.push({name:'declaracoesfederais'})">
              <img src="../assets/Caminho7.svg" alt="">
              <p>Declarações Federais</p>
          </div>
          <div class="blocoEstaduais" @click="pagEstaduais()">
              <img src="../assets/Grupo0.svg" alt="">
              <p>Declarações Estaduais</p>
          </div>
      </div>
    <div class="dropdowDe" @click="menuOp = !menuOp">
             <span class="trianguloCima"></span> <p> mostrar menu </p><span class="trianguloBaixo"></span>
       </div>
       <div class="back" @click="backGroud" v-show="back">
          
 <div class="brasilModal">
      <div style="display: flex;justify-content: flex-end;">
               <span style="font-weight: bold;font-size: 20px;color: #4A154B;    cursor: pointer;"  id="s">
                   X
               </span>
           </div>
     <p>Selecione o Estado que deseja visualizar</p>
     <Brasil @backFalse="back = $event" />
 </div>

       </div>
  </div>
</template>

<script>
import Brasil from './Brasil.vue'
export default {
    props:['backPai'],
    components:{Brasil},
    data(){
        return{
            menuOp:true,
            back:false
        }
    },
    methods:{
        sair(){
             this.back = true
        },
        backGroud(event){
           
            let b = document.querySelector('.back')
            let s = document.querySelector('#s')
            let p = document.querySelector('path')
           
            this.back  = event.srcElement == b ? false : true            
            if(this.back){
                this.back = event.srcElement == s ? false : true
                if(this.back){                   
                    this.back = event.srcElement != p ? false : true
                }
            }
        },
        pagEstaduais(){
            this.back = true
        },
        
    },
    computed:{
        mostraMenu(){
           return{
               opcoes: true,
               opcoesH: !this.menuOp
           }
        }
    },
    created(){
        this.$parent.$on('backPai',(event)=>{
            this.backGroud(event)
        })
    }
}
</script>

<style>
#svg-map {
    fill: #4A154B;
    cursor: pointer;
}
#svg-map path:hover{
    fill: #562457;
} 
.back{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    
    background-color: rgba(100, 100, 100, 0.5);;
}
.back div.brasilModal{
    background: #fff;
    width: 650px;
    position: absolute;
    height: 600px;
     top: 200px;  
    left: 50%;
    transform: translate(-50%, -200px);
    padding: 20PX;
    text-align: center;
}
.back div.brasilModal p{
    color:#4A154B;
    font-weight: bold;
    font-size: 20px;
}
.opcoes{
    background: #EAE7F2;
    height: 0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.opcoesH{   
    height: 65px;
}
.opcoesH  div.blocoDeclaracoes{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
    cursor: pointer;
}
.opcoesH  div.blocoDeclaracoes p{
    margin-bottom: 0px;
    margin-left: 10px;
    color:#4A154B;
    font-weight: bold;
}
.opcoesH  div.blocoEstaduais{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    cursor: pointer;
}
.opcoesH div.blocoDeclaracoes img{
    background: #4A154B;
    padding: 6px;
    border-radius: 10px;
}
.opcoesH div.blocoEstaduais img{
    background: #4A154B;
    padding: 6px;
    border-radius: 10px;
}
.opcoesH  div.blocoEstaduais p{
    margin-bottom: 0px;
    margin-left: 10px;
    color:#4A154B;
    font-weight: bold;
}
.opcoes .blocoEstaduais{
    display:none;
}
.opcoes .blocoDeclaracoes{
    display:none;
}
.dropdowDe{
    background-color: #4A154B;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3vh;
    border-top: 1px solid rgba(162, 162, 162, 0.161);
    cursor: pointer;
}
.dropdowDe p{
    margin:0px 15px;
}
.dropdowDe span{
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}
.dropdowDe span.trianguloCima{
    border-bottom: 10px solid #fff;
}
.dropdowDe span.trianguloBaixo{
    border-top: 10px solid #fff;
}
.painelDeclaracoes{
    background-image: url('/ecdxecf/img/p.jpg');
    background-color: #4A154B;
    background-blend-mode: multiply;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;   
    background-repeat: no-repeat;  
}
</style>