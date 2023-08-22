import express from "express"
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("hello, this is auth endpoint")
})
router.get("/reg", (req,res)=>{
    res.send("hello, this is register auth endpoint")
})
router.get("/regstraion", (req,res)=>{
    res.send("hello, this is registeration auth endpoint")
})

export default router