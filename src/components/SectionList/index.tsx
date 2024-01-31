import { SafeAreaView, SectionList } from "react-native";
import { Container, Description, IconView, TextView } from "./style";

type inDietType = {
    inDiet: "GREEN" | "RED";
}

type Props = {
    date: string;
    properties: [
        time: string,
        description: string,
        inDiet: inDietType,
    ]
}

export function SectionListComponent({ date, properties }: Props) {
    return (
        <Container>
            <TextView>
                <Date>{date}</Date>
                <Description>{properties[1]}</Description>
            </TextView>
            <IconView Icon={properties[2].inDiet} />
        </Container>
    )
}

