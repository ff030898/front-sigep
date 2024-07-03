export const maskCPF = (value: string): string => {
    return value
      .replace(/\D/g, '') // Remove qualquer caractere não numérico
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona um ponto após os primeiros 3 dígitos
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona um ponto após os próximos 3 dígitos
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona um traço antes dos últimos 2 dígitos
  };
  
  export const maskDate = (value: string): string => {
    return value
      .replace(/\D/g, '') // Remove qualquer caractere não numérico
      .replace(/(\d{2})(\d)/, '$1/$2') // Adiciona uma barra após os primeiros 2 dígitos
      .replace(/(\d{2})(\d)/, '$1/$2'); // Adiciona uma barra após os próximos 2 dígitos
  };
  