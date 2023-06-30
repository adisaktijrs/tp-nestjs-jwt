import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup() {
    return { message: 'signup was successfull' };
  }
  async signin() {
    return '';
  }
  async signout() {
    return '';
  }
}
