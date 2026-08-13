# 上游版本追蹤

記錄本項目對應的上游 [agency-agents](https://github.com/msitarzewski/agency-agents) 版本，方便同步更新。

## 當前基線

- **上游倉庫**: https://github.com/msitarzewski/agency-agents
- **對應 commit**: 已追平上游 2026-06-16 狀態（`3f78a30`）
- **2026-06-18 同步內容**:
  - 新增 `gis/`(13) 與 `security/`(10) 兩個部門（對應上游 `a077c9a` / `#572`）
  - 補譯上游 `783f6a7` 之後零散新增的 29 個 agent（engineering 6 / marketing 6 / specialized 14 / design 1 / sales 1 / project-management 1）
  - 上游把 `specialized/blockchain-security-auditor`、`specialized/compliance-auditor` 搬到了 `security/`，本地已刪舊的 specialized 副本、保留 security 版（去重）
  - 上游把 `specialized/prompt-engineer` 改名搬成 `engineering/engineering-prompt-engineer`；本地的 `specialized/prompt-engineer`（中文名「提示詞工程師」）是**原創**，與上游新角色並存，未刪
- **已譯自上游總數**: 215（不含 `strategy/` 運營文檔）；加 51 箇中國原創，本地共 **266** 個智能體
- **覆蓋狀態**: 已與上游達成 agent 文件級 parity（上游所有 agent 均有中文對應）

## 翻譯覆蓋

截至 2026-06-18，本倉庫已覆蓋上游全部 agent（文件級 parity，上游每個 agent 都有中文對應）：

| 來源 | 數量 |
|------|------|
| 已譯自上游 | 215 |
| 中國市場原創 | 51 |
| **合計** | **266** |

> 按部門明細見 [AGENT-LIST.md](./AGENT-LIST.md) 的「按部門統計」與「按來源統計」（權威來源，由實際文件生成；`scripts/check-counts.mjs` 會校驗計數一致）。`strategy/` 目錄為運營文檔，不計入智能體數。

> `strategy/` 目錄是運營文檔（playbooks / runbooks / 協作模板），上下游內容一致，不計入智能體覆蓋率。

### 上下游路徑差異（已映射）

下列 4 個上游 agent 在本地以不同文件名存在，已映射不算缺失：

| 上游路徑 | 本地路徑 |
|---------|---------|
| `marketing/marketing-bilibili-content-strategist.md` | `marketing/marketing-bilibili-strategist.md` |
| `specialized/customer-service.md` | `support/support-support-responder.md`（拆分） |
| `specialized/sales-outreach.md` | `sales/sales-outbound-strategist.md` |
| `specialized/supply-chain-strategist.md` | `supply-chain/supply-chain-strategist.md` |

## 中國市場原創智能體

本項目除翻譯外，新增 49+ 個針對中國市場原創的智能體（小紅書/抖音/微信/B站/快手/微博/飛書/釘釘/百度SEO/政務ToG/醫療合規/高考志願/留學規劃/Qt 上位機/養殖檔案核對等）。

完整列表見 [AGENT-LIST.md](./AGENT-LIST.md) 中標記為 `原創` 的條目。

## 本地額外目錄

下列目錄在上游不存在，是本項目針對中國市場新建的部門：

- `hr/` — 招聘專家、績效管理專家（2 個）
- `legal/` — 合同審查專家、制度文件撰寫專家（2 個）
- `supply-chain/` — 庫存預測/供應商評估/物流路線優化（3 個）

## 同步說明

- 跟蹤上游 `main` 分支
- 新增的上游智能體會逐步翻譯
- 上游如果有大的結構調整（目錄重命名等），一週內同步
- 上游版本號每次同步後由維護者更新本文件
