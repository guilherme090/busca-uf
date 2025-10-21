export interface Regiao {
    id: number,
    sigla: string,
    nome: string
}

export interface Estado {
    id: number,
    sigla: string,
    nome: string,
    regiao: Regiao
}

const URL_BASE = "https://servicodados.ibge.gov.br/api/v1/localidades";

export function buscaRegioes(): Promise<Regiao[]> {
    return fetch(`${URL_BASE}/regioes`).then(r => r.json());
}

export function buscaEstados(idRegiao: string): Promise<Estado[]> {
    return fetch(`${URL_BASE}/regioes/${idRegiao}/estados`).then(r => r.json());     
}