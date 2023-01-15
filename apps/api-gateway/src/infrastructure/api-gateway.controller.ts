import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiGatewayService } from '../application/api-gateway.service';
import { CreateOrderRequest } from './dto/create-order-request.dto';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Post()
  createOrder(@Body() createOrderRequest: CreateOrderRequest){
    this.apiGatewayService.createOrder(createOrderRequest)
  }
}
