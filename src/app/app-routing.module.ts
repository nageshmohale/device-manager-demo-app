import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router'; // used for routing
import {FormsModule} from '@angular/forms'; // used for two way binding

import {HomeComponent} from './home/home.component';
import {AddEditDeviceComponent} from './devicemanager/add-edit-device/add-edit-device.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'add-device',
        component: AddEditDeviceComponent
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [AddEditDeviceComponent, HomeComponent]
})

export class AppRoutingModule {}
