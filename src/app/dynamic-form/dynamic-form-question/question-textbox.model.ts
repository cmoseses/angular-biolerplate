import {Question} from './question.model';

export class TextboxQuestion extends Question<string> {
    readonly controlType: string;
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.controlType = 'textbox';
        this.type = options['type'] || '';
    }
}
