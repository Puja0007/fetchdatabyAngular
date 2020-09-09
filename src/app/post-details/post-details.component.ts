import { Component, OnInit } from '@angular/core';
import { PostDetailsServiceService } from '../post-details-service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  
  public posts = [];
  constructor(private _postDetailsService: PostDetailsServiceService) { }

  ngOnInit() {
    this._postDetailsService.getPostDetails().subscribe(data => this.posts = data);
  }


}
