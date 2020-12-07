const Student = require('../models').Student;

exports.student_list = (req, res, next) => {
    Student.findAll({
        attributes: ['id', 'name', 'age']
    })
        .then( students => res.status(200).json(students))
        .catch(err => console.log(err))
}

exports.student_add = (req, res, next) => {
    const student = req.body;
    Student.create(student)
        .then(studentCreated => {
            res.status(201).json(studentCreated)
        })
        .catch(err => console.log(err))
}

exports.student_detail = (req, res, next) => {
    const id = req.params.id;
    //student.findByPk(id)
    //Student.findOne({
       // where: {
       //     id: id
     //   }
   // })
    Student.findByPk(id)
        .then(student => res.status(200).json(student))
        .catch(err => console.log(err))
}

exports.student_edit = (req, res, next) => {
    const id = req.params.id;
    const student = req.body;
    Student.update(student, {
        where: {
            id: id
        }
    })
        .then(() => {
            res.status(200).json({message: 'Student Update'})
        })
        .catch(err => console.log(err))
}

exports.student_delete = (req, res, next) => {
    const id = req.params.id;
    Student.destroy({
        where: {
            id: id
        }
    })
        .then(() => {
            res.status(200).json({message: 'Student Deleted'})
        })
        .catch(err => console.log(err))
}

