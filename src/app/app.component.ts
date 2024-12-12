import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { NotificationComponent } from './components/notification/notification.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
    NotificationComponent,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'YOUR_GOOGLE_CLIENT_ID'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {}
