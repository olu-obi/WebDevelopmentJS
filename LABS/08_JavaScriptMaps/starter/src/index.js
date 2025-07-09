let hanSolo = new Map
(
    [
    ["Vehicle",  "Millennium Falcon"],
    ["bff", "Chebacca"],
    ["sweetheart", "Leia"],
    ]
)
console.log(hanSolo.size)
console.log(`han Solo's ship is called ${hanSolo.get("Vehicle")}`)
console.log(`han Solo's sweetheart is called ${hanSolo.get("sweetheart")}`)
console.log(`han Solo's Jedi is called ${hanSolo.has("Jedi")}`)

hanSolo.set("son", "Ben")
console.log(`han Solo's son is called ${hanSolo.get("son")}`)

for (let [key, value] of hanSolo) 
    {
    console.log(`Han Solo's ${key} is ${value}`)
    }
    hanSolo.set("bff", "Luke")
    console.log(hanSolo)

    hanSolo.delete("son")
    console.log(hanSolo)
    hanSolo.clear()
    console.log(hanSolo)