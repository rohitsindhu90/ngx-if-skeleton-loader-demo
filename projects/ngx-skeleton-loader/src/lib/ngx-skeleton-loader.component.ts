import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'ngx-if-skeleton-loader',
  templateUrl: './ngx-if-skeleton-loader.html',
  styleUrls: ['./ngx-if-skeleton-loader.scss'],
})
export class NgxSkeletonLoaderComponent implements OnInit {
  @Input()
  count = 1;

  @Input()
  appearance = '';

  @Input() theme: { [k: string]: string } = {};

  styles: { [k: string]: any } = {};

  items: Array<any> = [];

  ngOnInit() {
    this.styles = this.theme || {};
    this.items.length = this.count;
  }
}
