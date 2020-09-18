import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/user`);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/user/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/user/create`, user);
  }

  deleteUser(id: string): Observable<User> {
    console.log(id);
    return this.http.delete<User>(`${this.BASE_URL}/user/delete?userID=${id}`);
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.BASE_URL}/user/update?usertID=${id}`, user);
  }
}
