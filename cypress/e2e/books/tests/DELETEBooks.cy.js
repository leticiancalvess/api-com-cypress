import * as DELETEBooks from '../requests/DELETEBooks.request';
import * as GETBooks from '../requests/GETBooks.request';

describe('Delete Books', () => {
it.only('deve deletar um livro', () => {
    GETBooks.allBooks().then((resAllBooks) => {
       cy.log(resAllBooks.body[0].id);
       DELETEBooks.deleteBooks(resAllBooks.body[0].id).then((resDelete) => {
        expect(resDelete.status).to.eq(200);
       })
      
    })
  
 
})
})