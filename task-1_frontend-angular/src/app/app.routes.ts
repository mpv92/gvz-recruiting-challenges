import { Routes } from '@angular/router';

import { CardDemo } from './demo/card-demo/card-demo';
import { NumberInputDemo } from './demo/number-input-demo/number-input-demo';
import { SelectDemo } from './demo/select-demo/select-demo';
import { TextInputDemo } from './demo/text-input-demo/text-input-demo';
import {PostaddressDemo} from './demo/postaddress-demo/postaddress-demo';

export const routes: Routes = [
  {
    path: 'select',
    component: SelectDemo,
    data: { title: 'Auswahl' },
  },
  {
    path: 'card',
    component: CardDemo,
    data: { title: 'Karte' },
  },
  {
    path: 'text-input',
    component: TextInputDemo,
    data: { title: 'Texteingabe' },
  },
  {
    path: 'number-input',
    component: NumberInputDemo,
    data: { title: 'Zahleingabe' },
  },
  {
    path: 'post-address',
    component: PostaddressDemo,
    data: { title: 'Adresse hinzufügen' },
  },
  { path: '**', redirectTo: '/card' },
];
