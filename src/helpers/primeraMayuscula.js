export function capitalizeFirstLetter(str) {
    if (str.length === 0) return str; // Si la cadena está vacía, la devuelve como está.
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}