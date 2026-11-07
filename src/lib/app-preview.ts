import { capabilities } from './capabilities';
export type CodeMode = 'Plan' | 'Manual' | 'Auto';
export const codeModes: CodeMode[] = ['Plan', 'Manual', 'Auto'];
export const previewModels = ['Qwen 2.5 · 7B', 'Llama 3.2 · 3B', 'DeepSeek R1 · 8B'];
export const previewRuntime = { fileEditing: capabilities.fileEditing, commandExecution: capabilities.commandExecution, realPayments: false } as const;
export function previewCodeAction(mode: CodeMode) {
  return mode === 'Plan' ? 'plan' : mode === 'Manual' ? 'approval' : 'checkpoint';
}
export type PreviewMessage = { id: number; role: 'user' | 'assistant'; text: string; attachments?: string[] };
export type CodeTab = { id: number; folder: string; mode: CodeMode; model: string; budget: number; messages: PreviewMessage[]; stage: 'idle' | 'plan' | 'approval' | 'checkpoint'; checkpoint: boolean; };
export type Transaction = { id: number; amount: number; label: string };
