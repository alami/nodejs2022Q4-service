import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class TracksDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUUID()
  @IsNotEmpty()
  artistId: string | null; // refers to Artist

  @IsUUID()
  @IsNotEmpty()
  albumId: string | null; // refers to Album

  @IsNumber()
  @IsNotEmpty()
  duration: number; // integer number
}
