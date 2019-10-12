import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { LaunchItemDetailsGQL } from '../../services/spacexGraphql.service';

@Component({
  selector: 'app-list-item-detail',
  templateUrl: './list-item-detail.component.html',
  styleUrls: ['./list-item-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemDetailComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchDetailsService: LaunchItemDetailsGQL
  ) { }

  launchDetails$ = this.route.paramMap.pipe(
    map((params) => params.get('id') as string),
    switchMap((id) => this.launchDetailsService.fetch({ id })),
    map((res) => res.data.launch)
  );

  ngOnInit() {
  }

}
