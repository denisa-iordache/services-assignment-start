import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  private usersService?: UsersService;

  constructor() {
    this.usersService = inject(UsersService);
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
