import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TmdbModule } from '../../data/tmdb/tmdb.module';

@Module({
  imports: [
    TmdbModule,        // เอา TMDB Client มาใช้
  ],
  controllers: [
    MoviesController,  // เรนเดอร์ endpoint /movies/*
  ],
  providers: [
    MoviesService,     // บรรจุ business logic
  ],
})
export class MoviesModule {}
