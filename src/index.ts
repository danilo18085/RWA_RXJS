
async function tajmer()
{
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            let br = Math.round(Math.random() * 20)
            if (br >= 6)
                resolve(br)
            else
                reject("Broj je manji od 5 " + br)
        }, 1500)    
    })
}


async function main()
{
    try{
    for(let i = 0; i < 3; i++)
    {
        let broj = await tajmer()
        console.log("Iteracija: "+i+" "+broj )
    }
    }
    catch(e)
    {
        console.log(e)
    }

}

console.log("Ulazim u main!")
main()
console.log("Posle maina")