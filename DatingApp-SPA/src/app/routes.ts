import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-details.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

// Order of the routes matters, it matches the path requested.
// So order of the path is important

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
      path: '', // localhost:4200/'{blank space}'members
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
        { path: 'members', component: MemberListComponent,
                resolve: { users : MemberListResolver } },
        { path: 'members/edit', component: MemberEditComponent,
                resolve: { user: MemberEditResolver },
                canDeactivate: [ PreventUnsavedChanges ] },
        { path: 'members/:id', component: MemberDetailComponent,
                resolve: { user: MemberDetailResolver } }, // Route Parameter is passed with ":"
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
