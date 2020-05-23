import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  constructor( private service: HttpServiceService, private route: ActivatedRoute ) { }

  ngOnInit() {
  }

}
