// input: None
// output: gameData object containing Roblox game page meta, creatorName, rootPlaceId, and evidence source confidence levels
// pos: /Users/tangjei/Documents/建站/游戏站/selllemonswiki/src/data/game.ts (更新规则：文件变更需同步本注释与所属目录 README)
export const gameData = {
  robloxUrl: "https://www.roblox.com/games/79268393072444/Sell-Lemons",
  creatorName: "BloxByte Games",
  universeId: null,
  rootPlaceId: 79268393072444,
  maxPlayers: null,
  officialTitle: "Sell Lemons",
  genre: "simulator",
  sourceConfidence: [
    { label: "Roblox game page", level: "verified" },
    { label: "Roblox public API", level: "pending" },
    { label: "Official channels", level: "pending" },
    { label: "In-game checks", level: "pending" }
  ],
  codes: {
    verifiedActiveCodes: [],
    pendingCodes: [],
    communityReportedCodes: [],
    officialStatus: "No verified active codes are listed yet",
    verificationPolicy: "Do not publish active codes as verified without official or in-game proof."
  }
};
