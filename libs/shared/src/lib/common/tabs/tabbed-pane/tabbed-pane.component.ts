import { AfterContentInit, Component, ContentChildren, QueryList, } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'nxm-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.scss'],
})
export class TabbedPaneComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  tabQueryList: QueryList<TabComponent> | undefined;

  activeTab: TabComponent | undefined;

  get tabs(): TabComponent[] {
    return this.tabQueryList?.toArray() ?? [];
  }

  ngAfterContentInit(): void {
    if (this.tabs.length > 0) {
      this.activate(this.tabs[0]);
    }
  }

  activate(active: TabComponent): void {
    for (const tab of this.tabs) {
      tab.visible = tab === active;
    }
    this.activeTab = active;
  }

  register(tab: TabComponent) {
    this.tabs.push(tab)
  }
}
