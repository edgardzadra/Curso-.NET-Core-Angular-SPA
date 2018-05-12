import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { MessagesComponent } from './app/messages/messages.component';
import { ListsComponent } from './app/lists/lists.component';
import { AuthGuard } from './app/_guards/auth.guard';
import { MembrListComponent } from './app/members/membr-list/membr-list.component';
import { MemberDetailComponent } from './app/members/member-detail/member-detail.component';
import { MemberDetailResolver } from './app/_resolvers/member-detail.resolver';
import { MemberListResolver } from './app/_resolvers/member-list.resolver';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MembrListComponent, resolve: {users: MemberListResolver} },
            {path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver} },
            {path: 'messages', component: MessagesComponent },
            {path: 'lists', component: ListsComponent }
        ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full' }
];
