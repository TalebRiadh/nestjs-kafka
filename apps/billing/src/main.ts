import { NestFactory } from '@nestjs/core';
import { BillingModule } from './billing.module';
import {Transport, MicroserviceOptions} from '@nestjs/microservices'


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BillingModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:29092'],
        },
        consumer: {
          groupId: 'billing-consumer',
        },
      },
    },
  )
  app.listen()
}
bootstrap();
