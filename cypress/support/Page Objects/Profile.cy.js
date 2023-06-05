// <reference types="cypress" />
class Profile{

  userNameLabel() {
    cy.get("userName-label")
  }

  goToBookStore() {
    cy.get("#gotoStore")
  }

  deleteAccount() {
    cy.get("(#submit)")
  }
}

export default Profile