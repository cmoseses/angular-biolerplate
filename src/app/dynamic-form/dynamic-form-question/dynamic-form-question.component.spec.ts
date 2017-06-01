import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

import {DynamicFormQuestionComponent} from './dynamic-form-question.component';
import {TextboxQuestion} from './question-textbox.model';

describe('DynamicFormQuestionComponent', () => {
  let component: DynamicFormQuestionComponent;
  let fixture: ComponentFixture<DynamicFormQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormQuestionComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormQuestionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    const formGroup: FormGroup = new FormGroup({clientId23333: new FormControl('')});
    component.question = new TextboxQuestion({
      id: 'clientId23333',
      label: 'Client Id',
      value: '',
    });
    component.form = formGroup;

    expect(component).toBeDefined();
  });

  it('should return true if the form control is valid', () => {

    const formGroup: FormGroup = new FormGroup({clientId23333: new FormControl('')});
    component.question = new TextboxQuestion({
      id: 'clientId23333',
      label: 'Client Id',
      value: '',
    });
    component.form = formGroup;

    expect(component.isValid).toBeTruthy();
  });

  it('should return false if the form control is invalid', () => {
    const formGroup: FormGroup =
      new FormGroup({clientId23333: new FormControl('', Validators.required)});
    component.question = new TextboxQuestion({
      id: 'clientId23333',
      label: 'Client Id',
      value: '',
    });
    component.form = formGroup;

    expect(component.isValid).toBeFalsy();
  });
});
