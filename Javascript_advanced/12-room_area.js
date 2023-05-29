/*
En resumen, bind se utiliza aquí para vincular el contexto (this) de la función
flecha getArea al objeto roomDimensions, lo que permite acceder correctamente
a las propiedades del objeto cuando se llama a la función boundGetArea.
*/
const roomDimensions = {
    width: 50,
    length: 100,
    getArea: () => this.width * this.length
}
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);