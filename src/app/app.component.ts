import {Component, NgModule} from '@angular/core';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  pageHeader = HeaderComponent;
  pageFooter = FooterComponent;
  title = 'public';
}
