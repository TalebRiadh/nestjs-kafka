import { GetUserRequest } from '@app/shared/dto/get-user-request.dto';
import { OrderCreatedEvent } from '@app/shared/event/order-created.event';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class BillingService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka){}
    
  handleOrderCreated(orderCreaedEvent: OrderCreatedEvent) {
    this.authClient
    .send('get_user', new GetUserRequest(orderCreaedEvent.userId))
    .subscribe((user) => {
      console.log(
        `Billing user with stripe ID ${user.stripeUserId} a price of $${orderCreaedEvent.price} ...`
      )
    })
  }
}


