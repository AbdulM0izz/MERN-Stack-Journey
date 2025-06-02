import { Test, TestingModule } from '@nestjs/testing';
import { MynamepipeController } from './mynamepipe.controller';

describe('MynamepipeController', () => {
  let controller: MynamepipeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MynamepipeController],
    }).compile();

    controller = module.get<MynamepipeController>(MynamepipeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
