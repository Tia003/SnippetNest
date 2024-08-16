// Angular imports
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { ReactiveFormsModule } from '@angular/forms';

//Carbon imports
import { UIShellModule, ButtonModule, ThemeModule, IconModule } from 'carbon-components-angular';
import { TagModule } from 'carbon-components-angular';
import { DialogModule } from 'carbon-components-angular';
import { CodeSnippetModule } from 'carbon-components-angular';
import { SearchModule } from 'carbon-components-angular';
import { DropdownModule } from 'carbon-components-angular';
import { DatePickerModule } from 'carbon-components-angular';
import { ComboBoxModule } from 'carbon-components-angular';
import { RadioModule } from 'carbon-components-angular';
import { SelectModule } from 'carbon-components-angular';
import { TilesModule } from 'carbon-components-angular';
import { ModalModule } from 'carbon-components-angular'
import { InputModule } from 'carbon-components-angular';
import { CheckboxModule } from 'carbon-components-angular';
import { TooltipModule } from 'carbon-components-angular';
import { NotificationModule } from 'carbon-components-angular';
import { TabsModule } from 'carbon-components-angular';
import { ContextMenuModule } from 'carbon-components-angular';

// Charts Module
import { ChartsModule } from '@carbon/charts-angular';

//Services
import { Service } from './Services/service';
import { TruncateString } from './truncateString.pipe';
import { AuthService } from './Services/AuthService';
import { SnackBarService } from './Services/SnackBar.service';
import { DialogService } from './Services/Dialog.service';

//Widgets
import { SettingsComponent } from './Widgets/Settings/Settings.component';
import { ScrollOnTopPageComponent } from './Widgets/scrollOnTopPage/scrollOnTopPage.component';
import { UserComponent } from './Widgets/User/User.component';
import { SnackBarComponent } from './Widgets/SnackBar/SnackBar.component';

//Pages
import { HomeComponent } from './Pages/Home/Home.component';
import { FolderDetailComponent } from './Pages/FolderDetailsComponents/FolderDetail/FolderDetail.component';
import { LoginComponent } from './Pages/LoginComponents/LoginFrame/Login.component';
import { AccediComponent } from './Pages/LoginComponents/Accedi/Accedi.component';
import { RegistratiComponent } from './Pages/LoginComponents/Registrati/Registrati.component';
import { ForgotPasswordComponent } from './Pages/LoginComponents/ForgotPassword/ForgotPassword.component';
import { NewRepositoryComponent } from './Pages/NewRepository/NewRepository.component';

// Folder details Components
import { UtilizzoComponent } from './Pages/FolderDetailsComponents/Utilizzo/Utilizzo.component';

// Dialog

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FolderDetailComponent,
    TruncateString,
    SettingsComponent,
    ScrollOnTopPageComponent,
    LoginComponent,
    AccediComponent,
    RegistratiComponent,
    ForgotPasswordComponent,
    UserComponent,
    SnackBarComponent,
    NewRepositoryComponent,
    UtilizzoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UIShellModule,
    ButtonModule,
    ThemeModule,
    IconModule,
    TagModule,
    DialogModule,
    CodeSnippetModule,
    SearchModule,
    DropdownModule,
    FormsModule,
    DatePickerModule,
    ComboBoxModule,
    RadioModule,
    SelectModule,
    TilesModule,
    ModalModule,
    ClipboardModule,
    InputModule,
    CheckboxModule,
    TooltipModule,
    NotificationModule,
    TabsModule,
    ContextMenuModule
  ],
  providers: [
    provideClientHydration(),
    Service,
    AuthService,
    SnackBarService,
    DialogService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}