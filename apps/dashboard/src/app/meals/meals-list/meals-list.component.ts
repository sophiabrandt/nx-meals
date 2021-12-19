import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Meal } from '@nxm/api-interfaces';

@Component({
  selector: 'nxm-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealsListComponent {
  @Input()
  meals?: Meal[];
}
