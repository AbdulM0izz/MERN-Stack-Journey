import { Injectable } from '@nestjs/common';
import {ConfigService} from '@nestjs/config'
import { stringify } from 'querystring';
@Injectable()
export class EvService {
    constructor(private configureService: ConfigService){}

    getDburl (){
        return this.configureService.get<string>('DATA_BASE')
    }
}
