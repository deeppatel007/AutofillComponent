import express, { response } from 'express';

import Medicine from '../schema/Medicine.js';

const router=express.Router();


router.get('/medicine/search', async (req,res,err) => {
    const exist = await Medicine.find(req.query);
    if(exist){
        return res.json(exist);
    }
    else{
        return res.json('medicine not found');
    }
})

router.get('/medicine', async (req,res,err) => {
    try {
        const medicine = await Medicine.find({});
        return res.json(medicine);
    }
    catch(error)
    {
        console.log('Error: ', error.message);
    }
})



export default router;