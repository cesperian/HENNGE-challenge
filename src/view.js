import hh from 'hyperscript-helpers';
import {h} from 'virtual-dom';

import * as icon from './icons'
import {
    openStartDatePickerMSG,
    getEmailsMSG,
    getToggleEmailBody, sortColsMSG
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
            // todo; initial onclick should be length of cont? 'dead' space outside of span
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
        hasResults ? gridHeader(model, dispatch) : null,
        gridBody(model, hasResults, dispatch)
    ]);
}

function sortOn(model, id, dispatch) {
    const sortOn = model.sort_on === id;
    return {
        attributes: {
            'data-sort-on': sortOn,
            // 'data-sort-asc': model.sort_asc.toString(),
            // onclick: () => dispatch(sortColsMSG(id))
            // ...o
        },
        onclick: () => dispatch(sortColsMSG(id))
    };
}

function gridHeader(model, dispatch) {
    return div('#gridHeader', {attributes: {'data-sort-asc': model.sort_asc.toString()}}, [
        span('.from', sortOn(model, 'from', dispatch), [a(['From']), icon.arrow_solid]),
        span('.to', sortOn(model, 'to', dispatch), [a(['To']), icon.arrow_solid]),
        span('.subject', sortOn(model, 'subject', dispatch), [a(['Subject']), icon.arrow_solid]),
        span('.date', sortOn(model, 'date', dispatch), [a(['Date']), icon.arrow_solid])
        // span('.from', sortOn(model, 'from'), [a(['From']), icon.arrow_solid]),
        // span('.to', sortOn(model, 'to'), [a(['To']), icon.arrow_solid]),
        // span('.subject', sortOn(model, 'subject'), [a(['Subject']), icon.arrow_solid]),
        // span('.date', sortOn(model, 'date'), [a(['Date']), icon.arrow_solid])
    ]);
}

function gridBody(model, hasResults, dispatch){
    return div(
        `#gridBody${!hasResults ? '.empty' : ''}`,
        hasResults ? model.search_result.map(v => div('.gridRowContainer', [
            div('.gridRow', {onclick: () => dispatch(getToggleEmailBody(v.id))}, [
                icon.mail_sp,
                span('.from', [v.from]),
                span('.to', {attributes: {'data-count': v.to.length}},[v.to.join(', ')]),
                span('.subject', {attributes: {'data-attachments': v.has_attachments}}, [v.subject, v.has_attachments ? icon.paperclip : null]),
                span('.date', [v.has_attachments ? icon.paperclip : null, v.date, icon.arrow_thin]),
            ]),
            v.body ? div(
                `.body.${v.showBody ? 'show' : 'hide'}`,
                [v.body, a(
                    '.waves-effect.waves-light.btn-small',
                    {onclick: () => dispatch(getToggleEmailBody(v.id))},
                    ['Close']
                )]
            ): null // has email body
        ])) : null // has search results
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
