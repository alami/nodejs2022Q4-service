import { IsNotEmpty, IsUUID } from 'class-validator';
import { Artist, Track, Album } from "src/models/Interfaces";
export class FavoritesDto {
  @IsUUID()
  @IsNotEmpty()
  artists: Artist[];

  @IsUUID()
  @IsNotEmpty()
  albums: Album[];

  @IsUUID()
  @IsNotEmpty()
  tracks: Track[];
}
