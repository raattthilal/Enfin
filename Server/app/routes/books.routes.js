
module.exports = (app, methods) => {
    
    const Book = methods.loadController('books');

    Book.methods.get('list', Book.listBook, { auth: true });
    Book.methods.get('get', Book.getBook, { auth: true });
    Book.methods.post('create', Book.createBook, { auth: true });
  
}