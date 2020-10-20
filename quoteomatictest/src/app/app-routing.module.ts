import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { AdminComponent } from './admin/admin.component';
import { DatamanagercreateComponent } from './datamanagercreate/datamanagercreate.component';
import { DatamanagerComponent } from './datamanager/datamanager.component';
import { CalculationbuilderComponent } from './calculationbuilder/calculationbuilder.component';
import { NewquoteComponent } from './newquote/newquote.component';
import { CalculationComponent } from './calculation/calculation.component';
import { CkEditorComponent } from './ck-editor/ck-editor.component';
import { QuoteTypeManagerComponent } from './quote-type-manager/quote-type-manager.component';
import { CreateQuoteTypeComponent } from './create-quote-type/create-quote-type.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { DataToDocComponent } from './data-to-doc/data-to-doc.component';
import { QuoteTypeEntityComponent } from './create-quote-type/quote-type-entity/quote-type-entity.component';
import { QuoteGenerateComponent } from './quote-generate/quote-generate.component';

import { SupportComponent } from './support/support.component';
import { templateComponent } from './template/template.component';
import { FormComponent } from './form/form.component';
import { NewDealerComponent } from './new-dealer/new-dealer.component';
import { AccessSystemComponent } from './access-system/access-system.component';
import { NewSupplierComponent } from './new-supplier/new-supplier.component';
import { ErrorReportComponent } from './error-report/error-report.component';
import { ReviewComponent } from './review/review.component';
import { TicketScreenComponent } from './ticket-screen/ticket-screen.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  // { path: 'datamanager', component: DatamanagerComponent },
  // { path: 'calculation', component: CalculationbuilderComponent, canActivate: [AuthGuard] },
  // { path: 'newquote', component: NewquoteComponent},
  // { path: 'calculate', component: CalculationComponent },
  // { path: 'ck-editor', component: CkEditorComponent },
  // { path: 'data-to-doc', component: DataToDocComponent },
  // { path: 'quote-type-manager', component: QuoteTypeManagerComponent },
  // { path: 'quote-entity', component: QuoteTypeEntityComponent},
  // { path: 'new-quote-type', component: CreateQuoteTypeComponent  },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'form', component: FormComponent },
  {
    path: 'ticket-screen', component: TicketScreenComponent,
    children: [
      { path: 'new-dealer', component: NewDealerComponent },
      { path: 'access-system', component: AccessSystemComponent },
      { path: 'new-supplier', component: NewSupplierComponent },
      { path: 'error-report', component: ErrorReportComponent },
      { path: 'review', component: ReviewComponent },
      { path: 'ticket-list', component: TicketListComponent },
    ]
  },
  // { path: 'quote-generate', component: QuoteGenerateComponent},
  // { path: 'quote-entity', component: QuoteTypeEntityComponent},
  { path: 'service', loadChildren: () => import('./services/services.module').then(mod => mod.ServicesModule) },
  { path: 'support', loadChildren: () => import('./support/support.module').then(mod => mod.SupportModule) },
  { path: 'template', loadChildren: () => import('./template/template.module').then(mod => mod.templateModule) },
  { path: 'announcement', loadChildren: () => import('./announcement/announcement.module').then(mod => mod.AnnouncementModule) },
  { path: '', loadChildren: () => import('./template/template.module').then(mod => mod.templateModule), pathMatch: 'full' },
  { path: 'landing', loadChildren: () => import('./landing/landing.module').then(mod => mod.LandingModule) },
  { path: 'nissanleaf', loadChildren: () => import('./nissanleaf/nissanleaf.module').then(mod => mod.NissanLeafModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(mod => mod.ProductsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
