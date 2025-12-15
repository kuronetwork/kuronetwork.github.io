export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">About Kuro</h1>

      <div className="prose dark:prose-invert max-w-none">
        <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-xl p-8 mb-12">
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            Kuro 深耕資訊安全領域多年，從學生時期熱衷參與資安社群活動，並經營部落格「Kuro 的資安學習手記」，分享個人學習與實務經驗。曾於高科技製造業、金融業及四大會計師事務所任職，負責資安架構設計、雲端安全架構設計、GenAI 安全審查、產品安全設計審查、資安檢測、ISO 17025 實驗室維運、檢測實驗室報告簽署人、資安合規評估、資安稽核、資安成熟度與資安策略規劃等工作，具備甲乙雙方的多元視角與實戰經驗，在資安領域累積豐富的專案經歷。
          </p>
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 mt-4">
            此外，Kuro 多次擔任公開演講者及受邀擔任企業專業訓練講師，致力於業界推動資訊安全、雲端安全與人才培育，期望提升台灣資安從業者的專業能力。Kuro 為 AWS Community Builder - Security 組的貢獻者，ISACA 2021年四張證照前 Top3 ，EC-Council CEH Master Leaderboard 第一名，並持有 CISSP、CCSP、AWS SAA、AWS AIF、GCP ACE、CISM、CISA、CGEIT、CDPSE、CRISC、CEH Master 等超過 40 張專業國際認證，經驗與資格橫跨資安技術、資安治理、資訊管理、資料保護、網路技術安全、駭客攻防、資安事故回應、產品安全、威脅情資、資安稽核、雲端安全、人工智慧安全等領域。
          </p>
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 mt-4">
            同時對於水肺潛水、戶外活動、體驗新事物很有興趣，歡迎揪團出玩！
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white border-b-2 border-accent pb-2">💼 過往工作經驗</h2>
        <ul className="space-y-2 mb-8">
          <li className="flex items-start">
            <span className="text-accent mr-2">▸</span>
            <span>鑑智實相科技 - 資安顧問</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent mr-2">▸</span>
            <span>High-tech Manufacturing Industry - Information Security 高科技製造業 資安架構師/資安策略規劃師</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent mr-2">▸</span>
            <span>Ernst & Young (EY) - CyberSecurity Consultant 安永企業管理諮詢 資安架構顧問</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent mr-2">▸</span>
            <span>Deloitte - CyberSecurity Consultant 勤業眾信聯合會計師事務所 資安管理暨技術顧問</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent mr-2">▸</span>
            <span>Financial Industry - Information System Security 金融業 資安管理</span>
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white border-b-2 border-accent pb-2">🏢 專業組織</h2>
        <ul className="space-y-2 mb-8">
          <li className="flex items-start">
            <span className="text-accent mr-2">▸</span>
            <span>ISC2 Taipei Chapter - ISC2 台北分會 理監事成員 (2022 - now) | 會員交流與專業發展委員會</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent mr-2">▸</span>
            <span>ISC2, International Information System Security Certification Consortium | 國際資訊系統安全認證協會</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent mr-2">▸</span>
            <span>ISACA, Information Systems Audit and Control Association | 國際電腦稽核協會</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent mr-2">▸</span>
            <span>CAA, Computer Audit Association | 中國民國電腦稽核協會會員</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent mr-2">▸</span>
            <span>AWS Community, AWS Community Builder (Category: Security)</span>
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white border-b-2 border-accent pb-2">🎤 演講經歷</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-accent mb-2">Conference Speaking</h3>
            <ul className="space-y-1 text-sm">
              <li>• <a href="https://cyber.ithome.com.tw/2021/session-page/164" target="_blank" rel="noopener noreferrer" className="hover:text-accent">CyberSec 2021 Speaker</a></li>
              <li>• <a href="https://cyber.ithome.com.tw/2022/speaker-page/17" target="_blank" rel="noopener noreferrer" className="hover:text-accent">CyberSec 2022 Speaker</a></li>
              <li>• <a href="https://cyber.ithome.com.tw/2023/speaker-page/17" target="_blank" rel="noopener noreferrer" className="hover:text-accent">CyberSec 2023 Speaker</a></li>
              <li>• <a href="https://cloudsummit.ithome.com.tw/2024/speaker-page/17" target="_blank" rel="noopener noreferrer" className="hover:text-accent">CloudSummit 2024 Speaker</a></li>
              <li>• <a href="https://cybersec.ithome.com.tw/2025/session-page/3555" target="_blank" rel="noopener noreferrer" className="hover:text-accent">CyberSec 2025 Speaker</a></li>
              <li>• CloudSummit 2025 Speaker</li>
              <li>• Infosec Taiwan 2025 Speaker</li>
              <li>• AWS Summit 2025 Speaker</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-accent mb-2">Training & Education</h3>
            <ul className="space-y-1 text-sm">
              <li>• HITCON 菁英人才培育 × 攻防論壇業界專家</li>
              <li>• 金融監理主管機關稽核能力訓練講師</li>
              <li>• 數位發展部資通安全署-資安職能會議</li>
              <li>• 台科大資訊安全研究社</li>
              <li>• 逢甲大學黑客社</li>
              <li>• 台北商業大學資訊安全課程講座業師</li>
              <li>• 中國科技大學資訊安全課程講座</li>
              <li>• 多場金融機構講師：雲端安全、資安專業進修</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white border-b-2 border-accent pb-2">🌐 社群志工</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">AWS Community</h3>
            <p className="text-sm">2025 AWS Community Builder (Category: Security) / 2024 AWS Community Day</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">HITCON (Hacks in Taiwan Conference) 台灣駭客年會</h3>
            <p className="text-sm">2018門機組長 / 2019餐飲副組長 / 2020門機組員 / 2021門機組長 / 2024場務組副組長 / 2025 Cyber Range贊助組長 / 2025 HITCON場務組副組長</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">COSCUP (Conference for Open Source Coders, Users and Promoters) 開源人年會</h3>
            <p className="text-sm">2016攤位股 / 2018門機股 / 2020門機股長 / 2022門機股長 / 2023門機股長 / 2024門機股長 / 2025門機股長</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">SITCON (Students' Information Technology Conference) 學生計算機年會</h3>
            <p className="text-sm">2016/2017 議程組組員</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white border-b-2 border-accent pb-2">🎓 專業資安證照</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5">
            <h3 className="text-xl font-semibold mb-3 text-accent">IT Governance, Risk and Compliance (GRC)</h3>
            <ul className="space-y-1.5 text-sm">
              <li>• ISC2 CISSP | 國際資安系統安全專家</li>
              <li>• ISC2 CCSP | 國際雲端資安專家</li>
              <li>• ISC2 CC | Certified Cyber Security</li>
              <li>• ISACA CISA | 國際電腦稽核師 (2021 Taiwan Top2)</li>
              <li>• ISACA CISM | 國際資訊安全經理人 (2021 Taiwan Top2)</li>
              <li>• ISACA CRISC | 國際資訊風險控制師 (2021 Taiwan Top3)</li>
              <li>• ISACA CGEIT | 國際企業資訊治理師 (2021 Taiwan Top1)</li>
              <li>• ISACA CDPSE | 國際資訊隱私防護師</li>
              <li>• ISO/IEC 27001 Lead Auditor | ISO 27001 主導稽核員</li>
              <li>• ISO/IEC 27001 Internal Auditor | ISO 27001 內部稽核員</li>
              <li>• ISO 9001 Internal Auditor | ISO 9001 內部稽核員</li>
              <li>• ACCISO | Associate Certified Chief Information Security Officer</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5">
            <h3 className="text-xl font-semibold mb-3 text-accent">Security Analysis</h3>
            <ul className="space-y-1.5 text-sm">
              <li>• CEH | EC-Council 認證駭客技術專家</li>
              <li>• CEH Practical | EC-Council 認證駭客技術實戰專家</li>
              <li>• CEH Master | EC-Council 認證駭客技術大師</li>
              <li>• ECSA | EC-Council 認證資安分析專家</li>
              <li>• CPSA | CREST 認證資安分析專家</li>
              <li>• TCSE | 趨勢認證資訊安全專家</li>
              <li>• iPAS 初級資訊安全工程師能力鑑定</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5">
            <h3 className="text-xl font-semibold mb-3 text-accent">Cloud Computing & AI</h3>
            <ul className="space-y-1.5 text-sm">
              <li>• AWS Certified Solutions Architect - Associate</li>
              <li>• AWS Certified AI Practitioner</li>
              <li>• AWS Certified Cloud Practitioner</li>
              <li>• GCP Associate Cloud Engineer</li>
              <li>• AZ-900 Microsoft Azure Fundamentals</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5">
            <h3 className="text-xl font-semibold mb-3 text-accent">Incident Handling</h3>
            <ul className="space-y-1.5 text-sm">
              <li>• CTIA | EC-Council 威脅情資分析專家</li>
              <li>• CSA | EC-Council 安全運營中心(SOC)分析師</li>
              <li>• ECIH | EC-Council 資安危機處理員</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5">
            <h3 className="text-xl font-semibold mb-3 text-accent">Network Security</h3>
            <ul className="space-y-1.5 text-sm">
              <li>• CCNP Security | 思科認證網路安全專家</li>
              <li>• NSPA | 網路安全封包分析師</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5">
            <h3 className="text-xl font-semibold mb-3 text-accent">Network Infrastructure</h3>
            <ul className="space-y-1.5 text-sm">
              <li>• CCNP Enterprise | 思科認證企業網路建置專家</li>
              <li>• CCNA R&S | 思科認證網路工程師</li>
              <li>• VCP-NV | VMware 認證網路虛擬化專家</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5">
            <h3 className="text-xl font-semibold mb-3 text-accent">Lab/Testing</h3>
            <ul className="space-y-1.5 text-sm">
              <li>• ISO/IEC 17025 實驗室品質管理訓練合格（APP檢測實驗室）</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-5">
            <h3 className="text-xl font-semibold mb-3 text-accent">Sports</h3>
            <ul className="space-y-1.5 text-sm">
              <li>• 中華民國健身運動協會 - 體適能健身C級指導員</li>
              <li>• PADI - Rescue Diver 救援潛水員</li>
              <li>• SSI - React Right Specialty 正確反應員</li>
              <li>• ANITD - Deep Diver 深度潛水員</li>
              <li>• SDI - Advanced Scuba Diver 進階水肺潛水員</li>
              <li>• ADS International - OpenWater Diver 開放水域潛水員</li>
              <li>• ADS International - EAN STANDARD DIVER 高氧潛水員</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
