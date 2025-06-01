/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CostumerService } from './costumer.service';
import { createCostumerDto } from './dto/create-costumer.dto';

@Controller('costumer')
export class CostumerController {
    constructor (private readonly costumerSevice: CostumerService) {};
    
    @Get()
    getCostumers() {
        return this.costumerSevice.getAllCostumers();
    }
    @Post()
    addcostumer(@Body() createCostumerDto: createCostumerDto) {
        return this.costumerSevice.createCostumer(createCostumerDto);
    }
}
