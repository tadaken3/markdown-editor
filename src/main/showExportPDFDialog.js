import { dialog } from "electron";

function showExportPDFDialog() {
    return new Promise((resolve, reject) => {
        const file = dialog.showSaveDialog(
            {
                title: "export as PDF",
                filters: [
                    {name: "pdf file", extensions: ["pdf"]}
                ]
            }
        );
        if (file) {
            resolve(file);
        } else {
            reject();
        }
    });
}

export default showExportPDFDialog;

