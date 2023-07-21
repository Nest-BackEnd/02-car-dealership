import { IsString, IsUUID } from "class-validator";

export class CreateCarDto {

    // @IsUUID()
    // id: string;

    @IsString({ message: 'The Brand most be a cool string' })
    readonly brand: string;
    
    @IsString()
    readonly model: string;
    
}