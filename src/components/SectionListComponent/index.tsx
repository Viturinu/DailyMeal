import { Container, Description, DescriptionView, IconView, Separator, SeparatorView, Time, TimeDescriptionView, TimeView } from "./style";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    time: string,
    description: string,
    inDiet?: boolean,
    whatToDo: () => void
}
export function SectionListComponent({ time, description, inDiet = true, whatToDo, ...rest }: Props) {
    return (
        <Container onPress={whatToDo} {...rest}>
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

