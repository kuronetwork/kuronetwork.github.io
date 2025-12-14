export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Kuro</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          A Slashie, Consultant, and Medium Blogger.
        </p>

        <p className="mb-6">
          Kuro is principally engaged in the consulting experience of the Cybersecurity, risk management, 
          it security control, compliance review, network infrastructure security, vulnerability assessment, 
          mobile application security, and security assessment testing / auditing (ISMS, regulatory compliance), 
          especially in financial security sector.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">💼 Work Experience</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>High-tech Manufacturing Industry - Information Security 高科技製造業 資安管理</li>
          <li>Ernst & Young (EY) - CyberSecurity Consultant 安永企業管理諮詢 資安架構顧問</li>
          <li>Deloitte - CyberSecurity Consultant 勤業眾信聯合會計師事務所 資安管理暨技術顧問</li>
          <li>Financial Industry : Information System Security 金融業 資安管理</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">🎓 Professional Certifications</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">IT Governance, Risk and Compliance (GRC)</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>ISC2 CISSP - Certified Information Systems Security Professional</li>
          <li>ISC2 CCSP - Certified Cloud Security Professional</li>
          <li>ISACA CISA - Certified Information Systems Auditor</li>
          <li>ISACA CISM - Certified Information Security Manager</li>
          <li>ISACA CRISC - Certified in Risk and Information Systems Control</li>
          <li>ISACA CGEIT - Certified in the Governance of Enterprise IT</li>
          <li>ISACA CDPSE - Certified Data Privacy Solutions Engineer</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Security Analysis</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>CEH - EC-Council Certified Ethical Hacker</li>
          <li>ECSA - EC-Council Certified Security Analyst</li>
          <li>CPSA - CREST Practitioner Security Analyst</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Network Security</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>CCNP Security - Cisco Certified Network Professional: Security</li>
          <li>CCNP Enterprise - Cisco Certified Network Professional: Enterprise</li>
          <li>VCP-NV - VMware Certified Professional – Network Virtualization</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">🎤 Speaking</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Cybersec 2021/2022 Speaker | 台灣資安大會 講者</li>
          <li>金融主管機關稽核單位專業技能訓練-網路稽核講師</li>
          <li>台科大資訊安全研究社 講師</li>
          <li>逢甲大學黑客社 講師</li>
          <li>台北商業大學 資訊安全課程講座業師</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">🌐 Community</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>HITCON (Hacks in Taiwan Conference) Staff: 2018/2019/2020/2021</li>
          <li>COSCUP (Conference for Open Source Coders, Users and Promoters) Staff: 2016/2018/2020/2022</li>
          <li>SITCON (Students' Information Technology Conference) Staff: 2016/2017</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">📝 Blog & Social</h2>
        <ul className="list-disc pl-6 mb-6">
          <li><a href="https://medium.com/blacksecurity" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Medium blog</a></li>
          <li><a href="https://www.linkedin.com/in/kurohuang/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LinkedIn</a></li>
          <li><a href="https://twitter.com/catkuroH" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Twitter</a></li>
        </ul>
      </div>
    </div>
  );
}
