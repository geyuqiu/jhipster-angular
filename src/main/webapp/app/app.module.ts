import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { LfiErfassungBackendSharedModule } from 'app/shared/shared.module';
import { LfiErfassungBackendCoreModule } from 'app/core/core.module';
import { LfiErfassungBackendAppRoutingModule } from './app-routing.module';
import { LfiErfassungBackendHomeModule } from './home/home.module';
import { LfiErfassungBackendEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    LfiErfassungBackendSharedModule,
    LfiErfassungBackendCoreModule,
    LfiErfassungBackendHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    LfiErfassungBackendEntityModule,
    LfiErfassungBackendAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class LfiErfassungBackendAppModule {}
