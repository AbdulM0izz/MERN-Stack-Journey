/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import {StudentService} from './student.service'
@Controller('student')
export class StudentController {
    constructor(private readonly StudentService: StudentService){};
    @Get()
    getAll(){
        return this.StudentService.getAllStudents();
    }
    @Get(':id')
    getOne(@Param('id') id:string){
        return this.StudentService.getStudentById(Number(id));
    }
    @Post()
    Create(@Body() body: {name: string, age: number}){
        return this.StudentService.createStudent(body);
    }
    @Put(':id')
    update(@Param('id')id: string, @Body() body: {name: string, age:number}){
        return this.StudentService.updateData(Number(id), body);
    }
    @Patch(':id')
    patch(@Param('id')id: string, @Body() body: Partial<{name: string, age: number}>){
        return this.StudentService.patchStudent(Number(id), body);
    }
    @Delete(':id')
    remove(@Param('id') id:string){
        return this.StudentService.DeleteStudent(Number(id));
    }

    
}
