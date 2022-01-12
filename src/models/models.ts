

export interface PropertyBoxData {
    type: "container" | "items",
    title: string,
    items: Array<FlexItem>
}

export interface FlexItem {
    tailwind: string,
    css: string,
    classContainer: string,
    classItems: string
}