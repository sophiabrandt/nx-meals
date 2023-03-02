import { Component, Input } from '@angular/core';
import { TabbedPaneComponent } from '../tabbed-pane/tabbed-pane.component';

@Component({
  selector: 'nxm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input() title = '';

  visible = true;

  constructor(pane: TabbedPaneComponent) {
    console.log('pane ', pane);
    pane.register(this);
  }
}
