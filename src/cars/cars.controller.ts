import { version } from './../../node_modules/@types/uuid/index.d';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

    constructor(private readonly _carService: CarsService)
    {}

    @Get()
    gelAllCars(){
        return this._carService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', new ParseUUIDPipe({ version: '4' }) ) id: string ){
        return this._carService.findOneById(id);
    }

    @Post()
    @UsePipes( ValidationPipe )
    createCar( @Body() CreateCarDto: CreateCarDto){
        return CreateCarDto;
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
