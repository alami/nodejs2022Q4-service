import { IsOptional } from 'class-validator';
import { Artist, Track, Album } from 'src/models/Interfaces';
export class FavoritesDto {
  @IsOptional()
  artists: Artist[];

  @IsOptional()
  albums: Album[];

  @IsOptional()
  tracks: Track[];
}
