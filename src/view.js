import hh from 'hyperscript-helpers';
import {h} from 'virtual-dom';

import * as icon from './icons'

const {div} = hh(h);

function view(dispatch, model) {
    return icon.search;
}

export default view;
