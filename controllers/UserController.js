const { User } = require('../models')

const GetUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.send(users)
    } catch (error) {
        throw error
    }
}

const GetUserProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.user_id)
        res.send(user)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetUsers,
    GetUserProfile
}