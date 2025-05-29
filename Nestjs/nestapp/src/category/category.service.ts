import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    getdata() {
        return ['Mobile','laptop','Tablet'];
    }
}
