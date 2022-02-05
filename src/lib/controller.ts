import revertPath from './revertPath';
import * as fs from 'fs';
import * as vscode from 'vscode';

export function switchEditor(activeFile: vscode.TextEditor) {
  const activeFilePath = activeFile.document.fileName;
  const uri = vscode.Uri.file(revertPath(activeFilePath));

  let fileExist = true;

  try {
    fs.accessSync(uri.fsPath);
  } catch (e) {
    fileExist = false;

    if(uri.fsPath.match(/_spec\.rb/)) {
      createFile(uri);
      const message = `File ${uri.fsPath} successfully created`;
      vscode.window.showInformationMessage(message);
    }
  };

  if (!fileExist) {	return; }

  openTab(uri);
}

function createFile(uri: vscode.Uri) {
  let edit = new vscode.WorkspaceEdit();

  edit.createFile(uri, {ignoreIfExists: true});
  vscode.workspace.applyEdit(edit).then(() => {
    openTab(uri);
  });
}

function openTab(uri: vscode.Uri) {
  vscode.workspace.openTextDocument(uri.fsPath).then(vscode.window.showTextDocument);
}
