
class City {
   
    constructor(connectedObj, powerLines, houses) {
        this.connectedObj = connectedObj;
        this.powerLines = powerLines;
        this.houses = houses;
    } 
    getNeededPowerForTown(){
        return (this.houses.map(item=>{
            Object.values(item)[1];
        }))
    }
}
City.connectedObj=[
    {
        type: "powerPlantMin",
        provideP: 1,
    },
    {
        type: "powerPlantMin",
        provideP: 100,
    },
    {
        type: "solarPannel",
        powerD: 1,
        powerN: 0,
    },
    {
        type: "solarPannel",
        powerD: 5,
        powerN: 0,
    },
]
City.houses=[
    {
        type: "house",
        consumeD: 4000,
        consumeN: 1,
        rooms: 1,
    },
    {
        type: "house",
        consumeD: 4000,
        consumeN: 1,
        rooms: 400,
    },
]
City.powerLines=[
    {
        canPassPower: 100,
        price: 1

    },
    {
        price: 2,
        canPassPower: 200,
    },
]
let city = new City(City.connectedObj, City.powerLines, City.houses)
city.getNeededPowerForTown()