import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(2)
  name: string;
  @IsEnum(['stars', 'nunchucks'], { message: 'Use correct weapon'})
  weapon: 'stars' | 'nunchucks'
};
