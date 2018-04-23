import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(private as: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    logout(): void {
        this.as.logout().subscribe((flag: boolean) => {
            console.log('Log out:', flag);
            if (!(flag)) {
                this.router.navigate(['/news']);
            }
        });
    }

}
