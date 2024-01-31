import { SafeAreaView, SectionList } from "react-native";
import { Container, Description, IconView, TextView, Time, inDietType } from "./style";

type Props = {
    time: string,
    description: string,
    inDiet?: inDietType,
}
export function SectionListComponent({ time, description, inDiet = "GREEN" }: Props) {
    return (
        <Container>
            <TextView>
                <Time>{time}</Time>
                <Description>{description}</Description>
            </TextView>
            <IconView Icon={inDiet} />
        </Container>
    )
}

