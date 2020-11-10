import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialComponent } from './components/social.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    SocialComponent
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    SocialComponent
  ]
})
export class SharedModule { }
