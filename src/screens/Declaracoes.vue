<template>
  <div class="containerP">
   <topoDecla />
   <p class="txtDecla">Declarações</p>
   <div id="opDecla">
       <div class="blocoFE" @click="$router.push({name:'declaracoesfederais'})">
           <div class="imgTxt">
                <img src="../assets/Caminho2.svg" alt=""> <p>Declarações Federais</p>
           </div>
       </div>
       <div class="blocoFE" @click="$emit('backPai',$event)">
           <div class="imgTxt">
               <img src="../assets/Grupo202.svg" alt=""><p>Declarações Estaduais</p>
           </div>
       </div>
   </div>
  </div>
</template>

<style>
.txtDecla{
    font-size:1.7em;
    color: #38185B;
    font-weight: bold;
    text-align: center;
    margin-top:50px;
}
#opDecla{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
#opDecla .blocoFE{
    width: 500px;
    margin-top: 50px;
    padding: 10px;
    padding-left: 20px;
    border-left: 13px #4A154B solid;
    border-radius: 5px;
    background: #EAE7F2;
    box-shadow: 0px 3px 6px #00000029;
    cursor: pointer;
    height: 90px;
    display: flex;
    align-items: center;
 
}
#opDecla .blocoFE:hover{
    background: #dad5e8;
}
#opDecla .blocoFE .imgTxt{
display: flex;
align-items: center;
justify-content: center;
}
#opDecla .blocoFE  p{
    font-weight: bold;
    font-size: 18px;
    color: #4A154B;
    margin-bottom: 0px;
    margin-left: 20px;
}
</style>