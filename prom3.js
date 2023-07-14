cadenas = []

while True:
    entrada = input("Ingrese una cadena de texto (o 'cancelar' para salir): ")
    
    if entrada.lower() == "cancelar":
        break
    
    cadenas.append(entrada)

if cadenas:
    resultado = " - ".join(cadenas)
    print("Cadenas concatenadas:", resultado)
else:
    print("No se ingresaron cadenas.")
