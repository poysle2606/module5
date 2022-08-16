import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  like = 0;
  // type = '';
  //
  // getType(type) {
  //   this.type = type
  // }

  constructor() {
  }

  ngOnInit() {
  }

  likeThis() {
    this.like++;
  }
}
