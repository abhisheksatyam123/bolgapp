import express form "express"

const app=express()

app.use(exress.json())

app.listem(8800,()=>{
	console.log("connected to port 8800")
})
