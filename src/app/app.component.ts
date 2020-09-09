import { Component } from '@angular/core';
import { PostDetailsServiceService } from './post-details-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Internship-project';
  public posts = [];
  constructor(private _postDetailsService: PostDetailsServiceService) { }

  ngOnInit() {
    this._postDetailsService.getPostDetails().subscribe(data => this.posts = data);
  }


}