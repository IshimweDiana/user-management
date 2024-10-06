// src/app.module.ts  
import { Module } from '@nestjs/common';  
import { TypeOrmModule } from '@nestjs/typeorm';  
import { UserModule } from './users/user.module';  

@Module({  
  imports: [  
    TypeOrmModule.forRoot({  
      type: 'postgres',  
      host: 'localhost',  
      port: 5050,  
      username: 'your_username',  
      password: 'your_password',  
      database: 'user_management',  
      entities: [__dirname + '/**/*.entity{.ts,.js}'],  
      synchronize: true, // Set to false in production  
    }),  
    UserModule,  
  ],  
})  
export class AppModule {}
