// src/users/user.service.ts  
import { Injectable } from '@nestjs/common';  
import { InjectRepository } from '@nestjs/typeorm';  
import { Repository } from 'typeorm';  
import { User } from './user.entity';  

@Injectable()  
export class UserService {  
  constructor(  
    @InjectRepository(User)  
    private userRepository: Repository<User>,  
  ) {}  

  create(user: Partial<User>): Promise<User> {  
    const newUser = this.userRepository.create(user);  
    return this.userRepository.save(newUser);  
  }  

  findAll(): Promise<User[]> {  
    return this.userRepository.find();  
  }  

  findOne(id: number): Promise<User> {  
    return this.userRepository.findOneBy({ id });  
  }  

  async update(id: number, user: Partial<User>): Promise<User> {  
    await this.userRepository.update(id, user);  
    return this.findOne(id);  
  }  

  async remove(id: number): Promise<void> {  
    await this.userRepository.delete(id);  
  }  
}  