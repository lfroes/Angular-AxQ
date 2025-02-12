import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, switchMap, map } from 'rxjs';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  private _users: User[] = [];
  private _searchQuery: string = '';
  private _filteredUsers: User[] = [];
  private _displayedUsers = new BehaviorSubject<number>(100);

  get filteredUsers(): User[] {
    return this._filteredUsers;
  }

  get searchQuery(): string {
    return this._searchQuery;
  }

  set searchQuery(value: string) {
    console.log('Search query changed:', value);
    this._searchQuery = value;
    this.filterUsers();
  }

  get hasMoreUsers(): boolean {
    return this._displayedUsers.value < this._filteredUsers.length;
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this._displayedUsers
      .pipe(
        switchMap((displayedUsers) => {
          const apiUrl = `https://randomuser.me/api/?results=${displayedUsers}`;
          return this.http.get<{ results: User[] }>(apiUrl);
        }),
      )
      .subscribe({
        next: (response) => {
          this._users = response.results;
          this.filterUsers();
        },
        error: (error) => {
          console.error('Error fetching users', error);
        },
      });
  }

  private filterUsers(): void {
    console.log('Filtering users with query:', this._searchQuery);
    // Filter users based on search query, maybe there is a better way to do this with rxjs
    this._filteredUsers = this._users
      .filter(
        (user) =>
          user.name.first
            .toLowerCase()
            .includes(this._searchQuery.toLowerCase()) ||
          user.name.last
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(this._searchQuery.toLowerCase()),
      )
      .slice(0, this._displayedUsers.value);
    console.log('Filtered users:', this._filteredUsers.length);
  }

  loadMore(): void {
    this._displayedUsers.next(this._displayedUsers.value + 100);
  }
}
