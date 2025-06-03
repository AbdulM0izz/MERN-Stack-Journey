/* eslint-disable prettier/prettier */
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
@Controller('product')
export class ProductController {
    constructor(private readonly productservice: ProductService){}
    @Get()
    @UseGuards(AuthGuard)
    getProducts() {
        return this.productservice.getallProdycts();
    }
    @Get(':id')
    getproductById(@Param('id') id:string) {
        return this.productservice.getProductByid(Number(id));
    
    }
}
