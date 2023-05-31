import { Adress } from "./address";
import { Gender } from "./gender";

export interface Student {
id:number,
firstName:string,
lastName:string,
dateOfBirth:Date,
email:string,
mobile:string,
profileImageUrl:string,
genderId:number;
gender:Gender
address:Adress
}
