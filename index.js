const express= require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/api/:number', (req, res)=>{
    const number = req.params.number
    let numberString = ["Satu", "Se", "Dua ", "Tiga ", "Empat ", "Lima ", "Enam ", "Tujuh ", "Delapan ", "Sembilan "]
    
    let numberSplit = number.split("")
    let numberSend = new Array()
    
    let angka=""
    for(let i=0; i < numberSplit.length; i++){
        if(numberSplit[i] != 0){
            for(let j = 1; j < numberString.length; j++){
                if(parseInt(numberSplit[i]) == j){
                    if(i == numberSplit.length-1){
                        if(parseInt(numberSplit[i]) == 1){
                            angka+=numberString[0]
                        }else{
                            angka+= numberString[j]
                        }
                    }else{
                        angka+= numberString[j]
                    }     
                }
            }
            if(numberSplit.length-i == 4){
                angka+="ribu"
            }else if(numberSplit.length-i == 3){
                angka+="ratus"
            }else if(numberSplit.length-i == 2){
                angka+="puluh"
            }
            numberSend.push(angka)
            angka=""
        }
    }
    res.send(numberSend)
    
})
app.listen('5000', () => {console.log("Server running!")})