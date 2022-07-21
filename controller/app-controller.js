export default (app,db)=>{
    app.get('/tips', function (req, res) {  
        
        res.json({
            "tips": db.tips[parseInt(Math.random() * db.tips.length)] 
        })
    
    app.post('.create', function (req, res) {
        const body = req.body;
        db.tips.push(body.dica)
        res.json(body)
    })
}
)}