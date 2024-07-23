// types.ts
export interface Candidatura {
    vagaId: number;
    candidatoId: number;
    resposta: number;
    vaga?: Vaga;
    status: string; 
  }
  
  export interface Vaga {
    id: number;
    cargo: string;
    tipoLocalTrabalho: string;
    localTrabalho: string;
    salario: number;
    nivelExperiencia: string;
    descricaoVaga: string;
    empresa: number;
    competencias: Competencia[];
    perguntasTriagem: PerguntaTriagem[];
    receberCandidaturasPor: string;
    conteSobreEmpresa: string;
  }
  
  export interface Competencia {
    nome: string;
  }
  
  export interface PerguntaTriagem {
    titulo: string;
    respostaIdealMinima: number;
    obrigatoria: boolean;
  }
  