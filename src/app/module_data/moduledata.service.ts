import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {Model} from '../model/model'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ModuledataService {
	
	apiRoot:string="https://jsonplaceholder.typicode.com/posts/1";
	
	constructor(private http:Http){
		console.log("Module Data Service");
		
	}
	
	getRequest():Promise<Model>{
		
		return new Promise((resolve,reject)=>{
			this.http.get(this.apiRoot).toPromise().then(
			function(response) { 
				let model=new Model();
				Object.assign(model, response.json());
				return resolve(model);
			},
			function(response) {
				console.log("The request failed: " + response);
				reject(response);
			})
		});
	}
}
