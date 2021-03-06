import { Component, Type } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { CodeblockComponent, PrismJsDirective } from "../../prismjs/prismjs";

@Component({
    directives: [<Type>CodeblockComponent, <Type>PrismJsDirective , SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    selector: "sm-page-home",
    template: `
<div class="ui masthead vertical segment">
    <div class="ui container">
        <h1>Getting Started</h1>
        <p>Angular2 building blocks based on Semantic UI</p>
        <ul class="">
            <li class="item">Angular 2 <a href="https://angular.io/" target="_blank">angular.io</a></li>
            <li class="item">Semantic UI <a href="http://semantic-ui.com/" target="_blank">semantic-ui.com</a></li>
            <li class="item"><b>GitHub repository</b> <a href="https://github.com/vladotesanovic/ngSemantic"> 
            https://github.com/vladotesanovic/ngSemantic</a> ( If you like it, give it a star <i class="icon star"></i> )</li>
          </ul>
    </div>
</div>
<div class="main ui container">
    <h2 class="header">Installation</h2>
<sm-segment class="raised">
In terminal: 
<sm-codeblock smPrismjs="bash">
$ npm install ng-semantic --save
</sm-codeblock>
</sm-segment>
    <p></p>
    <sm-segment class="raised">
    <p>Semantic css and js ( with jQuery are required )</p>
        <sm-codeblock smPrismjs="markup">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; 
src=&quot;https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.1/semantic.min.css&quot;&gt;

<!-- JS -->
&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.1/semantic.min.js&quot;&gt;&lt;/script&gt;
</sm-codeblock>
</sm-segment>
    <p></p>
    <sm-segment class="raised">
    <p>Configure SystemJS or Webpack to load ng-semantic</p>
<sm-codeblock prismjs="markup">
...
</sm-codeblock>
    <p></p>
    </sm-segment>
    <br/>
    <h2 class="header">Use</h2>
    <sm-segment class="raised">
       <sm-codeblock smPrismjs="typescript">
import {Component} from 'angular2/core';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

@Component({
    selector: 'demo-cmp',
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    template: '&lt;sm-segment class="raised">Hello&lt;/sm-segment>'
})
export class DemoComponent {}
    </sm-codeblock>
</sm-segment>
    <h2>{{title}}</h2>
        <p><i class="icon external"></i> 
        <a href="https://github.com/vladotesanovic/angular2-express-starter" target="_blank">
        Express app with included ng-semantic</a></p>
        
        <p><i class="icon external"></i> 
        <a href="https://github.com/vladotesanovic/angular2-quickstart-ngsemantic" target="_blank">
        Angular 2 QuickStart with ngSmantic</a></p>
</div>
`
})
export class HomeComponent {
    title: string;
    constructor() {
        setTimeout(() => this.title = "Starter project", 500);
    }
}
