import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeModule } from './employe/employe.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { WorkModule } from './work/work.module';

@Module({
  imports: [EmployeModule, CategoryModule, StudentModule, WorkModule],
  controllers: [AppController, UserController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
