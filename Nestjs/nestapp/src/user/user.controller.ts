import { Controller, Get } from '@nestjs/common';

@Controller('user') //decorator
export class UserController {
     @Get()
    getuser() {
        return 'user data fetched successfully !!';
    }
}
