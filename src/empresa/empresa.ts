import {Colaborador, DetalhesColaborador} from "../colaborador/colaborador"
import Departamento from "src/departamento/departamento"

class Empresa{
    name: String
    
    constructor(name: String) {
        this.name = name
    }


    private Departamentos: Departamento[] = new Array()


    public GetDepartamentos(){
        return this.Departamentos
    }

    public SetDepartamentos(Departamento: Departamento){
        this.Departamentos.push(Departamento)
        return
    }

    public FindDepartamentoByDepartamento(Departamento: Departamento){
        const obj = this.Departamentos.find((item) => {
            if(JSON.stringify(item) === JSON.stringify(Departamento)){
                return item
            }
        })

        return obj
    }

    public FindDepartamentoWithIndex(index: number){
        const obj = this.Departamentos[index]

        return obj
    }

    public FindDepartamentoWithColaborador(Colaborador: Colaborador){
        const data = this.Departamentos.find(item=>{
            const colaboradores = item.GetColaboradores()
            const isMember = colaboradores.find(col =>{
                if (JSON.stringify(col) === JSON.stringify(Colaborador)){
                    return item
                }
            })
            return isMember
        });
        
        return data;
    };

    public FindSubordinados(Colaborador: Colaborador){
        if (!Colaborador.Gerente){
            return;
        };

        const data = this.FindDepartamentoWithColaborador(Colaborador);
        if (!data){
            return
        }
        return data.GetFuncionarios();
    };

    public GetColaboradorDetail(Colaborador: Colaborador){
        if (Colaborador.Gerente){
            return this.GerenteDetail(Colaborador);
        };
        return this.SubordinadoDetail(Colaborador);
    };

    private GerenteDetail(Colaborador: Colaborador){
        const data = this.FindDepartamentoWithColaborador(Colaborador);
        if(!data){
            return;
        };
        const obj: DetalhesColaborador = {
            Gerente: Colaborador.Nome,
            Departamento: data.GetColaboradores()
        };
        return obj;
    };

    private SubordinadoDetail(Colaborador: Colaborador){
        const data = this.FindDepartamentoWithColaborador(Colaborador);
        if(!data){
            return;
        };
        const Colaboradores = data.GetColaboradores()
        const Gerente = Colaboradores.find(item => item.Gerente)
        if(!Gerente){
            return
        }
        const obj: DetalhesColaborador = {
            Gerente: Gerente.Nome,
            Departamento: Colaboradores
        }
        return obj;
    };
}

export default Empresa