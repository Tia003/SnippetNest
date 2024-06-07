import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//Pages
import { HomeComponent } from './Pages/Home/Home.component';
import { FolderDetailComponent } from './Pages/FolderDetail/FolderDetail.component';

//Widgets
import { SettingsComponent } from './Widgets/Settings/Settings.component';
import { ScrollOnTopPageComponent } from './Widgets/scrollOnTopPage/scrollOnTopPage.component';

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

//Services
import { Service } from './service';
import { TruncateString } from './truncateString.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FolderDetailComponent,
    TruncateString,
    SettingsComponent,
    ScrollOnTopPageComponent
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
    TilesModule
  ],
  providers: [
    provideClientHydration(),
    Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
