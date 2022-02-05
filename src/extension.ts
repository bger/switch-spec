import * as vscode from 'vscode';
import { switchEditor } from './lib/controller';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('fast-spec.toggleSpec', () => {
    const activeFile = vscode.window.activeTextEditor;

    if(!activeFile) { return; }

    switchEditor(activeFile);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
