import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { TranslatorModule } from './translator/translator.module';
import { AppComponent } from './app.component';
import { DatamanagerComponent } from './datamanager/datamanager.component';
import { HeaderModule } from './header/header.module';
import { templateModule } from './template/template.module';
import { FooterModule } from './footer/footer.module';
import { AdminModule } from './admin/admin.module';
import { DatamanagercreateModule } from './datamanagercreate/datamanagercreate.module';
import { FileUploadModule } from 'ng2-file-upload';
import { CalculationComponent } from './calculation/calculation.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewquoteModule } from './newquote/newquote.module';
import { CkEditorModule } from './ck-editor/ck-editor.module';
import { QuoteTypeManagerComponent } from './quote-type-manager/quote-type-manager.component';
import { CreateQuoteTypeModule } from './create-quote-type/create-quote-type.module';
import { AuthorizationComponent } from './authorization/authorization.component';
import { CalculationbuilderComponent } from './calculationbuilder/calculationbuilder.component';
import { DataToDocComponent } from './data-to-doc/data-to-doc.component';
import {QuoteGenerateComponent} from './quote-generate/quote-generate.component';
import { FormComponent } from './form/form.component';
import { NewDealerComponent } from './new-dealer/new-dealer.component';
import { AccessSystemComponent } from './access-system/access-system.component';
import { NewSupplierComponent } from './new-supplier/new-supplier.component';
import { ErrorReportComponent } from './error-report/error-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReviewComponent } from './review/review.component';
import { TicketScreenComponent } from './ticket-screen/ticket-screen.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [
    AppComponent,
    DatamanagerComponent,
    CalculationComponent,
    QuoteTypeManagerComponent,
    AuthorizationComponent,
    CalculationbuilderComponent,
    DataToDocComponent,
    QuoteGenerateComponent,
    FormComponent,
    NewDealerComponent,
    AccessSystemComponent,
    NewSupplierComponent,
    ErrorReportComponent,
    ReviewComponent,
    TicketScreenComponent,
    TicketListComponent,
],
  imports: [
    DatamanagercreateModule,
    FormsModule,
    CreateQuoteTypeModule,
    HttpClientModule,
    CkEditorModule,
    UserModule,
    HomeModule,
    NgxSpinnerModule,
    SignupModule,
    LoginModule,
    BrowserModule,
    AppRoutingModule,
    TranslatorModule,
    HeaderModule,
    templateModule,
    FooterModule,
    AdminModule,
    FileUploadModule,
    AgGridModule.withComponents([]),
    FormsModule,
    ReactiveFormsModule,
    NewquoteModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

