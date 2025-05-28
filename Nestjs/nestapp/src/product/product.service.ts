import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private Products = [
        {id: 1, name: "P 1", price: 100},
        {id: 2, name: "P 2", price: 200},
        {id: 3, name: "P 3", price: 300}
    ];
    getallProdycts() {
        return this.Products;
    }
    getProductByid (id: number) {
        return this.Products.find((product)=> product.id === id);
    }
}
