import axios from 'axios'
//const url = "https://www.lefisc.com.br/api"
//const tok = "f6aed48dd6f946128eb6858210e1b350"
export default{  
    getLinkEstados(){
        return axios
        .get(`https://www.lefisc.com.br/api/recolhimentoICMS/calcular/estados/f6aed48dd6f946128eb6858210e1b350`)
        .then(res => res.data)
        .catch(err=> err.response)
    }
}