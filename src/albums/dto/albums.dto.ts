import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class AlbumsDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsString()
  @IsUUID()
  artistId: string | null; // refers to Artist
}
