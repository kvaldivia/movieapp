import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { PopularPage } from '../popular/popular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PopularPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
