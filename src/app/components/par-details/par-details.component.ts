import { Component, OnInit } from '@angular/core';



import { Router, ActivatedRoute } from '@angular/router';
import { Par } from 'src/app/common/par';
import { ParService } from 'src/app/services/par.service';

@Component({
  selector: 'app-par-details',
  templateUrl: './par-details.component.html',
  styleUrls: ['./par-details.component.css']
})
export class ParDetailsComponent implements OnInit {

  id: number;
  par: Par;

  constructor(private route: ActivatedRoute,private router: Router,
    private parService: ParService) { }

  ngOnInit() {
    this.par = new Par();

    this.id = this.route.snapshot.params['id'];
    
    this.parService.getPar(this.id)
      .subscribe(data => {
        console.log(data)
        this.par = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['pars']);
  }
}
