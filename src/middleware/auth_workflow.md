# Documentação do Workflow de Segurança (Auth Guard)

Este middleware foi projetado para ser o ponto central de segurança entre o Chatbot e o Banco de Dados Supabase.

### Fluxo de Operação:
1. **Interceptação:** O Webhook recebe a chamada e envia os headers para o `auth.guard`.
2. **Sanitização:** O script JS limpa o header e extrai o JWT.
3. **Verificação Cloud:** O n8n faz uma chamada autenticada ao Supabase para confirmar se o token é válido e não expirou.
4. **Autorização (RBAC):** O sistema verifica se o perfil do usuário (Role) tem autorização para o serviço solicitado (Ex: Acesso à IA ou Consulta de Dados).
