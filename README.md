# Directives

    > The angular directives helps us to manipulate the DOM. You can change the appearence, behavior, or layout of a DOM element using the Directives. They help you to extend HTML.

    There are three kinds of directives in Angular :
        1. Component Directive : These are directives with a template.
        2. Structural Directives : These directives change the DOM layout by adding and removing DOM elements.
        3. Attribute Directives : These directives change the appearence or behavior of an element, component, or another directive.

    Built in directives :
        ngFor
        ngIf
        ngClass
        ngNonBindable
        ngSwitch
        etc.

    Custom Directive:
        ng g d <directive-name>
        @Directive decorator

# Pipes

    > Pipes are used to transform data, when we only need that data tranformed in a template.

    If we need the data transformed generally we would implement it in our model, for eg. we have a number 1234.56 and want to display it as a currency such as $1,234.56

    We could convert the number into a string and store that string in the model but if the only place we want to show that number is in a view we can use a pipe instead.

    We use pipe with '|' syntax in the template.
    {{1234.56 | currency : 'USD'}}

    Built In Pipes :
    Currency Pipe
    Date Pipe
    Decimal Pipe
    Json Pipe
    LowerCase Pipe
    UpperCase Pipe
    Percent Pipe
    Slice Pipe
    Async Pipe

    Async Pipe :
        With AsyncPipe we can use promises and observables directly in our template, without having to store the result on an intermediate property or variable.

        AsyncPipe accepts as argument an observable or a promise, calles subscribe or attaches a then handler, then waits for the asynchronous result before passing it through to the caller.

    Custom Pipes:
        ng g p <pipe_name>
        @Pipe decorator

        eg. default pipe, for things like avatar images.

            <img [src]="imageUrl" | default: '<default-img-url>'" />

        Transform function : the actual logic for the pipe is put in a function called transform on the class.

        class DefaultPipe{
            transform(value : string,fallback:string){
                let image = "";
                if(value){
                    image = value;
                }
                else{
                    image = fallback;
                }
                return image;
            }
        }

    
