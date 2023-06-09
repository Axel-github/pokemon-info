import axios from 'axios';



function makeRequest(limit, offset) {
  const params = {
    limit,
    offset
  }

  axios.get(`https://example.com/api?limit=${limit}&offset=${offset}`, { params })
    .then(response => {
      console.log(response);
      // обработка ответа от сервера
    })
    .catch(error => {
      console.log(error);
      // обработка ошибки
    });
}

// Пример использования: 
makeRequest(10, 20);
