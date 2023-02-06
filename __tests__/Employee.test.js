const Employee=require("../lib/Employee")

test(" can set name through construtor", ()=>{
    const name="Jairo"
    const emp= new Employee(name)
    expect(emp.name).toBe(name)
})

test(" can set id through construtor", ()=>{
    const id="001"
    const emp= new Employee("Jairo", id)
    expect(emp.id).toBe(id)
})
test(" can set email through construtor", ()=>{
    const email="JairoMacassi@gmail.com"
    const emp= new Employee("Jairo","001","JairoMacassi@gmail.com")
    expect(emp.email).toBe(email)
})

//do one for email

test(" can set name through getName Method", ()=>{
    const name="Jairo"
    const emp= new Employee("Jairo")
    expect(emp.getName()).toBe(name)
})
test(" can set Id through getId Method", ()=>{
    const id="001"
    const emp= new Employee("Jairo","001")
    expect(emp.getId()).toBe(id)
})

test(" can set email through getEmail Method", ()=>{
    const email="JairoMacassi@gmail.com"
    const emp= new Employee("Jairo","001","JairoMacassi@gmail.com")
    expect(emp.getEmail()).toBe(email)
})
test("Can get role with getRole method", ()=>{
    const emp= new Employee(Employee)
    expect(emp.getRole()).toBe("Employee")
})

//do one for getId()
//do one for getEmail()
//do one for getRole()