import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculationService } from '../calculation/calculation.service';

@Component({
  selector: 'app-calculationbuilder',
  templateUrl: './calculationbuilder.component.html',
  styleUrls: ['./calculationbuilder.component.scss']
})
export class CalculationbuilderComponent implements OnInit {

  public calculationData = [];

  constructor(
    private router: Router ,
    private calculationService: CalculationService
    ) { }

  ngOnInit(): void {
   this. getCalculation();
   this. getCalculation();
  }

  public getCalculation() {
    this.calculationService.getAll().subscribe((res) => {
      if (res){
        this.calculationData = res.body;
      }
    }, (error) => {
      console.log('error----->>', error);
    });
  }


  createCalculation(){
    this.router.navigate(['/calculate']);
  }

  edit(data: any){
    this.router.navigate(['/calculate', { id: data._id }]);
  }

}
