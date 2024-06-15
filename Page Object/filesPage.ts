import { basePage } from "./basePage";

export class FilesPage extends basePage {

    constructor(page) {
    super(page)
    }

Containers = {

headerContainer: this.page.locator('[data-testid="MainHeaderContainer"]'),
accordionContainer: this.page.locator('[class*="SecondaryBar__CustomAccordion"]'),
dropDownConrainer: this.page.locator('[data-testid="dropdown-popper-list"]'),
modalComponentsContainer: this.page.locator('[class*="ModalComponents__ModalContent"]'),
documentsContainer: this.page.locator('[data-testid="list-LOCAL_ROOT"]'),

}

Buttons = {

homeButton: this.Containers.accordionContainer.locator('[data-testid="icon: FolderOutline"]') ,
recentsButton: this.Containers.accordionContainer.locator('[data-testid="icon: ClockOutline"]') ,
flaggedButton: this.Containers.accordionContainer.locator('[data-testid="icon: FlagOutline"]') ,
sharedWithMeButton: this.Containers.accordionContainer.locator('[data-testid="icon: ArrowCircleLeftOutline"]'),
sharedByMeButton: this.Containers.accordionContainer.locator('[data-testid="icon: ArrowCircleRightOutline"]'),
uploadsButton: this.Containers.accordionContainer.locator('[data-testid="icon: CloudUploadOutline"]'),
trashButton: this.Containers.accordionContainer.locator('[data-testid="icon: Trash2Outline"]'),
trashDropDownButton: this.Containers.accordionContainer.locator('[data-testid="icon: ChevronDown"]'),
myItemsButton: this.Containers.accordionContainer.locator('[data-testid="icon: HardDriveOutline"]'),
sharedItemsButton: this.Containers.accordionContainer.locator('[data-testid="icon: ShareOutline"]'),

searchButton: this.Containers.headerContainer.locator('[data-testid="icon: Search"]'),
clearSearchInputButton: this.Containers.headerContainer.locator('[data-testid="icon: PersonOutline"]'), 

NEWButton: this.Containers.headerContainer.locator('[class="Button__StyledGrid-sc-1oof15b-6 kDNpzI"]'),
NEWDropDownButton: this.Containers.headerContainer.locator('[data-testid="icon: ChevronDownOutline"][class*="Button__StyledIcon"]'),

uploadButton: this.Containers.dropDownConrainer.locator('"Upload"'),
newFolderButton: this.Containers.dropDownConrainer.locator('"New folder"'),
newDocumentButton: this.Containers.dropDownConrainer.locator('"New document"'),
newDocumentOdtButton: this.Containers.dropDownConrainer.locator('"OpenDocument (.odt)"'), 
newDocumentDocxButton: this.Containers.dropDownConrainer.locator('"Microsoft Word (.docx)"'),
newSpreadsheetButton: this.Containers.dropDownConrainer.locator('"New spreadsheet"'),
newSpreadsheetOdsButton: this.Containers.dropDownConrainer.locator('"OpenDocument (.ods)"'),
newSpreadsheetXlsxButton: this.Containers.dropDownConrainer.locator('"Microsoft Excel (.xlsx)"'),
newPresentationButton: this.Containers.dropDownConrainer.locator('"New presentation"'),
newPresentationOdpButton: this.Containers.dropDownConrainer.locator('"OpenDocument (.odp)"'),
newPresentationPptxButton: this.Containers.dropDownConrainer.locator('"Microsoft PowerPoint (.pptx)"'), 
newEmailButton: this.Containers.dropDownConrainer.locator('"New E-mail"'),
newAppointmentButton: this.Containers.dropDownConrainer.locator('"New appointment"'),
newContactButton: this.Containers.dropDownConrainer.locator('"New contact"'),
newContactGroupButton: this.Containers.dropDownConrainer.locator('"New contact group"'), 
newTaskButton: this.Containers.dropDownConrainer.locator('"New Task"'),

createButton: this.Containers.modalComponentsContainer.locator('[class*="Button__StyledText"]'),

}

EntryField = {
documentNameField: this.Containers.modalComponentsContainer.locator('[class*="InputContainer"]'),
}

Label = {
documentNameLabel: this.Containers.documentsContainer.locator('[class*="Text__Comp"]'),
}



async deleteDocumentOdtFormat() {
    await this.page.locator('.CollapsingActions__RefDiv-sc-1urtg1r-0').first().click({button: 'right' });
    await this.page.locator('div')
    .filter({ hasText: 'Delete' })
    .nth(2)
    .click();
}

// async createNewDocumentOdtFormat() {
//     await this.page.locator('[data-testid="icon: DriveOutline"]').click();
//     await this.Buttons.newListButton.click();
//     await this.Buttons.newDocument.hover();
//     await this.Buttons.newDocumentButton.click();
//     await this.Labels.documentNameLabel.click();
//     await this.Labels.documentNameLabel.fill('Test');
//     await this.Buttons.documentNameCreateButton.click(); 
// }

}