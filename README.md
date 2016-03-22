[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Ember Components

Components are used to encapsulate (repetitious) markup and tie it behavior.
Instead of separating our concerns along technological lines (HTML, CSS, JS),
components tie all three of these technologies together under a reified visual
element in the user interface.

## Prerequisites

-   [ga-wdi-boston/ember-object](https://github.com/ga-wdi-boston/ember-object)
-   [ga-wdi-boston/ember-routing-dynamic](https://github.com/ga-wdi-boston/ember-routing-dynamic)

## Objectives

By the end of this, developers should be able to:

-   Model the user interface using components
-   Represent visual hierarchies with nested components
-   Register actions and click handlers on component objects
-   Pass data from routes to components, and from components to components

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Install dependencies with `npm install` and `bower install`.

## Components Represent a Visual Element

> ![component hierarchy](https://cloud.githubusercontent.com/assets/388761/12339386/dc1cc062-bae2-11e5-85be-ae33da715b2c.png)
>
> From [Communication Between Distant Components - Ember Igniter](http://emberigniter.com/communication-between-distant-components/)

## Follow-Along: Wireframe the Listr Interface

Let's wireframe the [Listr
client](https://github.com/ga-wdi-boston/listr-client) application interface
with a focus on identifying different logical interface elements. We'll call
these visual elements "components".

![listr demo](https://cloud.githubusercontent.com/assets/388761/12339395/e809372a-bae2-11e5-8073-89bcee5a7351.png)

## Code-Along: Create a List Component

Let's name it `listr-list` to follow best practices. We wouldn't want to clash
with any new HTML elements in future specs!

## Lab: Create a List Item Component

Name it `list-list`.

## Code-Along: Toggle Display of a List

Toggle display of list on header click.

## Lab: Toggle Strike-Through of a List Item

Toggle strike-through of list item on item click.

## Additional Resources

-   [Ember Component Guide](http://guides.emberjs.com/v2.4.0/components/defining-a-component/)
-   [Ember Component API Documentation](http://emberjs.com/api/classes/Ember.Component.html)
-   [Parent to Children Component Communication for UI State - Ember Igniter](http://emberigniter.com/parent-to-children-component-communication/)
-   [Communication Between Distant Components - Ember Igniter](http://emberigniter.com/communication-between-distant-components/)
-   [Ember Best Practices: Actions Down, Data Up... wait what?](https://dockyard.com/blog/2015/10/14/best-practices-data-down-actions-up)
-   [How Ember Data affects data down, actions up](http://www.samselikoff.com/blog/how-ember-data-affects-data-down-actions-up/)

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
