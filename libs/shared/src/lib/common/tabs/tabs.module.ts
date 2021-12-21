import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { TabbedPaneComponent } from './tabbed-pane/tabbed-pane.component';

@NgModule({
  declarations: [TabbedPaneComponent, TabComponent],
  imports: [CommonModule],
  exports: [TabbedPaneComponent, TabComponent],
})
export class TabsModule {
}
