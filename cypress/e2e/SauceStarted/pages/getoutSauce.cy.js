export class GetoutSauce{

    logoutSauce(){
        
        cy.get('#react-burger-menu-btn').click()
        cy.get('[id="logout_sidebar_link"]').click()

        
    }
}