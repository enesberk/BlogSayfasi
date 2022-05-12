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

router.post('/detail', async (req, res) => {
    try {
        const detail = await studentController.GetById(req.body.id)
        if (!detail) return res.status(444).json({
            message: 'Error'
        })
        return res.status(200).json({
            message: 'OK',
            detail
        })
    } catch (error) {
        return res.status(444).json({
            message: 'Hata'
        })
    }
})

router.put('/update', async (req, res) => {
    try {
        const {id, name, no, className} = req.body
        const result = await studentController.UpdateById(id, {name, no, className})
        if (!result) return res.status(444).json({
            message: 'Error'
        })
        return res.status(200).json({
            message: 'OK',
            result
        })
    } catch (error) {
        return res.status(444).json({
            message: 'Hata'
        })
    }
})

module.exports = router