# Good to know before start

### I am using npm instead of yarn, so don't forget:

1. npm install
2. npm run start

# Breakdown of some files and components in the project

## ConfigContest.tsx:

### This file defines the ConfigProvider component and creates a context (ConfigContext) that holds the organization configuration state and functions to update and reset the configuration. It also includes a isFieldValid function to validate specific fields.

## organisation-config.ts:

### This file defines the types for the organization configuration.

## OrganisationConfiguration.tsx:

### This component represents the layout of organization configuration form. It includes a header (TopSection) and content (ConfigBody).

## TopSection.tsx:

### This component represents the top section of the organization configuration form. It displays an alert message for form validation and buttons to save or cancel the changes.


# Highlights

### Each component is defined using functional components and utilizes React hooks, such as useState and useContext, to manage state and access the configuration context.

### The ConfigProvider component wraps the App component, providing a context value that includes the config state, as well as functions to update and reset the config. This allows components nested within the ConfigProvider to access and update the config state without prop drilling.

### The ConfigContext is created using the createContext function from React, and it defines the shape of the context value. Components that need access to the config state can use the useContext hook to consume the context and access the state and functions provided.

## Validation on input fields
### In the Cards components, each input field has an onChange event handler handleInputChange that updates the config state object using the updateConfig function from the ConfigContext. The isFieldValid function from the ConfigContext is also used to determine if a field is valid or not.

### The className property of each input element is conditionally set based on the result of the isFieldValid function. If a field is not valid, the css.invalidInput class is applied, which presumably styles the input with visual feedback indicating an invalid state.

### This approach allows to update the config state object and validate individual input fields without rerendering the entire form or other components unrelated to the input field being edited.