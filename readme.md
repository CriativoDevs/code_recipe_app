# Django & React workshop

1 - Criar uma pasta para o projeto
2 - Rodar o comando `npx create-react-app <nome do projeto>`
3 - Criar uma nova nova pasta para a API
4 - Na pasta da API:

- Criar uma nova pasta e rodar o comando `python -m venv .<nome do projeto_venv>`
- Ativar o .venv com o comando `source .<nome do projet_venv>/bin/active`
- Rodar o comando `pip install django` e depois `django-admin startproject <nome da API>`
- Entrar na pasta da API e dar o comando `django-admin startapp <nome do app>`
- Na mesma pasta rode o comando `python manage.py runserver`
  Esse será o log ```bash
                    You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
                    Run 'python manage.py migrate' to apply them.
                    May 18, 2023 - 19:47:46
                    Django version 4.2.1, using settings 'api.settings'
                    Starting development server at http://127.0.0.1:8000/
                    Quit the server with CONTROL-C.
                  ```
