import Principal from '../screens/Principal.vue'
import Declaracoes from '../screens/Declaracoes.vue'
import DeclaracoesFederais from '../screens/DeclaracoesFederais.vue'
import DeclaracoesEstaduais from '../screens/DeclaracoesEstaduais.vue'
export const routes = [     
    {path:'/declaracoes',name:'principal', component: Principal},    
    {path:'/declaracoes/home',name:'declaracoes', component: Declaracoes}, 
    {path:'/declaracoes/federais',name:'declaracoesfederais', component: DeclaracoesFederais},   
    {path:'/declaracoes/estado/:sigla',name:'declaracoesEstaduais', component: DeclaracoesEstaduais}, 
];