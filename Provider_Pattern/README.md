# Provider Pattern

## Make data available to multiple child components.

In some cases, we want to make available data to many (if not all)
components in an application. Although we can pass data to components
using props, this can be difficult to do if almost all components in your
application need access to the value of the props.
We often end up with something called prop drilling, which is the case when
we pass props far down the component tree. Refactoring the code that relies
on the props becomes almost impossible, and knowing where certain data
comes from is difficult.
Let's say that we have one App component that contains certain data. Far
down the component tree, we have a ListItem, Header and  
Text component that all need this data. In order to get this data to these
components, we'd have to pass it through multiple layers of components.
