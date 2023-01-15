import { GetUserRequest } from '@app/shared/dto/get-user-request.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private readonly users: any[] = [
    {
      userId: '123',
      stripeUserId: '43324',
    },
    {
      userId: '345',
      stripeUserId: '27279',
    },
  ]

  getUser(getUserRequest: GetUserRequest) {
    return this.users.find((user) => user.userId === getUserRequest.userId)
  }
}
