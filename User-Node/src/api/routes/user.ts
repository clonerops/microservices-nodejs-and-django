import express from "express"
import UserContoller from "../../controllers/userController"

const router = express.Router()

router.get("/", UserContoller.listOfUser)
router.get("/list-superuser", UserContoller.listOfSuperUser)
router.post("/create", UserContoller.createUser)
router.post("/create-superuser", UserContoller.createSuperUser)

export default router