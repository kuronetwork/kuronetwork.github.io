export interface Article {
  id: number;
  title: string;
  date: string;
  category: string;
  tags: string[];
  url: string;
  featured?: boolean;
}

export const articles: Article[] = [
  // 資訊安全
  { id: 61, title: "資安思維、強韌身心：資安人的健康啟示 — 為什麼要運動？將資安觀念套用到你的日常生活，提升你的身體韌性！", date: "2023-08-30", category: "資訊安全", tags: ["CEH", "證照"], url: "https://medium.com/blacksecurity/workout-d40a34b19194" },
  { id: 60, title: "EC-Council CEH Practical / Master 準備心得 — 讓理論與實作相輔相成的學習", date: "2023-08-11", category: "資訊安全", tags: ["CEH", "證照"], url: "https://medium.com/blacksecurity/ceh-practical-master-3e80cac180a2" },
  { id: 59, title: "密碼管理器(Password Manager)平台轉移心得與密碼格式轉換工具介紹", date: "2022-09-15", category: "資訊安全", tags: ["密碼管理", "工具"], url: "https://medium.com/blacksecurity/passwordmanager-21e115f2f59b", featured: true },
  { id: 58, title: "快速通過 CISSP 考試心得、準備方式與教材整理", date: "2022-09-01", category: "資訊安全", tags: ["CISSP", "證照"], url: "https://medium.com/blacksecurity/cissp-8ff31adf79e0", featured: true },
  { id: 57, title: "最佳新手資安管理證照，ISC2 CC 自修考試心得、準備方式與教材整理", date: "2022-08-31", category: "資訊安全", tags: ["CC", "證照"], url: "https://medium.com/blacksecurity/cc-cbcfc9b842b5" },
  { id: 56, title: "CCSP 雲端資安專家自修考試心得、準備方式與教材整理", date: "2022-08-30", category: "資訊安全", tags: ["CCSP", "證照"], url: "https://medium.com/blacksecurity/ccsp-雲端資安專家自修考試心得-準備方式與教材整理-certified-cloud-security-professional-a3dccf22136d", featured: true },
  { id: 55, title: "ISACA CDPSE 國際資訊隱私防護師認證自修考試心得", date: "2022-08-25", category: "資訊安全", tags: ["CDPSE", "ISACA"], url: "https://medium.com/blacksecurity/isaca-cdpse-8c6ebaeb58e3" },
  { id: 54, title: "不敗學習力：10大聰明讀書法之 CISSP 證照考試應用心得", date: "2022-08-20", category: "資訊安全", tags: ["CISSP", "學習方法"], url: "https://medium.com/blacksecurity/study-methods-150492baf20f" },
  { id: 53, title: "IT 在企業內的價值呈現 — 公司治理與 IT 治理", date: "2022-08-15", category: "資訊安全", tags: ["IT治理"], url: "https://medium.com/blacksecurity/it-governance-acf64c3a4580" },
  { id: 52, title: "入門學習資安治理與管理： ISACA 證照學習組合包與教材總整理", date: "2022-08-10", category: "資訊安全", tags: ["ISACA", "證照"], url: "https://medium.com/blacksecurity/cybersecurity-isaca-governance-4d81fd50ec91" },
  { id: 51, title: "ISACA CGEIT 國際企業資訊治理師認證自修考試心得", date: "2022-08-05", category: "資訊安全", tags: ["CGEIT", "ISACA"], url: "https://medium.com/blacksecurity/isaca-cgeit-cb171cf81c08" },
  { id: 50, title: "EC-Council 安全運營中心 (SOC) 分析師認證考試心得", date: "2022-07-30", category: "資訊安全", tags: ["SOC", "EC-Council"], url: "https://medium.com/blacksecurity/soc-analyst-770141c5de8e" },
  { id: 49, title: "ISACA CRISC 國際資訊風險控制師認證自修考試心得", date: "2022-07-25", category: "資訊安全", tags: ["CRISC", "ISACA"], url: "https://medium.com/blacksecurity/isaca-crisc-e64b1a3fda19" },
  { id: 48, title: "ISACA CISM 國際資訊安全經理人準備心得", date: "2022-07-20", category: "資訊安全", tags: ["CISM", "ISACA"], url: "https://medium.com/blacksecurity/isaca-cism-833c4f9f8e16" },
  { id: 47, title: "資安稽核員的基本知識— MS SQL Server 的備份、安全性、維運與稽核軌跡入門", date: "2022-07-15", category: "資訊安全", tags: ["稽核", "SQL Server"], url: "https://medium.com/blacksecurity/mssqlserveraudit-1eb142f5bd2d" },
  { id: 46, title: "資安稽核員的精神— 如何成為值得信賴的稽核員？", date: "2022-07-10", category: "資訊安全", tags: ["稽核"], url: "https://medium.com/blacksecurity/goodauditor-134c07fdf0d0" },
  { id: 45, title: "ISACA CISA 國際電腦稽核師準備心得", date: "2022-07-05", category: "資訊安全", tags: ["CISA", "ISACA"], url: "https://medium.com/blacksecurity/isaca-cisa-study-7e145bb42f02" },
  { id: 44, title: "EC-Council 系列證照自修申請考試步驟教學", date: "2022-07-01", category: "資訊安全", tags: ["EC-Council", "證照"], url: "https://medium.com/blacksecurity/ec-council-selfstudy-e98c93223271" },
  { id: 43, title: "ECSA v10 等效申請CREST CPSA 資安分析師證照教學", date: "2022-06-25", category: "資訊安全", tags: ["ECSA", "CREST"], url: "https://medium.com/blacksecurity/crestcpsa-5a07e25e7da3" },
  { id: 42, title: "ECSA v10 考試心得與讀書資料分享", date: "2022-06-20", category: "資訊安全", tags: ["ECSA"], url: "https://medium.com/blacksecurity/ecsa-v10-1ec76c0eb7d4" },
  { id: 41, title: "CEH v10 考試心得與讀書資料分享", date: "2022-06-15", category: "資訊安全", tags: ["CEH"], url: "https://medium.com/blacksecurity/ceh-v10-考試心得與讀書資料分享-4598422fc644" },
  { id: 40, title: "網路安全封包分析:封包Payload行為判讀與常見協定安全解析", date: "2022-06-10", category: "資訊安全", tags: ["封包分析", "網路安全"], url: "https://medium.com/blacksecurity/網路安全封包分析-封包行為判讀與常見協定解析-e8687c538b20" },
  { id: 39, title: "用Wireshark 解析使用者瀏覽器HTTPS流量教學", date: "2022-06-05", category: "資訊安全", tags: ["Wireshark", "HTTPS"], url: "https://medium.com/blacksecurity/用wireshark-解析使用者瀏覽器https流量教學-8c15948f38fd" },
  { id: 38, title: "網路安全封包分析:Wireshark 快速判斷IP位置並找出可疑程式", date: "2022-06-01", category: "資訊安全", tags: ["Wireshark", "封包分析"], url: "https://medium.com/blacksecurity/securityanalysiswithwireshark1-51b4a54ba483" },
  { id: 37, title: "資訊安全-金融業資訊安全技術法規要求簡介", date: "2022-05-25", category: "資訊安全", tags: ["法規", "金融"], url: "https://medium.com/blacksecurity/資訊安全-金融業資訊安全技術法規要求簡介-d3bb8d66a308" },

// 雲端運算
  { id: 62, title: "使用AWS CloudFront 的原始存取控制(OAC)建立安全的 S3 靜態網站", date: "2023-10-09", category: "雲端運算", tags: ["CEH", "證照"], url: "https://medium.com/blacksecurity/aws-cloudfront-oac-5805d27b3a7a" },

  // CTF / 滲透測試
  { id: 36, title: "Root me — Zone Transfer Write-up", date: "2022-05-20", category: "CTF/滲透測試", tags: ["Root me", "DNS"], url: "https://medium.com/blacksecurity/root-me-dns-zone-transfer-write-up-596dc252c98b" },
  { id: 35, title: "Root me — IP Time to Live(TTL) Write-up", date: "2022-05-15", category: "CTF/滲透測試", tags: ["Root me", "網路"], url: "https://medium.com/blacksecurity/root-me-ip-time-to-live-write-up-492ca954ea6b" },
  { id: 34, title: "Hack the box — OpenAdmin write up", date: "2022-05-10", category: "CTF/滲透測試", tags: ["HTB"], url: "https://medium.com/blacksecurity/hack-the-box-openadmin-write-up-bcbab4c4b508" },
  { id: 33, title: "Metasploitable 學習筆記-XSS Vulnerability : BeEF 瀏覽器攻擊與社交工程欺騙", date: "2022-05-05", category: "CTF/滲透測試", tags: ["Metasploitable", "XSS"], url: "https://medium.com/blacksecurity/metasploitable-dvwa-xss-vulnerability-2c7c8facf5e9" },
  { id: 32, title: "Metasploitable 學習筆記-DVWA LFI/RFI & Reverse Shell", date: "2022-05-01", category: "CTF/滲透測試", tags: ["Metasploitable", "LFI"], url: "https://medium.com/blacksecurity/metasploitable-dvwa-lfi-rfi-b4054760e1b9" },
  { id: 31, title: "Metasploitable 學習筆記-DVWA Command injection 命令注入攻擊與 Reverse Shell", date: "2022-04-25", category: "CTF/滲透測試", tags: ["Metasploitable", "Command Injection"], url: "https://medium.com/blacksecurity/metasploitable-dvwa-command-injection-9c092e180d0" },
  { id: 30, title: "Metasploitable 學習筆記-DVWA文件上傳漏洞 & Reverse Shell", date: "2022-04-20", category: "CTF/滲透測試", tags: ["Metasploitable", "File Upload"], url: "https://medium.com/blacksecurity/metasploitable-學習筆記-web滲透測試基礎與文件上傳漏洞-557d6392eefe" },
  { id: 29, title: "Root me — Twitter authentication Packet analysis Write-up", date: "2022-04-15", category: "CTF/滲透測試", tags: ["Root me", "封包分析"], url: "https://medium.com/blacksecurity/root-me-twitter-authentication-packet-analysis-write-up-f54f146bc52d" },
  { id: 28, title: "Cisco Password Decrypt Write-up", date: "2022-04-10", category: "CTF/滲透測試", tags: ["Root me", "Cisco"], url: "https://medium.com/blacksecurity/root-me-cisco-password-decrypt-write-up-3b4beb890a76" },
  { id: 27, title: "Tryhackme-OhSINT Write-up", date: "2022-04-05", category: "CTF/滲透測試", tags: ["TryHackMe", "OSINT"], url: "https://medium.com/blacksecurity/tryhackme-ohsint-write-up-5d6945e36756" },
  { id: 26, title: "Hack The Box-Bastion Write-up", date: "2022-04-01", category: "CTF/滲透測試", tags: ["HTB"], url: "https://medium.com/blacksecurity/hack-the-box-bastion-write-up-ecf05ae4572a" },
  { id: 25, title: "Root me-FTP authentication Write-up", date: "2022-03-25", category: "CTF/滲透測試", tags: ["Root me", "FTP"], url: "https://medium.com/blacksecurity/root-me-ftp-authentication-write-up-5a44532bac47" },

  // 網路管理
  { id: 24, title: "AZ-900 Microsoft Azure Fundamentals 自修考試心得與準備資料", date: "2022-03-20", category: "雲端運算", tags: ["Azure", "證照"], url: "https://medium.com/@kuroH/az-900-microsoft-azure-fundamentals-d0718175de65" },
  { id: 23, title: "VMware VCP-NV網路虛擬化 — 自修考試準備心得與抵免上課教學", date: "2022-03-15", category: "網路管理", tags: ["VMware", "證照"], url: "https://medium.com/blacksecurity/vmware-network-virtualization-e52b09b526c8" },
  { id: 22, title: "Cisco CCNP Enterprise 2020新版自修考試準備心得與流程介紹", date: "2022-03-10", category: "網路管理", tags: ["Cisco", "CCNP"], url: "https://medium.com/blacksecurity/cisco-ccnp-enterprise-2020-9866cbf2d050" },
  { id: 21, title: "[Cisco] 網路流量側錄功能教學-SPAN", date: "2022-03-05", category: "網路管理", tags: ["Cisco", "SPAN"], url: "https://medium.com/blacksecurity/cisco-流量側錄功能-span-mirror-port-17f380e404ac" },
  { id: 20, title: "[Cisco] Load balancing 與 Load sharing 比較", date: "2022-03-01", category: "網路管理", tags: ["Cisco", "Load Balancing"], url: "https://medium.com/blacksecurity/cisco-load-balancing-與-load-sharing-比較-7e180a6ce76" },
  { id: 19, title: "[Cisco] Router 與 Layer 3 Switch 差異比較表", date: "2022-02-25", category: "網路管理", tags: ["Cisco", "Router"], url: "https://medium.com/blacksecurity/cisco-router-與-layer-3-switch-簡易比較-f0a5ca4fbc7a" },
  { id: 18, title: "[Cisco] RIP、EIGRP、OSPF 路由協定比較", date: "2022-02-20", category: "網路管理", tags: ["Cisco", "路由協定"], url: "https://medium.com/blacksecurity/cisco-rip-eigrp-ospf簡易比較-9ef5ae58f6d0" },

  // 讀書心得
  { id: 17, title: "聊聊 2021 的Medium 年度經營結果", date: "2022-02-15", category: "讀書心得", tags: ["Medium", "年度回顧"], url: "https://medium.com/blacksecurity/medium2021-a76ee341a9a3" },
  { id: 16, title: "聊聊 2020 的Medium 年度經營結果", date: "2021-02-10", category: "讀書心得", tags: ["Medium", "年度回顧"], url: "https://medium.com/blacksecurity/kuro-2020-medium-746c09f8631b" },
  { id: 15, title: "我真的需要考證照嗎? 考證照對就業會有幫助嗎? 一篇考證照的思考與效益分析", date: "2021-02-05", category: "讀書心得", tags: ["證照", "職涯"], url: "https://medium.com/blacksecurity/benefits-of-certifications-ec8880639df8" },
  { id: 14, title: "麥肯錫新人邏輯思考5堂課：只要一小時，就可學會一生受用的邏輯思考法則 讀後筆記", date: "2021-02-01", category: "讀書心得", tags: ["邏輯思考", "讀書"], url: "https://medium.com/blacksecurity/beginnersonlogicalthinking-ebced3971142" },
  { id: 13, title: "2019 Medium 歷程與檢視", date: "2020-01-25", category: "讀書心得", tags: ["Medium", "年度回顧"], url: "https://medium.com/blacksecurity/2019-medium-1609f1a76582" },
  { id: 12, title: "解憂咖啡館 — 咖啡的溫度也是人性的溫度 讀後感", date: "2020-01-20", category: "讀書心得", tags: ["讀書"], url: "https://medium.com/blacksecurity/解憂咖啡館-咖啡的溫度也是人性的溫度-讀後感-b2ef57809e9b" },
  { id: 11, title: "[讀書心得]關於人生的7項財務思考：7堂一定要懂的理財投資×人生規劃必修課", date: "2020-01-15", category: "讀書心得", tags: ["理財", "讀書"], url: "https://medium.com/blacksecurity/讀書心得-關於人生的7項財務思考-7堂一定要懂的理財投資-人生規劃必修課-c57d7e7805af" },
  { id: 10, title: "[讀書心得]目標管理的力量Par2:目標管理，七步驟做好目標管理", date: "2020-01-10", category: "讀書心得", tags: ["目標管理", "讀書"], url: "https://medium.com/blacksecurity/讀書心得-目標管理的力量-目標管理-92020d932ca0" },
  { id: 9, title: "[讀書心得]目標管理的力量Par1:自我與人生管理篇", date: "2020-01-05", category: "讀書心得", tags: ["目標管理", "讀書"], url: "https://medium.com/blacksecurity/讀書心得-目標管理的力量-自我與人生管理-1f0707033fce" },

  // 理財投資
  { id: 8, title: "存股方法-不敗教主的300張股票存股術 讀後心得", date: "2020-01-01", category: "理財投資", tags: ["存股", "投資"], url: "https://medium.com/blacksecurity/300-stocks-6efb9618c35f" },
  { id: 7, title: "經典著作: 投資前最重要的事- 為什麼長期思考勝過短期獲利? 讀後心得與自我反思", date: "2019-12-25", category: "理財投資", tags: ["投資", "讀書"], url: "https://medium.com/blacksecurity/經典著作-投資前最重要的事-為什麼長期思考勝過短期獲利-讀後心得與自我反思-9fd3503cbf8f" },
  { id: 6, title: "股市經典教科書-我的職業是股東 讀後心得", date: "2019-12-20", category: "理財投資", tags: ["股票", "投資"], url: "https://medium.com/blacksecurity/股市經典教科書-我的職業是股東-讀後心得筆記-11fe370f5ec7" },
  { id: 5, title: "[讀書心得]投資金律 : 建立獲利投資組合的四大關鍵和十四個關卡", date: "2019-12-15", category: "理財投資", tags: ["投資", "讀書"], url: "https://medium.com/blacksecurity/讀書心得-投資金律-建立獲利投資組合的四大關鍵和十四個關卡-9137c5e4dc69" },
  { id: 4, title: "與眾不同的思考 <反市場：JG股市操作原理>- 讀後心得", date: "2019-12-10", category: "理財投資", tags: ["股票", "投資"], url: "https://medium.com/blacksecurity/與眾不同的思考-反市場-jg股市操作原理-讀後心得-990c5cb13fc3" },
  { id: 3, title: "技術分析入門:K線應用與買賣時機，一出手就賺錢 — K線日記雜誌筆記", date: "2019-12-05", category: "理財投資", tags: ["技術分析", "K線"], url: "https://medium.com/blacksecurity/k線應用與買賣時機-一出手就賺錢-k線日記雜誌筆記-6aaf568787b7" },
  { id: 2, title: "這幾年，我們存股這樣賺 讀後心得", date: "2019-12-01", category: "理財投資", tags: ["存股", "投資"], url: "https://medium.com/blacksecurity/這幾年-我們存股這樣賺-讀後心得-5341ac0f1aef" },
  { id: 1, title: "金融股票九大指標一次搞懂-殖利率/EPS/ROA與ROE/本益比PER/PBR 股價淨值比", date: "2019-11-25", category: "理財投資", tags: ["股票", "指標"], url: "https://medium.com/blacksecurity/金融九大指標解釋-殖利率-eps-roa與roe-本益比per-pbr-股價淨值比-6d97a9fab7ba" },
];

export const categories = [
  { name: "資訊安全", icon: "🔒", count: 23, description: "證照考試、資安治理、技術分析" },
  { name: "CTF/資安技術", icon: "💻", count: 12, description: "CTF Write-ups、滲透測試實戰" },
  { name: "網路管理", icon: "🌐", count: 7, description: "Cisco、VMware、Azure 網路技術" },
  { name: "讀書與人生故事", icon: "📖", count: 9, description: "個人成長、思考方法、年度回顧" },
  { name: "理財投資", icon: "💰", count: 8, description: "股票投資、存股策略、技術分析" },
  { name: "雲端運算", icon: "💰", count: 8, description: "Cloud、雲端技術、雲端安全" }, //icon
];
