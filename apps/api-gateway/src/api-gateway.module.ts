import { Module } from '@nestjs/common';
import { ApiGatewayController } from './infrastructure/api-gateway.controller';
import { ApiGatewayService } from './application/api-gateway.service';
import { ClientsModule } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices/enums';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "BILLING_SERVICE",
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'billing',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'billing-consumer'
          },
        },
      }, 
    ]),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
