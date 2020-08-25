
import sortBy from 'lodash/sortBy'

const MSGS = {
    HTTP_GET_EMAILS: 'HTTP_GET_EMAILS',
    HTTP_GET_SHOW_EMAIL_BODY: 'HTTP_GET_SHOW_EMAIL_BODY',
    SORT_COLS: 'SORT_COLS',
    HIDE_EMAIL_BODY: 'HIDE_EMAIL_BODY',
    SET_DATE_START: 'SET_DATE_START',
    SET_DATE_END: 'SET_DATE_END',
    DATEPICKER_START_OPEN: 'DATEPICKER_START_OPEN',
    SHOW_ALERT: 'SHOW_ALERT',
    UPDATE_RESULT: 'UPDATE_RESULT',
    UPDATE_EMAIL_BODY: 'UPDATE_EMAIL_BODY'
};

export const SETYPE = {
    OPEN_END_DATEPICKER: 'OPEN_END_DATEPICKER',
    OPEN_START_DATEPICKER: 'OPEN_START_DATEPICKER',
    GET_EMAILS: 'GET_EMAILS',
    SHOW_ALERT: 'SHOW_ALERT',
    GET_EMAIL_BODY: 'GET_EMAIL_BODY'
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
export function getToggleEmailBody(id) {
    return {
        type: MSGS.HTTP_GET_SHOW_EMAIL_BODY,
        id
    };
}
export function updateBodyMSG(body, id) {
    return {
        type: MSGS.UPDATE_EMAIL_BODY,
        body,
        id
    };
}
export function sortColsMSG(sort_on) {
    return {
        type: MSGS.SORT_COLS,
        sort_on
    };
}


function updateModel(msg, model) {
    switch (msg.type) {
        case MSGS.SORT_COLS: {
            const {sort_on} = msg;
            const sorted = sortBy(model.search_result,[sort_on]);
            // if same sort by col, then reverse order...
            const sort_asc = sort_on === model.sort_on ? !model.sort_asc : model.sort_asc;
            const search_result = !sort_asc ? sorted.reverse() : sorted;
            return [{...model, search_result, sort_on, sort_asc}];
        }
        case MSGS.UPDATE_EMAIL_BODY: {
            const {body, id} = msg;
            const search_result = model.search_result.map(v => {
                if(v.id === id) return {...v, body, showBody: true};
                return v;
            });
            return [{...model, search_result}];
        }
        case MSGS.HTTP_GET_SHOW_EMAIL_BODY: {
            const {id} = msg;
            const email = model.search_result.find(v => v.id === id);
            if(email.body){ // body has already been fetched. Just hide/show it
                const search_result = model.search_result.map(v => {
                   if(v.id === id)v.showBody = !v.showBody;
                   return v;
                });
                return [{...model, search_result}];
            }
            return [model, {cmds: [{seType: SETYPE.GET_EMAIL_BODY, id}]}];
        }
        case MSGS.UPDATE_RESULT: {
            // todo; sort needs to be added here (post user-updated sort not reflected on subsequent searches)
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
            const search_startDate = model.search_startDate_node.toString();
            return [{...model, search_startDate}, {cmds: [{seType: SETYPE.OPEN_END_DATEPICKER}]}];
        }
        case MSGS.SET_DATE_END: {
            const search_endDate = model.search_endDate_node.toString();
            return [{...model, search_endDate}];
        }
        default: return model;
    }
}


export default updateModel;
