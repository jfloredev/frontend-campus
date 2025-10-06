// CampusWell Frontend - Configuración de Microservicios
// Este archivo contiene las URLs de los microservicios

const config = {
  // New API Gateway URLs configured by backend team - HTTPS enabled
  AGGREGATOR_URL: 'https://xyaqujygc8.execute-api.us-east-1.amazonaws.com/aggregator',
  PSYCH_URL: 'https://xyaqujygc8.execute-api.us-east-1.amazonaws.com/psych',
  SPORTS_URL: 'https://xyaqujygc8.execute-api.us-east-1.amazonaws.com/sports', 
  HABITS_URL: 'https://xyaqujygc8.execute-api.us-east-1.amazonaws.com/habits',
  ANALYTICS_URL: 'https://xyaqujygc8.execute-api.us-east-1.amazonaws.com/analytics',
  
  // Configuración adicional
  APP_NAME: process.env.REACT_APP_APP_NAME || 'CampusWell',
  VERSION: process.env.REACT_APP_VERSION || '1.0.0'
};

export default config;