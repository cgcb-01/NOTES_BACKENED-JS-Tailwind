# PORTALS IN JSX

Portal is a feature that allows you to render a child component into a DOM node that exists outside the hierachy of Parent component. This can be useful for scenarios like. This can be useful for scenario like `modals`, `tooltips`, or `dropdowns`, where you want to break out of usual parent-child structure and render in a different part of the DOM.

## What Happens In Portal??

Anyting in our App Component Gets rendered in `#Root` but We can seperately render few components DOM inside some other `<div>` in HTML and it gets **rendered there**

## NEED??

Portals give you freedom from `DOM structure` & `CSS constraints`, without breaking React’s state/props flow.
