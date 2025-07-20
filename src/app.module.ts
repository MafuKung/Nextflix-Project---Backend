import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { MoviesModule } from './modules/movies/movies.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,        // ให้ ConfigModule ใช้ได้ทั่วแอป
      load: [configuration],
    }),
    MoviesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
