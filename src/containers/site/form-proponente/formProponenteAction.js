import { sendPostPromise, newAction } from '../../../../utils/utils'

export const showModalIntercorrencia = value => (
    newAction('MODAL_INTERCORRENCIA_VISIBILITY',value)
)
export const saveModalIntercorrencia = (values, resolveSuper, rejectSuper) => {
    return (dispatch, getState) => {
        const dataOcorrenciaTimezone = values.data_ocorrencia.format("YYYY-MM-DD") + "T03:00:00Z"
        const idPerfilAppUserCad = getState().reducers.professional.selected.perfilApplication[0].id
        const idPreNatal = getState().reducers.contact.selected.perfilApplication[0].preNatal[0].id

        const mutation = `mutation {
            saveIntercurrence(
                dateOccurrence: "${dataOcorrenciaTimezone}"
                idPerfilAppUserCad: ${idPerfilAppUserCad}
                idPreNatal: ${idPreNatal}
                description: "${values.palavra_chave}"
                detail: "${values.detalhamento}"
            ) {
                id
            }
        }`
        const mutationStr = JSON.stringify(mutation)
        const query = `{"query": ${mutationStr},"variables":null}`
        
        console.log('mutationStr', query)

        dispatch(newAction("STARTING_SAVE_INTERCORRENCIA"));
        return new Promise((resolve, reject) => (
            sendPostPromise(query, resolve, reject)
        )
        ).then(response => {
            let responseJson = JSON.parse(response)
            // console.log('responseJson: ', responseJson)

            if(responseJson.error) {
                dispatch(newAction("MODAL_INTERCORRENCIA_ERROR", responseJson.error))
            } else {
                dispatch(newAction("MODAL_INTERCORRENCIA_SAVED", responseJson.data))
            }
            
        })
    }
}