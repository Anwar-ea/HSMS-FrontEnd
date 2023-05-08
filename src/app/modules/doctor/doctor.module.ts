import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorRootComponent } from './doctor-root/doctor-root.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { SharedModule } from 'src/app/shared-module/shared-module';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    DoctorRootComponent,
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
    ToastModule,
    MessagesModule,
    ButtonModule
  ],
  providers:[]
})
export class DoctorModule { }
