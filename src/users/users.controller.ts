import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/details')
  getMyUser(@Req() req: Request) {
    return this.usersService.getMyUser(req);
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
}
