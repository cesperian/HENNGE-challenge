
// todo: 2 moderate security issues in dependencies

import 'materialize-css/dist/css/materialize.css'

import './email.scss';
import updateModel from './update';
import view from './view';
import app from './app';

const initModel = {
    // initState: true,
    search_startDate: null,
    search_endDate: null,
    sort_on: 3,
    sort_asc: true,
    search_result: [
        {
            "id": 8,
            "has_attachments": true,
            "from": "hhh@example.com",
            "to": ["ooo@example.com","ooo02@example.com"],
            "subject": "Workplace Summary for sample, Inc.: Jun 2 - Jun 9",
            "date": "Jan 01"
        },
        {
            "id": 9,
            "has_attachments": true,
            "from": "iii@example.com",
            "to": ["nnn@example.com"],
            "subject": "I love you",
            "date": "2019/12/31"
        },
        {
            "id": 10,
            "has_attachments": false,
            "from": "Pablo-Diego01@example.com",
            "to": ["Pablo-Diego02@example.com"],
            "subject": "[info:888] ABC EQUIPMENT COMPANY",
            "date": "2019/12/31"
        }
    ]
};

window.addEventListener('DOMContentLoaded', () => {
    const rootNode = document.querySelector('#appContainer');
    app(initModel, view, rootNode, updateModel);
});
