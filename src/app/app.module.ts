import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MaterialModule } from './modules/material/material.module';
import { CareersComponent } from './pages/careers/careers.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WebComponent } from './services/web/web.component';
import { MobileComponent } from './services/mobile/mobile.component';
import { BusinessEnterpriseComponent } from './services/business-enterprise/business-enterprise.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeSectionOneComponent } from './pages/home/sections/home-section-one/home-section-one.component';
import { HomeSectionTwoComponent } from './pages/home/sections/home-section-two/home-section-two.component';
import { HomeSectionThreeComponent } from './pages/home/sections/home-section-three/home-section-three.component';
import { HomeSectionFourComponent } from './pages/home/sections/home-section-four/home-section-four.component';
import { HomeSectionFiveComponent } from './pages/home/sections/home-section-five/home-section-five.component';
import { HireAResourceComponent } from './pages/hire-a-resource/hire-a-resource.component';
import { HireAWebDeveloperComponent } from './pages/hire-a-resource/hire-a-web-developer/hire-a-web-developer.component';
import { HireAMobileDeveloperComponent } from './pages/hire-a-resource/hire-a-mobile-developer/hire-a-mobile-developer.component';
import { HireABusinessEnterpriseDeveloperComponent } from './pages/hire-a-resource/hire-a-business-enterprise-developer/hire-a-business-enterprise-developer.component';
import { MeanStackComponent } from './services/web/pages/mean-stack/mean-stack.component';
import { AngularComponent } from './services/web/pages/angular/angular.component';
import { ReactComponent } from './services/web/pages/react/react.component';
import { PhpComponent } from './services/web/pages/php/php.component';
import { NodeComponent } from './services/web/pages/node/node.component';
import { BlockChainComponent } from './services/business-enterprise/pages/block-chain/block-chain.component';
import { UiUxComponent } from './services/web/pages/ui-ux/ui-ux.component';
import { InternetOfThingsComponent } from './services/business-enterprise/pages/internet-of-things/internet-of-things.component';
import { ArtificialIntelligenceComponent } from './services/business-enterprise/pages/artificial-intelligence/artificial-intelligence.component';
import { CognitiveCloudComputingComponent } from './services/business-enterprise/pages/cognitive-cloud-computing/cognitive-cloud-computing.component';
import { EcommerceDevelopmentComponent } from './services/business-enterprise/pages/ecommerce-development/ecommerce-development.component';
import { AndroidComponent } from './services/mobile/pages/android/android.component';
import { IosComponent } from './services/mobile/pages/ios/ios.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CareersComponent,
    PrivacyPolicyComponent,
    PageNotFoundComponent,
    WebComponent,
    MobileComponent,
    BusinessEnterpriseComponent,
    SidenavComponent,
    HomeSectionOneComponent,
    HomeSectionTwoComponent,
    HomeSectionThreeComponent,
    HomeSectionFourComponent,
    HomeSectionFiveComponent,
    HireAResourceComponent,
    HireAWebDeveloperComponent,
    HireAMobileDeveloperComponent,
    HireABusinessEnterpriseDeveloperComponent,
    MeanStackComponent,
    AngularComponent,
    ReactComponent,
    PhpComponent,
    NodeComponent,
    BlockChainComponent,
    UiUxComponent,
    InternetOfThingsComponent,
    ArtificialIntelligenceComponent,
    CognitiveCloudComputingComponent,
    EcommerceDevelopmentComponent,
    AndroidComponent,
    IosComponent,
    ContactFormComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
