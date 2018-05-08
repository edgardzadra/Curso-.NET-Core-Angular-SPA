import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { MembrListComponent } from './app/membr-list/membr-list.component';
import { MessagesComponent } from './app/messages/messages.component';
import { ListsComponent } from './app/lists/lists.component';
import { AuthGuard } from './app/_guards/auth.guard';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MembrListComponent },
            {path: 'messages', component: MessagesComponent },
            {path: 'lists', component: ListsComponent }
        ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full' }
];
