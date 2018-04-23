import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }

    private isLogged: boolean | null = null;

    login(credentials): Observable<boolean> {
        const data: string = JSON.stringify(credentials);
        const params = {action: 'login'};
        return this.http.post('assets/php/auth.php', data, {params: params})
            .map((r: Response) => {
                this.isLogged = (r.status === 1);
                return this.isLogged;
            });
    }

    logout(): Observable<boolean> {
        const params = {action: 'logout'};
        return this.http.get('assets/php/auth.php', {params: params})
            .map((r: Response) => {
                if (r.status === 1) {
                    this.isLogged = false;
                }
                return this.isLogged;
            });
    }

    getIsLogged(): Observable<boolean> {
        if (this.isLogged === null) {
            const params = {action: 'logout'};
            return this.http.get('assets/php/auth.php', {params: params})
                .map((r: Response) => {
                    this.isLogged = (r.status === 1);
                    return this.isLogged;
                });
        } else {
          return Observable.of(this.isLogged);
        }
    }

}
