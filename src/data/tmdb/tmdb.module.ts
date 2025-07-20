import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TmdbService } from './tmdb.service';

@Module({
  imports: [HttpModule],     // เอา HttpModule มาใช้ในนี้
  providers: [TmdbService],  // ให้ Injectable ได้
  exports: [TmdbService],    // ให้ module อื่น import ไปใช้งานได้
})
export class TmdbModule {}
