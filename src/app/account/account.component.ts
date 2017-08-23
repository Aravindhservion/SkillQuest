import { Component ,ViewEncapsulation} from '@angular/core';
import {MdSidenavModule,MdGridListModule,MdAutocompleteModule,MdCardModule,MdButtonModule} from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
	
	
	constructor() {
     console.log("AccountComponent");
    }
}
