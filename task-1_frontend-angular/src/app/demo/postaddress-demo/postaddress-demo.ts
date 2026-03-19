import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {PartDemo} from '../part-demo';
import {NumberInput} from '../../parts/number-input/number-input';
import {Select} from '../../parts/select/select';
import {TextInput} from '../../parts/text-input/text-input';
import {Card} from '../../parts/card/card';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-number-input-demo',
  imports: [NumberInput, ReactiveFormsModule, Select, TextInput, PartDemo],
  templateUrl: './postaddress-demo.html',
  styleUrls: ['./postaddress-demo.scss', '../part-demo-common.scss'],
})
export class PostaddressDemo {
  protected label = 'Postadresse';
  protected description = [
    'Eingabe von Zahlen.',
    'Ein minimaler und maximaler Wert kann festgelegt werden.',
  ];
  protected parameters = [
    {name: 'Label', valueRange: '<Text>', required: true},
    {name: 'Minimum', valueRange: '<Zahl>', required: false},
    {name: 'Maximum', valueRange: '<Zahl>', required: false},
  ];

  protected genderOptions = [
    {label: 'Frau', value: 'w'},
    {label: 'Herr', value: 'm'},
    {label: 'Divers', value: '*'},
  ];

  protected countryOptions = [
    {label: 'Schweiz', value: 'ch'},
    {label: 'Deutschland', value: 'de'},
  ];

  protected genderFormcontrol = new FormControl<string | null>(null, [
    Validators.required
  ]);
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

  protected postAddressForm = new FormGroup({
    salutation: this.genderFormcontrol,
    firstName: this.firstNameFormControl,
    lastName: this.lastNameFormControl,
    street: this.streetFormControl,
    houseNumber: this.houseNumberFormControl,
    postalCode: this.postalCodeFormControl,
    city: this.cityFormControl,
    floor: this.floorFormControl,
    country: this.countryFormControl,
  });


  protected apiSuccessMessage = '';
  protected apiErrorMessage = '';

  constructor(private http: HttpClient) {
  }

  onSubmit() {
    this.apiSuccessMessage = '';
    this.apiErrorMessage = '';
    if (this.postAddressForm.invalid) {
      this.apiErrorMessage = 'Bitte Formular korrekt ausfüllen.';
      this.postAddressForm.markAllAsTouched();
      return;
    }

    const payload = this.postAddressForm.value;

    //dummy api call
    this.http.post<any>('https://dummyjson.com/c/19ab-858a-44a8-90e1', payload)
      .subscribe({
        next: (res) => {
          if (res?.status === 200 && res?.message === 'success') {
            this.apiSuccessMessage = 'Adresse erfolgreich gespeichert.';
          } else {
            this.apiErrorMessage = 'Unerwartete Antwort der API.';
          }
        },
        error: () => {
          this.apiErrorMessage = 'Fehler beim Speichern.';
        }
      });
  }
}
