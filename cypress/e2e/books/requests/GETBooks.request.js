/// <reference types="cypress" />

function allBooks() {
    return cy.request({
        method: 'GET', 
        url: '/v1/Books',
        failOnStatusCode: false //qnd uma req nao da 200, dá failed no teste. pra api, é preciso testar se vai ser 200 ou nao, entao coloca o false, pra nao quebrar o teste
        
    })
}

export { allBooks };