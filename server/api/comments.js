const router = require('express').Router()
const Comments = require('../db/models/comments')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const newComment = await Comments.create(req.body)

    res.status(201).json(newComment)
    //make it so it redirects to a page that says your message was sent!
  } catch (err) {
    next(err)
  }
})
