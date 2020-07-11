import hh from 'hyperscript-helpers';
import {h} from 'virtual-dom';

import * as icon from './icons'
import {
    openStartDatePickerMSG,
    getEmailsMSG
} from "./update";

const {div, span, a, input} = hh(h);

function view(dispatch, model) {
    return div([
        emailSearch(dispatch, model),
        emailResults(dispatch, model),
        alert(model)
    ]);
}

function alert(model) {
    return div('#modal1.modal', [
        div('.modal-content', [model.alertMessage]),
        div('.modal-footer', [
            a('.modal-close.waves-effect.waves-green.btn-flat', ['Ok'])
        ])
    ]);
}

function emailSearch(dispatch, model) {
    const displayDate =  model.search_endDate && model.search_startDate ? `${model.search_startDate} - ${model.search_endDate}` : 'Pick a date range';
    return div('#searchContainer', //{
        // attributes: {
            // 'data-date-range': model.search_endDate ? `${model.search_startDate} - ${model.search_endDate}` : '',
            // onclick: (e) => dispatch(openStartDatePickerMSG(e))
        // }},
        [
        div(
            '.icon-search',
            {onclick: () => dispatch(getEmailsMSG)},
            [icon.search]
        ),
        div(
            '.icon-calendar',
            {onclick: () => dispatch(openStartDatePickerMSG)},
            [icon.calendar]
        ),
        span(
            '.displayDate',
            {onclick: () => dispatch(openStartDatePickerMSG)},
            [displayDate]
        ),
        input('#date01', {type:'hidden'}),
        input('#date02', {type:'hidden'})
    ]);
}

function emailResults(dispatch, model) {
    const hasResults = (model.search_result && model.search_result.length > 0);
    return div('#resultsContainer', [
        resultCounter(model),
        hasResults ? gridHeader(model) : null,
        gridBody(model, hasResults)
    ]);
}

function sortOn(model, i, o) {
    const sortOn = (model.sort_on === i).toString();
    return {attributes: {'data-sort-on': sortOn, 'data-sort-asc': model.sort_asc.toString(), ...o}};
}

function gridHeader(model) {
    return div('#gridHeader', [
        span('.from', sortOn(model, 0), [a(['From']), icon.arrow_solid]),
        span('.to', sortOn(model, 1), [a(['To']), icon.arrow_solid]),
        span('.subject', sortOn(model, 2), [a(['Subject']), icon.arrow_solid]),
        span('.date', sortOn(model, 3), [a(['Date']), icon.arrow_solid])
    ]);
}

function gridBody(model, hasResults){
    return div(
        `#gridBody${!hasResults ? '.empty' : ''}`,
        hasResults ? model.search_result.map(v => div('.gridRowContainer', [
                div('.gridRow', [
                span('.from', [v.from]),
                span('.to', {attributes: {'data-count': v.to.length}},[v.to.join(', ')]),
                span('.subject', {attributes: {'data-attachments': v.has_attachments}}, [v.subject, v.has_attachments ? icon.paperclip : null]),
                span('.date', [v.date]),
            ]),
            v.body ? div('.body', [v.body]): null
        ])) : null
    );
}


function resultCounter(model) {
    if (model.search_result != null) return div('#resultCounter', [
        'Results: ',
        span([model.search_result.length]),
        ' mail(s)'
    ]);
    return null;
}



export default view;
