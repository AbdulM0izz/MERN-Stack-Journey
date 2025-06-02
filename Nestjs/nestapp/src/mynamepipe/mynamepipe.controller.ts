/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('mynamepipe')
export class MynamepipeController {
    @Post()
    myname(@Body('name', new UppercasePipe()) name: string){
        return {message: `Name Received: ${name}`};
    }
}
