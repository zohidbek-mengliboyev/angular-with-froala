import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Content } from './../Content';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detailspost',
  templateUrl: './detailspost.component.html',
  styleUrls: ['./detailspost.component.scss']
})
export class DetailspostComponent implements OnInit {
  res: any;

  constructor(private route: ActivatedRoute, private contentservice: ContentService) { }

  ngOnInit(): void {
    let Id = this.route.snapshot.queryParams["Id"]
    this.GetcontentById(Id);
  }

  GetcontentById(Id:number)
  {
     this.contentservice.getContentById(Id).subscribe((data: any)=>{
      this.res=data;
    });
  }

}
