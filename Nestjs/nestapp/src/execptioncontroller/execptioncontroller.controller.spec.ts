import { Test, TestingModule } from '@nestjs/testing';
import { ExecptioncontrollerController } from './execptioncontroller.controller';

describe('ExecptioncontrollerController', () => {
  let controller: ExecptioncontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExecptioncontrollerController],
    }).compile();

    controller = module.get<ExecptioncontrollerController>(ExecptioncontrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
