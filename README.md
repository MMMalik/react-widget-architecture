## React Widget Architecture

This repo contains a sample architecture of a front-end widget made with React.

The widget is supposed to be configurable. It should be possible to:

-   override default UI components with custom ones
-   embed widget into any front-end app
-   dispatch widget actions from the outside (TODO)
-   configure basic functionalities such as API, etc. (TODO)
-   configure UI theme (TODO)

The approach is inspired by [Clean Architecture](https://dev.to/bespoyasov/clean-architecture-on-frontend-4311) concepts,
in particular by [this repo](https://github.com/bespoyasov/frontend-clean-architecture/blob/master/README.md). In order to simplify things, the "use cases" layer is omitted. Perhaps, if the widget were to be adapted for the needs of other frameworks or platforms,
then "use cases" layer could be introduced.

## Structure

### `/samples`

Sample applications that use the widget.

### `/src/domain`

Definition of entities and pure, framework-agnostic business logic. No dependencies are allowed here.

### `/src/services`

Framework-agnostic services (e.g. redux store, event emitter) as well as framework-specific adapters (e.g. React hooks).

### `/src/ui`

Framework-specific UI components.

### `/src/wrapper`

Wrapper around UI components that allows to use the widget in any front-end app.

## Development

Install dependencies:

```
pnpm i
```

Build the widget:

```
pnpm build
```

Link the widget (one-time operation):

```
pnpm link --global
```

Run sample:

```
cd samples/basic
pnpm remove react-widget-architecture
pnpm i
pnpm link --global react-widget-architecture
pnpm dev
```
