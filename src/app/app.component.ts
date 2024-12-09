import { Component } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterOutlet } from "@angular/router";
import { NotificationComponent } from "./components/notification/notification.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [NavbarComponent, RouterOutlet, NotificationComponent],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class AppComponent {}