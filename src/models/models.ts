

export interface PropertyBoxData {
    type: "container" | "items",
    title: string,
    count: number,
    items: Array<FlexItem>
}

export interface FlexItem {
    tailwind: string,
    css: string,
    classContainer: string,
    classItems: string,
    oneItemClass?: string
}