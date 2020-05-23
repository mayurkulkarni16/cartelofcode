import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any = [];
  solutionName:string = '';
  Description:string = '';
  title:string = '';
  moreDescription:string = '';
  category:string = '';

  constructor( private service: HttpServiceService, private route: Router ) { }

  ngOnInit() {
    this.service.getAllData().subscribe(response => {
      this.data = response;
    }, error => {
      alert("Unexpected error");
    })
  }

  onUpdate(item) {
    let updateData = {
      solutionName : item.solutionName,
      Description : item.description,
      title : item.title,
      moreDescription : item.moreDescription,
      category : item.category
    }
    this.route.navigate(['/edit'], { queryParams: updateData });
  }

  onDelete(item) {
    this.service.deleteData(item.solutionName).subscribe(response => {
      this.data.splice(item.solutionName-1, 1);
    })
  }

}
