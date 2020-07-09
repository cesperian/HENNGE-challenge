
// import * as M from "materialize-css";

import { diff, patch } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';
const axios = require('axios').default;
// const querystring = require('querystring');

function app(initModel, view, node, updateModel) {
    let model = initModel;
    let currentView = view(dispatch, initModel);
    let rootNode = createElement(currentView);

    node.appendChild(rootNode);

    function dispatch(msg) {
        model = updateModel(msg, model);
        const updatedView = view(dispatch, model);
        const patches = diff(currentView, updatedView);
        rootNode = patch(rootNode, patches);
        currentView = updatedView;
    }

}

export default app;
