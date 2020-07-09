const MSGS = {
    HTTP_GET_EMAILS: 'HTTP_GET_EMAILS',
    HTTP_GET_SHOW_EMAIL_BODY: 'HTTP_GET_SHOW_EMAIL_BODY',
    SORT_COLS: 'SORT_COLS',
    HIDE_EMAIL_BODY: 'HIDE_EMAIL_BODY',
    SET_DATE_START: 'SET_DATE_START',
    SET_DATE_END: 'SET_DATE_END'
};

function updateModel(msg, model) {
    switch (msg.type) {
        case HTTP_GET_EMAILS: return model;
        case HTTP_GET_SHOW_EMAIL_BODY: return model;
        case SORT_COLS: return model;
        case HIDE_EMAIL_BODY: return model;
        case SET_DATE_START: return model;
        case SET_DATE_END: return model;
        default: return model;
    }
}

export default updateModel;
