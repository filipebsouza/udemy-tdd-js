* Instalações globais

    sudo npm install -g jasmine
    sudo npm install -g karma-cli

 *Criando exemplos do jasmine

    jasmine examples

* Inicializando o karma no projeto

    karma init karma.conf.js
    karma start

* Browserify

    Tudo que está no node ele converte para algo que roda no navegador
    npm install --save-dev browserify
    npm install --save-dev watchify
    npm install --save-dev karma-browserify