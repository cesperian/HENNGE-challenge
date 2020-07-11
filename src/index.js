
// todo: 2 moderate security issues in dependencies

// import 'materialize-css/dist/css/materialize.css'

import './email.scss';
import updateModel from './update';
import view from './view';
import app from './app';

const initModel = {
    // initState: true,
    search_startDate: null,
    search_endDate: null,
    search_startDate_node: null,
    search_endDate_node: null,
    sort_on: 3,
    sort_asc: true,
    search_result: null,
    alertMessage: ''
};

window.addEventListener('DOMContentLoaded', () => {
    const rootNode = document.querySelector('#appContainer');
    app(initModel, view, rootNode, updateModel);
});
