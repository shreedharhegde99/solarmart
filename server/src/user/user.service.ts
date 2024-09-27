import { Injectable, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { AuthUserDto } from './dto/auth-user.dto';

@Injectable()
export class UserService {
  constructor() {}
  create(createUserDto: CreateUserDto, res: Response) {
    res.send({ message: 'Signup successful' });
  }

  login(userDto: AuthUserDto, res: Response) {
    res.send({ message: 'Login Successful' });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
