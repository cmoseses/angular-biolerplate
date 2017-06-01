export class Question<T> {
  value: T;
  id: string;
  label: string;
  required: boolean;
  controlType: string;

  constructor(options: {
    value?: T,
    id?: string,
    label?: string,
    required?: boolean,
    controlType?: string
  } = {}) {
    this.value = options.value;
    this.id = options.id || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.controlType = options.controlType || '';
  }
}
