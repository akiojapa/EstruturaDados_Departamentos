import {Colaborador} from "../colaborador/colaborador"

class Departamento{
    
    private Colaboradores: Colaborador[] = new Array<Colaborador>()
    

    public GetColaboradores(): Colaborador[]{
        return this.Colaboradores
    }

    public AddColaborador(Nome: string, Gerente: boolean): boolean{
        if (this.Colaboradores.length > 5){
            return false
        }
        if(Gerente){
            const TrueGer = this.Colaboradores.some(item=>{item.Gerente})
            if (TrueGer){
                return false
            }
        }
        const Colaborador: Colaborador = {Nome: Nome, Gerente: Gerente}
        this.Colaboradores.push(Colaborador)
        return true
    }

    public GetFuncionarios(){
        return this.Colaboradores.filter(item=>{
            return !item.Gerente
        })
    }
}

export default Departamento