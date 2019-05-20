const route = require('express').Router()
const authCtrl = require('../controllers/authController')
const authenticate = require('../middlewares/authenticate')
const multer = require('../helpers/images')

route.get('/user', authenticate, authCtrl.currentUser)
route.patch('/user', authenticate, authCtrl.update)
route.patch('/user/profpic', authenticate, multer.single('image'), authCtrl.updatePicture)

route.post('/register', authCtrl.register)
route.post('/login', authCtrl.login)
route.post('/google', authCtrl.googleSignIn)
route.get('/linkedin/redirect', authCtrl.linkedinRedirect)

module.exports = route