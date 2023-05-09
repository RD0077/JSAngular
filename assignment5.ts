interface IVehicle{
    make:string
    model:string
    year:number
    getVehicle():string
}
var vehicle1:IVehicle={
    make:"abc",
    model:"abc",
    year:2012,
    getVehicle():string{
        return ("Make:"+this.make+" Model:"+this.model+" Year:"+this.year)
    }
}
var vehicle2:IVehicle={
    make:"xyz",
    model:"xyz",
    year:2013, getVehicle():string{
        return ("Make:"+this.make+" Model:"+this.model+" Year:"+this.year)
    }
}
var vehicle3:IVehicle={
    make:"pqr",
    model:"pqr",
    year:2014,
    getVehicle():string{
        return ("Make:"+this.make+" Model:"+this.model+" Year:"+this.year)
    }
}
var vehicle4:IVehicle={
    make:"lmn",
    model:"lmn",
    year:2015,
    getVehicle():string{
        return ("Make:"+this.make+" Model:"+this.model+" Year:"+this.year)
    }
}
var vehicleArray:IVehicle[]=[vehicle1,vehicle2,vehicle3,vehicle4]
for(var IVehicle1 of vehicleArray){
    console.log(IVehicle1.getVehicle())
}