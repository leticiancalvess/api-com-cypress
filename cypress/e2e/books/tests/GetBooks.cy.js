import * as GETBooks from '../requests/GETBooks.request';

describe('GET Books', () => {
     it('Listar os livros', () => {
        GETBooks.allBooks().then((response) => {
            cy.log(response.statusText);
            cy.log(response.body);

            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        });
     }) 
})