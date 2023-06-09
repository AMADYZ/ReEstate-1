const Router = require('express');
const router = Router();
const getPendAdmins = require('../controllers/pend.admins')
const user = require('../database/schemas/user')

router.get('/', getPendAdmins)

router.put('/', (req, res) => {
  const { username, Pending } = req.body;
  const update = { $set: { Pending: Pending } };

  user.updateOne({ username: username }, update)
    .then(() => {
      if (Pending) {
        console.log('Admin Accepted')
        res.send('success')
      } else {
        console.log('Admin Rejected')
      }
    })
    .catch((error) => {
      console.error('Error updating user attribute:', error);
      res.status(500).send('Error updating user attribute');
    });
});

module.exports = router;
