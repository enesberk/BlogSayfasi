const Student = require('../models/Student')

class StudentController {
    async Create(name, no, className) {
        try {
            const result = await Student.create({name, no, className})
            if(result) return true
            return false
        } catch (error) {
            return null
        }
    }

    async GetAll() {
        try {
            const students = await Student.find().lean()
            return students
        } catch (error) {
            return null
        }
    }

    async GetById(id) {
        try {
            const student = await Student.findById(id).lean()
            return student
        } catch (error) {
            return null
        }
    }

    async UpdateById(id, name, no, className) {
        try {
            const result = await Student.findByIdAndUpdate(id, {name, no, className})
            if(result == null) {
                return false
            }
            return true
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async DeleteById(id) {
        try {
            const result = await Student.findByIdAndDelete(id)
            if(result) return true
            return false
        } catch (error) {
            return null
        }
    }
}

module.exports = StudentController