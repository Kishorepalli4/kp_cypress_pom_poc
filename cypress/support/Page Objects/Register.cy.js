// <reference types="cypress" />
class RegisterPage {

      firstName() {
         return cy.get("#firstname")
      }

      lastName() {
         return cy.get("#lastname")
      }

      userName() {
         return cy.get("#userName")
      }

      password() {
         return cy.get("#password")
      }

      captcha() {
         return cy.get("#recaptcha-anchor")
      }

      regiser() {
         return cy.get("#register")
      }


}

export default RegisterPage