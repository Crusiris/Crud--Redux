import {SHOW_ALERT, HIDE_ALERT} from '../type';

//Mostrar alerta
export function showAlertAction(alert) {
    return(dispatch)=>{
        dispatch(showAlert(alert))
    }
}

const showAlert =(alert)=>({
    type:SHOW_ALERT,
    payload:alert
});

//Ocultar alerta
export function hideAlertAction(alert){
    return (dispatch)=>{
        dispatch(hideAlert());
    }
}

const hideAlert = ()=>({
    type:HIDE_ALERT
})
