const Midterm = require('./controllers/Midterm1-65')
const UserController = require('./controllers/UserController')

module.exports = (app) => {
    app.post('/user', UserController.create)
    
    app.put('/user/:userId', UserController.put)
    
    app.delete('/user/:userId', UserController.remove)
    
    app.get('/user/:userId', UserController.show)
    
    app.get('/users', UserController.index)

    app.post('/add1', Midterm.add1)

}