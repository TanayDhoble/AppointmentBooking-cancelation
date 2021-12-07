import { Component, OnInit } from '@angular/core';
import { AppoServiceService } from '../appo-service.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public successMsg!: string;
  public errorMsg!: string;
  public appointmentDate!: string;
  public name!: string;
  public email!: string;
  
  constructor(public appointmentService:AppoServiceService) { }

  ngOnInit(): void {
  }
  createAppointment() {
    this.successMsg = '';
    this.errorMsg = '';
    
    this.appointmentService.createAppointment(this.appointmentDate, this.name, this.email)
      .subscribe((createdAppointment: Appointment) => {
        this.appointmentDate = '';
        this.name = '';
        this.email = '';
        const d = new Date(createdAppointment.appointmentDate).toDateString();
        this.successMsg = `Appointment Booked Successfully`;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }

}
