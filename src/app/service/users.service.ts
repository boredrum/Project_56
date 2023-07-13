import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  public usersArray = [
    { name: "Mike", status: "I'm learning angular", url: "https://i.pravatar.cc/150?img=12", id: 1 },
    { name: "Nikola", status: "Playing piano", url: "https://i.pravatar.cc/150?img=7", id: 2 },
    { name: "Bob", status: "Translations from Chinese", url: "https://i.pravatar.cc/150?img=11", id: 3 },
    { name: "Anna ", status: "Pretty girl", url: "https://i.pravatar.cc/150?img=1", id: 4 },
  ];

  setNewName(newName: any, userId: any){
    const user = this.usersArray.find(user => user.id === userId);
    if (user){
      user.name = newName.value
      newName.value = ''
    }
  }

  setNewStatus(newStatus: any, userId: any){
    const user = this.usersArray.find(user => user.id === userId);
    if (user){
      user.status = newStatus.value
      newStatus.value = ''
    }
  }

  countUsers(users:any){
    let count = 0;
    for (let key in this.usersArray){
      if (key){
        count += 1
      }
    }
    return count
  }

  users(): any[] {
    return this.usersArray
  }
}
