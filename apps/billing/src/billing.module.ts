import { Module } from '@nestjs/common';
import { BillingController } from './infrastructure/billing.controller';
import { BillingService } from './application/billing.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "AUTH_SERVICE",
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'auth',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'auth-consumer'
          }
        }
      }
    ])
  ],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
