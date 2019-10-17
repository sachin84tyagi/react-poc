import { spinnerStatusConstant } from "../assets/constants/store-constants";

const initialStatus = { spinnerStatus: false };

export function spinnerStatusReducer(state = initialStatus, action) {
    // console.log("dcdgjjvcjhv", action.type )
    switch (action.type) {
        case spinnerStatusConstant.spinnerStatus :
            return {
                spinnerStatus: false
            }
            case spinnerStatusConstant.spinnerStatusFalse :
                return {
                    spinnerStatus: true 
                }
            default : 
            return state
    }
}
