import {API_KEY} from './../currency-api-key'
import axios from 'axios'

const BASE_URL = 'http://apilayer.net/api/'

export const CONVERTE_MOEDAS = 'CONVERTE_MOEDAS'

export function converteMoedas(converte){
    //acessar a url do currencylayer.com
    const url = `${BASE_URL}/live?access_key=${API_KEY}&source=${converte.de}&currencies=${converte.para}`
    //passa o DE e o PARA, e o Valor
    const request = axios.get(url)
    //recebe o valor convertido
    return {
        type: CONVERTE_MOEDAS,
        payload: request
    }
}