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

//do one for email

test(" can set name through getName Method", ()=>{
    const name="Jairo"
    const emp= new Employee(name)
    expect(emp.getName()).toBe(name)
})

//do one for getId()
//do one for getEmail()
//do one for getRole()