import { describe, expect, it } from 'vitest';
import { codeModes, previewCodeAction, previewRuntime } from '@/lib/app-preview';
describe('App preview code modes',()=>{
 it('includes Plan, Manual and Auto',()=>expect(codeModes).toEqual(['Plan','Manual','Auto']));
 it('Plan proposes a plan',()=>expect(previewCodeAction('Plan')).toBe('plan'));
 it('Manual requests approval',()=>expect(previewCodeAction('Manual')).toBe('approval'));
 it('Auto produces a simulated checkpoint',()=>expect(previewCodeAction('Auto')).toBe('checkpoint'));
 it('does not enable native file editing',()=>expect(previewRuntime.fileEditing).toBe(false));
 it('does not enable native command execution',()=>expect(previewRuntime.commandExecution).toBe(false));
 it('does not collect real payments',()=>expect(previewRuntime.realPayments).toBe(false));
});