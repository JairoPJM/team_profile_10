const Manager = require("../lib/Manager")

test(" can set name through construtor", ()=>{
    const name="Jairo"
    const emp= new Manager(name)
    expect(emp.name).toBe(name)
})

test(" can set id through construtor", ()=>{
    const id="001"
    const emp= new Manager("Jairo", id)
    expect(emp.id).toBe(id)
})
test(" can set email through construtor", ()=>{
    const email="JairoMacassi@gmail.com"
    const emp= new Manager("Jairo","001","JairoMacassi@gmail.com")
    expect(emp.email).toBe(email)
})
test(" can set office number through construtor", ()=>{
    const officeNumber="21"
    const emp= new Manager("Jairo","001","JairoMacassi@gmail.com","21")
    expect(emp.officeNumber).toBe(officeNumber)
})

//do one for email


test(" can set office number through getOfficeNumber Method", ()=>{
    const officeNumber="21"
    const emp= new Manager("Jairo","001","JairoMacassi@gmail.com","21")
    expect(emp.getOfficeNumber()).toBe(officeNumber)
})

test("Can get role with getRole method", ()=>{
    const emp= new Manager(Manager)
    expect(emp.getRole()).toBe("Manager")
})

//do one for getId()
//do one for getEmail()
//do one for getRole()