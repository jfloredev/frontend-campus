// CampusWell Frontend - Configuración de Microservicios
// Este archivo contiene las URLs de los microservicios

const config = {
  // Base API URL from Amplify environment or fallback to API Gateway
  API_BASE_URL: process.env.REACT_APP_API_URL || 'https://3u3xabplnf.execute-api.us-east-1.amazonaws.com/prod',
  
  // Individual service URLs using API Gateway routes
  AGGREGATOR_URL: `${process.env.REACT_APP_API_URL || 'https://3u3xabplnf.execute-api.us-east-1.amazonaws.com/prod'}/aggregator`,
  PSYCH_URL: `${process.env.REACT_APP_API_URL || 'https://3u3xabplnf.execute-api.us-east-1.amazonaws.com/prod'}/psych`,
  SPORTS_URL: `${process.env.REACT_APP_API_URL || 'https://3u3xabplnf.execute-api.us-east-1.amazonaws.com/prod'}/sports`,
  HABITS_URL: `${process.env.REACT_APP_API_URL || 'https://3u3xabplnf.execute-api.us-east-1.amazonaws.com/prod'}/habits`,
  ANALYTICS_URL: `${process.env.REACT_APP_API_URL || 'https://3u3xabplnf.execute-api.us-east-1.amazonaws.com/prod'}/analytics`,
  
  // Configuración adicional
  APP_NAME: process.env.REACT_APP_APP_NAME || 'CampusWell',
  VERSION: process.env.REACT_APP_VERSION || '1.0.0'
};

export default config;