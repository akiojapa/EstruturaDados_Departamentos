export interface Colaborador{
    Nome: string,
    Gerente: boolean
}

export interface DetalhesColaborador{
    Gerente: string,
    Departamento: Colaborador[]
}
