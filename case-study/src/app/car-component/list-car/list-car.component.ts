import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Car} from '../interface/car';
import {CarService} from '../../case-service/car.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  carArr: Car[];
  carObj: Car;
  p = 1;


  constructor(private router: Router, private carService: CarService) {
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(
      next => this.carArr = next,
      error => console.log(error));
    }

  showEdit(id: number) {
    this.router.navigate(['car', 'edit', id]);
  }

  showModal(items: Car) {
    this.carObj = items;
  }

  onDelete() {
    this.carService.deleteById(this.carObj.id).subscribe(next => {
      this.ngOnInit();
    });
  }
}
