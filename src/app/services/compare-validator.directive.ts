import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Key } from 'protractor';

@Directive({
  selector: '[CompareValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CompareValidatorDirective,
    multi: true
  }]
})

export class CompareValidatorDirective implements Validator{

  constructor() { }
  @Input() CompareValidator: string;
  validate(control: AbstractControl): {[key: string]: any} | null{
    const controlToCompare = control.parent.get(this.CompareValidator);
    if(controlToCompare.value !== control.value){
      return { 'notEqual': true};
    }
    return null;
  }
}