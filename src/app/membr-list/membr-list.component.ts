import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { User } from '../_models/User';

@Component({
  selector: 'app-membr-list',
  templateUrl: './membr-list.component.html',
  styleUrls: ['./membr-list.component.css']
})
export class MembrListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
      this.alertify.error(error);
    });
  }

}
