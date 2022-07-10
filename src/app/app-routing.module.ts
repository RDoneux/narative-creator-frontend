import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCreatorComponent } from './character-creator/character-creator.component';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  {path: 'components', component: ComponentsComponent},
  {path: 'characters', component: CharacterCreatorComponent},
  {path: '**', redirectTo: '/components'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
