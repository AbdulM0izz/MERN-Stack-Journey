/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { WorkService } from './work.service';

@Controller('work')
export class WorkController {
    constructor(private readonly workService: WorkService) {};

    @Get()
    getAllData () {
        return this.workService.getAlldata();
    }
    @Get(':id')
    getWorkerById(@Param('id')id : string) {
        return this.workService.getWorkerById(Number(id));
    }
    @Post()
    createWorker(@Body() body: {name: string , age: number}){
        return this.workService.createWorker(body);
    }
    @Put(':id')
    updateWorker(@Param('id')id : string, @Body() body: {name: string, age: number}){
        return this.workService.updateWorker(Number(id), body);
    }
    @Patch(':id')
    PatchWorker(@Param('id')id : string, @Body() body: Partial<{name: string, age: number}>){
        return this.workService.patcWoker(Number(id), body);
    }
    @Delete(':id')
    deleteWorker(@Param('id') id:string){
        return this.workService.deleteWorker(Number(id));
    }
}
