import {URL_SETUP_JSON} from '../../utils/const'

export const SETUP_REQUESTED = 'module/SETUP_REQUESTED'
export const SETUP_FAILED = 'module/SETUP_FAILED'
export const SETUP_SUCCESS = 'module/SETUP_SUCCESS'



export const setup = (moduleKey) => {
    return (dispatch, getState) => {
        dispatch({
            type: SETUP_REQUESTED
        })

        //getState().module.loadingProgress = 10 //definir status do loader - barra de progresso
        
        fetch(`${URL_SETUP_JSON}${moduleKey}.json`)
            .then(response => {
                if (response.ok) {
                    const contentType = response.headers.get('Content-Type') || '';

                    if (contentType.includes('application/json')) {
                        response.json().then(payload => {
                            //getState().module.loadingProgress = 100 //definir status do loader - barra de progresso
                            return dispatch({
                                type: SETUP_SUCCESS,
                                payload: payload
                            })
                        }, error => {
                            console.log('ModuleAction/Invalid JSON: ' + error.message);
                        });
                    } else {
                        console.log('Module Setup File Not Found!')
                        return dispatch({
                            type: SETUP_FAILED
                        })
                    }
                }
            })
            .catch(error => {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                return dispatch({
                    type: SETUP_FAILED
                })
            })
    }
}