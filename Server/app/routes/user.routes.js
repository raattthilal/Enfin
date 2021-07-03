
module.exports = (app, methods) => {
    const User = methods.loadController('user');
    User.methods.get('list', User.listUser, { auth: true });
    User.methods.get(':id', User.getUser, { auth: true });
    User.methods.post('create', User.createUser, { auth: false });
}