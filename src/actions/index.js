import API_KEY from './../currency-api-key'
import axios from 'axios'

const BASE_URL = 'http://apilayer.net/api/'

export const CONVERTE_MOEDAS = 'CONVERTE_MOEDAS'

export function converteMoedas(converte){
    //acessar a url do currencylayer.com
    const url = `${BASE_URL}/convert?access_key=${API_KEY}`
    //passa o DE e o PARA, e o Valor
    const parametros = {
        from: converte.de ,
        to: converte.para,
        amount: converte.valor,
        format: 1
    }
    const request = axios.get(url, parametros)
    //recebe o valor convertido
    return {
        type: CONVERTE_MOEDAS,
        payload: request
    }
}