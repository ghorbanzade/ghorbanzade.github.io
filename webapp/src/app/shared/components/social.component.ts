import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { faCalendarAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'gio-social',
  templateUrl: './social.component.html'
})
export class SocialComponent {

  faTwitter = faTwitter;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(faCalendarAlt, faEnvelope, faGithub, faLinkedin, faTwitter);
  }

}
