import { footerConstants } from '../assets/constants/index';

export const footerActions = {
    getFooterParam,
};

function getFooterParam(param) {
    // // console.log("in the footer action", param)
    return { type: footerConstants.FOOTER_REQUEST, param };
}
