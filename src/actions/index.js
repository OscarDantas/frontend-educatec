import axios from 'axios';

export const listaData = (url) => {
  return function(dispatch) {
    dispatch(getData());
    return axios({
      url: url,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    })
    .then(function(response) {
      dispatch(getData(response.data));
    })
  }
};

function getData(data){
  return {
      type: 'LISTA_DATA',
      payload: data
  }
}