const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./rutas/tarea.js'];

swaggerAutogen(outputFile, endpointsFiles);