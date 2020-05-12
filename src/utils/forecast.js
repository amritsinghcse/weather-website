const request = require('request')


const forecast = ({latitude, longitude}, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=198d9a36b8bd8c3a3e08d7d926494d55&query=' + longitude + ',' + latitude
    request({url, json:true}, (error, {body} = {}) => {
   
        if(error) {
            callback("Unable to connect")
        } else if(body.error){
            callback("Loation not found")
        } else{
        
            callback(undefined, {
                forecast: body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees with ' + body.current.precip + '% chances of rain.'
            }) 
        }    
    })
}

module.exports=forecast