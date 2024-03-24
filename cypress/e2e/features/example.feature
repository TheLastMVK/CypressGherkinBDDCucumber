Feature: Comprar productos
@focus 
    Scenario Outline: Buscar Producto
        Given Ingreso a la Web exito.com para Comprar
        When Busco un producto de nombre "<nombreProducto>"
        Examples:
            | nombreProducto |
            | Mochilas  |
            | Macbook  |