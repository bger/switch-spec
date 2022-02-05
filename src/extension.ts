import revertPath from './lib/revertPath';
import * as fs from 'fs';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('fast-spec.toggleSpec', () => {
		const activeFile = vscode.window.activeTextEditor;

		if(!activeFile) {
			return;
		}
		const activeFilePath = activeFile.document.fileName;
		const uri = vscode.Uri.file(revertPath(activeFilePath));

		let fileExist = true;

		try {
			fs.accessSync(uri.fsPath);
		} catch (e) {
			fileExist = false;

			if(uri.fsPath.match(/_spec\.rb/)) {
				let edit = new vscode.WorkspaceEdit();
				edit.createFile(uri, {ignoreIfExists: true});
				vscode.workspace.applyEdit(edit).then(() => {
					vscode.workspace.openTextDocument(uri.fsPath).then(vscode.window.showTextDocument);
				});
			}
		};

		if (!fileExist) {	return; }

		vscode.workspace.openTextDocument(uri.fsPath).then(vscode.window.showTextDocument);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
