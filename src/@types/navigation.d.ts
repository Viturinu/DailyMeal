export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            form: undefined;
            meal: {
                dietIn: boolean;
                Title: string;
                Description: string;
                Time: string;
            };
            outcome: {
                type: boolean;
            }
            statistics: undefined;
        }
    }
}