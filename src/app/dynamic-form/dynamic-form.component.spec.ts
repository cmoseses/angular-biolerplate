import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {EventEmitter} from '@angular/core';

import {DynamicFormComponent} from './dynamic-form.component';
import {DynamicFormQuestionComponent} from './dynamic-form-question/dynamic-form-question.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TextboxQuestion} from './dynamic-form-question/question-textbox.model';
import {Question} from './dynamic-form-question/question.model';
import {DropdownQuestion} from './dynamic-form-question/question-dropdown.model';
import {Subject} from 'rxjs/Subject';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;
  const questions: Array<Question<any>> = [
    new DropdownQuestion({
      id: 'grantType',
      label: 'Grant Type',
      value: 'catalog',
      options: [
        {key: 'catalog2', value: 'catalog2'},
        {key: 'catalog', value: 'catalog'},
        {key: 'unproven', value: 'Unproven'}
      ],
    }),
    new DropdownQuestion({
      id: 'grantType2',
      label: 'Grant Type',
      value: 'catalog2',
      options: [
        {key: 'catalog2', value: 'catalog2'},
        {key: 'catalog', value: 'catalog'},
        {key: 'unproven', value: 'Unproven'}
      ],
    }),

    new TextboxQuestion({
      id: 'clientId',
      label: 'Client Id',
      value: '123123',
      required: true,
    })
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormComponent, DynamicFormQuestionComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    component.questions = questions;
    component.formValue = new EventEmitter<any>();
    component.submit = new Subject<any>();
    component.formValue.subscribe();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should create a `FormControl` for each question', () => {
    expect(Object.keys(component.form.controls)).toEqual([
      'grantType', 'grantType2', 'clientId'
    ]);
  });

  it('should create 2 dropdown select', () => {
    expect(fixture.debugElement.queryAll(By.css('select')).length).toBeGreaterThanOrEqual(2);
  });

  it('should emit value on click', () => {
    spyOn(component.formValue, 'emit');
    const button: any = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formValue.emit).toHaveBeenCalledWith({
        grantType: 'catalog', clientId: '123123', grantType2: 'catalog2'
      });
    });
  });

  it('should know invalid question if empty', () => {
    component.questions = [
      new TextboxQuestion({
        id: 'clientId',
        label: 'Client Id',
        value: '',
        required: true,
      })
    ];
    component.form.controls['clientId'].setValue('');
    fixture.detectChanges();

    expect(component.form.valid).toBeFalsy();
  });
});
