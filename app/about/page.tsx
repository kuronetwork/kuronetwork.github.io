import TableOfContents from '@/components/TableOfContents'

const TOC_SECTIONS = [
  { id: 'intro',        label: '簡介' },
  { id: 'work',         label: '工作經驗' },
  { id: 'org',          label: '參與專業組織資格' },
  { id: 'speaking',     label: '演講經歷' },
  { id: 'community',    label: '社群志工與經營社群經歷' },
  { id: 'certs',        label: '專業證照' },
]

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="font-display text-4xl text-ink mb-12">
        About <span className="italic">Kuro</span>
      </h1>

      <div className="lg:grid lg:grid-cols-[1fr_200px] lg:gap-14">

        {/* ── Main Content ────────────────────────────────────────── */}
        <main className="min-w-0">

          {/* 簡介 */}
          <section id="intro">
            <h2 className="section-title font-ui text-sm font-bold tracking-widest uppercase">簡介</h2>
            <div className="space-y-4 font-body text-base text-ink/90 leading-relaxed">
              <p>
                Kuro 深耕資訊安全領域多年，從學生時期熱衷參與資安社群活動，並經營部落格「Kuro 的資安學習手記」，分享個人學習與實務經驗。曾於高科技製造業、金融業及四大會計師事務所任職，負責資安架構設計、雲端安全架構設計、GenAI 安全審查、產品安全設計審查、資安檢測、ISO 17025 實驗室維運、檢測實驗室報告簽署人、資安合規評估、資安稽核、資安成熟度與資安策略規劃等工作，具備甲乙雙方的多元視角與實戰經驗，在資安領域累積豐富的專案經歷。
              </p>
              <p>
                此外，Kuro 多次擔任公開演講者及受邀擔任企業專業訓練講師，致力於業界推動資訊安全、雲端安全與人才培育，期望提升台灣資安從業者的專業能力。Kuro 為 AWS Community Builder - Security 組的貢獻者，ISACA 2021年四張證照前 Top3，EC-Council CEH Master Leaderboard 第一名，並持有 CISSP、CCSP、AWS SAA、AWS AIF、GCP ACE、CISM、CISA、CGEIT、CDPSE、CRISC、CEH Master 等超過 40 張專業國際認證，經驗與資格橫跨資安技術、資安治理、資訊管理、資料保護、網路技術安全、駭客攻防、資安事故回應、產品安全、威脅情資、資安稽核、雲端安全、人工智慧安全等領域。
              </p>
              <p>
                目前為PADI 潛水長同時對於水肺潛水、戶外活動、體驗新事物很有興趣，歡迎揪團出去玩，體驗潛水！
              </p>
            </div>
          </section>

          {/* 工作經驗 */}
          <section id="work" className="mt-16">
            <h2 className="section-title font-ui text-sm font-bold tracking-widest uppercase">工作經驗</h2>
            <ul className="space-y-2">
              {[
                'ASUS - Information Security 資安架構師/資安策略規劃師',
                '鑑智實相科技 - 資安顧問',
                'Ernst & Young (EY) - CyberSecurity Consultant 安永企業管理諮詢 資安架構顧問',
                'Deloitte - CyberSecurity Consultant 勤業眾信聯合會計師事務所 資安管理暨技術顧問',
                'Financial Industry - Information System Security 金融業 資安管理',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-red mt-1 flex-shrink-0">▸</span>
                  <span className="font-body text-ink/85">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 專業組織 */}
          <section id="org" className="mt-16">
            <h2 className="section-title font-ui text-sm font-bold tracking-widest uppercase">參與專業組織資格</h2>
            <ul className="space-y-2">
              {[
                { text: 'ISC2 Taipei Chapter - ISC2 台北分會 理監事成員 (2022 - now) | 會員交流與專業發展委員會', href: 'https://www.isc2chapter.tw/' },
                { text: 'Association of Hackers in Taiwan | 台灣駭客協會 會員', href: 'https://hacker.org.tw/' },
                { text: 'ISC2, International Information System Security Certification Consortium | 國際資訊系統安全認證協會' },
                { text: 'ISACA, Information Systems Audit and Control Association | 國際電腦稽核協會' },
                { text: 'CAA, Computer Audit Association | 中國民國電腦稽核協會會員' },
                { text: 'AWS Community, AWS Community Builder (Category: Security)' },
                { text: 'PADI, Professional Association of Diving Instructors | 專業潛水教練協會 會員', href: 'https://www.padi.com.tw/' },
              ].map((item) => (
                <li key={item.text} className="flex gap-3">
                  <span className="text-red mt-1 flex-shrink-0">▸</span>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-body text-ink/85 hover:text-red transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span className="font-body text-ink/85">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* 演講經歷 */}
          <section id="speaking" className="mt-16">
            <h2 className="section-title font-ui text-sm font-bold tracking-widest uppercase">演講經歷</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-ui text-xs tracking-widest uppercase text-warm-gray mb-4">Conference Speaking</p>
                <ul className="space-y-2 font-body text-sm text-ink/85">
                  <li><a href="https://cyber.ithome.com.tw/2021/session-page/164" target="_blank" rel="noopener noreferrer" className="hover:text-red transition-colors">· CyberSec 2021 Speaker</a></li>
                  <li><a href="https://cyber.ithome.com.tw/2022/speaker-page/17" target="_blank" rel="noopener noreferrer" className="hover:text-red transition-colors">· CyberSec 2022 Speaker</a></li>
                  <li><a href="https://cyber.ithome.com.tw/2023/speaker-page/17" target="_blank" rel="noopener noreferrer" className="hover:text-red transition-colors">· CyberSec 2023 Speaker</a></li>
                  <li><a href="https://cloudsummit.ithome.com.tw/2024/speaker-page/17" target="_blank" rel="noopener noreferrer" className="hover:text-red transition-colors">· CloudSummit 2024 Speaker</a></li>
                  <li><a href="https://cybersec.ithome.com.tw/2025/session-page/3555" target="_blank" rel="noopener noreferrer" className="hover:text-red transition-colors">· CyberSec 2025 Speaker</a></li>
                  <li>· CloudSummit 2025 Speaker</li>
                  <li>· Infosec Taiwan 2025 Speaker</li>
                  <li>· AWS Summit 2025 Speaker</li>
                  <li>· CyberSec 2026 Speaker</li>
                </ul>
              </div>
              <div>
                <p className="font-ui text-xs tracking-widest uppercase text-warm-gray mb-4">Professional Training & Lectures</p>
                <ul className="space-y-2 font-body text-sm text-ink/85">
                  {[
                    'HITCON 菁英人才培育 × 攻防論壇業界專家',
                    '金融監理主管機關稽核能力訓練講師',
                    '數位發展部資通安全署-資安職能會議',
                    '台科大資訊安全研究社',
                    '逢甲大學黑客社',
                    '台北商業大學資訊安全課程講座業師',
                    '中國科技大學資訊安全課程講座',
                    '多場金融機構講師：雲端安全、資安專業進修',
                  ].map((item) => <li key={item}>· {item}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* 社群志工 */}
          <section id="community" className="mt-16">
            <h2 className="section-title font-ui text-sm font-bold tracking-widest uppercase">社群志工與經營社群經歷</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'HITCON (Hacks in Taiwan Conference) 台灣駭客年會',
                  desc: '2018門機組長 / 2019餐飲副組長 / 2020門機組員 / 2021門機組長 / 2024場務組副組長 / 2025 Cyber Range贊助組長 / 2025 HITCON場務組副組長 / 2026 HITCON副召集人',
                  href: 'https://hitcon.org/',
                },
                {
                  title: 'AWS User Group DevSecOps Taiwan',
                  desc: 'Co-founder 共同創辦人',
                  href: 'https://www.facebook.com/groups/1595783965108584',
                },
                {
                  title: 'AWS Community',
                  desc: '2025 AWS Community Builder (Category: Security) / 2024 AWS Community Day',
                },
                {
                  title: 'COSCUP (Conference for Open Source Coders, Users and Promoters) 開源人年會',
                  desc: '2016攤位股 / 2018門機股 / 2020門機股長 / 2022門機股長 / 2023門機股長 / 2024門機股長 / 2025門機股長',
                },
                {
                  title: 'SITCON (Students\' Information Technology Conference) 學生計算機年會',
                  desc: '2016/2017 議程組組員',
                },
              ].map(({ title, desc, href }) => (
                <div key={title} className="bg-surface rounded-lg p-5">
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="font-ui font-semibold text-ink mb-1.5 block hover:text-red transition-colors">{title}</a>
                  ) : (
                    <h3 className="font-ui font-semibold text-ink mb-1.5">{title}</h3>
                  )}
                  <p className="font-body text-sm text-warm-gray leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 專業證照 */}
          <section id="certs" className="mt-16 mb-12">
            <h2 className="section-title font-ui text-sm font-bold tracking-widest uppercase">專業證照</h2>
            <div className="space-y-2">

              <CertCard title="IT Governance, Risk and Compliance (GRC)" count={13} certs={[
                'ISC2 CISSP | 國際資安系統安全專家',
                'ISC2 CCSP | 國際雲端資安專家',
                'ISC2 CC | Certified Cyber Security',
                'ISACA CISA | 國際電腦稽核師 (2021 Taiwan Top2)',
                'ISACA CISM | 國際資訊安全經理人 (2021 Taiwan Top2)',
                'ISACA CRISC | 國際資訊風險控制師 (2021 Taiwan Top3)',
                'ISACA CGEIT | 國際企業資訊治理師 (2021 Taiwan Top1)',
                'ISACA CDPSE | 國際資訊隱私防護師',
                'ISO/IEC 27001 Lead Auditor | ISO 27001 主導稽核員',
                'ISO/IEC 42001 Lead Auditor | ISO 42001 主導稽核員',
                'ISO/IEC 27001 Internal Auditor | ISO 27001 內部稽核員',
                'ISO 9001 Internal Auditor | ISO 9001 內部稽核員',
                'ACCISO | Associate Certified Chief Information Security Officer',
              ]} />

              <CertCard title="Security Analysis" count={7} certs={[
                'CEH | EC-Council 認證駭客技術專家',
                'CEH Practical | EC-Council 認證駭客技術實戰專家',
                'CEH Master | EC-Council 認證駭客技術大師',
                'ECSA | EC-Council 認證資安分析專家',
                'CPSA | CREST 認證資安分析專家',
                'TCSE | 趨勢認證資訊安全專家',
                'iPAS 初級資訊安全工程師能力鑑定',
              ]} />

              <CertCard title="Cloud Computing & AI" count={5} certs={[
                'AWS Certified Solutions Architect - Associate',
                'AWS Certified AI Practitioner',
                'AWS Certified Cloud Practitioner',
                'GCP Associate Cloud Engineer',
                'AZ-900 Microsoft Azure Fundamentals',
              ]} />

              <CertCard title="Incident Handling" count={3} certs={[
                'CTIA | EC-Council 威脅情資分析專家',
                'CSA | EC-Council 安全運營中心(SOC)分析師',
                'ECIH | EC-Council 資安危機處理員',
              ]} />

              <CertCard title="Network Security" count={2} certs={[
                'CCNP Security | 思科認證網路安全專家',
                'NSPA | 網路安全封包分析師',
              ]} />

              <CertCard title="Network Infrastructure" count={3} certs={[
                'CCNP Enterprise | 思科認證企業網路建置專家',
                'CCNA R&S | 思科認證網路工程師',
                'VCP-NV | VMware 認證網路虛擬化專家',
              ]} />

              <CertCard title="Lab / Testing" count={1} certs={[
                'ISO/IEC 17025 實驗室品質管理訓練合格（APP檢測實驗室）',
              ]} />

              <CertCard title="Sports" count={8} certs={[
                '中華民國健身運動協會 - 體適能健身C級指導員',
                'PADI - Divemaster 潛水長',
                'PADI - Rescue Diver 救援潛水員',
                'SSI - React Right Specialty 正確反應員',
                'IANTD - Deep Diver 深度潛水員',
                'SDI - Advanced Scuba Diver 進階水肺潛水員',
                'ADS International - OpenWater Diver 開放水域潛水員',
                'ADS International - EAN STANDARD DIVER 高氧潛水員',
              ]} />

            </div>
          </section>

        </main>

        {/* ── Sticky TOC (desktop only) ─────────────────────────── */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents sections={TOC_SECTIONS} />
          </div>
        </aside>

      </div>
    </div>
  )
}

function CertCard({ title, count, certs }: { title: string; count: number; certs: string[] }) {
  return (
    <details className="cert-card">
      <summary>
        <span>{title}</span>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-warm-gray">{count} 張</span>
          <svg className="w-4 h-4 text-warm-gray flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </summary>
      <div className="cert-list">
        <ul className="space-y-1.5">
          {certs.map((cert) => (
            <li key={cert} className="font-mono text-sm text-ink/80 flex gap-2">
              <span className="text-red flex-shrink-0">·</span>
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </details>
  )
}
