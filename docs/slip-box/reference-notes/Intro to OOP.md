- **Metadata**
    - Source: https://youtu.be/SiBw7os-_zI
    - Tags: #programming
- **Primitive data types store single, simple values**
    - byte, int, float, boolean, string
- Programers were and still are fine with just having these primitive, but as it becomes more complex it is cleaner to group similar types of data together
    - This led to the introduction of **struct**
    - Which is like an array but more flexible
    - But it still lacked some key functionalities to support very complex programs
- **Objects are instances of a class**
    - **Classes are templates for objects**
    - The class contains things that is similar across all objects, but the object represents a singular unique thing
- The four main principles of OOP are:
    - Encapsulation 
    - Abstraction
    - Inheritance
    - Polymorphism
- Encapsulation 
    - **Is bundling data with methods that can operate on that data within a class**
    - This helps to __hide__ data as to not be exposed unnecessarily 
    - Members of other classes **can only interact with the attributes of another object through its methods**
    - This is commonly done via getting methods and setting methods
    - Some attributes can be set to be read-only which means that only getter method is defined but not a setter method
    - Generally, you should avoid external classes to directly edit an object’s attributes
- Abstraction
    - **Only showing essential details and keeping everything else hidden**
    - Users of your classes should not worry about the details of your classes
    - Divide the code into **interface** and **implementation**
    - Interface handles how the code communicate to one another
        - Done with methods that each class is able to access
    - Implementation handles how these methods are actually coded
        - __How__ the methods achieve the action
    - ==Creating a set interface through which other classes can interact with it ensures that each class can be individually developed and not entangled==
    - Allows the program to be worked on incrementally
- Inheritance
    - **Allows classes to derive from other classes**
    - **Access modifiers** can change which classes have access to other classes, methods, or attributes
        - Public
            - Can be accessed __anywhere__, even globally
        - Private
            - Can only be accessed from the __same class__
        - Protected
            - Can only be accessed within the __class and any subclasses defined from this class__
    - Polymorphism
        - **Methods that are able to take on many forms**
        - Dynamic polymorphism allows the method to change its form depending on which class the object was built from
            - This avoids the user to have to use `if..elif` to specify which method to use when objects are created from subclasses with the same method name
            - Occurs during runtime
        - Static polymorphism allows the same methods to be defined with different arguments
            - **Method overloading**
            - This can cause trouble if one doesn’t keep these differences clear
            - This allows the user to define many methods that essentially performs the same task and avoids creating similar named methods for each variation
            - Occurs during compile-time