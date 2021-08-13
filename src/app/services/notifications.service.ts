import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  successNotify: Subject<String>;

  constructor() {
    this.successNotify = new Subject();
  }

  successNotification(msj: string) {
    this.successNotify.next(msj);
  }
}
