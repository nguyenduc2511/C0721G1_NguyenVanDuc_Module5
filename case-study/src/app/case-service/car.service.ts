import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../car-component/interface/car';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private URL_CAR = 'http://localhost:3000/car';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Car[] | any> {
    return this.http.get(this.URL_CAR);
  }

  findCarById(id: number) {
    return this.http.get(this.URL_CAR + '/' + id);
  }

  updateCar(items: Car) {
    return this.http.put(this.URL_CAR + '/' + items.id, items);
  }

  deleteById(id: number) {
    return this.http.delete(this.URL_CAR + '/' + id);
  }
  createCar(items: Car) {
    return this.http.post(this.URL_CAR + '/create', items);
  }
}
