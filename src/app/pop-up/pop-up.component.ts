import { Component, Output, EventEmitter } from '@angular/core';

import { GroupNameService } from '../service/group-name.service';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  
  @Output() close = new EventEmitter

  users: any[];
  
  constructor(
    public usersService: UsersService,
    public groupNameService: GroupNameService
    ) {
      this.users = this.usersService.users();
    }
}
