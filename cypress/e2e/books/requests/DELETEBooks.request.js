/// <reference types="cypress" />

function deleteBooks(idBook) {
    return cy.request({
        method: 'DELETE',
        url: `/v1/Books/${idBook}`,
        failOnStatusCode: false
        
    })
}

export {deleteBooks }