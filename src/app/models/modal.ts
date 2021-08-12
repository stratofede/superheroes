export class ModalActionData {
    title: string;
    description: string;
    btnAccept: string;
    btnCancel: string;

    constructor(
        title      : string, 
        description: string,
        btnAccept  : string,
        btnCancel  : string,
) {
    this.title       = title;
    this.description = description;
    this.btnAccept   = btnAccept;
    this.btnCancel   = btnCancel;
}
}