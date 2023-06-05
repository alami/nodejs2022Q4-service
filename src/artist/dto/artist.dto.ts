import { IsBoolean,
  IsNotEmpty, IsOptional, IsString} from 'class-validator';
export class ArtistDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsNotEmpty()
  grammy: boolean;
}