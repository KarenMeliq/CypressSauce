export class LoginSauce{

     loginSauce(){

        
        cy.get('[id="user-name"]').type("standard_user")
        cy.get('[id="password"]').type("secret_sauce")
        cy.get('[id="login-button"]').click()

     }

}