import * as GETBooks from '../requests/GETBooks.request';

describe('GET Books', () => {
     it('Listar os livros', () => {
        GETBooks.allBooks().should((response) => {
            cy.log(response);
        });
     }) 
})