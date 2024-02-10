interface OficialMealDTO {
    name: string;
    description: string;
    date: Date;
    dietIn: boolean;
}
interface OficialObjectDTO {
    title: string,
    data: OficialMealDTO[]
}

export { OficialMealDTO, OficialObjectDTO };