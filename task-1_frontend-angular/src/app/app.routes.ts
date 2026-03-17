import { Routes } from '@angular/router';

import { AddressInputDemo } from './demo/address-input-demo/address-input-demo';
import { CardDemo } from './demo/card-demo/card-demo';
import { NumberInputDemo } from './demo/number-input-demo/number-input-demo';
import { SelectDemo } from './demo/select-demo/select-demo';
import { TextInputDemo } from './demo/text-input-demo/text-input-demo';

export const routes: Routes = [
  {
    path: 'select',
    component: SelectDemo,
    data: { section: 'parts', title: 'Auswahl' },
  },
  {
    path: 'card',
    component: CardDemo,
    data: { section: 'parts', title: 'Karte' },
  },
  {
    path: 'text-input',
    component: TextInputDemo,
    data: { section: 'parts', title: 'Texteingabe' },
  },
  {
    path: 'number-input',
    component: NumberInputDemo,
    data: { section: 'parts', title: 'Zahleingabe' },
  },
  {
    path: 'address-input',
    component: AddressInputDemo,
    data: { section: 'combined', title: 'Postadresse' },
  },
  { path: '**', redirectTo: '/card' },
];
