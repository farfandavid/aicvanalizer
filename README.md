# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
```mermaid
classDiagram
    class User {
        +int id
        +string first_name
        +string last_name
        +string email
        +string password
        +Role role
        +timestamp created_at
        +timestamp updated_at
    }

    class Customer {
        +int id
        +string first_name
        +string last_name
        +string email
        +timestamp created_at
        +timestamp updated_at
    }

    class Credential {
        +int id
        +int customer_id
        +MembershipType type
        +int daily_limit
        +date start_date
        +date end_date
        +Status status
        +timestamp created_at
        +timestamp updated_at
    }

    class Payment {
        +int id
        +int membership_id
        +decimal amount
        +date payment_date
        +PaymentType type
        +timestamp created_at
        +timestamp updated_at
    }

    %%class Routine {
    %%    +int id
    %%    +int customer_id
    %%    +string routine_type
    %%    +date date
    %%    +time time
    %%    +timestamp created_at
    %%    +timestamp updated_at
    %%}

    User "1" --> "0..*" Credential : manages
    Customer "1" --> "1" Credential : owns
    Credential "1" --> "0..*" Payment : linked to
    %%Customer "1" --> "0..*" Routine : follows

    enum Role {
        Admin
        Manager
        Trainer
        Receptionist
    }

    enum MembershipType {
        Monthly
        Weekly
        Annual
        Custom
    }

    enum Status {
        Active
        Inactive
    }

    enum PaymentType {
        Refunded
        Paid
    }

```