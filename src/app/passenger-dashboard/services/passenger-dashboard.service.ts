import { Passenger } from '../models/passenger.interface';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * What is @Injectable() ?
 *
 * In Angular, whenever you can do contructor based di, by simply decalring the deps in constructor.
 * No Special decorator is needed.
 *
 * UNLESS
 *
 * the class where depenedencies are being injected is not decorated with decorator. Solution is that we decorate that
 * class with a decorator, technically it can be any decorator, however its a good practice to use @Injectable()
 *
 * For e.g : "PassengerDashboardService" has a dependency on "HttpClient", Now when instantiating PassengerDashboardService,
 * ng DI fails, because PassengerDashboardService does not have a decorator. So decorate it with  @Injectable().
 *
 * Note : This is the main reason why @Injectable() is not needed for constructor DI in a class decorated with @Component()
 *
 * More reading :
 * https://blog.ninja-squad.com/2016/12/08/angular-injectable/
 *
 */
@Injectable()
export class PassengerDashboardService {
     constructor(http : HttpClient) {

     }
    getPassengers() : Passenger[] {
        return [{
            id: 1,
            fullname: 'Stephen',
            checkedIn: true,
            checkInDate: 1490742000000,
            children: null
          }, {
            id: 2,
            fullname: 'Rose',
            checkedIn: false,
            checkInDate: null,
            children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
          }, {
            id: 3,
            fullname: 'James',
            checkedIn: true,
            checkInDate: 1491606000000,
            children: null
          }, {
            id: 4,
            fullname: 'Louise',
            checkedIn: true,
            checkInDate: 1488412800000,
            children: [{ name: 'Jessica', age: 1 }]
          }, {
            id: 5,
            fullname: 'Tina',
            checkedIn: false,
            checkInDate: null,
            children: null
          }];
    }

}