import { ApiProperty } from '@nestjs/swagger'

export class MoviePreviewDto {
  @ApiProperty({ example: 123, description: 'Movie ID' })
  id: number

  @ApiProperty({ example: 'Inception', description: 'Movie title' })
  title: string

  @ApiProperty({
    example: '/abc123.jpg',
    description: 'Poster image path',
    required: false,
  })
  poster_path?: string
}

export class SectionRowResponseDto {
  @ApiProperty({ type: [MoviePreviewDto] })
  results: MoviePreviewDto[]
}
