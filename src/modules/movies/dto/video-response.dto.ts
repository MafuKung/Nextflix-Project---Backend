import { ApiProperty } from '@nestjs/swagger'

export class VideoDto {
  @ApiProperty({ example: '533ec654c3a36854480003eb', description: 'Video ID' })
  id: string

  @ApiProperty({ example: 'SUXWAEX2jlg', description: 'YouTube video key' })
  key: string

  @ApiProperty({ example: 'Official Trailer', description: 'Video title' })
  name: string

  @ApiProperty({ example: 'YouTube', description: 'Video hosting site' })
  site: string

  @ApiProperty({ example: 'Trailer', description: 'Video type' })
  type: string
}

export class VideoResponseDto {
  @ApiProperty({ type: [VideoDto], description: 'Array of video objects' })
  results: VideoDto[]
}
