import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(private readonly _carService: CarsService)
    {}

    @Get()
    gelAllCars(){
        return this._carService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseIntPipe ) id: number ){
        return this._carService.findOneById(id);
    }

}
