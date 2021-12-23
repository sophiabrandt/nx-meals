import { Component, Input, } from '@angular/core';

@Component({
  selector: 'nxm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input()
  title = '';

  @Input()
  visible = true;
}
