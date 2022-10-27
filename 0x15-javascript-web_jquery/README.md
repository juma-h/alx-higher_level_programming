# jQuery 
- Its just addding functions to a what you select 

## Parent -Child Selectors 

There are two variations:

- One which will only match elements which are a direct child to the parent element, and one which will match all the way down through the hierarchy, e.g. a child of a child of a child of a parent element.

- The syntax for finding children which are direct descendants of an element looks like this:
> $("div > a")

- This selector will find all links which are the direct child of a div element.
Replacing the greater-than symbol with a simple space will change this to match all links within a div element, no matter if they are directly related or not:
> $("div a")
