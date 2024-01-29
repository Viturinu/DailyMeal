import React from "react";
import { LoadIndicator } from "./style";
import { Container } from "./style";

export function Loading() {
    return (
        <Container>
            <LoadIndicator />
        </Container>
    )
}