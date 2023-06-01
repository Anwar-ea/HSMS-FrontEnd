import { MedicineType } from "./enums/Medicine-Type-Enum";
import { PotencyUnits } from "./enums/potency-units";

export interface IMedicinerequest{
    name: string,
    potency: number,
    salt: string,
    price: number,
    medicineType: MedicineType,
    potencyUnits: PotencyUnits      
}