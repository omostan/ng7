//#region Copyright

/*****************************************************************************************
*                                     ______________________________________________     *
*                              o O   |                                              |    *
*                     (((((  o      <                     LicDB                     |    *
*                    ( o o )         |______________________________________________|    *
* ------------oOOO-----(_)-----OOOo----------------------- http://10.2.169.55:84 ------- *
*                Name: app.modules.ts                                                    *
*              Author: Stanley Omoregie                                                  *
*     Completion date: 06.09.2016                                                        *
*       Modified date: 28.10.2017                                                        *
*  Last Modified date: 08.08.2018                                                        *
*           CopyRight: @2016 Novomatic Gaming Industries GmbH                            *
*                  .oooO  Oooo.                                                          *
*                  (   )  (   )                                                          *
* ------------------\ (----) /---------------------------------------------------------- *
*                    \_)  (_/                                                            *
*****************************************************************************************/

//#endregion Copyright
//#region imports 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RestangularModule } from 'ngx-restangular';
import { GLOBAL_ServerAddress } from './app.settings';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './partials/nav/nav.component';
import { NotFoundComponent } from './partials/not-found/not-found.component';
import { FooterComponent } from './partials/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//#endregion imports

//#region RestangularConfigFactory 

/**
 *
 * @param RestangularProvider is used to configure the base URL for the REST-API service
 */
export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl(GLOBAL_ServerAddress.value);
  RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer V6vzEfEimH2PoiretEB7o0jBhp5ICk#d'});
}

//#endregion RestangularConfigFactory

//#region Register modules, imports and providers 

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RoutingComponents,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // import RestangularModule and use the exported RestangularConfigFactory
    RestangularModule.forRoot(RestangularConfigFactory),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

//#endregion  Register modules, imports and providers 

export class AppModule { }

