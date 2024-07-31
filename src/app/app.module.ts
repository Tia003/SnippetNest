import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

//Pages
import { HomeComponent } from './Pages/Home/Home.component';
import { FolderDetailComponent } from './Pages/FolderDetail/FolderDetail.component';
import { LoginComponent } from './Pages/Login/Login.component';

//Widgets
import { SettingsComponent } from './Widgets/Settings/Settings.component';
import { ScrollOnTopPageComponent } from './Widgets/scrollOnTopPage/scrollOnTopPage.component';
import { UserComponent } from "./Widgets/User/User.component";

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

//Services
import { Service } from './Services/service';
import { TruncateString } from './truncateString.pipe';
import { AuthService } from './Services/AuthService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FolderDetailComponent,
    TruncateString,
    SettingsComponent,
    ScrollOnTopPageComponent,
    LoginComponent,
    UserComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    CheckboxModule
  ],
  providers: [
    provideClientHydration(),
    Service,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
