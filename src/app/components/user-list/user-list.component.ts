import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(
        res => {
          this.users = res;
         // console.log(res);
        },
        err => console.log(err)
      );
  }

  deleteUser(id: string): void {
    this.userService.deleteUser(id)
      .subscribe(
        res => {
          console.log(res);
          this.getUsers();
        },
        err => console.log(err)
      );
  }
}
