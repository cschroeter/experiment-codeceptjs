const { I } = inject();

export = {
  goToHome: () => {
    I.amOnPage("/");
  },
  createTask: (todo: string) => {
    I.fillField("New task", todo);
    I.pressKey("Enter");
  },

  deleteTask: (todo: string) => {},
};
