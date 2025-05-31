/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';


@Injectable()
export class WorkService {
    private Workerdata = [
        {id: 1, name:'ali', age:20},
        {id:2, name:'ahmed', age:30}
    ];
    getAlldata() {
        return this.Workerdata;
    }    
    getWorkerById (id: number){
        const index = this.Workerdata.findIndex((s)=> s.id === id);
        if (index === -1) throw new NotFoundException('Worker not found');
        return this.Workerdata[index];
    }
    //post 
    createWorker(data: {name: string , age: number}){
        const worker = {
            id: Date.now(),
            ...data
        }
        this.Workerdata.push(worker);
        return worker;
    }
    //put
    updateWorker(id: number , data: {name: string, age: number}){
        const index = this.Workerdata.findIndex((s)=> s.id === id);
        if (index === -1) throw new NotFoundException ('worker not found');
        this.Workerdata[index] = {id, ...data};
        return this.Workerdata[index];
    }
    //patch
    patcWoker(id: number, data: Partial<{name: string, age: number}>){
        const worker = this.getWorkerById(id);
        Object.assign(worker, data);
        return worker;
    }
    //delete 
    deleteWorker(id: number){
        const index = this.Workerdata.findIndex((s)=> s.id === id);
        if (index === -1) throw new NotFoundException('worker not found');
        const deleted = this.Workerdata.splice(index, 1);
        return {message: 'worker deleted', Workerdata: deleted[0]};
    }
}
