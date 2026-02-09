/**
 * Lógica de Extração de Token Bearer (Extraída do n8n Auth Guard)
 * Responsável por validar o formato do Header Authorization.
 */

const rawHeader = $json.authorization || ''; // Entrada vinda do Webhook
const match = rawHeader.match(/^Bearer\s+(.+)$/i);
const token = match ? match[1] : '';

if (!token) {
  // Retorno de erro padronizado para a interface
  return [{
    ok: false,
    status: 401,
    error_code: 'missing_bearer',
    msg: 'Token não encontrado ou formato inválido.'
  }];
}

// Se o token existe, o fluxo prossegue para validação no Supabase
return [{ token, ok: true }];
