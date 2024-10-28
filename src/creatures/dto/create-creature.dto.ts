import { ApiProperty } from "@nestjs/swagger";

export class CreateCreatureDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    difficultyLevel: string;
    @ApiProperty()
    type: string
    
}
