import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { NgIconsModule } from '@ng-icons/core';
import {
  BootstrapCalendar3,
  BootstrapEnvelope,
  BootstrapGithub,
  BootstrapLinkedin,
  BootstrapTwitter,
} from '@ng-icons/bootstrap-icons';

import { SocialComponent } from './components/social.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    NgIconsModule.withIcons({
      BootstrapCalendar3,
      BootstrapEnvelope,
      BootstrapGithub,
      BootstrapLinkedin,
      BootstrapTwitter,
    }),
  ],
  declarations: [SocialComponent],
  exports: [CommonModule, MarkdownModule, NgIconsModule, SocialComponent],
})
export class SharedModule {}
