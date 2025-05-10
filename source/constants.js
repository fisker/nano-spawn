import process from 'node:process';

export const IS_WINDOWS = process.platform === 'win32';
export const NODE_EXECUTABLES = new Set(IS_WINDOWS ? ['node', 'node.exe'] : ['node']);
