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
import { CharacterCreatorModalComponent } from './character-creator/character-creator-modal/character-creator-modal.component';
import { SearchBarComponent } from './presentational-components/search-bar/search-bar.component';
import { CharacterModalImageViewComponent } from './character-creator/character-creator-modal/character-modal-image-view/character-modal-image-view.component';
import { LoadingSpinnerComponent } from './presentational-components/loading-spinner/loading-spinner.component';
import { PaginationComponent } from './presentational-components/pagination/pagination.component';


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
    CharacterCreatorModalComponent,
    SearchBarComponent,
    CharacterModalImageViewComponent,
    LoadingSpinnerComponent,
    PaginationComponent,
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
