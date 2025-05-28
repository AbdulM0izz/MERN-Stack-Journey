import { Controller, Get } from '@nestjs/common';

@Controller('employe')
export class EmployeController {
    @Get()
    Employe(){
        return "Hello from employe controller";
    }
}
