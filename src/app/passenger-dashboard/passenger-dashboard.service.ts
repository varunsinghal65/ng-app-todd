import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Passenger } from './models/passenger.interface';

/**
 *
 * MOCKED HTTP BACKEND
 *
 */
@Injectable()
export class PassengerDashboardService {
  passengers: Passenger[] = [];

  constructor(private readonly httpClient: HttpClient) {
    console.log(httpClient);
    this.passengers = [{
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      baggage: ""
    }, {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      baggage: ""
    }, {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      baggage: ""
    }, {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      baggage: ""
    }, {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      baggage: ""
    }];
  }

  getPassengers(): Passenger[] {
    return this.passengers;
  }

  getPassenger(id: number): Passenger {
    const filteredPassengers = this.passengers.filter((pax) => {
      return pax.id === id;
    });
    if (filteredPassengers.length > 1) {
      console.error("BAD MOCK JSON DATA : passengers with multiple IDs detected");
      return null;
    }
    return filteredPassengers[0];
  }

}