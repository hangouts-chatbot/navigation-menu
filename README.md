# Hangouts chat bot interactive cards navigation 

### To create a menu like this

![Navigation menu example](https://github.com/hangouts-chatbot/navigation-menu/blob/main/img/navigation-menu.png?raw=true)

### Define you data structure as below:

```
const graph = {
    "home": {
        "text": "Welcome to Sales-Bot!",
        "children": [
            "account-management",
            "customer-management",
            "partner-management"
        ],
        "parent": null
    },
    "account-management": {
        "text": "Account Management",
        "children": [
            "account-creation",
            "account-segmentation",
            "account-maintenance"
        ],
        "parent": "home"
    },
    "account-creation": {
        "text": "Account Creation",
        "children": [],
        "parent": "account-management",
        "link": "link"
    },
    "account-segmentation": {
        // Same as account-creation
    },
    "account-maintenance": {
        // Same as account-creation

    },
    "customer-management": {
        "text": "Partner Management",
        "children": [],
        "parent": "home",
        "link": "link"
    },
    "partner-management": {
        "text": "Partner Management",
        "children": [],
        "parent": "home",
        "link": "link"
    }
}
```

### All you have to do is 
```
const { Navigation } = require("navigation");

const navigation = new Navigation(graph);
navigation.getCardMessage("home"); // => this will return the card object which you can send back to user to render interective card. 
```

### Check Tests to view full usecases 
https://github.com/hangouts-chatbot/navigation-menu/blob/main/__tests__/navigation-spec.ts
