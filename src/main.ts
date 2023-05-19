import Departamento from "./departamento/departamento"
import empresa from "./empresa/empresa"

function DefEmpresas(){
    var Dpt1 = new Departamento() 
    Dpt1.AddColaborador("Akio", true)
    Dpt1.AddColaborador("Andrei", false)
    Dpt1.AddColaborador("Matera", false)
    Dpt1.AddColaborador("Luigi", false)
    Dpt1.AddColaborador("João", false)

    var Dpt2 = new Departamento() 
    Dpt2.AddColaborador("Karen", true)
    Dpt2.AddColaborador("Lana", false)
    Dpt2.AddColaborador("Bruna", false)
    Dpt2.AddColaborador("Lucas", false)
    Dpt2.AddColaborador("Kely", false)

    var Dpt3 = new Departamento() 
    Dpt3.AddColaborador("Luis", true)
    Dpt3.AddColaborador("Maike", false)
    Dpt3.AddColaborador("Pedro", false)
    Dpt3.AddColaborador("Marcos", false)
    Dpt3.AddColaborador("Nayara", false)

    var Dpt4 = new Departamento() 
    Dpt4.AddColaborador("Thiago", true)
    Dpt4.AddColaborador("Carlos", false)
    Dpt4.AddColaborador("Danilo", false)
    Dpt4.AddColaborador("Leoni", false)
    Dpt4.AddColaborador("Manoel Gomes", false)

    var Dpt5 = new Departamento() 
    Dpt5.AddColaborador("Rafael", true)
    Dpt5.AddColaborador("Sara", false)
    Dpt5.AddColaborador("Júlia", false)
    Dpt5.AddColaborador("Alice", false)
    Dpt5.AddColaborador("Sueli", false)

    var Empresa = new empresa("Cesumar")
    Empresa.SetDepartamentos(Dpt1)
    Empresa.SetDepartamentos(Dpt2)
    Empresa.SetDepartamentos(Dpt3)
    Empresa.SetDepartamentos(Dpt4)
    Empresa.SetDepartamentos(Dpt5)
    return Empresa
}

function main(){   
    
    var Empresa = DefEmpresas()
    var Teste = new Departamento() 
    Teste.AddColaborador("Rafael", true)
    Teste.AddColaborador("Sara", false)
    Teste.AddColaborador("Júlia", false)
    Teste.AddColaborador("Alice", false)
    Teste.AddColaborador("Sueli", false)


    const DepartamentosAtravesdoNome = Empresa.FindDepartamentoByDepartamento(Teste) // Retornando o departamento através de um departamento passado como parâmetro.
    const DepartamentosAtravesdoID = Empresa.FindDepartamentoWithIndex(0) // Retornando o departamento em determinada posição do Array através de um ID passado como parâmetro.
    const FuncionáriosAtravesdoNome = Empresa.FindSubordinados({Nome: "Akio", Gerente: true}) // Retornando apenas os funcionários de um deparatamento depois de um gerente ser passado de parâmetro.
    const Colaboradores = Empresa.GetColaboradorDetail({Nome: "Akio", Gerente: true}) // Retornando o departamento e os colaboradores após um funcionário ser passado como parâmetro.
    
    console.log(DepartamentosAtravesdoNome)

    console.log(DepartamentosAtravesdoID)

    console.log(FuncionáriosAtravesdoNome)

    console.log(Colaboradores)
}

main();