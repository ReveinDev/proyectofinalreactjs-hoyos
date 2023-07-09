import menu from "../data/menu.json";

export const obtenerItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(menu);
        }, 2000);
    });
}

export const obtenerItemsId = (id) => {
    return new Promise((resolve, reject) => {
        const item = menu.find((e) => e.id === id);

        if(item) {
            resolve(item);
        } else {
            reject({
                error: "Item no encontrado"
            });
        }
    });
}