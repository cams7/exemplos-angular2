Exemplos do [Curso básico de Angular 2](http://kazale.com/curso-basico-angular-2/) do site [Kazale IT](http://kazale.com/)
========================
* Autor: César Magalhães
* Tecnologias: Angular 2, Node JS
* Resumo: Curso básico de Angular 2
* Linguagens: TypeScript
* Fonte: <https://github.com/cams7/exemplos-angular2-kazale>
* Linkedin: <https://br.linkedin.com/in/cams7>

Qual a finalidade desses exemplos?
-------------------
Esses exemplos foram estudados e testados com intuíto de aprender um pouco mais sobre o Angular 2.

Sistemas requeridos
-------------------
* [Microsoft Windows 10](https://www.microsoft.com/pt-br/software-download/windows10)
* [Ubuntu 16.04.5 LTS](http://releases.ubuntu.com/16.04/)
* [Git](https://git-scm.com/downloads)
* [Angular 2](https://angular.io/)
* [Node JS](https://nodejs.org/en/)
* [Atom](https://atom.io/)

Para testa todos os exemplos
-------------------
* Instale o Git
* Instale o Node JS
* Instale o Atom

Exemplos do [Curso básico de Angular 2](http://kazale.com/curso-basico-angular-2/) do site [Kazale IT](http://kazale.com/)
-------------------
01. [Aula 1: Criando a primeira aplicação](http://kazale.com/curso-angular-2-aula-1-criando-primeira-aplicacao/)
```sh
#1. Instalando o NPM
sudo apt update
sudo apt install python-software-properties
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt install nodejs
sudo npm install npm -g
node -v
npm -v
```
```sh
sudo add-apt-repository ppa:webupd8team/sublime-text-3 && sudo apt install sublime-text-installer
```
```sh
sudo add-apt-repository ppa:webupd8team/atom -y && sudo apt install atom -y
#https://denisvuyka.github.io/2016/05/29/angular2-atom-quickstart.html
```
```sh
#2. Configurando o NPM na aplicação
cd ~/Dev/Angular2/Youtube/Kazale_IT/Projetos/cursoangular2/basico/aula1
#npm init -y
npm install

#7. Compilando e executando a aplicação
npm run tsc
npm start
#CTR-C
tree -I 'node*|*.js|*.map'
```
02. [Aula 2: Arquitetura](http://kazale.com/curso-angular-2-aula-2-arquitetura/)
```sh
cd ~/Dev/Angular2/Youtube/Kazale_IT/Projetos/cursoangular2/basico/aula2
npm install
npm run tsc
npm start
#CTR-C
tree -I 'node*|*.js|*.map'
```
03. [Aula 3: Exibindo dados](http://kazale.com/curso-angular-2-aula-3-exibindo-dados/)
```sh
cd ~/Dev/Angular2/Youtube/Kazale_IT/Projetos/cursoangular2/basico/aula3
npm install
npm run tsc
npm start
#CTR-C
tree -I 'node*|*.js|*.map'
```
04. [Aula 4: Filtros](http://kazale.com/curso-angular-2-aula-4-filtros/)
```sh
cd ~/Dev/Angular2/Youtube/Kazale_IT/Projetos/cursoangular2/basico/aula4
npm install
npm run tsc
npm start
#CTR-C
tree -I 'node*|*.js|*.map'
```
05. [Aula 5: Formulário](http://kazale.com/curso-angular-2-aula-5-formulario/)
```sh
cd ~/Dev/Angular2/Youtube/Kazale_IT/Projetos/cursoangular2/basico/aula5
#npm install bootstrap --save
npm install
npm run tsc
npm start
#CTR-C
tree -I 'node*|*.js|*.map'
```
06. [Aula 6: Formulário (Validação)](http://kazale.com/curso-angular-2-aula-6-formulario-validacao/)
```sh
cd ~/Dev/Angular2/Youtube/Kazale_IT/Projetos/cursoangular2/basico/aula6
npm install
npm run tsc
npm start
#CTR-C
tree -I 'node*|*.js|*.map'
```
07. [Aula 7: Templates](http://kazale.com/curso-angular-2-aula-7-templates/)
```sh
cd ~/Dev/Angular2/Youtube/Kazale_IT/Projetos/cursoangular2/basico/aula7
npm install
npm run tsc
npm start
#CTR-C
tree -I 'node*|*.js|*.map'
```
08. [Aula 8: Serviços](http://kazale.com/curso-angular-2-aula-8-servicos/)
```sh
cd ~/Dev/Angular2/Youtube/Kazale_IT/Projetos/cursoangular2/basico/aula8
npm install
npm run tsc
npm start
#CTR-C
tree -I 'node*|*.js|*.map'
```
09. [Aula 9: Rotas e navegação](http://kazale.com/curso-angular-2-aula-9-rotas-e-navegacao/)
```sh
cd ~/Dev/Angular2/Youtube/Kazale_IT/Projetos/cursoangular2/basico/aula9
npm install
npm run tsc
npm start
#CTR-C
tree -I 'node*|typings|*.js|*.map'
```
10. [Aula 10: Acesso HTTP a um servidor remoto](http://kazale.com/curso-angular-2-aula-10-acesso-http-um-servidor-remoto/)
```sh
cd ~/Dev/Angular2/Youtube/Kazale_IT/Projetos/cursoangular2/basico
sudo npm install -g strongloop
slc loopback
cd api-aluno
node .
#Go to http://0.0.0.0:3000/explorer
#CTR-C
slc loopback:model
node .
#Go to http://0.0.0.0:3000/explorer
#CTR-C
slc loopback:acl
slc loopback:acl
node .
#Go to http://0.0.0.0:3000/explorer

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \
    "username": "cams7", \
    "email": "ceanma@gmail.com", \
    "password": "12345" \
  }' 'http://0.0.0.0:3000/api/Users'

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"username":"cams7", "password":"12345"}' 'http://0.0.0.0:3000/api/Users/login'

curl -X PATCH --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{}' 'http://0.0.0.0:3000/api/Users/1?access_token=TOKEN'

#CTR-C
```
```sh
cd ~/Dev/Angular2/Youtube/Kazale_IT/Projetos/cursoangular2/basico/aula10
npm install
npm run tsc
npm start

curl -X GET --header 'Accept: application/json' 'http://0.0.0.0:3000/api/alunos?access_token=TOKEN'

#CTR-C
tree -I 'node*|typings|*.js|*.map'
```
11. [Aula 11: Projeto final (Desafio)](http://kazale.com/curso-angular-2-aula-11-projeto-final/)
