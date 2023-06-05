import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from "./users/users.module";
import {ArtistModule} from "./artist/artist.module";
import {DbModule} from "./models/db.module";
@Module({
  imports: [UsersModule, DbModule, ArtistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
