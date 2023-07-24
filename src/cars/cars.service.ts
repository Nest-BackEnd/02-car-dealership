import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
    
    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Nissan',
            model: 'Versa'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ];

    findAll(){
        return this.cars;
    }

    findOneById( id: string ){  
        const car = this.cars.find(car => car.id === id);
        if(!car) throw new NotFoundException(`Car with id ${id} not found`);
        return car
    }

    create( createCarDto: CreateCarDto ){
        let car: Car = {
            id: uuid(),
            ...createCarDto
        }
        this.cars.push(car);
        return car;
    }

    update( id: string, updateCarDto: UpdateCarDto ){
        let carDB = this.findOneById(  id );
        this.cars.map( car => {
            if (car.id === id) {
                carDB = { ...carDB, ...updateCarDto, id }
                return carDB;
            }
            return car
        })
        return carDB;
    }

    delete( id: string ){
        let carDB = this.findOneById(  id );
        const index = this.cars.findIndex(car => {
            return car.id === id;
          });
        if (index !== -1) {
          this.cars.splice(index, 1);
        }
    }
}
