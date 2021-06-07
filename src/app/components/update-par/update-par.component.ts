
import { Component, OnInit } from '@angular/core';


import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";


import { ActivatedRoute, Router } from '@angular/router';

import { ParService } from 'src/app/services/par.service';
import { Par } from 'src/app/common/par';

@Component({
  selector: 'app-update-par',
  templateUrl: './update-par.component.html',
  styleUrls: ['./update-par.component.css']
})
export class UpdateParComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private parService: ParService) { }
  par: Par;
  editForm: FormGroup;
 

  ngOnInit() {
    let parId = window.localStorage.getItem("editParId");
    if(!parId) {
      alert("Invalid action.")
      this.router.navigate(['list-par']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      
    });
    this.parService.getParById(+parId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.parService.updatePar(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('par updated successfully.');
            this.router.navigate(['add']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}