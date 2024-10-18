import data from "../data/products.json";

// devuelve todos los elementos encontrado en "data"
export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    })
}

// devulve el item encontrado en data segun su id //
// se crea una promesa y se busca el item por id
// si se encuentra el item se resuelve devolviendolo
// sino devuelve un objeto con elemento error
export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find(element => element.id === id);
        if (item) {
            resolve(item)
        } else {
            reject({ error: "No se encontró el producto" });
        }
    })
}