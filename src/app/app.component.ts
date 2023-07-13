import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component'

import { UsersService } from '../app/service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: any[];

  constructor(public usersService: UsersService) {
    this.users = this.usersService.users();
  }

  @ViewChild('popUp', {read: ViewContainerRef})
  private viewRef!: ViewContainerRef
  private componentRef!: ComponentRef<PopUpComponent>

  showPopUp(){
    this.componentRef = this.viewRef.createComponent(PopUpComponent);
    this.componentRef.instance.close.subscribe(()=>{this.viewRef.clear()})
  }
}
