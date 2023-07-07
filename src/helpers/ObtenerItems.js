import menu from "../data/menu.json";

export const obtenerItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(menu);
        }, 2000);
    });
}