

export interface PropertyBoxData {
    type: "container" | "items",
    title: string,
    description?: string,
    count: number,
    classContainer: string,
    classItems: string,
    disableOrderOn3: boolean,
    items: Array<FlexItem>
}

export interface FlexItem {
    tailwind: string,
    tailwindDescription?: string,
    css: string,
    classContainer?: string,
    classItems?: string,
    oneItemClass?: string
}