import { Module } from '@nestjs/common';
import { CostumerService } from './costumer.service';
import { CostumerController } from './costumer.controller';

@Module({
  providers: [CostumerService],
  controllers: [CostumerController]
})
export class CostumerModule {}
