const saludo = (nombre: string): string => { 
    return `Hola, ${nombre}! Bienvenido a TypeScript con Node.js`; 
    }; 
    
console.log(saludo("Desarrollador")); 

import axios from 'axios';

const obtenerPaises = async() => {
    try {
        const respuestaPeticion = await axios.get('https://restcountries.com/v3.1/all');
        
        console.log(respuestaPeticion.data.slice(0,6));
    } catch (error) {
        console.error('Error: ', error);
    }
}

obtenerPaises();