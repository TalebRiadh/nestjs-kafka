import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices/client';
import { CreateOrderRequest } from '../infrastructure/dto/create-order-request.dto';
import { OrderCreatedEvent } from '@app/shared/event/order-created.event';

@Injectable()
export class ApiGatewayService {
  constructor(
     @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}
  createOrder({userId, price}: CreateOrderRequest) {
    this.billingClient.emit(
      'order_created',
      new OrderCreatedEvent('123', userId, price)
    )
  }
}
