Exemplos dos Cursos de Angular 4 do canal [Loiane Groner](https://www.youtube.com/user/Loianeg)
========================
* Autor: César Magalhães
* Tecnologias: Angular 4, Node JS
* Resumo: Cursos de Angular
* Linguagens: TypeScript
* Fonte: <https://github.com/cams7/exemplos-angular2/tree/master/Loiane_Groner>
* Linkedin: <https://br.linkedin.com/in/cams7>

Qual a finalidade desses exemplos?
-------------------
Esses exemplos foram estudados e testados com intuíto de aprender um pouco mais sobre o Angular 4.

Sistemas requeridos
-------------------
* [Microsoft Windows 10](https://www.microsoft.com/pt-br/software-download/windows10)
* [Ubuntu 16.04.5 LTS](http://releases.ubuntu.com/16.04/)
* [Git](https://git-scm.com/downloads)
* [Angular](https://angular.io/)
* [Node JS](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)

Para testa todos os exemplos
-------------------
* Instale o Git
* Instale o Node JS
* Instale o Visual Studio Code

Exemplos dos Cursos de Angular 4 retirados do canal [Loiane Groner](https://www.youtube.com/user/Loianeg)
-------------------
01. [Curso Angular #01: Introdução](https://www.youtube.com/watch?v=tPOMG0D57S0&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=1)
02. [Novidades Angular 4.x e CLI](https://www.youtube.com/watch?v=sXTSHra2fvU&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=2)
03. [Curso Angular #02: Ambiente de Desenvolvimento (Node.JS, TypeScript, Angular CLI)](https://www.youtube.com/watch?v=XxPjcMTZz5w&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=3)
```sh
sudo apt update
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install npm -g
node -v
npm -v

sudo npm install -g typescript
tsc -v
sudo npm install -g @angular/cli
ng -v
```
04. [Curso Angular #03: Hello, World! Criando primeiro projeto e o primeiro Componente](https://www.youtube.com/watch?v=wBrIT2Z8t5I&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=4) - [Exemplo](https://github.com/cams7/exemplos-angular2/tree/master/Loiane_Groner/primeiro-projeto)
```sh
cd ~/Dev/Angular2/Cursos/Loiane_Groner
ng new primeiro-projeto
cd ~/Dev/Angular2/Cursos/Loiane_Groner/primeiro-projeto
npm start
#Go to http://localhost:4200
#CTR-C

npm test
#CTR-C

#Cria o componente 'meu-primeiro'
ng g c meu-primeiro

npm start
#Go to http://localhost:4200
#CTR-C
```
05. [Curso Angular #04: Introdução ao TypeScript para Angular](https://www.youtube.com/watch?v=cNJVzgUH0gA&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=5)
06. [Curso Angular #05: Módulos (ngModule)](https://www.youtube.com/watch?v=36kd3uR-hG8&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=6)
```sh
cd ~/Dev/Angular2/Cursos/Loiane_Groner/primeiro-projeto
#Cria o módulo 'cursos'
ng g m cursos
#Cria o componente 'cursos'
ng g c cursos
#Cria o componente 'curso-detalhe'
ng g c cursos/curso-detalhe

npm start
#Go to http://localhost:4200
#CTR-C
```
07. [Curso Angular #06: Introdução aos Templates](https://www.youtube.com/watch?v=bBFScNfW904&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=7)
08. [Curso Angular #07: Introdução aos Serviços e Injeção de Dependência (DI)](https://www.youtube.com/watch?v=v0qEUq4YwpU&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=8)
```sh
cd ~/Dev/Angular2/Cursos/Loiane_Groner/primeiro-projeto
#Cria o serviço 'cursos'
ng g s cursos/cursos

npm start
#Go to http://localhost:4200
#CTR-C
```
09. [Curso Angular #08: Dicas plugins Angular para Atom e VS Code](https://www.youtube.com/watch?v=1woAPxxyDMo&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=9)

Instale os seguintes [Plugins do Atom](https://atom.io/packages):
* angular-2-typeScript-snippets
* atom-typescript
* linter
* file-icons
* open-recent
* pigments

Instale os seguintes Plugins do VS Code:
* Angular 2, 4 and upcoming latest TypeScript HTML Snippets
* Angular v4 TypeScript Snippets
* Auto Import
* HTML Snippets
* ionic Command with Snippets
* vcode-icons
* Atom One Dark (Theme)

10. [Curso Angular #09: Property Binding e Interpolação](https://www.youtube.com/watch?v=rlVxG2lG1Tk&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=10) - [Exemplo](https://github.com/cams7/exemplos-angular2/tree/master/Loiane_Groner/data-binding)
```sh
cd ~/Dev/Angular2/Cursos/Loiane_Groner
ng new data-binding
cd ~/Dev/Angular2/Cursos/Loiane_Groner/data-binding

ng g c data-binding
npm install ng2-bootstrap bootstrap --save

npm start
#Go to http://localhost:4200
#CTR-C
```
11. [Curso Angular #10: Class e Style binding](https://www.youtube.com/watch?v=NxtlQSpSgx8&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=11)
12. [Curso Angular #11: Event binding](https://www.youtube.com/watch?v=WF28rLBangw&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=12)
13. [Curso Angular #12: Two-way data binding](https://www.youtube.com/watch?v=7PI-2pvLTu8&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=13)
```sh
cd ~/Dev/Angular2/Cursos/Loiane_Groner/data-binding
ng g m meu-form
ng g c meu-form

npm start
#Go to http://localhost:4200
#CTR-C
```
14. [Curso Angular #13: Reusando Componentes com Input properties](https://www.youtube.com/watch?v=G2cBpYZ0fzk&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=14)
```sh
cd ~/Dev/Angular2/Cursos/Loiane_Groner/data-binding
ng g c curso
ng g c contador

npm start
#Go to http://localhost:4200
#CTR-C
```
15. [Curso Angular #14: Emitindo Eventos com Output properties](https://www.youtube.com/watch?v=Lbwk8oDJrCU&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=15)
16. [Curso Angular #15: Ciclo de vida do Componente](https://www.youtube.com/watch?v=4Z543sAKmBA&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=16)
```sh
cd ~/Dev/Angular2/Cursos/Loiane_Groner/data-binding
ng g c ciclo

npm start
#Go to http://localhost:4200
#CTR-C
```
17. [Curso Angular #16: Acesso ao DOM e ao Template com ViewChild](https://www.youtube.com/watch?v=WO3LdMeh8WU&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=17)
18. [Curso Angular #17: Angular CLI: Instalação e criação de projetos: ng new e ng serve](https://www.youtube.com/watch?v=RlfOhrhPh_Y&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=18) - [Exemplo](https://github.com/cams7/exemplos-angular2/tree/master/Loiane_Groner/diretivas)
```sh
cd ~/Dev/Angular2/Cursos/Loiane_Groner
ng new diretivas
```
19. [Curso Angular #18: Angular CLI: Criando components, services: ng generate](https://www.youtube.com/watch?v=8x-5Q2YzvuE&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=19)
```sh
cd ~/Dev/Angular2/Cursos/Loiane_Groner/diretivas
ng g c diretiva-ngif
ng g s diretiva-ngif/diretiva-ngif

#ng g component meu-componente
#ng g service meu-servico
#ng g directive minha-diretiva
#ng g pipe meu-pipe
#ng g class minha-classe
#ng g interface minha-interface
#ng g enum meu-enum
```
20. [Curso Angular #19: Angular CLI: Usando pré-processadores (Sass, Less, Stylus)](https://www.youtube.com/watch?v=Z0umP8p2aW8&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=20)
```sh
#npm new meu-projeto --style=sass
#npm new meu-projeto --style=less
#npm new meu-projeto --style=stylus

#ng set defaults.styleExt scss
#ng set defaults.styleExt less
#ng set defaults.styleExt styl

cd ~/Dev/Angular2/Cursos/Loiane_Groner/diretivas
ng set defaults.styleExt scss
```
21. [Curso Angular #20: Angular CLI: ng lint, ng test, ng e2e](https://www.youtube.com/watch?v=TZDWgAfYYqo&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=21)
```sh
cd ~/Dev/Angular2/Cursos/Loiane_Groner/diretivas
ng lint
ng test
ng e2e
```
22. [Curso Angular #21: Angular CLI: Estrutura do projeto](https://www.youtube.com/watch?v=ICvq9YeDCh0&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=22)
23. [Curso Angular #22: Angular CLI: Gerando build de produção](https://www.youtube.com/watch?v=U0zHj14mNrI&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=23)
```sh
sudo npm install http-server -g

cd ~/Dev/Angular2/Cursos/Loiane_Groner/primeiro-projeto
ng build
ng build --dev

http-server dist/
#Go to http://localhost:8080
#CTR-C

cd ~/Dev/Angular2/Cursos/Loiane_Groner/data-binding
ng build --target=production --enviroment=prod
ng build --prod --env=prod
ng build --prod

http-server dist/
#Go to http://localhost:8080
#CTR-C
```
24. [Curso Angular #23: Angular CLI: instalando bibliotecas (bootstrap, jquery, materialize, lodash)](https://www.youtube.com/watch?v=xdehEshcTzA&t=2s&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=24) - [Exemplo](https://github.com/cams7/exemplos-angular2/tree/master/Loiane_Groner/angular-cli-libs-externas)
```sh
cd ~/Dev/Angular2/Cursos/Loiane_Groner
ng new angular-cli-libs-externas
cd ~/Dev/Angular2/Cursos/Loiane_Groner/angular-cli-libs-externas

npm install bootstrap@next --save
npm install materialize-css --save
npm install angular2-materialize --save
npm install lodash --save
npm install @types/lodash --save

#Change 'angular-cli-libs-externas/.angular-cli.json' file
#"styles": ["../node_modules/bootstrap/dist/css/bootstrap.css","styles.css"],
#"scripts": ["../node_modules/jquery/dist/jquery.js","../node_modules/tether/dist/js/tether.js","../node_modules/bootstrap/dist/js/bootstrap.js","../node_modules/materialize-css/dist/js/materialize.js"],

#Add in 'angular-cli-libs-externas/src/styles.css' file
#@import "../node_modules/materialize-css/dist/css/materialize.css"

ng build --prod
http-server dist/
#Go to http://localhost:8080
#CTR-C
```
25. [Curso Angular #24: Introdução e tipos de diretivas no Angular 2](https://www.youtube.com/watch?v=rJNYm3-Tyns&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=25)
26. [Curso Angular 2 #25: Diretivas: ngIf](https://www.youtube.com/watch?v=7zJNIp44B60&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=26)
27. [Curso Angular #26: Diretivas: ngSwitch, ngSwitchCase e ngSwitchDefault](https://www.youtube.com/watch?v=uToE2t9RHME&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=27)
28. [Curso Angular 2 #27: Diretivas: ngFor](https://www.youtube.com/watch?v=seEbP5FGcvo&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=28)
29. [Curso Angular 2 #28: Diretivas: sobre o * e template](https://www.youtube.com/watch?v=e-OGZocglTA&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=29)
```sh
cd /home/cams7/Dev/Angular2/Cursos/Loiane_Groner/diretivas

npm install ngx-bootstrap bootstrap --save
npm install jquery --save

#"styles": ["../node_modules/bootstrap/dist/css/bootstrap.css","styles.css"],
#"scripts": ["../node_modules/jquery/dist/jquery.js","../node_modules/bootstrap/dist/js/bootstrap.js"],

ng g c diretiva-ngif
ng g c diretiva-ngswitch
ng g c diretiva-ngfor
ng g c diretiva-ngclass
ng g c diretiva-ngstyle
ng g c operador-elvis
ng g c exemplo-ng-content
ng g d shared/fundo-amarelo
ng g d shared/highlight-mouse
ng g d shared/highlight
ng g d shared/ng-else
ng g c diretivas-customizadas
```
30. [Curso Angular #29: Diretivas: ngClass](https://www.youtube.com/watch?v=DCFJZzFwDKs&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=30)
31. [Curso Angular #30: Diretivas: ngStyle](https://www.youtube.com/watch?v=WBf5sgByOY4&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=31)
32. [Curso Angular #31: Operador Elvis ("?")](https://www.youtube.com/watch?v=z2GUOnkGCdc&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=32)
33. [Curso Angular #32: ng-content](https://www.youtube.com/watch?v=fud-ezN6RJo&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=33)
34. [Curso Angular 2 #33: Criando uma diretiva de atributo](https://www.youtube.com/watch?v=8fUa4HPOua4&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=34)
35. [Curso Angular #34: Diretivas: HostListener e HostBinding](https://www.youtube.com/watch?v=PUxHzEUDVG4&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=35)
36. [Curso Angular #35: Diretivas: Input e Property Binding](https://www.youtube.com/watch?v=rB3OjMOel3s&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=36)
37. [Curso Angular 2 #36: Criando uma diretiva de estrutura (ngElse)](https://www.youtube.com/watch?v=b-rRPCK-fdE&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=37)
38. [Curso Angular #37: Introdução a Serviços](https://www.youtube.com/watch?v=1-HAHOc4ZJY&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=38) - [Exemplo](https://github.com/cams7/exemplos-angular2/tree/master/Loiane_Groner/servicos)
```sh
cd ~/Dev/Angular2/Cursos/Loiane_Groner
ng new servicos
cd ~/Dev/Angular2/Cursos/Loiane_Groner/servicos

ng g c cursos
ng g m cursos
ng g s cursos/cursos
ng g c criar-curso
ng g m criar-curso
ng g c receber-curso-criado
ng g s shared/Log
```
39. [Curso Angular #38: Criando um serviço (Service)](https://www.youtube.com/watch?v=8fE1e9j6fJo&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=39)
40. [Curso Angular #39: Injeção de Dependência (DI) + como usar um serviço em um componente](https://www.youtube.com/watch?v=KqsFxBMlM9s&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=40)
41. [Curso Angular #40: Escopo de instâncias de serviços e módulos (singleton e várias instâncias)](https://www.youtube.com/watch?v=R3lU_qFsPlg&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=41)
42. [Curso Angular #41: Comunicação entre componentes usando serviços (broadcast de eventos)](https://www.youtube.com/watch?v=R9afVKty3Dg&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=42)
43. [Curso Angular #42: Injetando um serviço em outro serviço](https://www.youtube.com/watch?v=hMhCDO75Aus&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=43)
44. [Curso Angular #43: Pipes (usando pipes, parâmetros e pipes aninhados)](https://www.youtube.com/watch?v=jrXQFpbw2HQ&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=44) - [Exemplo](https://github.com/cams7/exemplos-angular2/tree/master/Loiane_Groner/pipes)
```sh
cd ~/Dev/Angular2/Cursos/Loiane_Groner
ng new pipes
cd ~/Dev/Angular2/Cursos/Loiane_Groner/pipes

ng g c exemplos-pipe
ng g p camel-case
ng g s settings
ng g p filtro-array
ng g p filtro-array-impuro
```
45. [Curso Angular #44: Criando um Pipe](https://www.youtube.com/watch?v=KO7dVbigKvI&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=45)
46. [Curso Angular #45: Aplicando Locale (internacionalização) nos Pipes](https://www.youtube.com/watch?v=U6y9dZfpT84&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=46)
47. [Curso Angular #46: Pipes: Criando um Pipe "Puro"](https://www.youtube.com/watch?v=h1t_O_w0LOc&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=47)
48. [Curso Angular #47: Pipes: Criando um Pipe "Impuro"](https://www.youtube.com/watch?v=Qn54Z3wbU2E&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=48)
49. [Curso Angular #48: Pipes: Async (assíncrono)](https://www.youtube.com/watch?v=WhcK7QOL6YA&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=49)
50. [Curso Angular 2 #49: Rotas: Introdução](https://www.youtube.com/watch?v=wzdKc0AFY6k&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=50) - [Exemplo](https://github.com/cams7/exemplos-angular2/tree/master/Loiane_Groner/rotas)
```sh
cd ~/Dev/Angular2/Cursos/Loiane_Groner
ng new rotas
cd ~/Dev/Angular2/Cursos/Loiane_Groner/rotas

npm install bootstrap@next --save
npm install materialize-css --save
npm install angular2-materialize --save

#Change 'rotas/.angular-cli.json' file
#"styles": ["../node_modules/bootstrap/dist/css/bootstrap.css","styles.css"],
#"scripts": ["../node_modules/jquery/dist/jquery.js","../node_modules/tether/dist/js/tether.js","../node_modules/bootstrap/dist/js/bootstrap.js","../node_modules/materialize-css/dist/js/materialize.js"],

#Add in 'rotas/src/styles.css' file
#@import "../node_modules/materialize-css/dist/css/materialize.css"

ng g c home

ng g c login
ng g class login/usuario
ng g s login/auth

ng g m cursos
ng g c cursos
ng g c cursos/curso-detalhe
ng g s cursos/cursos
ng g c cursos/curso-nao-encontrado

ng g m alunos
ng g c alunos
ng g c alunos/aluno-detalhe
ng g c alunos/aluno-form
ng g s alunos/alunos
ng g class alunos/aluno

mkdir src/app/guards
ng g s guards/auth-guard
ng g s guards/cursos-guard
ng g s guards/alunos-guard
ng g interface guards/iform-candeactivate
ng g s guards/alunos-deactivate-guard

mkdir src/app/alunos/guards
ng g s alunos/guards/aluno-detalhe-resolver

ng g c pagina-nao-encontrada

ng build --prod
http-server dist/
#Go to http://localhost:8080
```
51. [Curso Angular #50: Rotas: Configurando rotas simples](https://www.youtube.com/watch?v=8OHoAZ6j0Rg&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=51)
52. [Curso Angular #51: Rotas: RouterLink: definindo rotas no template](https://www.youtube.com/watch?v=zmlooouhauE&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=52)
53. [Curso Angular #52: Rotas: Aplicando CSS em rotas ativas](https://www.youtube.com/watch?v=4r6uzxmEV-k&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=53)
54. [Curso Angular #53: Rotas: Definindo e extraindo parâmetros de roteamento](https://www.youtube.com/watch?v=xTkIV8YNgXw&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=54)
55. [Curso Angular #54: Rotas: Escutando mudanças nos parâmetros de roteamento](https://www.youtube.com/watch?v=a6PjrYAPrGs&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=55)
56. [Curso Angular #55: Rotas Imperativas: Redirecionamento via código](https://www.youtube.com/watch?v=SRtM9nV_7nw&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=56)
57. [Curso Angular #56: Rotas: Definindo e extraindo parâmetros de url (query)](https://www.youtube.com/watch?v=B7mc184O4x0&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=57)
58. [Curso Angular #57: Rotas: Criando um módulo de rotas](https://www.youtube.com/watch?v=PLzJ5jDV8is&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=58)
59. [Curso Angular #58: Criando um módulo de funcionalidade](https://www.youtube.com/watch?v=P4GYpzNNEw4&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=59)
60. [Curso Angular #59: Rotas: Criando um módulo de rotas de funcionalidade](https://www.youtube.com/watch?v=_JjrqiwWNFU&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=60)
61. [Curso Angular #60: Rotas Filhas](https://www.youtube.com/watch?v=zOxKiW7hkzY&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=61)
62. [Curso Angular #61: Rotas Filhas: desenvolvendo as telas](https://www.youtube.com/watch?v=YE9A6NtlkmQ&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=62)
63. [Curso Angular #62: Rotas: Dica de Performance: Carregamento sob demanda (lazy loading)](https://www.youtube.com/watch?v=glOJxHDkdnQ&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=63)
64. [Curso Angular #63: Rotas: Tela de Login e como não mostrar o Menu (NavBar)](https://www.youtube.com/watch?v=bOoddUeklZY&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=64)
65. [Curso Angular #64: Usando Guarda de Rotas: CanActivate](https://www.youtube.com/watch?v=vVWttMeiR6s&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=65)
66. [Curso Angular #65: Usando Guarda de Rotas: CanActivateChild](https://www.youtube.com/watch?v=e7ttQtj2w6E&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=66)
67. [Curso Angular #66: Usando Guarda de Rotas: CanDeactivate](https://www.youtube.com/watch?v=I0JZcL3Bsf4&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=67)
68. [Curso Angular #67: Usando Guarda de Rotas: CanDeactivate com Interface Genérica](https://www.youtube.com/watch?v=B-a4InjV3mg&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=68)
69. [Curso Angular #68: Guarda de Rotas: Resolve: carregando dados antes da rota ser ativada](https://www.youtube.com/watch?v=AEUSrpsAPtw&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=69)
70. [Curso Angular #69: Usando Guarda de Rotas: CanLoad: como não carregar o módulo sem permissão](https://www.youtube.com/watch?v=SQViHeue6bs&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=70)
71. [Curso Angular #70: Definindo rota padrão e wildcard (rota não encontrada)](https://www.youtube.com/watch?v=PGJeWEsejdA&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=71)
72. [Curso Angular #71: Estilo de url: HTML5 ou usando #](https://www.youtube.com/watch?v=zkJ4I-dzkRc&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=72)
73. [Curso Angular #72: Formulários (template vs data / reativo) Introdução](https://www.youtube.com/watch?v=TevqIDM7aY8&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=73)
74. [Curso Angular #73: Formulários - Criando o projeto inicial com Bootstrap 3](https://www.youtube.com/watch?v=j7OZGu3hlQ0&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=74) - [Exemplo](https://github.com/cams7/exemplos-angular2/tree/master/Loiane_Groner/forms)
```sh
cd ~/Dev/Angular2/Cursos/Loiane_Groner
ng new forms --routing
cd ~/Dev/Angular2/Cursos/Loiane_Groner/forms

#https://github.com/valor-software/ngx-bootstrap/blob/development/docs/getting-started/ng-cli.md

npm install ngx-bootstrap bootstrap --save

ng g c campo-control-erro
ng g c data-form
ng g c form-debug
ng g m template-form
ng g c template-form
```
75. [Curso Angular #74: Forms (template driven) Controles ngForm, ngSubmit e ngModel](https://www.youtube.com/watch?v=x07zc2UqSuU&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=75)
76. [Curso Angular #75: Forms (template driven) Inicializando valores com ngModel](https://www.youtube.com/watch?v=TzTSnEwGG6Q&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=76)
77. [Curso Angular #76: Forms (template driven) Módulos e FormsModule](https://www.youtube.com/watch?v=9z47wkaaqmc&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=77)
78. [Curso Angular #77: Forms (template driven) Aplicando validação nos campos](https://www.youtube.com/watch?v=9mSl652fDPs&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=78)
79. [Curso Angular #78: Forms (template driven) Aplicando CSS na validação dos campos](https://www.youtube.com/watch?v=9lmUpszp9Vo&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=79)
80. [Curso Angular #79: Forms (template driven) Mostrando mensagens de erro de validação](https://www.youtube.com/watch?v=dTL7SSoZ164&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=80)
81. [Curso Angular #80: Forms (template driven) Desabilitando o botão de submit para formulário inválido](https://www.youtube.com/watch?v=5c7qo26j728&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=81)
82. [Curso Angular #81: Forms (Dica): Verificando dados do Form no template com JSON](https://www.youtube.com/watch?v=wO2YgE3mQXg&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=82)
83. [Curso Angular #82: Forms (template driven) Adicionando campos de endereço (form layout Bootstrap 3)](https://www.youtube.com/watch?v=YVIsoHN85t4&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=83)
84. [Curso Angular #83: Forms (template driven) Refatorando (simplificando) CSS e mensagens de erro](https://www.youtube.com/watch?v=FXrOR84Equ4&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=84)
85. [Curso Angular #84: Forms (template driven) Form groups (agrupando dados)](https://www.youtube.com/watch?v=ZuQZBuGTIxc&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=85)
86. [Curso Angular #85: Forms (template driven) Pesquisando endereço automaticamente com CEP](https://www.youtube.com/watch?v=oLtdDwNcfoM&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=86)
87. [Curso Angular #86: Forms (template driven) Populando campos com setValue e patchValue (CEP)](https://www.youtube.com/watch?v=6DxHNKzlqGQ&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=87)