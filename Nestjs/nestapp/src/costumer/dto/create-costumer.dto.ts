/* eslint-disable prettier/prettier */

import { IsNumber, IsString } from "class-validator";

export class createCostumerDto {
    @IsString()
    name: string;
    @IsNumber()
    age: number;
}