const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
// /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
// /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);
    
// Set up GET, POST, and DELTE at /api/users/:userId/friends/:friendId
// /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;