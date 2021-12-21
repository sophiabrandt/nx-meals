import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';

@Component({
  selector: 'nxm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  @Input() title = '';

  visible = true;
}
