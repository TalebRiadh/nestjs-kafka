import { Test, TestingModule } from '@nestjs/testing';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from '../application/api-gateway.service';

describe('ApiGatewayController', () => {
  let apiGatewayController: ApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiGatewayController],
      providers: [ApiGatewayService],
    }).compile();

    apiGatewayController = app.get<ApiGatewayController>(ApiGatewayController);
  });

  describe('root', () => {
  });
});
