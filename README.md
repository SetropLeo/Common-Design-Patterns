# 1. Strategy Pattern

a) What it is/What it does?

- It is a pattern that extracts the behavior of an object into separated classes. 

- Based in the open-closed principle.

b) Where you can use it?

- When you need to use different algorithms within a specific object.
- When you have a lot of similar classes that only differ in the way they execute some behavior.

# 2. Adapter Pattern

a) What it is/What it does?

- It is a pattern that allows you to convert a class that respects a specific interface to respect another one

b) Where you can use it?

- In a case that you want/need to use some existing class but its interface isn't compatible with the rest of the code.

# 3. Observer Pattern

a) What it is/What it does?

- It is a pattern that defines a one-to-many dependency between objects.

- When a object changes state, its dependents will be notified and updated automatically.

- It allows the objects to have loose coupling. It means that the subjects and observers doesn't need to know about each other, they are independent. 

- The Subjects are responsible for saving/handling the data and sending to their subscribed Observers. 

b) Where you can use it?

- When your code doesn't need to be hardly coupled and a class doesn't need to know too much about the other one. 

# 4. Decorator Pattern

a) What it is/What it does?

- It is a pattern that allows you attaches additional responsabilities to an object dinamically.

- It provides a flexible alternative to subclassing for extending functionality.

- You to use the composition to get flexibility in the code.

- Based in the open-closed principle.

b) Where you can use it?

- When your code needs to support multiple behaviors according to different classes.

- When you don't want to constantly need to modify your code to support different functionalities. 


# 5. Iterator Pattern

a) What it is/What it does?

- It provides a way to access the elements of a list of objects withouth changing the list representation.

- Based in the single responsibility principle.

b) Where you can use it?

- When your implementation need a way to iterate over a collection and hide the implementation logic