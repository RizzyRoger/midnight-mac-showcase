import { createContext, useContext, useState, type ReactNode } from 'react';
import type { CodeTab, PreviewMessage, Transaction } from '@/lib/app-preview';
function usePreviewState() {
 const [connected, setConnected] = useState(false);
 const [address, setAddress] = useState('');
 const [serverRunning, setServerRunning] = useState(false);
 const [account, setAccount] = useState<{name:string; email:string} | null>(null);
 const [terms, setTerms] = useState(false);
 const [memory, setMemory] = useState(50);
 const [folders, setFolders] = useState<string[]>([]);
 const [contributing, setContributing] = useState(false);
 const [balance, setBalance] = useState(0);
 const [transactions, setTransactions] = useState<Transaction[]>([]);
 const [messages, setMessages] = useState<PreviewMessage[]>([]);
 const [codeTabs, setCodeTabs] = useState<CodeTab[]>([]);
 const [notice, setNotice] = useState('');
 return {connected,setConnected,address,setAddress,serverRunning,setServerRunning,account,setAccount,terms,setTerms,memory,setMemory,folders,setFolders,contributing,setContributing,balance,setBalance,transactions,setTransactions,messages,setMessages,codeTabs,setCodeTabs,notice,setNotice};
}
const PreviewContext = createContext<ReturnType<typeof usePreviewState> | null>(null);
export function PreviewProvider({children}:{children:ReactNode}) { const state=usePreviewState(); return <PreviewContext.Provider value={state}>{children}</PreviewContext.Provider>; }
export function usePreview() { const state=useContext(PreviewContext); if(!state) throw new Error('Preview screens require PreviewProvider'); return state; }
