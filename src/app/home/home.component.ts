import { Component, OnInit } from '@angular/core';
import { PostDetailsServiceService } from '../post-details-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts = [];
  constructor(private _postDetailsService: PostDetailsServiceService) { }

  ngOnInit() {
    this._postDetailsService.getPostDetails().subscribe(data => this.posts = data);
  }

}
