/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeModule } from './employe/employe.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { WorkModule } from './work/work.module';
import { CostumerModule } from './costumer/costumer.module';
import { MynamepipeController } from './mynamepipe/mynamepipe.controller';
import { UserRoleController } from './user-role/user-role.controller';
import { ExecptioncontrollerController } from './execptioncontroller/execptioncontroller.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseController } from './database/database.controller';
import { DatabaseService } from './database/database.service';
import { ConfigModule } from '@nestjs/config';
import { EvService } from './ev/ev.service';
import { EvController } from './ev/ev.controller';
@Module({
  imports: [EmployeModule, CategoryModule, StudentModule, WorkModule, CostumerModule, ConfigModule.forRoot({
    isGlobal: true
  })],
  controllers: [AppController, UserController, ProductController, MynamepipeController, UserRoleController, ExecptioncontrollerController, DatabaseController, EvController],
  providers: [AppService, ProductService, DatabaseService, EvService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
