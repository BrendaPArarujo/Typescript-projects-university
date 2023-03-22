import { Client } from "./Client"
import { Service } from "./Service"
import { Employee } from "./Employee"

class Attendance{
    private id: number
    private date: Date
    private client: Client
    private service: Service
    private employee: Employee

    constructor(id: number, date: Date, client: Client, service: Service, employee: Employee){
        this.setId(id)
        this.setDate(date)
        this.setClient(client)
        this.setService(service)
        this.setEmployee(employee)

    }

    setDate(date: Date){
        this.date = date
    }

    getDate():Date{
        return this.date
    }

    setClient(client: Client){
        this.client = client
    }

    getClient():Client{
        return this.client
    }
    
    setId(id: number){
        this.id = id
    }

    getId():number{
        return this.id
    }

    setEmployee(employee: Employee){
        this.employee = employee
    }

    getEmployee():Employee{
        return this.employee
    }

    setService(service: Service){
        this.service = service
    }

    getService():Service{
        return this.service
    }

    toString():string{
        return `ID: ${this.getId()} Date: ${this.getDate()} client: ${this.getClient()} employee: ${this.getEmployee()} service: ${this.getService()}`
    }


}

let antendente1 = new Employee(1,1,"Jéssica")
let cliente1 = new Client(1, "Josefina","3664334")
let servico1 = new Service(1,"unha", 10)
let employee1 = new Employee(1,1,"Brenda")
let atendimento1 = new Attendance(1, new Date(), cliente1, servico1, employee1)
console.log(atendimento1.toString())
console.log(atendimento1.getService().getPrice())//resposta 1 da tarefa
console.log(atendimento1.getClient().getName())//resposta 2 da tarefa
console.log(atendimento1.getEmployee().getName())//resposta 3 da tarefa

//Lição de casa
//1. mostrar apenas o preço do serviço prestado no atendimento
//2. mostrar apenas o nome do cliente atendido
//3. mostrar apenas o nome do empregado que atendeu