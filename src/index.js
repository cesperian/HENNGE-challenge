
// todo: 2 moderate security issues in dependencies

import 'materialize-css/dist/css/materialize.css'

// import 'email.scss';
import updateModel from './update';
import view from './view';
import app from './app';

const initModel = {
    // initState: true,
    search_startDate: null,
    search_endDate: null,
    sort_by: 0,
    search_result: null
};

window.addEventListener('DOMContentLoaded', () => {
    const rootNode = document.querySelector('#searchContainer');
    app(initModel, view, rootNode, updateModel);
});
