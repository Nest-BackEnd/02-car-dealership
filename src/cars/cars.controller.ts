import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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

    @Post()
    createCar( @Body() data: any){
        return data;
    }
    
    @Patch(':id')
    updatePartialCar( @Param('id', ParseIntPipe ) id: number, @Body() data: any){
        return data;
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe ) id: number){
        return{
            method: 'delete',
            id
        }
    }

}
