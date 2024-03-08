import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal:true}),
    TypeOrmModule.forRoot({
      type:'postgres',
      host:process.env.postgres_host,
      port: parseInt(<string>process.env.postgres_port),
      username:process.env.postgres_user,
      password:process.env.postgres_password +'' ,
      database:process.env.postgres_database,
      entities:[User],
      autoLoadEntities:true,
      synchronize:true,
    }),
    TypeOrmModule.forFeature([User]),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
