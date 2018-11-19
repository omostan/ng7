import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RestangularModule } from 'ngx-restangular';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { fakeData } from './sampleRestApi';
import { NotFoundComponent } from './not-found/not-found.component';

/**
 *
 * @param RestangularProvider is used to configure the base URL for the REST-API service
 */
export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl(fakeData());
  RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer V6vzEfEimH2PoiretEB7o0jBhp5ICk#d'});
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RoutingComponents,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // import RestangularModule and use the exported RestangularConfigFactory
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

