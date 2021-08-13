import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications.service';
import Swal from 'sweetalert2';


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

@Component({
  selector: 'app-toast-alert',
  templateUrl: './toast-alert.component.html',
  styleUrls: ['./toast-alert.component.scss']
})
export class ToastAlertComponent implements OnInit {

  constructor(
    private notificationService: NotificationsService
  ) { 
    this.notificationService.successNotify.subscribe( this.successNotification )
  }

  ngOnInit(): void {
  }

  successNotification(msj: string) {  
    Toast.fire({
      icon: 'success',
      title: msj
    })
  }

}
