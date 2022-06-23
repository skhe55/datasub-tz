import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNumber, IsNumberString, IsPositive, Length } from "class-validator";
import { IsCustomDate } from "src/decorators/isDateCustom";

export class CreatePaymentDto {
    @ApiProperty({example: "1234567812345678", required: true})
    @Length(16,16)
    @IsDefined()
    @IsNumberString()
    card_number: string;
    
    @ApiProperty({example: "02/2021", required: true})
    @IsDefined()
    @IsCustomDate()
    expiration_date: Date;

    @ApiProperty({example: "123", required: true})
    @Length(3,3)
    @IsDefined()
    @IsNumberString()
    cvv: string;

    @ApiProperty({example: "100", required: true, description: 'positive number'})
    @IsPositive()
    @IsDefined()
    @IsNumber()
    amount: number;
}