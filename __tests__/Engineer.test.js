const Engineer = require("../lib/Engineer")

test(" can set name through construtor", ()=>{
    const name="Jairo"
    const emp= new Engineer(name)
    expect(emp.name).toBe(name)
})

test(" can set id through construtor", ()=>{
    const id="001"
    const emp= new Engineer("Jairo", id)
    expect(emp.id).toBe(id)
})
test(" can set email through construtor", ()=>{
    const email="JairoMacassi@gmail.com"
    const emp= new Engineer("Jairo","001","JairoMacassi@gmail.com")
    expect(emp.email).toBe(email)
})
test(" can set office number through construtor", ()=>{
    const github="JairoPJM"
    const emp= new Engineer("Jairo","001","JairoMacassi@gmail.com","JairoPJM")
    expect(emp.github).toBe(github)
})

//do one for email


test(" can set office number through getOfficeNumber Method", ()=>{
    const github="JairoPJM"
    const emp= new Engineer("Jairo","001","JairoMacassi@gmail.com","JairoPJM")
    expect(emp.getGithub()).toBe(github)
})

test("Can get role with getRole method", ()=>{
    const emp= new Engineer(Engineer)
    expect(emp.getRole()).toBe("Engineer")
})

//do one for getId()
//do one for getEmail()
//do one for getRole()