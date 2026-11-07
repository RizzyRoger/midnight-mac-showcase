// Where the desktop app downloads live and how to install them.
// Builds are published as GitHub Releases on the app repo. The "latest" links keep working
// when a new release is published, so this page doesn't need a change for each build.
export const APP_REPO = "https://github.com/RizzyRoger/SlashCompute-V2";
export const LATEST_RELEASE_URL = `${APP_REPO}/releases/latest`;
export const WEBVIEW2_URL = "https://developer.microsoft.com/microsoft-edge/webview2/";

export type Download = {
  platform: string;
  status: "available" | "coming-soon";
  file: string;
  url: string | null;
  requirements: string;
  steps: string[];
  help?: { label: string; url: string };
};

export const macDownload: Download = {
  platform: "Mac",
  status: "available",
  file: "compute-mac.dmg",
  url: `${LATEST_RELEASE_URL}/download/compute-mac.dmg`,
  requirements: "macOS 12+ · Apple Silicon (M1 and newer)",
  steps: [
    "Open compute-mac.dmg and drag compute into Applications.",
    "The build isn't code-signed yet. The first time, right-click compute in Applications, choose Open, then click Open.",
    "If macOS only offers Move to Trash or Done: System Settings → Privacy & Security → Open Anyway, then confirm.",
    "When macOS asks whether python3.13 may find devices on your local network, click Allow. compute runs on its own copy of Python, so that's the name macOS shows, also under System Settings → Privacy & Security → Local Network.",
    "Allow incoming connections when asked, so pool members can connect to each other.",
  ],
};

export const windowsDownload: Download = {
  platform: "Windows",
  status: "coming-soon",
  file: "compute-windows.zip",
  url: null,
  requirements: "Windows 10 or 11 (64-bit) · Microsoft Edge WebView2 Runtime",
  steps: [
    "Right-click compute-windows.zip → Extract All, into a folder you keep. Don't run it from inside the zip.",
    "Open the extracted compute folder and double-click compute.exe.",
    "If SmartScreen says Windows protected your PC: More info → Run anyway (the build isn't signed yet).",
    "When Windows Defender Firewall asks, allow Private networks (Public only if your pool runs over a public network).",
    "If the window stays blank, install the WebView2 Runtime from Microsoft and open compute again.",
  ],
  help: { label: "WebView2 Runtime", url: WEBVIEW2_URL },
};
