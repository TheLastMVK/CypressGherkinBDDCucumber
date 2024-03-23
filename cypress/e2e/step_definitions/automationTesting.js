import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://automationtesting.co.uk/contactForm.html'

Given('Acceso al Portal', () => {
  cy.visit(url)
})

Given('Ingreso Nombre', () => {
    cy.get('input[name="first_name"]').type("Jorge")
  })

  Given('Ingreso Apellido', () => {
    cy.get('input[name="last_name"]').type("Cisneros")
  })

  Given('Ingreso Direccion', () => {
    cy.get('input[name="email"]').type("cisneros@gmail.com")
         //input[placeholder='Email Address']
  })

  Given('Ingreso Comentarios', () => {
    cy.get('textarea[placeholder="Comments"]').type("ejecución de prueba")
  })