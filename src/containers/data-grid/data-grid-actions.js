import axios from 'axios';

import _ from 'lodash'
import { URL_API } from '../../utils/const'

export const FETCH_DATA_REQUESTED = 'dataGrid/FETCH_DATA_REQUESTED'
export const FETCH_DATA_SUCCESS = 'dataGrid/FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILED = 'dataGrid/FETCH_DATA_FAILED'

export const fetchData = (key, attributes, filters) => {

    return function(dispatch) {
        dispatch({
            type: FETCH_DATA_REQUESTED
        })
        
        return axios({
            url: `${URL_API}/${key}`,
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
        .then(function(response) {
            dispatch(getData(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
      }


    /*return (dispatch) => {


        dispatch({
            type: FETCH_DATA_REQUESTED
        })

        fetch(`${URL_SETUP_JSON}data/${key}.txt`)
            .then(response => {
                if (response.ok) {
                    response.text().then(payload => {
                        return dispatch({
                            type: FETCH_DATA_SUCCESS,
                            payload: JSON.parse(payload)
                        })
                    }), error => {
                        console.log('DataGridAction/Invalid JSON: ' + error.message);
                    }
                }
            })
        // completar para enviar o fetch
    }*/
}

function getData(data){
  return {
      type: FETCH_DATA_SUCCESS,
      payload: data
  }
}