# Design System

Este projeto é um Design System construído com React, Storybook e Stitches, organizado em um monorepo para facilitar a colaboração e o gerenciamento.

## Componentes

Atualmente, o Design System inclui os seguintes componentes:

- **Button** ✅
- **Heading** ❌
- **Text** ✅
- **TextInput** ❌
- **Textarea** ❌

## Estrutura do Monorepo

O monorepo é dividido em vários repositórios para uma melhor organização e modularidade:

- **`@dev-ui/react`**: componentes React.
- **`@dev-ui/tokens`**: tokens de design (cores, tipografia, espaçamentos, etc).
- **`@dev-ui/eslint`**: configurações do ESLint.
- **`@dev-ui/typescript`**: configurações do TypeScript.
- **`@dev-ui/storybook`**: contém histórias e documentações dos componentes usando Storybook

## Configuração do Ambiente

### 1. Clonando o Monorepo

Clone o repositório principal que contém todos os sub-repositórios:

```bash
git clone https://github.com/manuelbento19/design-system.git
cd design-system
```

### 2. Instalando Dependências

Instale as dependências para todos os pacotes do monorepo:

```bash
yarn install
```

ou, se estiver usando npm:

```bash
npm install
```

### 3. Configurando o Storybook

Para iniciar o Storybook, vá até o repositório `storybook` e execute:

```bash
yarn storybook
```

ou

```bash
npm run storybook
```

## Estrutura do Projeto
```
/design-system
│
├── /packages
|   ├─ /eslint
│   ├─ /react
│   ├─ /storybook
│   ├─ /tokens
│   ├─ /typescript
│   ├── tsconfig.json
│   └── yarn.lock
│
├── .gitignore
├── License
├── package.json
└── README.md

```


## Contribuindo

Se você deseja contribuir para o design system, siga estas etapas:

1. **Fork o Repositório**: Crie um fork do repositório principal.
2. **Clone o Fork**: Clone o seu fork localmente.
3. **Crie uma Branch**: Crie uma branch para sua feature ou correção.
4. **Faça as Alterações**: Implemente e teste suas alterações.
5. **Abra um Pull Request**: Submeta um pull request para revisão.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Se você tiver alguma dúvida ou precisar de ajuda, sinta-se à vontade para abrir uma issue no repositório correspondente. 