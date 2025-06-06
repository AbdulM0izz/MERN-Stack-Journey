import { Controller, Get, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { ExecptionFiltersFilter } from 'src/filters/execption-filters/execption-filters.filter';

@Controller('execptioncontroller')
@UseFilters(ExecptionFiltersFilter)
export class ExecptioncontrollerController {
    @Get('hell0/:id')
    getHello (@Param ('id', ParseIntPipe)id: number){
        return {message: `your id is ${id}`}
    }
}
