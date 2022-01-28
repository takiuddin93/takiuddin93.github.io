import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  ids: any = "vumobile";
  vumobile = "2px solid #C6C6C4";
  asiaticjwt = "2px solid #C6C6C4";
  axionesl = "2px solid #C6C6C4";
  grameenphone = "2px solid #C6C6C4";
  constructor() { }

  ngOnInit(): void {
  }

  workplaceChange(ids: any){
    this.ids = ids;
    if(ids == "vumobile"){
      this.vumobile = "4px solid #E88073";
      this.asiaticjwt = "2px solid #C6C6C4";
      this.axionesl = "2px solid #C6C6C4";
      this.grameenphone = "2px solid #C6C6C4";
    } else if(ids == "asiaticjwt"){
      this.vumobile = "2px solid #C6C6C4";
      this.asiaticjwt = "4px solid #E88073";
      this.axionesl = "2px solid #C6C6C4";
      this.grameenphone = "2px solid #C6C6C4";
    } else if(ids == "axionesl"){
      this.vumobile = "2px solid #C6C6C4";
      this.asiaticjwt = "2px solid #C6C6C4";
      this.axionesl = "4px solid #E88073";
      this.grameenphone = "2px solid #C6C6C4";
    } else if(ids == "grameenphone"){
      this.vumobile = "2px solid #C6C6C4";
      this.asiaticjwt = "2px solid #C6C6C4";
      this.axionesl = "2px solid #C6C6C4";
      this.grameenphone = "4px solid #E88073";
    }
    
  }

}
