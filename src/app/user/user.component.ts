import { Component, Input } from '@angular/core';

import { GroupNameService } from '../service/group-name.service';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() name = ''
  @Input() status = ''
  @Input() img = ''
  @Input() userId = ''

  constructor(
    public usersService: UsersService,
    public groupNameService: GroupNameService
    ) {}
}
