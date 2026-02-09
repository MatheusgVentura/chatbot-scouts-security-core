# 🤖 Chatbot Scouts - Security & Integration Core

Este repositório destaca a minha contribuição técnica no desenvolvimento de um chatbot inteligente para a União dos Escoteiros do Brasil. Meu foco foi a arquitetura de Backend, garantindo a integridade dos dados e a automação segura através de um sistema robusto de autenticação e integração via n8n

---

## 🛠️ Tecnologias Utilizadas
- **Backend:** Node.js / Python
- **Automação de Fluxos:** n8n
- **Banco de Dados & Auth:** Supabase (PostgreSQL) + JWT
- **Infraestrutura:** Docker & Docker Compose

---

## 🔒 Minhas Contribuições (Destaques Técnicos)

### 1. Arquitetura de Segurança (IAM)
Implementei o controle de acesso baseado em funções (**RBAC**) utilizando **Supabase Auth** e tokens **JWT**. Isso garantiu que informações sensíveis de membros fossem acessadas apenas por usuários com as permissões corretas.

### 2. Automação com n8n
Desenvolvi os pipelines de dados que conectam o chatbot ao banco de dados via **Webhooks**. Abaixo está a representação lógica do fluxo de integração:

```mermaid
graph LR
    A[Interface do Usuário] -->|Webhook| B(n8n Workflow)
    B --> C{Validação JWT}
    C -->|Autorizado| D[Consulta Supabase/RAG]
    D --> E[Processamento IA]
    E --> F[Resposta Segura]
