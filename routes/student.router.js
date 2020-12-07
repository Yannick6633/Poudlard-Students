const express = require('express');
const router = express.Router();
const student_controller = require('../controllers/student.controller');

router.get('/', student_controller.student_list);
router.get('/:id', student_controller.student_detail);
router.post('/', student_controller.student_add);
router.put('/:id', student_controller.student_edit);
router.delete('/:id', student_controller.student_delete);

module.exports = router;
