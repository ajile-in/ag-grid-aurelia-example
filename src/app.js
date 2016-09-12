import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Contacts';
    config.map([
      { route: '', moduleId: 'no-selection', title: 'Select' },
      { route: 'contacts/:id', moduleId: 'contact-detail', name: 'contacts' }
    ]);

    this.router = router;
  }

  constructor() {
    this.gridColumns = [
      { headerName: "First Name", field: 'firstName' },
      { headerName: "Last Name", field: 'lastName' },
      { headerName: "Email", field: 'email' },
      { headerName: "Phone No.", field: 'phone' },
    ];

    this.rows = [
      { firstName: 'Ajay', lastName: 'Jadhav', email: 'jadhavajay@gmail.com', phone: '123345567' }
    ];
  }

}