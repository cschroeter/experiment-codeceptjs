/// <reference types='codeceptjs' />
type todoPage = typeof import('./src/pages/todoPage');
type CustomHelper = import('./src/helpers/CustomHelper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, todoPage: todoPage }
  interface Methods extends Playwright, CustomHelper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
