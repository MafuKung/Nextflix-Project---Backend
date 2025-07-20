import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { firstValueFrom } from 'rxjs'
import { ConfigService } from '@nestjs/config'

interface MoviePreview {
    id: number
    title: string
    poster_path?: string
    backdrop_path?: string
}

export interface SectionRowResponse {
    results: MoviePreview[]
}

@Injectable()
export class TmdbService {
    constructor(
        private http: HttpService,
        private config: ConfigService,
    ) { }

    private get baseUrl() {
        return this.config.get<string>('tmdbBaseUrl')
    }
    private get apiKey() {
        return this.config.get<string>('tmdbApiKey')
    }

    private mapToPreview(results: any[]): MoviePreview[] {
        return results.map((m) => ({
            id: m.id,
            title: m.title,
            poster_path: m.poster_path,
            backdrop_path: m.backdrop_path,
        }))
    }

    async getPopular(): Promise<SectionRowResponse> {
        const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}`
        const { data } = await firstValueFrom(this.http.get(url))

        return { results: this.mapToPreview(data.results) }
    }

    async getTopRated(): Promise<SectionRowResponse> {
        const url = `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}`
        const { data } = await firstValueFrom(this.http.get(url))
        return { results: this.mapToPreview(data.results) }
    }

    async getUpcoming(): Promise<SectionRowResponse> {
        const url = `${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}`
        const { data } = await firstValueFrom(this.http.get(url))
        return { results: this.mapToPreview(data.results) }
    }

    async search(query: string) {
        const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${encodeURIComponent(query)}`
        const { data } = await firstValueFrom(this.http.get(url))
        return data
    }

    async getById(id: string) {
        const url = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
        const { data } = await firstValueFrom(this.http.get(url))
        return data
    }

    async getVideos(id: string) {
        const url = `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`;
        const { data } = await firstValueFrom(this.http.get(url));
        return data;
    }

}
