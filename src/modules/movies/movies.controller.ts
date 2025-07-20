import { Controller, Get, Param, Query } from '@nestjs/common'
import {
  ApiTags,
  ApiOperation,
  ApiQuery,
  ApiParam,
  ApiOkResponse,
} from '@nestjs/swagger'
import { MoviesService } from './movies.service'
import {
  SectionRowResponseDto,
  MoviePreviewDto,
} from './dto/movie-preview.dto'
import { MovieDetailDto } from './dto/movie-detail.dto'
import { VideoResponseDto } from './dto/video-response.dto'

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private svc: MoviesService) {}

  @Get('popular')
  @ApiOperation({ summary: 'Get popular movies' })
  @ApiOkResponse({ type: SectionRowResponseDto })
  getPopular() {
    return this.svc.getPopular()
  }

  @Get('top-rated')
  @ApiOperation({ summary: 'Get top rated movies' })
  @ApiOkResponse({ type: SectionRowResponseDto })
  getTopRated() {
    return this.svc.getTopRated()
  }

  @Get('upcoming')
  @ApiOperation({ summary: 'Get upcoming movies' })
  @ApiOkResponse({ type: SectionRowResponseDto })
  getUpcoming() {
    return this.svc.getUpcoming()
  }

  @Get('search')
  @ApiOperation({ summary: 'Search movies by query' })
  @ApiQuery({ name: 'query', required: true, description: 'Search term' })
  @ApiOkResponse({ type: SectionRowResponseDto })
  search(@Query('query') q: string) {
    return this.svc.search(q)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get movie details by ID' })
  @ApiParam({ name: 'id', description: 'Movie ID' })
  @ApiOkResponse({ type: MovieDetailDto })
  getById(@Param('id') id: string) {
    return this.svc.getById(id)
  }

  @Get(':id/videos')
  @ApiOperation({ summary: 'Get videos for a movie' })
  @ApiParam({ name: 'id', description: 'Movie ID' })
  @ApiOkResponse({ type: VideoResponseDto })
  getVideos(@Param('id') id: string) {
    return this.svc.getVideos(id)
  }
}
