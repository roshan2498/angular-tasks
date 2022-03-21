# Angular Day 1
================

1. Understanding
        > Data Binding
        > String Interpolation
        > Event Binding
        > Property Binding


=> Data Binding :
    Data Binding is a technique, where the data stays in sync with the component and the view(template). Whenever the user updates the data in the view, Angular updates the component. When component gets new data, the Angular updates the view.
        Uses : show models to the user, dynamically change element style, respond to user events etc.

    In angular we can have one-way data binding or two-way data binding.
        > One Way Binding : 
            ==> data flows in one direction, either from view to component or from component to view.
            1. From Component to view
                To bind the data from component to view, we make use of String Interpolation & Property Binding.

                1.1 String Interpolation
                    > It allows us to include expressions as part of any string literal, which we use in our HTML. The angular evaluates the expressions into a string and replaces it in the original string and updates the view. 

                    Syntax : 
                    {{ template expression }}
                
                1.2 Property Binding
                    > It allows us to bind HTML element property to a property in the component. Whenever the value of the component changes, the Angular updates the element property in the View. You can set the properties such as class href,src,textContent etc using property binding.
                    > You can also use it to set the property of custom components or directives (properties decorated with @Input)

                    Syntax :
                    [binding-target] = "binding-source

        
        > Two Way Binding :
          ==> changes that made to our model in the component are propagated to the view and that any changes made in the view are immediately updated in the underlying component.
             useful in data entry forms etc.

             Syntax : 
             [()] ==> Banana in the Box (xD)
             <someElement [(someProperty)] = "value"> </someElement>  
             This above syntax sets up both property binding & event binding.

        > ngModel :
        ==> The angular uses the ngModel directive to achieve the two-way binding on HTML Form elements. It binds to a form element like input,select,selectarea etc.
        - @angular/forms

        > Event Binding : 
        ==> allows us to bind events such as keystroke, clicks, hover, touch etc to a method in component. It is one way from view to component. By tracking the user events in the view and responding to it, we can keep our component in sync with the view. 
        
        Syntax : 
        (target-event) = "TemplateStatement"
        <button (click)="onSave()">Save</button>
        


