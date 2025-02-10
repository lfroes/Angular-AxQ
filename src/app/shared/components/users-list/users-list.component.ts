import { Component } from '@angular/core';
import { User } from '../../../models/user.model';
@Component({
  selector: 'app-users-list',
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  private _searchQuery: string = '';
  private _filteredUsers: User[] = [];
  private _displayedUsers: number = 3;


  get filteredUsers(): User[] {
    return this._filteredUsers;
  }

  get searchQuery(): string {
    return this._searchQuery;
  }

  set searchQuery(value: string) {
    this._searchQuery = value;
    this.filterUsers();
  }

  get hasMoreUsers(): boolean {
    return this._displayedUsers < this._filteredUsers.length;
  }

  private filterUsers(): void {
    this._filteredUsers =
  }

  //TODO: Continue from here
}
