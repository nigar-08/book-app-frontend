const getBaseUrl = () => {
    // Use the environment variable defined in .env
    return import.meta.env.VITE_API_URL || 'http://localhost:4000';  // Default to localhost if not set
  };
  
  export default getBaseUrl;
  