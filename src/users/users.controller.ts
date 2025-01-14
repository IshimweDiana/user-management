// src/users/users.controller.ts  
import { Controller, Post, Get, Param, Put, Delete, Body } from '@nestjs/common';  
import { UserService } from './user.service';  
import { User } from './user.entity';  

@Controller('users')  
export class UsersController {  
  constructor(private readonly userService: UserService) {}  

  @Post()  
  create(@Body() user: Partial<User>): Promise<User> {  
    return this.userService.create(user);  
  }  

  @Get()  
  findAll(): Promise<User[]> {  
    return this.userService.findAll();  
  }  

  @Get(':id')  
  findOne(@Param('id') id: number): Promise<User> {  
    return this.userService.findOne(id);  
  }  

  @Put(':id')  
  update(@Param('id') id: number, @Body() user: Partial<User>): Promise<User> {  
    return this.userService.update(id, user);  
  }  

  @Delete(':id')  
  remove(@Param('id') id: number): Promise<void> {  
    return this.userService.remove(id);  
  }  
} 
