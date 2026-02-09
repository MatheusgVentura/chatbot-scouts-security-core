/**
 * Lógica de Validação RBAC (Role-Based Access Control)
 * Compara a Role do usuário no Supabase com as permissões da rota.
 */

const userRole = $json.role; // Role retornada pelo Supabase Auth
const allowedRoles = $json.allowedRoles; // Roles permitidas nesta rota específica

const hasPermission = allowedRoles.includes(userRole);

if (!hasPermission) {
  return [{
    ok: false,
    status: 403,
    error_code: 'forbidden_role',
    msg: 'Usuário não possui permissão para acessar este recurso.'
  }];
}

return [{ ok: true, user: $json.user }];
