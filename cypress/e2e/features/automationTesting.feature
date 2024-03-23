Feature: Registro Formulario de Contacto

  Yo quiero registrar un formulario de contacto
  
  @focus
  Scenario: Registrar contacto
    Given Acceso al Portal  
    Given Ingreso Nombre
    Given Ingreso Apellido
    Given Ingreso Direccion
    Given Ingreso Comentarios    
    #Then I see "Google" in the title