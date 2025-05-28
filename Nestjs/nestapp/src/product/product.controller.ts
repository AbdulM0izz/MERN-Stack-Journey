import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { retry } from 'rxjs';

@Controller('product')
export class ProductController {
    constructor(private readonly productservice: ProductService){}
    @Get()
    getProducts() {
        return this.productservice.getallProdycts();
    }
    @Get(':id')
    getproductById(@Param('id') id:string) {
        return this.productservice.getProductByid(Number(id));
    }
}
