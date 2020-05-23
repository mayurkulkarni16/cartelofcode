import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  solutionName:string = '';
  Description:string = '';
  title:string = '';
  moreDescription:string = '';
  category:string = '';

  constructor( private service: HttpServiceService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(response => {
      this.solutionName = response.get('solutionName');
      this.Description = response.get('Description');
      this.title = response.get('title');
      this.moreDescription = response.get('moreDescription');
      this.category = response.get('category');
    })
  }

  onUpdate(item) {
    let updateData = {
      solutionName : this.solutionName,
      description : this.Description,
      title : this.title,
      moreDescription : this.moreDescription,
      category : this.category
    }
    this.service.updateData(updateData).subscribe(response => {
      console.log(response);
    })
    this.router.navigate(['']);
  }

}
