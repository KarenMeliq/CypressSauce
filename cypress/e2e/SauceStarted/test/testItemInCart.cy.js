

export class TestItemInCart{

  test_item(){
    cy.get('#item_0_title_link > div')
    .should('have.class', 'inventory_item_name')
      .and('contain', 'Sauce Labs Bike Light')
  
  }
    

}