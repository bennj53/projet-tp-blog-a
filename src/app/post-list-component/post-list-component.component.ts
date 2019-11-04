import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() items: any;

  constructor() {
  }

  ngOnInit() {
    this.getItems();
    console.log(this.items);

  }

  getItems() {
    this.items.forEach(element => {
      console.log(element);
    });
  }

}
