export class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];

    constructor(id: number, title: string, description: string, price: number, images: string[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.images = images;
    }
}
