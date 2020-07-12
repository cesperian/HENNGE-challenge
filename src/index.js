
// todo: 2 moderate security issues in dependencies

import './email.scss';
import updateModel from './update';
import view from './view';
import app from './app';

const initModel = {
    search_startDate: null,
    search_endDate: null,
    search_startDate_node: null,
    search_endDate_node: null,
    sort_on: 'date',
    sort_asc: true,
    search_result: null,
    alertMessage: ''
};

window.addEventListener('DOMContentLoaded', () => {
    const rootNode = document.querySelector('#appContainer');
    app(initModel, view, rootNode, updateModel);
});
