export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            addMeal: undefined;
            meal: {
                dietIn: boolean;
                title: string;
                description: string;
                time: string;
                date: string;
            };
            outcome: {
                type: boolean;
            }
            statistics: undefined;
            editMeal: {
                nameRoute: string;
                descriptionRoute: string;
                dietDateRoute: string;
                dietTimeRoute: string;
                dietInRoute: boolean;
            }
        }
    }
}