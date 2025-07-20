import { Injectable } from '@nestjs/common'
import { TmdbService } from '../../data/tmdb/tmdb.service'

@Injectable()
export class MoviesService {
    constructor(private tmdb: TmdbService) { }

    getPopular() {
        return this.tmdb.getPopular()
    }

    getTopRated() {
        return this.tmdb.getTopRated()
    }

    getUpcoming() {
        return this.tmdb.getUpcoming()
    }

    search(query: string) {
        return this.tmdb.search(query)
    }

    getById(id: string) {
        return this.tmdb.getById(id)
    }

    getVideos(id: string) {
        return this.tmdb.getVideos(id);
    }

}
