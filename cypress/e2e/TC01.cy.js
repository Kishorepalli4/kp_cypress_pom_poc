// <reference types="cypress" />

import RegisterPage from "../support/Page Objects/Register.cy";
import LoginPage from "../support/Page Objects/Login.cy";

describe("My first test suite", ()=> {
    it ("My First test case", ()=> {
        
        cy.visit("https://demoqa.com/register");


        const regiser = new RegisterPage();
        regiser.firstName().type("Kp")
        regiser.lastName().type("Test")
        regiser.userName().type("kp_test01")
        regiser.password().type("Palli004")
        regiser.captcha().click();
        regiser.regiser().click();


    })
    
})