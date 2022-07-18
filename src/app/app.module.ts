import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { EditableTextInputComponent } from './presentational-components/editable-text-input/editable-text-input.component';
import { RoundedButtonComponent } from './presentational-components/rounded-button/rounded-button.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterThumbnailComponent } from './character-creator/character-thumbnail/character-thumbnail.component';
import { PageTitleComponent } from './presentational-components/page-title/page-title.component';
import { TextEditorComponent } from './presentational-components/text-editor/text-editor.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CharacterCreatorComponent } from './character-creator/character-creator.component';
import { ModalComponent } from './presentational-components/modal/modal.component';
import { SearchBarComponent } from './presentational-components/search-bar/search-bar.component';
import { LoadingSpinnerComponent } from './presentational-components/loading-spinner/loading-spinner.component';
import { PaginationComponent } from './presentational-components/pagination/pagination.component';
import { ImageSearchComponent } from './stateful-components/image-search/image-search.component';
import { ImageSearchDisplayComponent } from './stateful-components/image-search/image-search-display/image-search-display.component';
import { ToggleComponent } from './presentational-components/toggle/toggle.component';
import { CharacterBioComponent } from './character-creator/character-bio/character-bio.component';
import { StatisticsComponent } from './stateful-components/statistics/statistics.component';
import { StatisticsItemComponent } from './stateful-components/statistics/statistics-item/statistics-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    EditableTextInputComponent,
    RoundedButtonComponent,
    CharacterThumbnailComponent,
    PageTitleComponent,
    TextEditorComponent,
    CharacterCreatorComponent,
    ModalComponent,
    SearchBarComponent,
    LoadingSpinnerComponent,
    PaginationComponent,
    ImageSearchComponent,
    ImageSearchDisplayComponent,
    ToggleComponent,
    CharacterBioComponent,
    StatisticsComponent,
    StatisticsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//563492ad6f917000010000016e45d0e1dd39438ab078dd0dfd61c0af
