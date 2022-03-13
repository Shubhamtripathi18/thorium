let axios = require("axios")




let districtsbyId= async function(req,res){
    try{
        let district_id = req.query.district_id
        let date = req.query.date
        let steps ={
            method : 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
            }
            let result = await axios(steps)
            let districtdata=result.data 
            res.send(districtdata)
        }
        catch(error){
            res.send(err)
        

        } 
}

const getWeather = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        const cityObject = [];
        for (let i = 0; i < cities.length; i++) {
            let city={city:cities[i]}   // creating Object --> {city:"Banglore"}
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=d9c961ed068e52d532b8865ab347763d`
            }
            let result = await axios(options);
            
            let temperature = result.data.main.temp;
            city.temp=temperature    // adding a key "temp" to a object city and set value "temperature"

            cityObject.push(city) 
            // pushing the object with "city" key and "temp" key in empty "cityObject" array.
        }
        let sortedCityArr= cityObject.sort((a,b)=>(a.temp-b.temp))
        res.send(sortedCityArr)
}
    catch (err) {
        res.status(400).send(err)
    }

}




const meme = async function(req,res){
    let template_id = req.query.template_id
    let text0 = req.query.text0
    let text1= req.query.text1
    let username = req.query.username
    let  password = req.query.password
    
let option={
methods: "post" ,
url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
    }
    let result= await axios(option)
    let mymeme = result.data
    res.send(mymeme)
}



module.exports.districtsbyId=districtsbyId
module.exports.meme=meme
module.exports.getWeather=getWeather