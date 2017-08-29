import { Component ,ViewEncapsulation} from '@angular/core';
import {MdSidenavModule,MdGridListModule,MdAutocompleteModule,MdCardModule,MdButtonModule} from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {FormControl} from '@angular/forms';
import {HeadComponent} from '../head/head.component';
import * as CryptoJS from 'crypto-js';;



@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
	
	constructor() 
	{
		console.log("TestComponent");
	 
		var ciphertext = CryptoJS.AES.encrypt('vivekanandan', 'KEY');
		var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'KEY');
		var plaintext = bytes.toString(CryptoJS.enc.Utf8);
		console.log(ciphertext.toString());
		console.log(plaintext);
    }
}
