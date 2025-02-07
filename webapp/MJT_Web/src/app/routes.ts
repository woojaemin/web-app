import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UploadComponent } from './upload/upload.component';

//Sign in을 위해
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { BoardComponent } from './board/board.component';
import { ChangeprofileComponent } from './user/changeprofile/changeprofile.component';
import { OtherprofileComponent } from './otherprofile/otherprofile.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserlistComponent } from './userlist/userlist.component';
import { SearchuserComponent } from './user/searchuser/searchuser.component';
// import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'profile', component: UserprofileComponent
    },
    {
        path: 'upload', component: UploadComponent
    },
    {
        path: 'googlemap', component: GooglemapComponent
    },
    {
        path: 'board', component: BoardComponent
    },
    {
        path: 'change', component: ChangeprofileComponent
    },
    {
        path: 'user', component: SearchuserComponent
    },
    {
        path: 'rt', component: RestaurantComponent
    },
    {
        path: 'userlist', component: UserlistComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];