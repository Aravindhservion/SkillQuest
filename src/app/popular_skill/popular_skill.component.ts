import { Component } from '@angular/core';
import {MdSidenavModule,MdGridListModule} from '@angular/material';
@Component({
  selector: 'popular_skill',
  templateUrl: './popular_skill.component.html',
  styleUrls: ['./popular_skill.component.css']
})
export class PopularskillComponent {
	
	constructor(){
		console.log("PopularskillComponent");
	}
}
