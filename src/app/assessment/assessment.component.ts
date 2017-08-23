import { Component ,ViewEncapsulation} from '@angular/core';
import {MdSidenavModule,MdGridListModule,MdAutocompleteModule,MdCardModule,MdButtonModule} from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {FormControl} from '@angular/forms';
import {HeadComponent} from '../head/head.component';
@Component({
  selector: 'assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent {
	skillFormControl = new FormControl();
	options = ['Mary','Shelley','Igor'];
	
	constructor() {
     console.log("AssessmentComponent");
    }
}
