export interface Article {
  id: number;
  title: string;
  category: string;
  url: string;
}

export const articles: Article[] = [
  // 資訊安全
  { id: 71, title: "釣魚測試(Phishing Tests) VS. 消防演練(Fire Drills) — 有趣的觀點微分析", category: "資訊安全", url: "https://medium.com/blacksecurity/firedrill-a0763fcbc35d" },
  { id: 61, title: "資安思維、強韌身心：資安人的健康啟示 — 為什麼要運動？將資安觀念套用到你的日常生活，提升你的身體韌性！", category: "資訊安全", url: "https://medium.com/blacksecurity/workout-d40a34b19194" },
  { id: 60, title: "EC-Council CEH Practical / Master 準備心得 — 讓理論與實作相輔相成的學習", category: "資訊安全", url: "https://medium.com/blacksecurity/ceh-practical-master-3e80cac180a2" },
  { id: 59, title: "密碼管理器(Password Manager)平台轉移心得與密碼格式轉換工具介紹", category: "資訊安全", url: "https://medium.com/blacksecurity/passwordmanager-21e115f2f59b" },
  { id: 58, title: "快速通過 CISSP 考試心得、準備方式與教材整理", category: "資訊安全", url: "https://medium.com/blacksecurity/cissp-8ff31adf79e0" },
  { id: 57, title: "最佳新手資安管理證照，ISC2 CC 自修考試心得、準備方式與教材整理", category: "資訊安全", url: "https://medium.com/blacksecurity/cc-cbcfc9b842b5" },
  { id: 56, title: "CCSP 雲端資安專家自修考試心得、準備方式與教材整理", category: "資訊安全", url: "https://medium.com/blacksecurity/ccsp-雲端資安專家自修考試心得-準備方式與教材整理-certified-cloud-security-professional-a3dccf22136d" },
  { id: 55, title: "ISACA CDPSE 國際資訊隱私防護師認證自修考試心得", category: "資訊安全", url: "https://medium.com/blacksecurity/isaca-cdpse-8c6ebaeb58e3" },
  { id: 54, title: "不敗學習力：10大聰明讀書法之 CISSP 證照考試應用心得", category: "資訊安全", url: "https://medium.com/blacksecurity/study-methods-150492baf20f" },
  { id: 53, title: "IT 在企業內的價值呈現 — 公司治理與 IT 治理", category: "資訊安全", url: "https://medium.com/blacksecurity/it-governance-acf64c3a4580" },
  { id: 52, title: "入門學習資安治理與管理： ISACA 證照學習組合包與教材總整理", category: "資訊安全", url: "https://medium.com/blacksecurity/cybersecurity-isaca-governance-4d81fd50ec91" },
  { id: 51, title: "ISACA CGEIT 國際企業資訊治理師認證自修考試心得", category: "資訊安全", url: "https://medium.com/blacksecurity/isaca-cgeit-cb171cf81c08" },
  { id: 50, title: "EC-Council 安全運營中心 (SOC) 分析師認證考試心得", category: "資訊安全", url: "https://medium.com/blacksecurity/soc-analyst-770141c5de8e" },
  { id: 49, title: "ISACA CRISC 國際資訊風險控制師認證自修考試心得", category: "資訊安全", url: "https://medium.com/blacksecurity/isaca-crisc-e64b1a3fda19" },
  { id: 48, title: "ISACA CISM 國際資訊安全經理人準備心得", category: "資訊安全", url: "https://medium.com/blacksecurity/isaca-cism-833c4f9f8e16" },
  { id: 47, title: "資安稽核員的基本知識— MS SQL Server 的備份、安全性、維運與稽核軌跡入門", category: "資訊安全", url: "https://medium.com/blacksecurity/mssqlserveraudit-1eb142f5bd2d" },
  { id: 46, title: "資安稽核員的精神— 如何成為值得信賴的稽核員？", category: "資訊安全", url: "https://medium.com/blacksecurity/goodauditor-134c07fdf0d0" },
  { id: 45, title: "ISACA CISA 國際電腦稽核師準備心得", category: "資訊安全", url: "https://medium.com/blacksecurity/isaca-cisa-study-7e145bb42f02" },
  { id: 44, title: "EC-Council 系列證照自修申請考試步驟教學", category: "資訊安全", url: "https://medium.com/blacksecurity/ec-council-selfstudy-e98c93223271" },
  { id: 43, title: "ECSA v10 等效申請CREST CPSA 資安分析師證照教學", category: "資訊安全", url: "https://medium.com/blacksecurity/crestcpsa-5a07e25e7da3" },
  { id: 42, title: "ECSA v10 考試心得與讀書資料分享", category: "資訊安全", url: "https://medium.com/blacksecurity/ecsa-v10-1ec76c0eb7d4" },
  { id: 41, title: "CEH v10 考試心得與讀書資料分享", category: "資訊安全", url: "https://medium.com/blacksecurity/ceh-v10-考試心得與讀書資料分享-4598422fc644" },
  { id: 40, title: "網路安全封包分析:封包Payload行為判讀與常見協定安全解析", category: "資訊安全", url: "https://medium.com/blacksecurity/網路安全封包分析-封包行為判讀與常見協定解析-e8687c538b20" },
  { id: 39, title: "用Wireshark 解析使用者瀏覽器HTTPS流量教學", category: "資訊安全", url: "https://medium.com/blacksecurity/用wireshark-解析使用者瀏覽器https流量教學-8c15948f38fd" },
  { id: 38, title: "網路安全封包分析:Wireshark 快速判斷IP位置並找出可疑程式", category: "資訊安全", url: "https://medium.com/blacksecurity/securityanalysiswithwireshark1-51b4a54ba483" },
  { id: 37, title: "資訊安全-金融業資訊安全技術法規要求簡介", category: "資訊安全", url: "https://medium.com/blacksecurity/資訊安全-金融業資訊安全技術法規要求簡介-d3bb8d66a308" },

  // 雲端運算與安全
  { id: 97, title: "從被動到主動：利用 AWS SecurityAgent 實現自動化 Design review與 Code review", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/designreview-7a8e936a1045" },
  { id: 96, title: "從被動到主動：利用 AWS SecurityAgent 實現自動化滲透測試 （Penetration Testing)", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/secagentpt-bdc1a14e860b" },
  { id: 95, title: "Amazon Kiro Enterprise Security Integration: Getting Started with AWS IAM Identity Center and Security Management (Kiro for Enterprise)", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/amazon-kiro-enterprise-b39782221648" },
  { id: 94, title: "Amazon Kiro 企業版安全整合：AWS IAM Identity Center 與安全管理入門(Kiro for Enterprise)", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/amazon-kiro-e6cdf49b5851" },
  { id: 89, title: "生成式 AI 資料控管與安全防護機制設計 — 使用 Amazon Bedrock Guardrails", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/%E7%94%9F%E6%88%90%E5%BC%8F-ai-%E8%B3%87%E6%96%99%E6%8E%A7%E7%AE%A1%E8%88%87%E5%AE%89%E5%85%A8%E9%98%B2%E8%AD%B7%E6%A9%9F%E5%88%B6%E8%A8%AD%E8%A8%88-%E4%BD%BF%E7%94%A8-amazon-bedrock-guardrails-758612006b82" },
  { id: 88, title: "保護你的雲端資料安全：使用 Amazon Macie", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/amazonmacie-5826bd315535" },
  { id: 87, title: "強化雲端威脅偵測與雲端資安事故回應：使用 Amazon GuardDuty 與 Detective ！", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/guardduty-detective-e09a8485b5c4" },
  { id: 85, title: "善用你的 AWS Trusted Advisor：提升雲端安全、效能與成本效益！", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/aws-trusted-advisor-03954636abc8" },
  { id: 84, title: "Introduction to AWS Trusted Advisor: Improve Your Cloud Security, Performance, and Cost Efficiency", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/introduction-to-aws-trusted-advisor-a334a39229fa" },
  { id: 83, title: "AWS Certified AI Practitioner (AIF-C01)心得分享、準備教材與資訊安全", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/aws-certified-ai-practitioner-aif-c01-5d345edb6624" },
  { id: 82, title: "GCP IAM Security — 使用 PAM 強化特權帳號管理", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/gcp-iam-security-chinese-729961b29297" },
  { id: 81, title: "GCP IAM Security — Enhancing Privileged Account Management with PAM", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/gcp-iam-security-eng-39a743e86078" },
  { id: 80, title: "在 Windows 安裝WSL 執行Scirpt 以進行 AWS 資源盤點：解決 AWS SecurityAudit Policy限制", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/aws-asset-inventory-400daeb1f733" },
  { id: 79, title: "Running Custom Scripts on Windows WSL for AWS Resource Inventory: Addressing AWS SecurityAudit Policy Restrictions", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/aws-script-inventory-5c0477603508" },
  { id: 78, title: "Securiti Education — Al Security & Governance Course Study Note", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/al-security-governance-certification-study-note-f2e475110fb2" },
  { id: 77, title: "The Use and Introduction of Confidential Computing on AWS, Azure, and GCP", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/confidential-computing-f4bcf8827963" },
  { id: 76, title: "機密計算(Confidential Computing)在Azure, AWS, GCP上的使用與介紹", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/confidential-computing-ca61d5c7c466" },
  { id: 75, title: "Cloud Network Access Control Rule Review — Official Command Compilation (Azure NSG, AWS Security Group/NACL, GCP Firewall)", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/cloud-network-access-control-rule-review-483413ed217d" },
  { id: 74, title: "雲端網路存取控制規則檢視-官方指令彙整(Azure NSG, AWS Security Group/NACL ,GCP Firewall)", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/cloud-nacl-review-ed50b1c969fe" },
  { id: 73, title: "Amazon CodeGuru Security: Your Code Review SAST Tool (靜態應用程式安全測試)", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/amazon-code-review-tool-sast-codeguru-security-44a191da55e9" },
  { id: 72, title: "Building Secure NL to SQL Solutions: Information Security Considerations", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/building-secure-nl-to-sql-solutions-information-security-considerations-e05079751c76" },
  { id: 70, title: "遠距辦公與資料保護—使用 AWS WorkSpaces 虛擬桌面服務", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/awsworkspaces-0fb434c14f37" },
  { id: 69, title: "Amazon Bedrock 試用心得 — 安全的在雲端上使用生成式 AI", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/amazon-bedrock-85d566d2de1e" },
  { id: 68, title: "GCP Associate Cloud Engineer (ACE) 學習心得、教材資源、心智圖與筆記分享 — 學習天然高可用與零信任設計！", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/gcp-associate-cloud-engineer-78f736aee7ad" },
  { id: 67, title: "[GCP] 部署 Docker 應用至 Cloud Run 並使用 IAP 驗證登入", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/cloudrun-with-iap-eb1c71ca88d2" },
  { id: 66, title: "AWS Certified Cloud Practitioner Certification 雲端從業者學習心得、教材資源與筆記分享 (AWS CCP)/ 最佳入門雲端證照", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/aws-ccp-6fbb13501418" },
  { id: 65, title: "AWS Certified Solutions Architect — Associate 學習心得、教材資源與筆記分享 / 一起學習雲端架構！", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/aws-saa-3837551b6898" },
  { id: 62, title: "使用AWS CloudFront 的原始存取控制(OAC)建立安全的 S3 靜態網站", category: "雲端運算與安全", url: "https://medium.com/blacksecurity/aws-cloudfront-oac-5805d27b3a7a" },
  { id: 24, title: "AZ-900 Microsoft Azure Fundamentals 自修考試心得與準備資料", category: "雲端運算與安全", url: "https://medium.com/@kuroH/az-900-microsoft-azure-fundamentals-d0718175de65" },

  // CTF/滲透測試
  { id: 36, title: "Root me — Zone Transfer Write-up", category: "CTF/滲透測試", url: "https://medium.com/blacksecurity/root-me-dns-zone-transfer-write-up-596dc252c98b" },
  { id: 35, title: "Root me — IP Time to Live(TTL) Write-up", category: "CTF/滲透測試", url: "https://medium.com/blacksecurity/root-me-ip-time-to-live-write-up-492ca954ea6b" },
  { id: 34, title: "Hack the box — OpenAdmin write up", category: "CTF/滲透測試", url: "https://medium.com/blacksecurity/hack-the-box-openadmin-write-up-bcbab4c4b508" },
  { id: 33, title: "Metasploitable 學習筆記-XSS Vulnerability : BeEF 瀏覽器攻擊與社交工程欺騙", category: "CTF/滲透測試", url: "https://medium.com/blacksecurity/metasploitable-dvwa-xss-vulnerability-2c7c8facf5e9" },
  { id: 32, title: "Metasploitable 學習筆記-DVWA LFI/RFI & Reverse Shell", category: "CTF/滲透測試", url: "https://medium.com/blacksecurity/metasploitable-dvwa-lfi-rfi-b4054760e1b9" },
  { id: 31, title: "Metasploitable 學習筆記-DVWA Command injection 命令注入攻擊與 Reverse Shell", category: "CTF/滲透測試", url: "https://medium.com/blacksecurity/metasploitable-dvwa-command-injection-9c092e180d0" },
  { id: 30, title: "Metasploitable 學習筆記-DVWA文件上傳漏洞 & Reverse Shell", category: "CTF/滲透測試", url: "https://medium.com/blacksecurity/metasploitable-學習筆記-web滲透測試基礎與文件上傳漏洞-557d6392eefe" },
  { id: 29, title: "Root me — Twitter authentication Packet analysis Write-up", category: "CTF/滲透測試", url: "https://medium.com/blacksecurity/root-me-twitter-authentication-packet-analysis-write-up-f54f146bc52d" },
  { id: 28, title: "Cisco Password Decrypt Write-up", category: "CTF/滲透測試", url: "https://medium.com/blacksecurity/root-me-cisco-password-decrypt-write-up-3b4beb890a76" },
  { id: 27, title: "Tryhackme-OhSINT Write-up", category: "CTF/滲透測試", url: "https://medium.com/blacksecurity/tryhackme-ohsint-write-up-5d6945e36756" },
  { id: 26, title: "Hack The Box-Bastion Write-up", category: "CTF/滲透測試", url: "https://medium.com/blacksecurity/hack-the-box-bastion-write-up-ecf05ae4572a" },
  { id: 25, title: "Root me-FTP authentication Write-up", category: "CTF/滲透測試", url: "https://medium.com/blacksecurity/root-me-ftp-authentication-write-up-5a44532bac47" },

  // 網路管理
  { id: 23, title: "VMware VCP-NV網路虛擬化 — 自修考試準備心得與抵免上課教學", category: "網路管理", url: "https://medium.com/blacksecurity/vmware-network-virtualization-e52b09b526c8" },
  { id: 22, title: "Cisco CCNP Enterprise 2020新版自修考試準備心得與流程介紹", category: "網路管理", url: "https://medium.com/blacksecurity/cisco-ccnp-enterprise-2020-9866cbf2d050" },
  { id: 21, title: "[Cisco] 網路流量側錄功能教學-SPAN", category: "網路管理", url: "https://medium.com/blacksecurity/cisco-流量側錄功能-span-mirror-port-17f380e404ac" },
  { id: 20, title: "[Cisco] Load balancing 與 Load sharing 比較", category: "網路管理", url: "https://medium.com/blacksecurity/cisco-load-balancing-與-load-sharing-比較-7e180a6ce76" },
  { id: 19, title: "[Cisco] Router 與 Layer 3 Switch 差異比較表", category: "網路管理", url: "https://medium.com/blacksecurity/cisco-router-與-layer-3-switch-簡易比較-f0a5ca4fbc7a" },
  { id: 18, title: "[Cisco] RIP、EIGRP、OSPF 路由協定比較", category: "網路管理", url: "https://medium.com/blacksecurity/cisco-rip-eigrp-ospf簡易比較-9ef5ae58f6d0" },

  // 讀書心得與雜談
  { id: 93, title: "資安 x 潛水 x 應變— Rescue Diver 救援潛水員證照訓練心得", category: "讀書心得與雜談", url: "https://medium.com/blacksecurity/rescue-diver-5fc7e3734038" },
  { id: 92, title: "有限資源，無限賽局-為何優秀的畢業生，都只能往科技業擠？從資安推動角度看就業選擇", category: "讀書心得與雜談", url: "https://medium.com/blacksecurity/securityjob-life-b63c1bbc7ed5" },
  { id: 91, title: "常見壺鈴訓練動作中英文對照表 Kettlebell Exercise Terminology: Chinese-English Reference", category: "讀書心得與雜談", url: "https://medium.com/blacksecurity/kettlebellenglish-57ccc15f7748" },
  { id: 90, title: "資安 x 潛水 x 風險管理：綠島的 Open Water Dive 開放水域潛水員證照訓練心得", category: "讀書心得與雜談", url: "https://medium.com/blacksecurity/openwaterdiver-d7bf423cc281" },
  { id: 86, title: "過勞崇拜：忙碌成為身分象徵？我們為什麼無法坦然休息？", category: "讀書心得與雜談", url: "https://medium.com/blacksecurity/hustle-culture-8273b2694723" },
  { id: 64, title: "酷航與虎航免費修改機票姓名方式", category: "讀書心得與雜談", url: "https://medium.com/@kuroH/changeticketname-98d9fcd0ae55" },
  { id: 63, title: "體適能健身C級指導員認證課程：新手入門學習心得！", category: "讀書心得與雜談", url: "https://medium.com/blacksecurity/c-level-exercise-0fbc222bf7f1" },
  { id: 17, title: "聊聊 2021 的Medium 年度經營結果", category: "讀書心得與雜談", url: "https://medium.com/blacksecurity/medium2021-a76ee341a9a3" },
  { id: 16, title: "聊聊 2020 的Medium 年度經營結果", category: "讀書心得與雜談", url: "https://medium.com/blacksecurity/kuro-2020-medium-746c09f8631b" },
  { id: 15, title: "我真的需要考證照嗎? 考證照對就業會有幫助嗎? 一篇考證照的思考與效益分析", category: "讀書心得與雜談", url: "https://medium.com/blacksecurity/benefits-of-certifications-ec8880639df8" },
  { id: 14, title: "麥肯錫新人邏輯思考5堂課：只要一小時，就可學會一生受用的邏輯思考法則 讀後筆記", category: "讀書心得與雜談", url: "https://medium.com/blacksecurity/beginnersonlogicalthinking-ebced3971142" },
  { id: 13, title: "2019 Medium 歷程與檢視", category: "讀書心得與雜談", url: "https://medium.com/blacksecurity/2019-medium-1609f1a76582" },
  { id: 12, title: "解憂咖啡館 — 咖啡的溫度也是人性的溫度 讀後感", category: "讀書心得與雜談", url: "https://medium.com/blacksecurity/解憂咖啡館-咖啡的溫度也是人性的溫度-讀後感-b2ef57809e9b" },
  { id: 11, title: "[讀書心得]關於人生的7項財務思考：7堂一定要懂的理財投資×人生規劃必修課", category: "讀書心得與雜談", url: "https://medium.com/blacksecurity/讀書心得-關於人生的7項財務思考-7堂一定要懂的理財投資-人生規劃必修課-c57d7e7805af" },
  { id: 10, title: "[讀書心得]目標管理的力量Par2:目標管理，七步驟做好目標管理", category: "讀書心得與雜談", url: "https://medium.com/blacksecurity/讀書心得-目標管理的力量-目標管理-92020d932ca0" },
  { id: 9, title: "[讀書心得]目標管理的力量Par1:自我與人生管理篇", category: "讀書心得與雜談", url: "https://medium.com/blacksecurity/讀書心得-目標管理的力量-自我與人生管理-1f0707033fce" },

  // 理財投資
  { id: 8, title: "存股方法-不敗教主的300張股票存股術 讀後心得", category: "理財投資", url: "https://medium.com/blacksecurity/300-stocks-6efb9618c35f" },
  { id: 7, title: "經典著作: 投資前最重要的事- 為什麼長期思考勝過短期獲利? 讀後心得與自我反思", category: "理財投資", url: "https://medium.com/blacksecurity/經典著作-投資前最重要的事-為什麼長期思考勝過短期獲利-讀後心得與自我反思-9fd3503cbf8f" },
  { id: 6, title: "股市經典教科書-我的職業是股東 讀後心得", category: "理財投資", url: "https://medium.com/blacksecurity/股市經典教科書-我的職業是股東-讀後心得筆記-11fe370f5ec7" },
  { id: 5, title: "[讀書心得]投資金律 : 建立獲利投資組合的四大關鍵和十四個關卡", category: "理財投資", url: "https://medium.com/blacksecurity/讀書心得-投資金律-建立獲利投資組合的四大關鍵和十四個關卡-9137c5e4dc69" },
  { id: 4, title: "與眾不同的思考 <反市場：JG股市操作原理>- 讀後心得", category: "理財投資", url: "https://medium.com/blacksecurity/與眾不同的思考-反市場-jg股市操作原理-讀後心得-990c5cb13fc3" },
  { id: 3, title: "技術分析入門:K線應用與買賣時機，一出手就賺錢 — K線日記雜誌筆記", category: "理財投資", url: "https://medium.com/blacksecurity/k線應用與買賣時機-一出手就賺錢-k線日記雜誌筆記-6aaf568787b7" },
  { id: 2, title: "這幾年，我們存股這樣賺 讀後心得", category: "理財投資", url: "https://medium.com/blacksecurity/這幾年-我們存股這樣賺-讀後心得-5341ac0f1aef" },
  { id: 1, title: "金融股票九大指標一次搞懂-殖利率/EPS/ROA與ROE/本益比PER/PBR 股價淨值比", category: "理財投資", url: "https://medium.com/blacksecurity/金融九大指標解釋-殖利率-eps-roa與roe-本益比per-pbr-股價淨值比-6d97a9fab7ba" },
];

// 分類基本資料（count 會自動計算）
const categoryDefinitions = [
  { name: "資訊安全", icon: "🔒", description: "證照、資安治理、資安技術" },
  { name: "CTF/滲透測試", icon: "💻", description: "CTF Write-ups、滲透測試" },
  { name: "網路管理", icon: "🌐", description: "Cisco、VMware、 網路技術" },
  { name: "讀書心得與雜談", icon: "📖", description: "個人成長、人生、年度回顧" },
  { name: "理財投資", icon: "💰", description: "股票投資、存股策略、技術分析" },
  { name: "雲端運算與安全", icon: "☁️", description: "Cloud、雲端技術、雲端安全" },
];

// 自動計算每個分類的文章數量
export const categories = categoryDefinitions.map(cat => ({
  ...cat,
  count: articles.filter(a => a.category === cat.name).length,
}));