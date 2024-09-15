const axios = require('axios');

async function getFlag() {
    try {
        // URL onde a flag.txt está localizada
        const flagUrl = 'flag.txt'; // Substitua pelo caminho correto

        // Faz uma requisição para acessar a flag.txt
        const response = await axios.get(flagUrl);
        
        // Imprime a flag no console
        console.log('Flag:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

getFlag();
