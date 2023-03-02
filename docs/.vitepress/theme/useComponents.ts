import BooleanDisplay from './components/BooleanDisplay.vue'

export function useComponents(app) {
  app.component('BooleanDisplay', BooleanDisplay)
  app.component('RequiresProxy', BooleanDisplay)
}
