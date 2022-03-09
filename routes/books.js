import { Router } from 'express'
import * as booksCtrl from "../controllers/books.js"

const router = Router()

router.get('/new', booksCtrl.new)
router.get("/", booksCtrl.index)
router.post("/", booksCtrl.create)
router.delete("/:id", booksCtrl.delete)

export {
  router
}