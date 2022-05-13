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

router.post('/add', async (req, res) => {
    try {
        const {name, no, className} = req.body
        const result = await studentController.Create(name, no, className)
        if (!result) return res.status(444).json({
            message: 'Error'
        })
        return res.status(200).json({
            message: 'Öğrenci eklendi',
            result
        })
    } catch (error) {
        return res.status(444).json({
            message: 'Öğrenci eklenemedi!'
        })
    }
})

router.post('/detail', async (req, res) => {
    try {
        const detail = await studentController.GetById(req.body.id)
        if (!detail) return res.status(444).json({
            message: 'Error'
        })
        return res.status(200).json({
            message: 'Öğrenci detayını getirme başarılı',
            detail
        })
    } catch (error) {
        return res.status(444).json({
            message: 'Öğrenci detayı getirilemedi!'
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
            message: 'Öğrenci bilgileri güncellendi',
            result
        })
    } catch (error) {
        return res.status(444).json({
            message: 'Öğrenci bilgileri güncellenirken hata!'
        })
    }
})

router.delete('/delete', async (req, res) => {
    try {
        const result = await studentController.DeleteById(req.body.id)
        if (!result) return res.status(444).json({
            message: 'Error'
        })
        return res.status(200).json({
            message: 'Öğrenci bilgisi silindi',
            result
        })
    } catch (error) {
        return res.status(444).json({
            message: 'Öğrenci bilgisi silinirken hata'
        })
    }
})

module.exports = router