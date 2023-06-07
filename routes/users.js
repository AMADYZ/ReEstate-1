const Router = require('express');
const router = Router();
const user = require('../database/schemas/user');
const getUsers = require('../controllers/getUsers');

router.get('/', getUsers);
router.delete('/', async (req, res) => {
    try {
        const username = req.body.username;
        const deletedUser = await user.findOneAndDelete({ username: username }).exec();

        if (deletedUser) {
            console.log('User deleted:', deletedUser);
            res.status(200).send('User deleted successfully');
        } else {
            console.log('User not found');
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
