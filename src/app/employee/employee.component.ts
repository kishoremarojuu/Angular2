import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-employee',
  templateUrl: '/employee.component.html'
  //styles: [`h1 { font-family: Lato; }`]

  
})
export class EmployeeComponent  {
   firstName : string = "Kishore";
  lastName : string = "Maroju";
  gender : string = "Male";
  age : number =27;

}

