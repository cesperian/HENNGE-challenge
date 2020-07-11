// import * as M from "materialize-css";
import { diff, patch } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';
const axios = require('axios').default;
import {SETYPE, setStartDateMSG, setEndDateMSG, updateResultsMSG, showAlertMSG, updateBodyMSG} from "./update";

// todo; find out if demo will be hosted and if so remove json from bundle
const emails = require('./data.json');
const emailBody = require('./data_body.json');

function app(initModel, view, node, updateModel) {

    let model = initModel;
    let currentView = view(dispatch, initModel);
    let rootNode = createElement(currentView);

    node.appendChild(rootNode);

    // init datepicker instances and add to state
    const date01 = document.querySelector('#date01');
    const date02 = document.querySelector('#date02');
    //todo; onclose fires for both 'cancel' and 'ok' buttons
    // cancelling startdate will still show enddate picker!
    const search_startDate_node = M.Datepicker.init(date01, {
        onClose: () => {dispatch(setStartDateMSG);},
        format: 'yyyy/m/d'
    });
    const search_endDate_node = M.Datepicker.init(date02, {
        onClose: () => {dispatch(setEndDateMSG);},
        format: 'yyyy/m/d'
    });
    model = {...model, search_startDate_node, search_endDate_node};

    function dispatch(msg) {
        const [updatedModel, SFx] = updateModel(msg, model);
        model = updatedModel;
        // console.log(model);
        if(SFx) SFx.cmds.forEach(cmd => runSideEffects(cmd, dispatch, model));
        const updatedView = view(dispatch, model);
        const patches = diff(currentView, updatedView);
        rootNode = patch(rootNode, patches);
        currentView = updatedView;
    }

}

function runSideEffects(cmd, dispatch, model) {
    switch (cmd.seType) {
        case SETYPE.SHOW_ALERT: {
            const el = document.querySelector('#modal1');
            const modal = M.Modal.init(el);
            modal.open();
            break;
        }
        case SETYPE.OPEN_END_DATEPICKER: {
            model.search_endDate_node.open();
            break;
        }
        case SETYPE.OPEN_START_DATEPICKER: {
            model.search_startDate_node.open();
            break;
        }
        case SETYPE.GET_EMAILS: {
            // if(!(model.search_startDate && model.search_startDate)){
            //     dispatch(showAlertMSG('Please pick a date range to search'));
            //     break;
            // }
            if(location.protocol == 'file:') {
                // dispatch(showAlert('This demo issues GET requests to a simulated api (local \'data.json\' file) and needs to be hosted in a development server to fetch email data'));
                dispatch(updateResultsMSG(emails));
                break;
            };
            axios
                .get('./data.json')
                .then(r => dispatch(updateResultsMSG(r.data)))
                .catch(e => console.log('err', e));
            break;
        }
        case SETYPE.GET_EMAIL_BODY: {
            const {id} = cmd;
            if(location.protocol == 'file:') {
                dispatch(updateBodyMSG(emailBody.body, id));
                break;
            };
            axios
                .get('./data_body.json')
                .then(r => updateBodyMSG(emailBody.body, id))
                .catch(e => console.log('err', e));
            break;
        }
    }
}

export default app;
