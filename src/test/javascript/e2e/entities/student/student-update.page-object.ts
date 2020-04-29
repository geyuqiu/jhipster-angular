import { by, element, ElementFinder } from 'protractor';

import AlertPage from '../../page-objects/alert-page';

export default class StudentUpdatePage extends AlertPage {
  title: ElementFinder = element(by.id('lfiErfassungBackendApp.student.home.createOrEditLabel'));
  footer: ElementFinder = element(by.id('footer'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));

  nameInput: ElementFinder = element(by.css('input#student-name'));

  universitySelect = element(by.css('select#student-university'));
}
