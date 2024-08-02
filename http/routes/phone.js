import {Router} from 'express'
import * as productPhoneCtrl from '../../ctrls/phone.js'
import createError from 'http-errors';

const router = Router();

router.get('/phone/:id',(req,res,next)=>{
    const id = Number(req.params.id)
    const { findPhoneById } = productPhoneCtrl;
    
    const item = findPhoneById(id);

    if(!item){
        const err = createError(404)
        next(err)
        return
    }
    res.render('phone',{item})
})

export default router;