import { Passenger } from '../models/passenger.interface';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
     constructor(private http : HttpClient) {

     }
    getPassengers() : Observable<Passenger[]> {
      /**
       * You are specifying the type pf TS object you are expecting from the reponse
       * Note : This only helps in compile time, at RT, its up to the API to provide you with
       * correct typed data
       *
       * this method will returne a observable type that allows client to subscribe
       * to this observable and attach their callback functions, which are called, when sever responds
       * with data, a typical ASYNC request-respnse cycle.
       */
        return this.http.get<Passenger[]>("../../assets/api.json");
    }

}