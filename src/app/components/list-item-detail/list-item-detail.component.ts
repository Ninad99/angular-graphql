import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-item-detail',
  templateUrl: './list-item-detail.component.html',
  styleUrls: ['./list-item-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
