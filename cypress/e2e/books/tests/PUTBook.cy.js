import * as putBooks from '../requests/PUTBooks.request';
import * as GETBooks from '../requests/GETBooks.request';

context('PUT Books', () => {
    it('Atualizar um novo livro', () => {
        GETBooks.allBooks().then((responseGet) => {
            cy.log(responseGet.body[0].id);
            putBooks.putBooks(responseGet.body[0].id).then((responsePut) => {
                expect(responsePut.status).to.eq(200);
                expect(responsePut.body.title).to.eq('Livro um');
            })
        })
    
    })
})