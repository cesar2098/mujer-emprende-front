export class Product {
    idCatalogos: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string[];

    constructor(idCatalogos: number, nombre: string, descripcion: string, precio: number, imagen: string[]) {
        this.idCatalogos = idCatalogos;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }
}
