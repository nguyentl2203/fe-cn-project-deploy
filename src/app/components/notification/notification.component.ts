import { Component } from "@angular/core";

@Component({
    selector: 'app-notification',
    standalone: true,
    imports: [],
    templateUrl: './notification.html',
    styleUrl: './notification.scss'
})
export class NotificationComponent {
    isTriggger: boolean = false
    trigger() {}
}