import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from "./users/users.module";
import {DbModule} from "./models/db.module";
@Module({
  imports: [UsersModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
