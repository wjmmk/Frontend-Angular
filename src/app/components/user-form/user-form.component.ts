import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = {
    username: '',
    email: '',
    password: '',
  };
  edit = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.userService.getUser(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.user = res;
            this.edit = true;
          },
          err => console.log(err)
        );
    }
  }

  submitUser(): void {
    this.userService.createUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/user']);
        },
        err => console.log(err)
      );
  }

  updateUser(): void {
    delete this.user.createdAt;
    this.userService.updateUser(this.user._id, this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/user']);
        },
        err => console.log(err)
      );
  }
}
