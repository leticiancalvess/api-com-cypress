import * as POSTBooks from '../requests/POSTBooks.request';

context('POST Books', () => {
    it('Adicionar um novo livro', () => {
        POSTBooks.addBook().then((response) => {
            expect(response.status).to.eq(200);
            cy.log(response);
            expect(response.body.title).to.eq("Livro 1");
        })
    })
})