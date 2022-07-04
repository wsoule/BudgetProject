import { Component, OnInit } from '@angular/core';
import { TotHousePrice } from '../housePrice';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-house-cost',
  templateUrl: './house-cost.component.html',
  styleUrls: ['./house-cost.component.css']
})
export class HouseCostComponent implements OnInit {
  public static defaultCost = 100000;
  public static defaultDownPercent = 20;
  public static defaultDownCost = HouseCostComponent.defaultCost * HouseCostComponent.defaultDownPercent / 100;
  costForm: FormGroup<TotHousePrice>;

  constructor() {
    this.costForm = new FormGroup({
      cost: new FormControl<number | null>(
        HouseCostComponent.defaultCost,
        [
          Validators.required,
          Validators.min(5),
          Validators.max(10 ** 21)
        ]
      ),
      dPayCost: new FormControl<number | null>(
        HouseCostComponent.defaultDownCost,
        [
          // Validators.required,
          Validators.min(0)
        ]
      ),
      dPayPercent: new FormControl<number | null>(
        HouseCostComponent.defaultDownPercent, 
        [
          // Validators.required,
          Validators.min(0),
          Validators.max(100)
        ]
      )
    });
   }

  ngOnInit(): void {
    this.costForm.get('cost')?.valueChanges.subscribe((cost) => {
      const { dPayPercent } = this.costForm.value;
      this.costForm.patchValue({
        dPayCost: this.toDollar((cost ?? 0) * (dPayPercent ?? 0) / 100)
      });
    });
    this.costForm.get('dPayPercent')?.valueChanges.subscribe((dPayPercent) => {
      const { cost } = this.costForm.value;
      this.costForm.patchValue({
        dPayCost: this.toDollar((cost ?? 0) * (dPayPercent ?? 0) / 100),
        dPayPercent
      }, {
        emitEvent: false
      });
    })
  }

  getControl(formKey: string): FormControl<any> {
    return this.costForm.get(formKey) as FormControl<any>;
  }

  getControlError(formKey: string, errorKey: string): boolean {
    const control = this.costForm.get(formKey) as FormControl<any>;
    return (control.errors && control.errors[errorKey]) != null;
  }
  toDollar(number: number):number {
    return Math.floor(number * 100)/100
  }
}