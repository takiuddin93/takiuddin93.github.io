import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  ids: any = "vumobile";
  constructor() { }

  ngOnInit(): void {
  }

  workplaceChange(ids: any){
    this.ids = ids;
    console.log(this.ids);
    
  }

}
