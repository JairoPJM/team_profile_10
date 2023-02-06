const Intern = require("../lib/Intern")

test(" can set name through construtor", ()=>{
    const name="Jairo"
    const emp= new Intern(name)
    expect(emp.name).toBe(name)
})

test(" can set id through construtor", ()=>{
    const id="001"
    const emp= new Intern("Jairo", id)
    expect(emp.id).toBe(id)
})
test(" can set email through construtor", ()=>{
    const email="JairoMacassi@gmail.com"
    const emp= new Intern("Jairo","001","JairoMacassi@gmail.com")
    expect(emp.email).toBe(email)
})
test(" can set office number through construtor", ()=>{
    const school="East-Paulding"
    const emp= new Intern("Jairo","001","JairoMacassi@gmail.com","East-Paulding")
    expect(emp.school).toBe(school)
})

//do one for email


test(" can set office number through getOfficeNumber Method", ()=>{
    const School="East-Paulding"
    const emp= new Intern("Jairo","001","JairoMacassi@gmail.com","East-Paulding")
    expect(emp.getSchool()).toBe(School)
})

test("Can get role with getRole method", ()=>{
    const emp= new Intern(Intern)
    expect(emp.getRole()).toBe("Intern")
})

//do one for getId()
//do one for getEmail()
//do one for getRole()