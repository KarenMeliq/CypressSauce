

export class TestDeleteItem{

    testDeleteItem(){

        let item_deleted = cy.get('#remove-sauce-labs-bike-light').click()
        item_deleted.should('not.exist')
    }
} 
