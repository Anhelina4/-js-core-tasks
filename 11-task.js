const listCity = [
         { country: 'Japan',city: 'Tokyo', population: '39105'},
        { country: 'India',city: 'Delhi', population: '31870'},
        { country: 'Indonesia',city: 'Jakarta', population: '35362'},
        { country: 'Brazil',city: 'Sao-Paulo', population: '22495'},
        {country: 'USA', city: 'New-York', population: '20902'},
        { country: 'Mumbai',city: 'India', population: '22186'},
        { country: 'Philippines',city: 'Manila', population: '23971'},
    ]

    listCity.sort(function(a, b){
        if(a.population>b.population){
            return -1
        }
        if(a.population<b.population){
            return 1
        }
        return 0
    })
    console.log(listCity)

    function showCities(obj, amount){
        console.log("The most crowded cities are: ")
        for(var i=0; i<amount; i++){
            console.log(obj[i].city) 
        }
     
    }
    showCities(listCity, 3)