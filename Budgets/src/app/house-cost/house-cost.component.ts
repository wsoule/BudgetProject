import { Component, OnInit } from '@angular/core';
import { TotHousePrice } from '../housePrice';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-house-cost',
  templateUrl: './house-cost.component.html',
  styleUrls: ['./house-cost.component.css']
})
export class HouseCostComponent implements OnInit {
  costForm: FormGroup<TotHousePrice>;
  //how to have this empty?
  // totCost: totHousePrice ={
  //   cost: 100000
  // };
  constructor() {
    this.costForm = new FormGroup({
      cost: new FormControl<number | null>(
        null,
        [
          Validators.required,
          Validators.min(5),
          Validators.max(10 ** 21)
        ]
      )
    });
   }

  ngOnInit(): void {
    
  }

  getControl(formKey: string): FormControl<any> {
    return this.costForm.get(formKey) as FormControl<any>;
  }

  getControlError(formKey: string, errorKey: string): boolean {
    const control = this.costForm.get(formKey) as FormControl<any>;
    return (control.errors && control.errors[errorKey]) != null;
  }

}