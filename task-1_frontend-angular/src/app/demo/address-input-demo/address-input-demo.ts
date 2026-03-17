import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Card } from '../../parts/card/card';
import { NumberInput } from '../../parts/number-input/number-input';
import { Select } from '../../parts/select/select';
import { TextInput } from '../../parts/text-input/text-input';

@Component({
  selector: 'app-address-input-demo',
  imports: [Card, NumberInput, ReactiveFormsModule, Select, TextInput],
  templateUrl: './address-input-demo.html',
  styleUrl: './address-input-demo.scss',
})
export class AddressInputDemo {
  protected salutationOptions = [
    { label: 'Frau', value: 1 },
    { label: 'Herr', value: 2 },
    { label: 'Divers', value: 3 },
  ];
  protected countryOptions = [
    { label: 'Schweiz', value: 'ch' },
    { label: 'Deutschland', value: 'de' },
    { label: 'Österreich', value: 'at' },
  ];

  protected salutationFormControl = new FormControl<number | null>(null, [Validators.required]);
  protected firstNameFormControl = new FormControl<string | null>('', [
    Validators.required,
    Validators.maxLength(50),
  ]);
  protected lastNameFormControl = new FormControl<string | null>('', [
    Validators.required,
    Validators.maxLength(50),
  ]);
  protected streetFormControl = new FormControl<string | null>('', [
    Validators.required,
    Validators.maxLength(80),
  ]);
  protected houseNumberFormControl = new FormControl<string | null>('', [
    Validators.required,
    Validators.maxLength(10),
    Validators.pattern(/^[0-9A-Za-z][0-9A-Za-z/ -]*$/),
  ]);
  protected postalCodeFormControl = new FormControl<string | null>('', [
    Validators.required,
    Validators.maxLength(10),
    Validators.pattern(/^[0-9A-Za-z][0-9A-Za-z -]*$/),
  ]);
  protected cityFormControl = new FormControl<string | null>('', [
    Validators.required,
    Validators.maxLength(80),
  ]);
  protected floorFormControl = new FormControl<number | null>(null, [
    Validators.min(-5),
    Validators.max(200),
  ]);
  protected countryFormControl = new FormControl<string | null>(null, [Validators.required]);

  protected addressForm = new FormGroup({
    salutation: this.salutationFormControl,
    firstName: this.firstNameFormControl,
    lastName: this.lastNameFormControl,
    street: this.streetFormControl,
    houseNumber: this.houseNumberFormControl,
    postalCode: this.postalCodeFormControl,
    city: this.cityFormControl,
    floor: this.floorFormControl,
    country: this.countryFormControl,
  });
}
