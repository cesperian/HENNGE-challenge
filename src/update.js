const MSGS = {
    HTTP_GET_EMAILS: 'HTTP_GET_EMAILS',
    HTTP_GET_SHOW_EMAIL_BODY: 'HTTP_GET_SHOW_EMAIL_BODY',
    SORT_COLS: 'SORT_COLS',
    HIDE_EMAIL_BODY: 'HIDE_EMAIL_BODY',
    SET_DATE_START: 'SET_DATE_START',
    SET_DATE_END: 'SET_DATE_END',
    DATEPICKER_START_OPEN: 'DATEPICKER_START_OPEN',
    SHOW_ALERT: 'SHOW_ALERT',
    UPDATE_RESULT: 'UPDATE_RESULT'
};

export const SETYPE = {
    OPEN_END_DATEPICKER: 'OPEN_END_DATEPICKER',
    OPEN_START_DATEPICKER: 'OPEN_START_DATEPICKER',
    GET_EMAILS: 'GET_EMAILS',
    SHOW_ALERT: 'SHOW_ALERT'
};

export const openStartDatePickerMSG = {type: MSGS.DATEPICKER_START_OPEN};
export const setStartDateMSG = {type: MSGS.SET_DATE_START};
export const setEndDateMSG = {type: MSGS.SET_DATE_END};
export const getEmailsMSG = {type: MSGS.HTTP_GET_EMAILS};
export function showAlertMSG(alertMessage) {
    return {
        type: MSGS.SHOW_ALERT,
        alertMessage
    }
}
export function updateResultsMSG(search_result) {
    return {
        type: MSGS.UPDATE_RESULT,
        search_result
    }
}

function updateModel(msg, model) {
    // debugger;
    switch (msg.type) {
        case MSGS.UPDATE_RESULT: {
            const {search_result} = msg;
            return [{...model, search_result}];
        }
        case MSGS.SHOW_ALERT: {
            const {alertMessage} = msg;
            return [{...model, alertMessage},{cmds: [{seType: SETYPE.SHOW_ALERT}]}];
        }
        case MSGS.DATEPICKER_START_OPEN: {
            return [model,{cmds: [{seType: SETYPE.OPEN_START_DATEPICKER}]}];
        }
        case MSGS.HTTP_GET_EMAILS: {
            return [model,{cmds: [{seType: SETYPE.GET_EMAILS}]}];
        }
        case MSGS.HTTP_GET_SHOW_EMAIL_BODY: return model;
        case MSGS.SORT_COLS: return model;
        case MSGS.HIDE_EMAIL_BODY: return model;
        case MSGS.SET_DATE_START: {
            // console.log(model.search_startDate_node.toString());
            const search_startDate = model.search_startDate_node.toString();
            // const search_startDate = formatDateDisplay(model.search_startDate_node.date);
            return [{...model, search_startDate}, {cmds: [{seType: SETYPE.OPEN_END_DATEPICKER}]}];
        }
        case MSGS.SET_DATE_END: {
            const search_endDate = model.search_endDate_node.toString();
            // console.log(search_endDate);
            return [{...model, search_endDate}];
        }
        default: return model;
    }
}

// function formatDateDisplay(date){
//     if(date) return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;
//     return null;
// }


export default updateModel;
