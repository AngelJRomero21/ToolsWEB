const input = document.querySelector("#input");
const output = document.querySelector("#output");
const error = document.querySelector("#error");

document.querySelector("#format").addEventListener("click", () => {
  try {
    const data = JSON.parse(input.value);
    output.textContent = JSON.stringify(data, null, 2);
    error.textContent = "";
  } catch {
    output.textContent = "";
    error.textContent = "El JSON introducido no es válido.";
  }
});

document.querySelector("#copy").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(output.textContent);
    error.textContent = "Resultado copiado.";
  } catch {
    error.textContent = "No se pudo copiar el resultado.";
  }
});