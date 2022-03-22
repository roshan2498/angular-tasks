# Different Ways to pass data between parent/child component & Life Cycle Hooks.

1.  How to pass data to a child component(nested component)

    > In Angular a Parent Component can communicate with the child component by setting its property. To do that the child component must expose its properties to the parent component. The child Compnonent does this by using the @Input decorator.

    > @Input Decorator : It is used to configure the input properties of the component. This decorator as also supports change tracking.

        When we mark a property as input property, then the Angular injects values into component using Property Binding. The Property Binding uses the [] brackets. The Binding Target(Property of the Child Component) is placed inside the square brackets. The Binding Source is enclosed in quotes. Property Binding is one way from Component to the Target in the template.

        In Child Component :
            1. Import the @Input module from '@angular/core' library.
            2. Mark those property, which you need data from the parent as input property using @Input decorator.

        In Parent Component :
            1. Bind the child component property in the Parent Component when Instatiating the Child.

    <br>

        Example:

            export class ChildComponent {
                @Input() count: number;
            }

2.  How to pass data from child to parent compnent.

    > There are three ways in which the parent component can interact with the child component.
    > <br>

    1. Listen to Child Event
    2. Uses Local Variable to access the child.
    3. Uses a @ViewChild to get the reference to the child component.

### Parent listens for child event.

    The Child component exposes an EventEmitter Property. This Property is adorned with the @Output decorator. When Child Component needs to communicate with the parent it raises the event. The parent component listens to that event and reacts to it.

    1. EventEmitter Property.
        > To Raise an event, the component must declare an EventEmitter Property. The Event can be emitted by calling the .emit() method.

        example :
            prop:EventEmitter<number> = new EventEmitter();


    2. @Output Decorator.
        Using the EventEmitter Property gives the components ability to raise an event. But to make that event accessible from parent component, you must decorate the property with @Output decorator.

> How to pass data to parent Component using @Output

    In the child component:
        1. Declare a property of type EventEmitter and instantiate it.
        2. Mark it with a @Output Decorator.
        3. Raise the event passing it with the desired data.

    In the parent component:
        1. Bind to the Child Component using Event Binding and listen to the child events.
        2. Define the event handler function.

3.  Life Cycle Hooks

        ngOnChanges
        ngOnInit
        ngDoCheck
        ngAfterContentInit
        ngAfterContentChecked
        ngAfterViewInit
        ngAfterViewChecked
        ngOnDestroy
