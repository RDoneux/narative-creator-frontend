import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-character-bio',
  templateUrl: './character-bio.component.html',
  styleUrls: ['./character-bio.component.scss'],
})
export class CharacterBioComponent {
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: '40vh',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    showToolbar: false,
  };

  constructor() {}
}
