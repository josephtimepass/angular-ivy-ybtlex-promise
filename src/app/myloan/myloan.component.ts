import { Component, OnInit, Input } from '@angular/core';
import { Loan } from '../loan';
import { LoanService } from './../loan-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-myloan',
  templateUrl: './myloan.component.html',
  styleUrls: ['./myloan.component.css'],
})
export class MyloanComponent implements OnInit {
  @Input() item: Loan;
  private itemSubscription: Subscription;

  constructor(private itemService: LoanService) {}
ngOnInit(): void {
throw new Error('Method not implemented.');
}

    toggle() {
    console.log('within myloan');
    this.itemService.$visible.next(this.item);
  }

  // Create an Observable that will start listening to geolocation updates
// when a consumer subscribes.
locations = new Observable((observer) => {
  let watchId: number;

  // Simple geolocation API check provides values to publish
  if ('geolocation' in navigator) {
    watchId = navigator.geolocation.watchPosition((position: GeolocationPosition) => {
      observer.next(position);
    }, (error: GeolocationPositionError) => {
      observer.error(error);
    });
  } else {
    observer.error('Geolocation not available');
  }

  // When the consumer unsubscribes, clean up data ready for next subscription.
  return {
    unsubscribe() {
      navigator.geolocation.clearWatch(watchId);
    }
  };
});

// Call subscribe() to start listening for updates.
locationsSubscription = this.locations.subscribe({
  next(position) {
    console.log('Current Position: ', position);
  },
  error(msg) {
    console.log('Error Getting Location: ', msg);
  }
});

// Stop listening for location after 10 seconds

}
