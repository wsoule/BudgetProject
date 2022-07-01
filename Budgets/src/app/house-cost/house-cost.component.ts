import { Component, OnInit } from '@angular/core';
import { totHousePrice } from '../housePrice';
// import {Form, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
// import {ErrorStateMatcher} from '@angular/material/core';

// export class MyErrorStateMatcher implements ErrorStateMatcher{
//   ifErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean{
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-house-cost',
  templateUrl: './house-cost.component.html',
  styleUrls: ['./house-cost.component.css']
})
export class HouseCostComponent implements OnInit {
  totCost: totHousePrice ={
    cost: 1234,
  };
  constructor() { }

  ngOnInit(): void {
    
  }

}
