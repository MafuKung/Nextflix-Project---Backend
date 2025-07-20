import { ApiProperty } from '@nestjs/swagger'

export class GenreDto {
  @ApiProperty({ example: 28, description: 'Genre ID' })
  id: number

  @ApiProperty({ example: 'Action', description: 'Genre name' })
  name: string
}

export class MovieDetailDto {
  @ApiProperty({ example: 550, description: 'Movie ID' })
  id: number

  @ApiProperty({ example: 'Fight Club', description: 'Movie title' })
  title: string

  @ApiProperty({ example: 'An insomniac office worker...', description: 'Movie overview' })
  overview: string

  @ApiProperty({ example: 139, description: 'Runtime in minutes' })
  runtime: number

  @ApiProperty({ type: [GenreDto], description: 'List of genres' })
  genres: GenreDto[]

  @ApiProperty({ example: '1999-10-15', description: 'Release date' })
  release_date: string

  @ApiProperty({
    example: '/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg',
    description: 'Poster image path',
    required: false,
  })
  poster_path?: string

  @ApiProperty({
    example: '/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg',
    description: 'Backdrop image path',
    required: false,
  })
  backdrop_path?: string
}
