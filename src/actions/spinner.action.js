
import { spinnerStatusConstant } from "../assets/constants/store-constants";

export const spinnerStatusAction= {
    changeSpinnerStatus
}

function changeSpinnerStatus(statue) {
    return dispatch => {
        if(statue) {
            dispatch({type : spinnerStatusConstant.spinnerStatus})
        } else {
            dispatch({type : spinnerStatusConstant.spinnerStatusFalse})
        }
        
    }
}