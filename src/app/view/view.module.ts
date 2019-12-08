import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';



export const viewModul : Routes = [

    {path : '' , redirectTo:'view',pathMatch:'full'}, 
    { path : '' , component:ViewComponent },
    {path :'editprofile' , component:EditProfileComponent}
];


@NgModule({
    declarations:[ViewComponent,EditProfileComponent],
    imports:[CommonModule, FormsModule
        , ReactiveFormsModule
        , RouterModule.forChild(viewModul)],
    
        providers: [],
        exports: [ViewComponent]
})

export class viewModule{}