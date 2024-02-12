import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { CareersComponent } from './pages/careers/careers.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { WebComponent } from './services/web/web.component';
import { MobileComponent } from './services/mobile/mobile.component';
import { BusinessEnterpriseComponent } from './services/business-enterprise/business-enterprise.component';
import { HireAResourceComponent } from './pages/hire-a-resource/hire-a-resource.component';
import { HireAWebDeveloperComponent } from './pages/hire-a-resource/hire-a-web-developer/hire-a-web-developer.component';
import { HireAMobileDeveloperComponent } from './pages/hire-a-resource/hire-a-mobile-developer/hire-a-mobile-developer.component';
import { HireABusinessEnterpriseDeveloperComponent } from './pages/hire-a-resource/hire-a-business-enterprise-developer/hire-a-business-enterprise-developer.component';
import { MeanStackComponent } from './services/web/pages/mean-stack/mean-stack.component';
import { AngularComponent } from './services/web/pages/angular/angular.component';
import { ReactComponent } from './services/web/pages/react/react.component';
import { NodeComponent } from './services/web/pages/node/node.component';
import { PhpComponent } from './services/web/pages/php/php.component';
import { UiUxComponent } from './services/web/pages/ui-ux/ui-ux.component';
import { AndroidComponent } from './services/mobile/pages/android/android.component';
import { IosComponent } from './services/mobile/pages/ios/ios.component';
import { BlockChainComponent } from './services/business-enterprise/pages/block-chain/block-chain.component';
import { InternetOfThingsComponent } from './services/business-enterprise/pages/internet-of-things/internet-of-things.component';
import { ArtificialIntelligenceComponent } from './services/business-enterprise/pages/artificial-intelligence/artificial-intelligence.component';
import { CognitiveCloudComputingComponent } from './services/business-enterprise/pages/cognitive-cloud-computing/cognitive-cloud-computing.component';
import { EcommerceDevelopmentComponent } from './services/business-enterprise/pages/ecommerce-development/ecommerce-development.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },

	{ path: 'services/web-development', component: WebComponent },
	{ path: 'mean-stack-development', component: MeanStackComponent },
	{ path: 'angular-development', component: AngularComponent },
	{ path: 'react-development', component: ReactComponent },
	{ path: 'node-development', component: NodeComponent },
	{ path: 'ui-ux-development', component: UiUxComponent },
	{ path: 'php-development', component: PhpComponent },

	{ path: 'services/mobile', component: MobileComponent },
	{ path: 'android-development', component: AndroidComponent },
	{ path: 'ios-development', component: IosComponent },

	{ path: 'services/business-enterprise', component: BusinessEnterpriseComponent },
	{ path: 'block-chain-development', component: BlockChainComponent },
	{ path: 'internet-of-things', component: InternetOfThingsComponent },
	{ path: 'artificial-intelligence', component: ArtificialIntelligenceComponent },
	{ path: 'cognitive-cloud-computing', component: CognitiveCloudComputingComponent },
	{ path: 'ecommerce-development', component: EcommerceDevelopmentComponent },

	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },

	{ path: 'hire-a-resource', component: HireAResourceComponent },
	{ path: 'hire-web-developer', component: HireAWebDeveloperComponent },
	{ path: 'hire-mobile-developer', component: HireAMobileDeveloperComponent },
	{ path: 'hire-business-enterprise-developer', component: HireABusinessEnterpriseDeveloperComponent },
	// { path: 'careers', component: CareersComponent },
	// { path: 'privacy-policy', component: PrivacyPolicyComponent },

	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
