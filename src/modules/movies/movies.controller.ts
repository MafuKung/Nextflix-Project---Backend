import { Controller, Get, Param, Query } from '@nestjs/common'
import { MoviesService } from './movies.service'
import { ApiTags, ApiOperation, ApiQuery, ApiParam } from '@nestjs/swagger'

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
    constructor(private svc: MoviesService) { }

    @Get('popular')
    @ApiOperation({ summary: 'Get popular movies' })
    getPopular() {
        return this.svc.getPopular()
    }

    @Get('top-rated')
    @ApiOperation({ summary: 'Get top rated movies' })
    getTopRated() {
        return this.svc.getTopRated()
    }

    @Get('upcoming')
    @ApiOperation({ summary: 'Get upcoming movies' })
    getUpcoming() {
        return this.svc.getUpcoming()
    }

    @Get('search')
    @ApiOperation({ summary: 'Search movies by query' })
    @ApiQuery({ name: 'query', required: true, description: 'Search term' })
    search(@Query('query') q: string) {
        return this.svc.search(q)
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get movie details by ID' })
    @ApiParam({ name: 'id', description: 'Movie ID' })
    getById(@Param('id') id: string) {
        return this.svc.getById(id)
    }

    @Get(':id/videos')
    @ApiOperation({ summary: 'Get videos for a movie' })
    getVideos(@Param('id') id: string) {
        return this.svc.getVideos(id);
    }

}
