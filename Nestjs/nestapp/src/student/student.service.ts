/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class StudentService {
    private studentsData = [
        {id: 1, name: 'Moiz', age:19},
        {id:2, name: 'Ali', age:20}
    ];
     //Get 
    getAllStudents () {
        return this.studentsData;
    }
    getStudentById (id: number) {
        const student = this.studentsData.find((s)=> s.id === id);
        if (!student) throw new NotFoundException('Data Not found');
        return student;
    }
    //Post
    createStudent (data: {name: string, age: number}){
        const newStudents = {
            id: Date.now(),
            ...data
        };
        this.studentsData.push(newStudents);
        return newStudents;
    }
    //Put
    updateData (id: number, data: {name: string, age: number}) {
        const index = this.studentsData.findIndex((s)=> s.id === id);
        if (index === -1) throw new NotFoundException('Not found');
        this.studentsData[index] = {id, ...data};
        return this.studentsData[index];

    }
    //Patch
    patchStudent(id: number , data: Partial<{name: string; age: number}>){
    //     const student = this.studentsData.find((s)=> s.id === id);
    // }
    const student = this.getStudentById(id);
    Object.assign(student,data);
    return student;
}
    //Delete
    DeleteStudent(id: number ){
        const index = this.studentsData.findIndex((s)=> s.id === id);
        if (index === -1) throw new NotFoundException('Student not found');
        const deleted = this.studentsData.splice(index,1);
        return {message: 'Student deleted',studentsData: deleted[0]};
    }

}