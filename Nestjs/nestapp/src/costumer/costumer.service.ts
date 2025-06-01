/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Costumer } from './interfaces/costumer.interface';
import { createCostumerDto } from './dto/create-costumer.dto';

@Injectable()
export class CostumerService {
    private Costumer: Costumer[] = [];
    
    getAllCostumers(): Costumer[] {
        return this.Costumer;
    }

    createCostumer(createCostumerDto: createCostumerDto): Costumer {
        const newCostumer: Costumer = {
            id: Date.now(),
            ...createCostumerDto
        }
        this.Costumer.push(newCostumer);
        return newCostumer;
    }
}
