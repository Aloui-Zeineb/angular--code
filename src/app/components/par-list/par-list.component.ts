import { Component, OnInit , Inject} from '@angular/core';
import { ParDetailsComponent } from './../par-details/par-details.component';
import { Observable } from "rxjs";
import { ParService } from 'src/app/services/par.service';

import { Router } from '@angular/router';
import { Par } from 'src/app/common/par';

@Component({
  selector: 'app-par-list',
  templateUrl: './par-list.component.html',
  styleUrls: ['./par-list.component.css']
})
export class ParListComponent implements OnInit {

  parsList: Par[];
 // pars:any;
 
  

  
  
  constructor(private parService: ParService,
    private router: Router) {}

    

   
  
    ngOnInit() {
      //if(!window.localStorage.getItem('token')) {
        //this.router.navigate(['login']);
        //return;
     // }
     // }getParById 
     //this.reloadData();
     this.parService.getPars().subscribe( 
           (data: Par[])=> this.parsList = data);
       
    }

    
  
    deletePar(p: Par): void {
      this.parService.deletePar(p.id)
       .subscribe( data => {
        this.parsList = this.parsList.filter(u => u !== p);
        })
    };

   
  
    editPar(par: Par): void {
      window.localStorage.removeItem("editParId");
      window.localStorage.setItem("editParId", par.id.toString());
      this.router.navigate(['edit-par']);
    };
  
    addPar(): void {
      this.router.navigate(['pars']);
    };
  }
  