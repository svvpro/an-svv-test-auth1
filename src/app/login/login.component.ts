import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    credentials = {name: 'admin', password: ''};

    constructor(private as: AuthService, private router: Router) {
    }


    ngOnInit() {
    }

    login(): void {
        this.as.login(this.credentials).subscribe((flag: boolean) => {
            if (flag) {
                this.router.navigate(['/news']);
            }
        });
    }

}
