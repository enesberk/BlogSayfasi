const Student = require('../models/Student')

class StudentController {
    async GetAll() {
        try {
            const students = await Student.find().lean()
            return students
        } catch (error) {
            return null
        }
    }
}

module.exports = StudentController