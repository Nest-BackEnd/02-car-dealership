import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

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
    createCar( @Body() createCarDto: CreateCarDto ){
        const data = this._carService.create(createCarDto);
        return data;
    }
    
    @Patch(':id')
    updatePartialCar( @Param('id', ParseUUIDPipe ) id: string, @Body() data: UpdateCarDto ){
        return data;
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe ) id: string ){
        this._carService.delete(id);
    }

}
