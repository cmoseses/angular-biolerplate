import {Question} from './question.model';

interface Option<T> {
    id: string;
    value: T;
}

export class DropdownQuestion<T> extends Question<T> {
    readonly controlType: string;
    options: Array<Option<T>>;

    constructor(options: {} = {}) {
        super(options);
        this.controlType = 'dropdown';
        this.options = options['options'] || [];
    }
}
