import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

// Order of the routes matters, it matches the path requested.
// So order of the path is important

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
      path: '', // localhost:4200/'{blank space}'members
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
        { path: 'members', component: MemberListComponent },
        { path: 'messages', component: MessagesComponent },
        { path: 'lists', component: ListsComponent },
      ]
  },
  // One of the method to check the authguard
  // { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
  // { path: 'messages', component: MessagesComponent },
  // { path: 'lists', component: ListsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
