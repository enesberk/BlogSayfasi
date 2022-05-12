const {Router} = require("express")
const router = Router()
const StudentController = require("../controllers/studentController")
const studentController = new StudentController()

router.get('/', async (req, res) => {
    const students = await studentController.GetAll()
    res.render('index', {
        students
    })
})

module.exports = router