/// <reference types="cypress" />

const Putbooks = require('../payloads/Put-books.json');

function putBooks(idBook) {
    return cy.request({
        method: 'PUT',
        url: `/v1/Books/${idBook}`,
        headers: {
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: Putbooks
        
    })
}

export {putBooks }