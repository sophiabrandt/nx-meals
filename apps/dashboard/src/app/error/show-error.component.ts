import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nxm-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowErrorComponent {
  @Input()
  error?: string;
}
