/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService implements OnModuleInit, OnApplicationShutdown {
    private isConnected = false;

    // this hooks or lifecylce will call when this service is loaded
    onModuleInit(){ 
        this.isConnected = true;
        console.log('Database connected')
    }

    //this will call when app is disconnected or shutdown 
    onApplicationShutdown(signal: string) {
        this.isConnected = false;
        console.log(`disconnected signal ${signal}`);
    }
    
    getStatus(){
        return this.isConnected ? 'connected' : 'disconnected';
    }
}