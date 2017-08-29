import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeadComponent} from '../head/head.component';

@Component({
  selector: 'module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit , OnDestroy{

	constructor(private route: ActivatedRoute) {
		
		console.log("Module Component , Constructor Method Executed");
	}

	ngOnInit(){
		
		console.log("Module Component , Init Method Executed");
		
		this.route.params.subscribe(params => {
			console.log(params['module']);
		});
	}

	ngOnDestroy(){
		console.log("Module Component , Destory Method Executed");
	}
 
}
