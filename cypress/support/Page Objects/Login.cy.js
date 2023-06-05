
// <reference types="cypress" />
class LoginPage {

  userName(){
    return cy.get("#userName")
  }

  password(){
    return cy.get("#password")
  }

  login(){
    return cy.get("#login")
  }

  newUser(){
    return cy.get("#newUser")
  }

}


export default LoginPage