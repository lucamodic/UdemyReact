const URL: string = "https://localhost:7050/api";

export const login = async (usuario: string, pass: string) => {
    const datos = {usuario, pass}
    const response = await fetch(URL+"/autenticacion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    }).then(response => response.text());
    return response;
};