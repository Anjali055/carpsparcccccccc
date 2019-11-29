import { Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { UserServiceButtonsComponent } from './user-service-buttons/user-service-buttons.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashBordComponent } from './dash-bord/dash-bord.component';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

//import {} from './sign-up/SignupCustomModule'
//import{} from './edit-profile/editmodule.module#EditCustomModule'



import { BookingForWashComponent } from './booking-for-wash/booking-for-wash.component';
export const MyRoutes: Routes =
    [
        { path: '', component: LoginComponent },
        { path: 'UserserviceButtons', component: UserServiceButtonsComponent },
        // {path:'usersignUp',component:SignUpComAponent},
        { path: 'usersignUp', loadChildren: './sign-up/SignupCustomModule#SignupCustomModule' },
        { path: 'setPassword', component: SetPasswordComponent },
        { path: 'ForgotPassword', component: ForgotPasswordComponent },
        
        {
            path: 'MenuDashboard', component: DashBordComponent,
            children: [
                //  {path:'Book',component:BookingForWashComponent},
                { path: 'Book', loadChildren: './booking-for-wash/booking.module#BookingModule' },
                {path:'changepassword',loadChildren:'./change-password/change_password.module#ChangePasswordModule'},
                { path: 'editprofile', loadChildren: './edit-profile/editmodule.module#EditCustomModule' },
               // { path: 'chagepassword', component: ChangePasswordComponent }
            ]

        }





    ]

