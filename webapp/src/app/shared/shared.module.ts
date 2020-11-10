import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarkdownModule } from 'ngx-markdown';
import { SocialComponent } from './components/social.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  declarations: [
    SocialComponent
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    MarkdownModule,
    SocialComponent
  ]
})
export class SharedModule { }
