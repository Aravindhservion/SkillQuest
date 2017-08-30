import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeadComponent} from '../head/head.component';
import {ModuledataService} from '../module_data/moduledata.service';
import {Model} from '../model/model';
@Component({
  selector: 'module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit , OnDestroy{

	constructor(private route: ActivatedRoute,private dataService:ModuledataService) {
		
		console.log("Module Component , Constructor Method Executed");
	}

	ngOnInit(){
		
		console.log("Module Component , Init Method Executed");
		
		this.route.params.subscribe(function(moduleName){
			console.log("Current Module Loaded: "+moduleName);
		});
		
		this.dataService.getRequest().then(function(retrivedData){
			console.log(retrivedData);
		}).catch(function(errorResponse){
			console.log(errorResponse);
		});
		
	}

	ngOnDestroy(){
		console.log("Module Component , Destory Method Executed");
	}
 
}
