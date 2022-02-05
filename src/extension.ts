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
		fs.access(uri.fsPath, ()=>{ fileExist = false; });

		if (!fileExist) {	return; }

		vscode.workspace.openTextDocument(uri.fsPath).then(vscode.window.showTextDocument);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
