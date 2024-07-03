const axios = require('axios');

    const getPosts = async () => {
      try {
          const res = await axios.get('https://api.weatherbit.io/v2.0/current?lat=25.67507&lon=-100.31847&key=7fe2ab964e6549fbbf235b259655c437');
          return res.data;
          } catch (error) {
              console.log(error);
          }    
    }; 

module.exports = getPosts;