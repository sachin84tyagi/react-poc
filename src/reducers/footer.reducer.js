import { footerConstants } from '../assets/constants/index';

export function footer(state = {}, action) {
    // // console.log("cdvhhdjhvv========",action.param)
    switch (action.type) {
        case footerConstants.FOOTER_REQUEST:
            return { param_value: action.param };
        default:
            return state
    }
}