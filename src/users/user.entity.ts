// src/users/user.entity.ts  
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';  
import { IsEmail, IsNotEmpty, Length } from 'class-validator';  

@Entity()  
export class User {  
  @PrimaryGeneratedColumn()  
  id: number;  

  @Column()  
  @IsNotEmpty({ message: 'Name is required.' })  
  @Length(1, 100, { message: 'Name must be between 1 and 100 characters long.' })  
  name: string;  

  @Column({ unique: true })  
  @IsNotEmpty({ message: 'Email is required.' })  
  @IsEmail({}, { message: 'Email must be a valid email address.' })  
  email: string;  
}  