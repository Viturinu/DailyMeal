import { Container, Description, DescriptionView, IconView, Separator, SeparatorView, Time, TimeDescriptionView, TimeView, inDietType } from "./style";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    time: string,
    description: string,
    inDiet?: inDietType,
}
export function SectionListComponent({ time, description, inDiet = "GREEN", ...rest }: Props) {
    return (
        <Container {...rest}>
            <TimeDescriptionView>
                <TimeView>
                    <Time>{time}</Time>
                </TimeView>
                <SeparatorView>
                    <Separator>|</Separator>
                </SeparatorView>
                <DescriptionView>
                    <Description>{description}</Description>
                </DescriptionView>
            </TimeDescriptionView>
            <IconView Icon={inDiet} />
        </Container>
    )
}

