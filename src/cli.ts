// src/cli.ts  
import { NestFactory } from '@nestjs/core';  
import { AppModule } from './app.module';  
import { UserService } from './users/user.service';  
import { User } from './users/user.entity';  

async function bootstrap() {  
  const appContext = await NestFactory.createApplicationContext(AppModule);  
  const userService = appContext.get(UserService);  

  const user: Partial<User> = {  
    name: process.argv[2], // Get name from command line arguments  
    email: process.argv[3], // Get email from command line arguments  
  };  

  const createdUser = await userService.create(user);  
  console.log('User created:', createdUser);  
  await appContext.close();  
}  

bootstrap();  