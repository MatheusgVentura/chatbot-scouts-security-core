# 🤖 Chatbot Scouts - Security & Integration Core

Este repositório destaca a minha contribuição técnica no desenvolvimento de um chatbot inteligente para a União dos Escoteiros do Brasil. Meu foco foi garantir a **integridade dos dados** e a **automação segura** entre a interface e o banco institucional.

## 🛠️ Tecnologias Utilizadas
- **Backend:** Node.js / Python
- **Automação de Fluxos:** n8n
- **Banco de Dados & Auth:** Supabase (PostgreSQL) + JWT
- **Infraestrutura:** Docker & Docker Compose

## 🔒 Minhas Contribuições (Destaques Técnicos)

### 1. Arquitetura de Segurança (IAM)
Implementei o controle de acesso baseado em funções (**RBAC**) utilizando **Supabase Auth** e tokens **JWT**. Isso garantiu que informações sensíveis de membros fossem acessadas apenas por usuários com as permissões corretas.

### 2. Automação com n8n
Desenvolvi os pipelines de dados que conectam o chatbot ao banco de dados via **Webhooks**. 

### 3. Implementação de RAG Security
Trabalhei na configuração da técnica **RAG (Retrieval-Augmented Generation)**, assegurando que a IA consumisse apenas fontes de dados oficiais, prevenindo "alucinações" e garantindo respostas precisas.

## 🚀 Como visualizar a lógica
- Os fluxos de automação estão na pasta `/infra`.
- A estrutura de dados e regras de segurança estão em `/src`.
- 
