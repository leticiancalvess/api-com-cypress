/// <reference types="cypress" />

const payloadAddBook = require('../payloads/Add-Book.json');


function addBook() {
    return cy.request({
        method: 'POST',
        url: '/v1/Books',
        failOnStatusCode: false,
        body: payloadAddBook
    })
}

export { addBook };