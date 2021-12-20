import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nxm-show-loading',
  templateUrl: './show-loading.component.html',
  styleUrls: ['./show-loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowLoadingComponent {
}
