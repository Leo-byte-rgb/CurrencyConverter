import axios from 'axios'
async function Api() {

    try{
    const response = await axios.get('https://economia.awesomeapi.com.br/all/USD-BRL');
    const data = response.data.USD;
    return data;
    } catch(err) {
        console.log(err)
    }
    
}

export default Api;