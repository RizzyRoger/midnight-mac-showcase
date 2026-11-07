export const capabilities = {
  chat: true,
  imageAnalysis: true,
  fileEditing: false,
  commandExecution: false,
} as const;

export const capabilityItems = [
  { title: "Basic chat", available: capabilities.chat },
  { title: "Image analysis", available: capabilities.imageAnalysis },
  { title: "File editing", available: capabilities.fileEditing },
  { title: "Terminal commands", available: capabilities.commandExecution },
];