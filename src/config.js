// CampusWell Frontend - Configuración de Microservicios
// Este archivo contiene las URLs de los microservicios

const config = {
  // Base API Gateway URL
  API_BASE_URL: process.env.REACT_APP_API_URL || 'https://p1ag1aonh9.execute-api.us-east-1.amazonaws.com',
  
  // MS4 - Aggregator Service
  AGGREGATOR_URL: process.env.REACT_APP_AGGREGATOR_URL || 'https://p1ag1aonh9.execute-api.us-east-1.amazonaws.com/aggregator',
  
  // MS1 - Psychology Service
  PSYCH_URL: process.env.REACT_APP_PSYCH_URL || 'https://p1ag1aonh9.execute-api.us-east-1.amazonaws.com/psych',
  
  // MS2 - Sports Service
  SPORTS_URL: process.env.REACT_APP_SPORTS_URL || 'https://p1ag1aonh9.execute-api.us-east-1.amazonaws.com/sports',
  
  // MS3 - Habits Service
  HABITS_URL: process.env.REACT_APP_HABITS_URL || 'https://p1ag1aonh9.execute-api.us-east-1.amazonaws.com/habits',
  
  // MS5 - Analytics Service
  ANALYTICS_URL: process.env.REACT_APP_ANALYTICS_URL || 'https://p1ag1aonh9.execute-api.us-east-1.amazonaws.com/analytics',
  
  // Documentación de APIs
  DOCS: {
    SPORTS: 'https://p1ag1aonh9.execute-api.us-east-1.amazonaws.com/sports/docs',
    AGGREGATOR: 'https://p1ag1aonh9.execute-api.us-east-1.amazonaws.com/aggregator/docs',
    HABITS: 'https://p1ag1aonh9.execute-api.us-east-1.amazonaws.com/habits/docs',
    PSYCH: 'https://p1ag1aonh9.execute-api.us-east-1.amazonaws.com/psych/docs',
    ANALYTICS: 'https://p1ag1aonh9.execute-api.us-east-1.amazonaws.com/analytics/docs'
  },
  
  // Configuración adicional
  APP_NAME: process.env.REACT_APP_APP_NAME || 'CampusWell',
  VERSION: process.env.REACT_APP_VERSION || '1.0.0'
};

export default config;