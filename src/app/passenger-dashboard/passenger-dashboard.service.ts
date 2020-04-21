import { Passenger } from './models/passenger.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/**
 * What is injectable() ?
 * 
 * First understand this, 
 * 
 * 1. DI injector is the one that injects deps in a class's paramterized constructor, during instantiation.
 * 2. DI injector can inject deps, only if the class generates injection meta data about it's constructor params.
 * 3. This generation only happens, if class has a decorator.
 * 4. So, A TS class with parameterized contructor can be properly instantiated through ng DI,
 * only if it has a decorator.
 * 5. Thus, It's a standard practice to use @Injectable(), your program will work with @Component as well
 * ha ha ...
 * 
 * So, Injectable() is a decorator that triggers constructor params's meta data generation, allowing ng DI injector, to
 * read that data and perform DI, and thus resolve a the class's mandatory dependencies.
 * 
 * What is a DI provider and why should i give a damn about it ?
 * 
 * @Injectable() kind of is a flag for angular to perform DI or not.
 * 1. Once flag is true, it needs to understand, HOW TO CREATE the runtime dependency.
 * 2. For this it needs a DI provider, that will instruct it on dependency creation.
 * 3. It looks for DI providers in "providers" array.
 * 4. That's why we our DI fails, if we remove "PassengerDashboardService" from providers array 
 * of "PassengerDashboardModule".
 * 4. Now, if "providers" array contains the service name itself, it will simply use the "new" key word
 * for instantiation.
 * 5. So you can have multiple "PROVIDERS" for a single angular "SERVICE" 
 * 6. OR, ng allows you to create an instance of a service ts class in multiple ways and 
 * inject it via it's own DI
 * 
 * https://angular.io/guide/dependency-injection-providers
 * https://angular.io/guide/dependency-injection
 * 
 */
@Injectable()
export class PassengerDashboardService {

  constructor(private readonly httpClient : HttpClient) {
    console.log(httpClient);
  }

    getPassengers(): Passenger[] {
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