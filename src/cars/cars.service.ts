import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    
    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Nissan',
            model: 'Versa'
        },
        {
            id: 3,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: 4,
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ];

    findAll(){
        return this.cars;
    }

    findOneById( id: number ){  
        const vehiculo = this.cars.find(car => car.id === id);
        if(!vehiculo){
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        return vehiculo
    }
}
