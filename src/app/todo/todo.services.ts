import {Http, Response,Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Task} from './todo.model';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class TaskService {


    constructor(private http: Http  ) {}

    authUser(user:Task):Observable<Task>{
        return this.http.get('http://localhost:8081/authUser?userName='+user.userName+'&password='+user.password)
            .map(
                (response: Response) => {
                    return response.json();
                }
            );
    }

    public getUsers (): Observable<Task[]> {
    return this.http.get('http://localhost:8081/all')
                    .map(res => res.json());

    }


    saveUser():Observable<Task>{
        return this.http.get('http://localhost:8081/saveUser?userName=tttt&password=rk')
            .map(
                (response: Response) => {
                    return response.json();
                }
            );
    }

    insertUser():Observable<Task>{

      let url ='http://localhost:8081/saveUser?userName=fdfsf&password=rsf';
      let body = '';
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(url, body, options)
      .map(res =>  res.json());
  }


}
