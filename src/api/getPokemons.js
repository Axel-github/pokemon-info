import axios from 'axios';

// function getPokemons(limit, offset) {

//   let config = {
//     method: 'get',
//     maxBodyLength: Infinity,
//     url: `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
//     headers: {}
//   };
//   // return await axios.request(config);
//   axios.request(config)
//     .then((response) => {
//       const res = response.data.results;
//       console.log(typeof res)
//       return res;
//     })
//     .catch((error) => {
//       return error;
//     });

// }


async function getPokemons(limit, offset) {


  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    headers: {}
  };

  const response = await axios.request(config);
  return response.data.results;

  // axios.request(config)
  //   .then((response) => {
  //     return response.data.results;
  //   })
  //   .catch((error) => {
  //     return error;
  //   });
}

export default getPokemons;