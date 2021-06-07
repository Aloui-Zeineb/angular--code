import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Par } from 'src/app/common/par';
import { ParService } from 'src/app/services/par.service';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-create-par',
  templateUrl: './create-par.component.html',
  styleUrls: ['./create-par.component.css']
})
export class CreateParComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private parService: ParService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });

  }

  onSubmit() {
    this.parService.createPar(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['pars']);
      });
  }

}
