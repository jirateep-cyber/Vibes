const categories = [
  "Technology",
  "การเงินและธุรกิจ",
  "การศึกษาและความรู้",
  "กีฬาและออกกำลังกาย",
  "ข่าวและการเมือง",
  "ครอบครัว",
  "ความงามและสุขภาพ",
  "Lifestyle",
  "ท่องเที่ยว",
  "ธรรมชาติและสิ่งแวดล้อม",
  "บันเทิง",
  "บ้านและสวน",
  "โปรโมชั่น",
  "แฟชั่น",
  "ยานพาหนะ",
  "ศิลปะและวัฒนธรรม",
  "สัตว์เลี้ยง",
  "สินค้าและผลิตภัณฑ์",
  "อาหารและเครื่องดื่ม",
];

const dnaTypes = [
  {
    name: "The Explorer",
    icon: "🌎",
    code: "EXP",
    thaiTitle: "สายออกไปใช้ชีวิต",
    match: ["ท่องเที่ยว", "อาหารและเครื่องดื่ม", "Lifestyle"],
    primary: "#3BA7FF",
    secondary: "#FFB84D",
    description: "คนที่เชื่อว่าประสบการณ์คือคอนเทนต์ที่ดีที่สุด",
  },
  {
    name: "The Expert",
    icon: "🎓",
    code: "XPT",
    thaiTitle: "ตัวจริงสายความรู้",
    match: ["การศึกษาและความรู้", "การเงินและธุรกิจ", "ข่าวและการเมือง", "Technology"],
    primary: "#14213D",
    secondary: "#D4AF37",
    description: "คนที่ผู้ติดตามนึกถึงเมื่ออยากได้คำตอบที่เชื่อถือได้",
  },
  {
    name: "The Trendsetter",
    icon: "✨",
    code: "TRD",
    thaiTitle: "ตัวแม่ตัวพ่อแห่งเทรนด์",
    match: ["แฟชั่น", "ความงามและสุขภาพ", "บันเทิง"],
    primary: "#FF3CAC",
    secondary: "#784BA0",
    description: "คนที่มักเห็นอะไรใหม่ก่อนคนอื่นเสมอ",
  },
  {
    name: "The Builder",
    icon: "📈",
    code: "BLD",
    thaiTitle: "สายปั้น สายโต",
    match: ["การเงินและธุรกิจ", "สินค้าและผลิตภัณฑ์", "โปรโมชั่น"],
    primary: "#00A86B",
    secondary: "#F4C430",
    description: "คนที่มองเห็นโอกาสในทุกสิ่ง",
  },
  {
    name: "The Entertainer",
    icon: "🎭",
    code: "ENT",
    thaiTitle: "ตัวท็อปสายเอนเตอร์เทน",
    match: ["บันเทิง", "Lifestyle"],
    primary: "#FFD60A",
    secondary: "#FF7A00",
    description: "คนที่เกิดมาเพื่อสร้างความสนุกและดึงดูดความสนใจ",
  },
  {
    name: "The Nurturer",
    icon: "❤️",
    code: "NUR",
    thaiTitle: "หัวใจของคอมมูนิตี้",
    match: ["ครอบครัว", "สัตว์เลี้ยง", "ความงามและสุขภาพ", "กีฬาและออกกำลังกาย"],
    primary: "#FF6B81",
    secondary: "#FFB3C1",
    description: "คนที่เติบโตไปพร้อมกับผู้ติดตาม และสร้างความสัมพันธ์ที่มากกว่าคอนเทนต์",
  },
  {
    name: "The Specialist",
    icon: "⚡",
    code: "SPC",
    thaiTitle: "สายลึกตัวจริง",
    match: ["ยานพาหนะ", "Technology", "บ้านและสวน", "ธรรมชาติและสิ่งแวดล้อม", "ศิลปะและวัฒนธรรม"],
    primary: "#00D4FF",
    secondary: "#BFC5D2",
    description: "คนที่รักในสิ่งที่ตัวเองทำอย่างจริงจัง",
  },
  {
    name: "The Creator Chameleon",
    icon: "🚀",
    code: "CHM",
    thaiTitle: "ครีเอเตอร์หลายจักรวาล",
    match: [],
    primary: "#00D4FF",
    secondary: "#FFB800",
    gradient: ["#00D4FF", "#8B5CF6", "#FF3CAC", "#FFB800"],
    description: "คนที่ไม่ชอบถูกจำกัดอยู่ในกรอบเดียว",
  },
];

const vibeSlugByName = {
  "The Explorer": "explorer",
  "The Expert": "expert",
  "The Trendsetter": "trendsetter",
  "The Builder": "builder",
  "The Entertainer": "entertainer",
  "The Nurturer": "nurturer",
  "The Specialist": "specialist",
  "The Creator Chameleon": "creator_chameleon",
};

const categoryScoringMatrix = {
  Technology: { expert: 3, specialist: 4 },
  "การเงินและธุรกิจ": { expert: 4, builder: 5 },
  "การศึกษาและความรู้": { expert: 5 },
  "กีฬาและออกกำลังกาย": { expert: 2, nurturer: 4 },
  "ข่าวและการเมือง": { expert: 4 },
  "ครอบครัว": { nurturer: 5 },
  "ความงามและสุขภาพ": { trendsetter: 5, nurturer: 3 },
  Lifestyle: { explorer: 3, trendsetter: 2, entertainer: 3 },
  "ท่องเที่ยว": { explorer: 5 },
  "ธรรมชาติและสิ่งแวดล้อม": { specialist: 4 },
  "บันเทิง": { trendsetter: 4, entertainer: 5 },
  "บ้านและสวน": { specialist: 4 },
  "โปรโมชั่น": { builder: 4 },
  "แฟชั่น": { trendsetter: 5 },
  "ยานพาหนะ": { specialist: 5 },
  "ศิลปะและวัฒนธรรม": { trendsetter: 2, specialist: 3 },
  "สัตว์เลี้ยง": { nurturer: 5 },
  "สินค้าและผลิตภัณฑ์": { builder: 4 },
  "อาหารและเครื่องดื่ม": { explorer: 4, entertainer: 2 },
};

const marketplaceJobs = [
  {
    id: "job-beauty-kol-jul-oct-26",
    campaignName: "Beauty KOL Jul-Oct 26 [Standard]",
    detail: "Beauty KOL Jul-Oct 26 [Standard] : TikTok (Follower 0-1M)",
    platform: "TikTok",
    category: "ความงามและสุขภาพ",
    status: "กำลังรับสมัคร",
    daysRemaining: 4,
    followerRequirement: "0-1M",
    deliverables: ["TikTok Video 1 ชิ้น"],
    brandCategory: "Beauty",
    brief: "รีวิวผลิตภัณฑ์ความงามในสไตล์ creator-led พร้อมเล่าประสบการณ์ใช้งานจริง",
    requirements: ["มีช่อง TikTok ที่เชื่อมต่อแล้ว", "เล่า product benefit แบบเป็นธรรมชาติ", "ส่งงานตาม timeline"],
  },
  {
    id: "job-bank-digital-account-concert",
    campaignName: "Bank เปิดบัญชีดิจิตอล ลุ้นรับบัตรคอนเสิร์ต",
    detail: "Bank เปิดบัญชีดิจิตอล ลุ้นรับบัตรคอนเสิร์ต (Follower 0-1M)",
    platform: "Instagram",
    category: "การเงินและธุรกิจ",
    status: "กำลังรับสมัคร",
    daysRemaining: 14,
    followerRequirement: "0-1M",
    deliverables: ["Instagram Reel 1 ชิ้น", "Instagram Story 1 Set"],
    brandCategory: "Banking",
    brief: "สื่อสารแคมเปญเปิดบัญชีดิจิตอลให้เข้าใจง่ายและน่าสนใจสำหรับผู้ติดตาม",
    requirements: ["มี Instagram ที่เชื่อมต่อแล้ว", "คอนเทนต์ต้องอ่านง่าย", "ระบุ disclosure ตาม guideline"],
  },
];

const buddyReviewCampaignBackendStatuses = {
  "job-beauty-kol-jul-oct-26": "ต้องส่งงาน",
  "job-bank-digital-account-concert": "ฟีดแบค",
};

const connectedChannels = [
  { platform: "Facebook", connected: false, status: "ขาดการเชื่อมต่อ" },
  { platform: "Facebook Page", connected: false, status: "ขาดการเชื่อมต่อ" },
  { platform: "YouTube", connected: false, status: "ขาดการเชื่อมต่อ" },
  { platform: "Instagram", connected: true, username: "mixjp", status: "เชื่อมต่อแล้ว" },
  { platform: "X (Twitter)", connected: true, username: "mixjirat", status: "เชื่อมต่อแล้ว" },
  { platform: "TikTok", connected: true, username: "mixjp", status: "เชื่อมต่อแล้ว" },
];

const userPoints = {
  name: "jirateep supachaisamanpun",
  points: 4000,
  conversionRate: "10 แต้ม = 1 บาท",
  estimatedValue: 400,
  lineOAConnected: false,
};

const creatorTiers = [
  { level: 1, icon: "🌱", name: "Rookie", thaiName: "ดาวรุ่งหน้าใหม่", min: 0, next: 1000, description: "เพิ่งเริ่มสร้างตัวตนบน Buddy Review", benefits: ["Portfolio", "Creator Vibes", "Basic Content Lab"] },
  { level: 2, icon: "⭐", name: "Rising Star", thaiName: "ครีเอเตอร์น่าจับตา", min: 1000, next: 3000, description: "เริ่มมีฐานผู้ติดตามและมีความสม่ำเสมอ", benefits: ["Match Score", "Basic Rate Card", "Recommended Jobs"] },
  { level: 3, icon: "🚀", name: "Creator", thaiName: "ครีเอเตอร์ตัวจริง", min: 3000, next: 7000, description: "สร้างคอนเทนต์สม่ำเสมอและเริ่มมีอิทธิพลในกลุ่มเป้าหมาย", benefits: ["Portfolio Export", "Brand Insights", "Advanced Content Lab"] },
  { level: 4, icon: "🔥", name: "Influencer", thaiName: "อินฟลูเอนเซอร์มาแรง", min: 7000, next: 15000, description: "มีอิทธิพลต่อการตัดสินใจของผู้ติดตาม", benefits: ["Priority Job Matching", "Featured Badge", "Advanced Rate Card"] },
  { level: 5, icon: "👑", name: "Icon", thaiName: "ไอคอนแห่งวงการ", min: 15000, next: null, description: "Creator ระดับสูงที่มีอิทธิพลในวงกว้าง", benefits: ["Early Access Campaigns", "Premium Media Kit Export", "Featured Creator Opportunities", "Exclusive Campaign Invitations"] },
];

const userProgression = {
  rewardPoints: 4000,
  rewardConversionRate: "10 แต้ม = 1 บาท",
  creatorXP: 4200,
  creatorStreak: { currentDays: 3, longestDays: 7 },
  profileStrength: 82,
  missions: [
    { id: "connect-instagram", type: "daily", title: "เชื่อมต่อ Instagram", rewardXP: 200, status: "completed", progress: 1, target: 1 },
    { id: "view-fit-job", type: "daily", title: "ดูงานที่เหมาะกับคุณ", rewardXP: 30, status: "active", progress: 0, target: 1 },
    { id: "add-portfolio", type: "weekly", title: "เพิ่ม Portfolio 1 งาน", rewardXP: 300, status: "active", progress: 0, target: 1 },
    { id: "apply-fit-job", type: "weekly", title: "สมัครงานที่เหมาะกับคุณ", rewardXP: 250, status: "active", progress: 0, target: 1 },
    { id: "connect-instagram", type: "profile", title: "เชื่อมต่อ Instagram", rewardXP: 200, status: "completed", progress: 1, target: 1 },
  ],
};

const creatorBadgeRules = [
  { name: "Consistency Creator", description: "โพสต์อย่างสม่ำเสมอ", skill: "Content Consistency", threshold: 75 },
  { name: "Niche Specialist", description: "มี Focus Score สูงและ Niche ชัดเจน", skill: "Niche Focus", threshold: 72 },
  { name: "Audience Fit", description: "ได้รับ Engagement สูงจาก Audience", skill: "Audience Engagement", threshold: 75 },
  { name: "Rising Creator", description: "มี Potential Score สูงกว่าเกณฑ์", skill: "Growth Potential", threshold: 70 },
  { name: "Community Builder", description: "สร้างการมีส่วนร่วมกับผู้ติดตามได้ดี", skill: "Community Trust", threshold: 70 },
  { name: "Authority Signal", description: "มีความเชี่ยวชาญและเริ่มสร้าง Impact", skill: "Authority Signal", threshold: 70 },
  { name: "Elite Potential", description: "มีคะแนนสูงในทุกมิติ", skill: "Elite Potential", threshold: 80 },
];

const personaKnowledgeBase = {
  "The Explorer": {
    creatorType: "นักค้นหาประสบการณ์",
    notYourStyle: ["สายวิชาการหนัก", "สายวิเคราะห์เชิงลึก"],
    vibe: ["Freedom", "Adventure", "Discovery"],
    communicationStyle: "เหมือนเพื่อนชวนเที่ยว",
    toneOfVoice: ["เป็นกันเอง", "ตื่นเต้น", "ชวนลอง"],
    channelIdentity: "Inspiration-driven",
    strengths: ["คนอยากตามรอย", "ถ่ายภาพสวย", "เล่าเรื่องเก่ง"],
    growthAreas: ["Conversion ต่ำกว่ากลุ่มอื่น", "ต้องรักษาความสดใหม่"],
    bestBrandFit: ["Travel", "Hotel", "Airline", "Food", "Camera", "EV", "Outdoor"],
    contentRisk: ["Content ซ้ำ Location เดิม", "รีวิวแบบไม่มี Story"],
    collaborationStyle: ["Experience Review", "Travel Campaign", "Destination Content", "Creator Trip"],
  },
  "The Expert": {
    creatorType: "Authority Creator",
    notYourStyle: ["สายไวรัลล้วน"],
    vibe: ["Credible", "Smart", "Reliable"],
    communicationStyle: "อธิบายเป็นระบบ",
    toneOfVoice: ["มั่นใจ", "มีเหตุผล"],
    channelIdentity: "Knowledge-first",
    strengths: ["Trust สูง", "Brand Safety สูง", "Save Rate สูง"],
    growthAreas: ["Reach ต่ำ", "ดูจริงจังเกินไป"],
    bestBrandFit: ["Finance", "SaaS", "Tech", "Education", "B2B"],
    contentRisk: ["ยากเกินไป", "Technical เกินไป"],
    collaborationStyle: ["Product Education", "Deep Review", "Webinar", "Thought Leadership"],
  },
  "The Trendsetter": {
    creatorType: "Trend Leader",
    notYourStyle: ["สาย Technical"],
    vibe: ["Stylish", "Aspirational", "Modern"],
    communicationStyle: "เร็ว มั่นใจ ชี้นำ",
    toneOfVoice: ["มั่นใจ", "ทันสมัย", "ชวนตาม"],
    channelIdentity: "Trend-first",
    strengths: ["Viral สูง", "Discoverability สูง"],
    growthAreas: ["อายุ Content สั้น"],
    bestBrandFit: ["Fashion", "Beauty", "Lifestyle", "Luxury", "Retail"],
    contentRisk: ["Trend หมดเร็ว", "Depend on Virality"],
    collaborationStyle: ["Product Seeding", "Launch Campaign", "Trend Challenge"],
  },
  "The Builder": {
    creatorType: "Growth Creator",
    notYourStyle: ["สาย Entertainment"],
    vibe: ["Ambitious", "Strategic", "Business-minded"],
    communicationStyle: "ตรงประเด็น",
    toneOfVoice: ["ชัด", "จริงจัง", "เน้นผลลัพธ์"],
    channelIdentity: "Result-first",
    strengths: ["Conversion สูง", "Purchase Intent สูง"],
    growthAreas: ["ดูขายของเกินไป"],
    bestBrandFit: ["Fintech", "Business", "SaaS", "Productivity", "E-commerce"],
    contentRisk: ["Hard Sell"],
    collaborationStyle: ["Affiliate", "Lead Gen", "Product Launch"],
  },
  "The Entertainer": {
    creatorType: "Mass Audience Creator",
    notYourStyle: ["สายวิชาการ"],
    vibe: ["Fun", "Energetic", "Relatable"],
    communicationStyle: "เป็นธรรมชาติ",
    toneOfVoice: ["สนุก", "คล่อง", "เข้าถึงง่าย"],
    channelIdentity: "Entertainment-first",
    strengths: ["Reach สูง", "Share สูง"],
    growthAreas: ["Trust ต่ำกว่า Expert"],
    bestBrandFit: ["FMCG", "Snack", "Beverage", "Gaming", "Entertainment"],
    contentRisk: ["Viral แต่ไม่ Convert"],
    collaborationStyle: ["Branded Entertainment", "Challenge", "Sketch"],
  },
  "The Nurturer": {
    creatorType: "Community Creator",
    notYourStyle: ["สายขายตรง"],
    vibe: ["Warm", "Trustworthy", "Authentic"],
    communicationStyle: "เหมือนคนในครอบครัว",
    toneOfVoice: ["อบอุ่น", "จริงใจ", "เป็นกันเอง"],
    channelIdentity: "Relationship-first",
    strengths: ["Loyalty สูง", "Community แข็งแรง"],
    growthAreas: ["Scale ช้ากว่า Trendsetter"],
    bestBrandFit: ["Family", "Pet", "Wellness", "Healthcare", "Insurance"],
    contentRisk: ["Content ซ้ำชีวิตประจำวัน"],
    collaborationStyle: ["Long-term Ambassador", "Community Campaign", "Real Usage Review"],
  },
  "The Specialist": {
    creatorType: "Niche Expert",
    notYourStyle: ["Mass Entertainment"],
    vibe: ["Passionate", "Detailed", "Obsessive"],
    communicationStyle: "ลงรายละเอียด",
    toneOfVoice: ["ลึก", "จริงจัง", "แม่นยำ"],
    channelIdentity: "Expertise-first",
    strengths: ["Influence สูงใน Niche", "Purchase Intent สูงมาก"],
    growthAreas: ["Reach จำกัด"],
    bestBrandFit: ["Automotive", "Tech", "Home", "Tools", "Hobby"],
    contentRisk: ["Geek เกินไป"],
    collaborationStyle: ["Comparison Review", "Deep Review", "Technical Testing"],
  },
  "The Creator Chameleon": {
    creatorType: "Hybrid Creator",
    notYourStyle: ["Specialist ลึกด้านเดียว"],
    vibe: ["Creative", "Unexpected", "Versatile"],
    communicationStyle: "ปรับตาม Content",
    toneOfVoice: ["ยืดหยุ่น", "ครีเอทีฟ", "คาดเดายาก"],
    channelIdentity: "Multi-dimensional",
    strengths: ["Audience กว้าง", "Content Variety สูง"],
    growthAreas: ["Positioning ไม่ชัด"],
    bestBrandFit: ["Marketplace", "Lifestyle Platform", "Telecom", "Super App", "Multi-category Brand"],
    contentRisk: ["คนจำไม่ได้ว่าช่องทำอะไร"],
    collaborationStyle: ["Integrated Campaign", "Multi-format Campaign", "Cross-category Campaign"],
  },
};

const categoryVibeGroups = {
  Technology: ["specialist", "expert"],
  "การเงินและธุรกิจ": ["builder", "expert"],
  "การศึกษาและความรู้": ["expert"],
  "กีฬาและออกกำลังกาย": ["nurturer", "expert"],
  "ข่าวและการเมือง": ["expert"],
  "ครอบครัว": ["nurturer"],
  "ความงามและสุขภาพ": ["trendsetter", "nurturer"],
  Lifestyle: ["entertainer", "explorer", "trendsetter"],
  "ท่องเที่ยว": ["explorer"],
  "ธรรมชาติและสิ่งแวดล้อม": ["specialist"],
  "บันเทิง": ["entertainer", "trendsetter"],
  "บ้านและสวน": ["specialist"],
  "โปรโมชั่น": ["builder"],
  "แฟชั่น": ["trendsetter"],
  "ยานพาหนะ": ["specialist"],
  "ศิลปะและวัฒนธรรม": ["specialist", "trendsetter"],
  "สัตว์เลี้ยง": ["nurturer"],
  "สินค้าและผลิตภัณฑ์": ["builder"],
  "อาหารและเครื่องดื่ม": ["explorer", "entertainer"],
};

const singleCategoryFallbackPriority = {
  Lifestyle: ["entertainer", "explorer", "trendsetter"],
};

const vibeRelationshipMap = {
  "The Explorer": { similar: "The Entertainer", rival: "The Trendsetter", opposite: "The Expert" },
  "The Expert": { similar: "The Specialist", rival: "The Builder", opposite: "The Entertainer" },
  "The Trendsetter": { similar: "The Entertainer", rival: "The Explorer", opposite: "The Specialist" },
  "The Builder": { similar: "The Expert", rival: "The Specialist", opposite: "The Entertainer" },
  "The Entertainer": { similar: "The Trendsetter", rival: "The Explorer", opposite: "The Expert" },
  "The Nurturer": { similar: "The Explorer", rival: "The Trendsetter", opposite: "The Specialist" },
  "The Specialist": { similar: "The Expert", rival: "The Builder", opposite: "The Trendsetter" },
  "The Creator Chameleon": { similar: null, rival: "All", opposite: null },
};

const comparisonKnowledgeBase = {
  "The Explorer": {
    audienceComesFor: ["Inspiration", "Experience", "Discovery"],
    brandFit: ["Travel", "Hotel", "Airline", "Food", "Camera", "Outdoor", "EV"],
    strength: "Inspires action",
    weakness: "Lower conversion",
  },
  "The Expert": {
    audienceComesFor: ["Knowledge", "Analysis", "Trust"],
    brandFit: ["Finance", "Education", "SaaS", "Technology", "B2B"],
    strength: "Authority",
    weakness: "Lower virality",
  },
  "The Trendsetter": {
    audienceComesFor: ["Trend", "Style", "Aspirational Content"],
    brandFit: ["Fashion", "Beauty", "Luxury", "Lifestyle", "Retail"],
    strength: "Virality",
    weakness: "Short content lifespan",
  },
  "The Builder": {
    audienceComesFor: ["Growth", "Business", "Results"],
    brandFit: ["Fintech", "Business", "Productivity", "SaaS", "Ecommerce"],
    strength: "Conversion",
    weakness: "Can feel sales-driven",
  },
  "The Entertainer": {
    audienceComesFor: ["Fun", "Emotion", "Relatability"],
    brandFit: ["FMCG", "Snack", "Beverage", "Gaming", "Entertainment"],
    strength: "Reach",
    weakness: "Lower authority",
  },
  "The Nurturer": {
    audienceComesFor: ["Connection", "Trust", "Community"],
    brandFit: ["Family", "Pet", "Wellness", "Healthcare", "Insurance"],
    strength: "Loyalty",
    weakness: "Slower growth",
  },
  "The Specialist": {
    audienceComesFor: ["Expertise", "Depth", "Technical Knowledge"],
    brandFit: ["Automotive", "Technology", "Home", "Tools", "Hobby"],
    strength: "Purchase influence",
    weakness: "Smaller audience",
  },
  "The Creator Chameleon": {
    audienceComesFor: ["Variety", "Creativity", "Unexpected Content"],
    brandFit: ["Marketplace", "Telecom", "Super App", "Lifestyle Platform", "Multi-category Brand"],
    strength: "Versatility",
    weakness: "Positioning",
  },
};

const contentTemplates = {
  "The Explorer": {
    TikTok: ["Hidden gem", "local food review", "24-hour challenge", "budget vs luxury", "one-day trip"],
    Instagram: ["travel guide carousel", "location recommendation", "weekend plan", "photo dump", "story poll"],
    Facebook: ["long caption experience review", "community recommendation post", "album review"],
    YouTube: ["full trip review", "city guide", "travel documentary", "food route"],
    LinkedIn: ["tourism insight", "experience economy angle", "local business opportunity"],
    X: ["quick travel tips", "hot take", "mini-thread"],
  },
  "The Expert": {
    TikTok: ["explain in 60 seconds", "common mistakes", "myth vs fact", "3 things you should know"],
    Instagram: ["educational carousel", "checklist", "framework", "infographic"],
    Facebook: ["long educational post", "live Q&A", "community discussion"],
    YouTube: ["deep-dive explanation", "tutorial", "case study"],
    LinkedIn: ["industry insight", "trend analysis", "professional opinion"],
    X: ["insight thread", "quick breakdown", "data point"],
  },
  "The Trendsetter": {
    TikTok: ["trend prediction", "viral item review", "get ready with me", "what everyone will wear next"],
    Instagram: ["moodboard", "trend forecast", "style guide", "reels transition"],
    Facebook: ["trend discussion", "product inspiration", "community poll"],
    YouTube: ["style breakdown", "beauty trend review", "seasonal trend guide"],
    LinkedIn: ["creator trend analysis", "consumer culture insight"],
    X: ["trend hot take", "aesthetic thread"],
  },
  "The Builder": {
    TikTok: ["business breakdown", "revenue idea", "deal analysis", "product opportunity"],
    Instagram: ["growth tips carousel", "product highlight", "promotion guide"],
    Facebook: ["offer explanation", "business storytelling", "buyer education"],
    YouTube: ["business case study", "product review", "market opportunity"],
    LinkedIn: ["growth strategy", "founder lesson", "market analysis"],
    X: ["business insight", "quick lesson", "deal alert"],
  },
  "The Entertainer": {
    TikTok: ["POV", "comedy skit", "relatable moment", "reaction", "challenge"],
    Instagram: ["meme carousel", "reels trend", "behind the scenes", "story question"],
    Facebook: ["relatable post", "community joke", "short video"],
    YouTube: ["vlog", "reaction video", "entertainment series"],
    LinkedIn: ["creator economy observation", "storytelling post"],
    X: ["joke", "reaction", "punchline", "trend comment"],
  },
  "The Nurturer": {
    TikTok: ["family moment", "pet POV", "wellness habit", "day in my life", "comforting advice"],
    Instagram: ["reflection post", "self-care tips", "community question", "warm carousel"],
    Facebook: ["community story", "family discussion", "personal experience"],
    YouTube: ["routine vlog", "family story", "wellness journey"],
    LinkedIn: ["human-centered lesson", "wellbeing at work", "community building"],
    X: ["short reflection", "gentle reminder", "personal note"],
  },
  "The Specialist": {
    TikTok: ["deep dive", "expert review", "myth vs fact", "comparison", "niche explanation"],
    Instagram: ["technical carousel", "before-after", "checklist", "breakdown"],
    Facebook: ["community Q&A", "long-form explanation", "recommendation post"],
    YouTube: ["long-form analysis", "comparison review", "tutorial"],
    LinkedIn: ["technical insight", "expert perspective", "industry breakdown"],
    X: ["niche thread", "expert take", "quick comparison"],
  },
  "The Creator Chameleon": {
    TikTok: ["cross-category mashup", "unexpected pairing", "trend remix", "personal experiment"],
    Instagram: ["multi-theme carousel", "creative moodboard", "identity post"],
    Facebook: ["story-led mixed content", "community question", "experience review"],
    YouTube: ["hybrid vlog", "experiment series", "creator journey"],
    LinkedIn: ["multi-skill creator insight", "portfolio thinking", "creative strategy"],
    X: ["unpredictable thought", "creator diary", "mixed-topic thread"],
  },
};

const audienceTypes = [
  {
    type: "นักเรียนรู้",
    match: ["การศึกษาและความรู้", "การเงินและธุรกิจ", "ข่าวและการเมือง", "Technology"],
    keywords: ["เรียน", "ความรู้", "สรุป", "วิเคราะห์", "เทคนิค", "framework", "data", "อธิบาย"],
    reason: "ชอบคอนเทนต์ที่อธิบายชัด มีเหตุผล และเอาไปใช้ต่อได้",
  },
  {
    type: "นักสำรวจ",
    match: ["ท่องเที่ยว", "อาหารและเครื่องดื่ม", "Lifestyle"],
    keywords: ["เที่ยว", "กิน", "คาเฟ่", "ประสบการณ์", "สถานที่", "ไลฟ์สไตล์"],
    reason: "ตามหาแรงบันดาลใจจากประสบการณ์และสถานที่ใหม่ ๆ",
  },
  {
    type: "นักตามเทรนด์",
    match: ["แฟชั่น", "ความงามและสุขภาพ", "บันเทิง", "Lifestyle"],
    keywords: ["เทรนด์", "ไวรัล", "สวย", "แฟชั่น", "บิวตี้", "ใหม่"],
    reason: "อยากรู้ว่าอะไรใหม่ อะไรกำลังมา และอะไรน่าลองก่อนคนอื่น",
  },
  {
    type: "นักช้อปสายคุ้ม",
    match: ["สินค้าและผลิตภัณฑ์", "โปรโมชั่น", "Technology", "ความงามและสุขภาพ", "อาหารและเครื่องดื่ม"],
    keywords: ["รีวิว", "คุ้ม", "โปร", "ซื้อ", "ราคา", "ของใช้", "เทียบ"],
    reason: "ติดตามเพื่อช่วยตัดสินใจก่อนซื้อหรือเลือกสิ่งที่คุ้มกว่า",
  },
  {
    type: "สายเอ็นจอย",
    match: ["บันเทิง", "Lifestyle", "อาหารและเครื่องดื่ม", "ท่องเที่ยว"],
    keywords: ["สนุก", "ฮา", "relatable", "challenge", "reaction", "vlog"],
    reason: "อยากได้คอนเทนต์ที่ดูง่าย เพลิน และทำให้อารมณ์ดี",
  },
  {
    type: "สายคอมมูนิตี้",
    match: ["ครอบครัว", "สัตว์เลี้ยง", "ความงามและสุขภาพ", "Lifestyle", "บ้านและสวน"],
    keywords: ["ครอบครัว", "สัตว์", "บ้าน", "ใจ", "ดูแล", "ชุมชน", "สุขภาพ"],
    reason: "รู้สึกผูกพันกับตัวตนของครีเอเตอร์และบรรยากาศของช่อง",
  },
  {
    type: "สายลึกเฉพาะทาง",
    match: ["ยานพาหนะ", "Technology", "บ้านและสวน", "ธรรมชาติและสิ่งแวดล้อม", "ศิลปะและวัฒนธรรม"],
    keywords: ["เจาะลึก", "ละเอียด", "เฉพาะทาง", "เทคนิค", "review", "เปรียบเทียบ"],
    reason: "ตามเพราะอยากได้รายละเอียด มุมลึก และความเชี่ยวชาญเฉพาะเรื่อง",
  },
  {
    type: "สายแรงบันดาลใจ",
    match: ["กีฬาและออกกำลังกาย", "ความงามและสุขภาพ", "การเงินและธุรกิจ", "แฟชั่น", "ท่องเที่ยว"],
    keywords: ["เติบโต", "เป้าหมาย", "แรงบันดาลใจ", "พัฒนา", "สุขภาพ", "ธุรกิจ"],
    reason: "อยากเห็นไอเดียที่ทำให้ชีวิตดีขึ้น เก่งขึ้น หรือมีภาพอนาคตที่ชัดขึ้น",
  },
];

const state = {
  selected: [],
  language: localStorage.getItem("buddyReviewLanguage") || "th",
  isAuthenticated: localStorage.getItem("buddyReviewAuth") === "true",
  authPromptSeen: false,
  authProvider: localStorage.getItem("buddyReviewAuthProvider") || "",
  authMode: "login",
  pendingAuthRoute: "",
  activeTab: "overview",
  analysis: null,
  contentLab: null,
  buddyProfileCreated: false,
  isAnalyzing: false,
  loadingProgress: 0,
  loadingStep: 0,
  loadingMessage: 0,
  loadingComplete: false,
  loadingTimers: [],
  profileImageData: "",
  jobsTab: "discover",
  jobPlatformFilter: "ทั้งหมด",
  jobSearch: "",
  appliedJobs: [],
  selectedJobId: null,
  progressPanel: "",
  rateCardCount: 1,
  portfolioCount: 1,
  withdrawAccounts: [],
  withdrawAccountImageData: "",
  notificationsRead: false,
  channelStatsRefreshing: false,
  autosaveTimer: null,
  autosaveHideTimer: null,
  workPreferences: {
    categories: "Beauty, Lifestyle, Technology",
    platforms: "TikTok, Instagram",
    timeline: "รับงานล่วงหน้า 7-14 วัน",
    terms: "ราคาขึ้นกับ deliverables, usage rights และ timeline",
  },
};

const creatorNotifications = [
  { type: "campaign", title: "มีแคมเปญใหม่ตรงกับ TikTok Beauty", detail: "Match score 84% · เปิดรับสมัครวันนี้" },
  { type: "progress", title: "Profile Strength เพิ่มขึ้น", detail: "Portfolio และ Rate Card ทำให้คะแนนพร้อมรับงานดีขึ้น" },
  { type: "campaign", title: "แบรนด์ Banking กำลังหา Creator", detail: "เหมาะกับสาย Expert / Finance content" },
];

const $ = (id) => document.getElementById(id);

const i18nText = {
  en: {
    "Creator Vibes": "Creator Vibes",
    "Mission": "Mission",
    "Portfolio": "Portfolio",
    "Campaign Hub": "Campaign Hub",
    "Sign Up": "Sign Up",
    "Login": "Login",
    "Register": "Register",
    "Buddy Review Login": "Buddy Review Login",
    "รับข้อมูล Creator Vibes ที่ครบกว่า": "Get richer Creator Vibes insights",
    "ล็อกอินเพื่อดึงข้อมูล engagement, posting history, campaign fit และแนะนำงานที่เหมาะกับคุณได้แม่นขึ้น": "Log in to use engagement, posting history, campaign fit, and more accurate job recommendations.",
    "ยังไม่ล็อกอินตอนนี้": "Continue without logging in",
    "สวัสดีค่ะ Buddy Review พร้อมช่วยดู campaign, portfolio และงานที่เหมาะกับคุณ": "Hi, Buddy Review can help with campaigns, portfolio, and suitable jobs.",
    "อยากถามเรื่องงานที่เหมาะกับโปรไฟล์ตอนนี้": "I want to ask about jobs that fit my current profile.",
    "ได้เลยค่ะ ส่งคำถามมาได้เลย ระบบจะ sync กับ Messenger เมื่อเชื่อม Facebook แล้ว": "Sure. Send a question here. Messages will sync with Messenger after Facebook is connected.",
    "พิมพ์ข้อความ...": "Type a message...",
    "ส่ง": "Send",
    "เลือกหมวดคอนเทนต์ แล้วดู Vibe, Audience และ Content Strategy แบบ social-first": "Choose content categories and see your creator vibe, audience, and social-first content strategy.",
    "Content Categories เลือกได้ 1-3 หมวดหมู่": "Content categories, choose 1-3",
    "ต้องเลือกอย่างน้อย 1 หมวดหมู่เพื่อวิเคราะห์": "Choose at least one category to analyze.",
    "วิเคราะห์ Creator Vibes": "Analyze Creator Vibes",
    "ภาพรวม": "Overview",
    "ผู้ติดตาม": "Audience",
    "เปรียบเทียบ": "Comparison",
    "ค้นหาแคมเปญที่เหมาะกับช่องของคุณ และสมัครงานกับแบรนด์ผ่าน Buddy Review": "Find campaigns that fit your channel and apply to brand jobs through Buddy Review.",
    "ดู Tier, XP, Mission และ Reward ของครีเอเตอร์แบบแยกจาก Portfolio": "View creator tier, XP, missions, and rewards separately from Portfolio.",
    "สร้างพอร์ตโฟลิโอและ Rate Card สำหรับ Influencer": "Create an influencer portfolio and rate card.",
    "เริ่มสร้าง Portfolio ของคุณ": "Start building your Portfolio",
    "ทำ Portfolio, Rate Card และเตรียมโปรไฟล์ให้พร้อมรับงานจากแบรนด์": "Build a portfolio, rate card, and work-ready brand profile.",
    "สร้างโปรไฟล์": "Create Profile",
    "บันทึก Portfolio แล้ว": "Portfolio saved",
    "กรุณากรอกข้อมูลโปรไฟล์ให้ครบก่อน Export": "Complete your profile before exporting.",
    "Profile Setup": "Profile Setup",
    "เพิ่มรูป": "Add photo",
    "ชื่อครีเอเตอร์": "Creator name",
    "ชื่อที่ให้แบรนด์เห็น": "Display name for brands",
    "ลิงก์ช่องของคุณ": "Your channel link",
    "เล่าตัวตนและสไตล์คอนเทนต์ของคุณ": "Describe your identity and content style.",
    "Creator Score": "Creator Score",
    "Connected Channel Stats": "Connected Channel Stats",
    "Export Preview": "Export Preview",
    "สมาชิกเท่านั้น": "Members only",
    "Members only": "Members only",
    "Login เพื่อดู Updates": "Log in to view updates",
    "รับ campaign และ progress update หลังเข้าสู่ระบบ": "Get campaign and progress updates after logging in.",
    "Login / Register": "Login / Register",
    "ล็อคอินเพื่อปลดล็อก": "Log in to unlock",
    "เชื่อม Facebook หรือ TikTok เพื่อดู insight เต็ม, engagement จริง และคำแนะนำที่ใช้รับงานได้แม่นขึ้น": "Connect Facebook or TikTok to unlock full insights, real engagement, and better job-ready recommendations.",
    "All Vibe Scores": "All Vibe Scores",
    "หมวดหมู่ที่เลือก": "Selected categories",
    "Engagement by Category": "Engagement by Category",
    "Audience Mix": "Audience Mix",
    "Main Audience Type": "Main Audience Type",
    "Audience Type Percentages": "Audience Type Percentages",
    "คนกลุ่มนี้ติดตามเพราะอะไร": "Why this audience follows",
    "สิ่งที่ผู้ติดตามคาดหวัง": "What followers expect",
    "คอนเทนต์ที่ทำให้ Engage": "Content that drives engagement",
    "Brand Category ที่เหมาะ": "Best-fit brand categories",
    "ดาวน์โหลด": "Download",
    "คุณคือ": "You are",
    "สมัครสมาชิก Buddy Review": "Create a Buddy Review account",
    "สร้างบัญชีเพื่อเก็บ Creator Vibes, Portfolio, Mission, Campaign และ Reward ไว้ในโปรไฟล์เดียว": "Create an account to save Creator Vibes, Portfolio, Mission, Campaign, and Rewards in one profile.",
    "เข้าสู่ระบบ Buddy Review": "Log in to Buddy Review",
    "มีบัญชีแล้ว? Login": "Already have an account? Login",
    "ยังไม่มีบัญชี? Register": "No account yet? Register",
    "Login เพื่อเข้า Home": "Log in to access Home",
    "Login เพื่อเข้า Mission": "Log in to access Mission",
    "Login เพื่อเข้า Portfolio": "Log in to access Portfolio",
    "Login เพื่อเข้า Campaign Hub": "Log in to access Campaign Hub",
    "หน้านี้ใช้ข้อมูลสมาชิกเพื่อ sync profile, campaign, reward, mission และ insight จากทุกหน้าให้คำนวณได้ถูกต้อง": "This page uses member data to sync profile, campaigns, rewards, missions, and insights across the platform.",
    "กลับไป Creator Vibes": "Back to Creator Vibes",
    "ออกจากระบบ": "Log out",
    "งานใหม่": "New jobs",
    "อ่านแล้ว": "Read",
    "ดู Vibe ล่าสุด": "View latest Vibe",
    "วิเคราะห์ Vibes": "Analyze Vibes",
    "เปิด Mission": "Open Mission",
    "แก้ Portfolio": "Edit Portfolio",
    "ค้นหางานใหม่": "Discover jobs",
    "งานของฉัน": "My jobs",
    "โปรไฟล์รับงาน": "Work profile",
    "ยังไม่มีงานที่สมัคร": "No applied jobs yet",
    "สมัครงาน": "Apply",
    "ปิด": "Close",
    "เพิ่ม Portfolio": "Add Portfolio",
    "เพิ่ม Rate Card": "Add Rate Card",
    "พร้อม Export เป็น media kit สำหรับส่งให้แบรนด์": "Ready to export as a brand media kit",
  },
};

const translatedTextNodes = new WeakMap();
let isApplyingLanguage = false;

function translateString(value) {
  if (state.language === "th") return value;
  return i18nText[state.language]?.[value.trim()] || value;
}

function applyLanguage(root = document.body) {
  if (!root || isApplyingLanguage) return;
  isApplyingLanguage = true;
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === state.language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest("script, style")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (!translatedTextNodes.has(node)) translatedTextNodes.set(node, node.nodeValue);
    const original = translatedTextNodes.get(node);
    const leading = original.match(/^\s*/)?.[0] || "";
    const trailing = original.match(/\s*$/)?.[0] || "";
    node.nodeValue = `${leading}${translateString(original.trim())}${trailing}`;
  });
  root.querySelectorAll?.("input[placeholder], textarea[placeholder]").forEach((field) => {
    if (!field.dataset.originalPlaceholder) field.dataset.originalPlaceholder = field.getAttribute("placeholder") || "";
    field.setAttribute("placeholder", translateString(field.dataset.originalPlaceholder));
  });
  isApplyingLanguage = false;
}

function setLanguage(language) {
  state.language = language;
  localStorage.setItem("buddyReviewLanguage", language);
  document.querySelectorAll(".language-option").forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  applyLanguage(document.body);
}

const loadingSteps = [
  "วิเคราะห์หมวดหมู่",
  "ค้นหา Creator Vibe",
  "วิเคราะห์ผู้ติดตาม",
  "เตรียมผลลัพธ์",
];

const loadingMessages = [
  "Analyzing Categories",
  "Finding Creator Vibe",
  "Building Audience Insights",
  "Preparing Results",
];

function getFormData() {
  return {
    platform: $("platform")?.value || "TikTok",
    selectedCategories: [...state.selected],
  };
}

function calculateVibeResult(selected) {
  const scores = {
    explorer: 0,
    expert: 0,
    trendsetter: 0,
    builder: 0,
    entertainer: 0,
    nurturer: 0,
    specialist: 0,
  };

  selected.forEach((category) => {
    const categoryScores = categoryScoringMatrix[category] || {};
    Object.entries(categoryScores).forEach(([vibe, points]) => {
      scores[vibe] += points;
    });
  });

  const priority = selected.length === 1 ? singleCategoryFallbackPriority[selected[0]] || [] : [];
  const sorted = Object.entries(scores).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    const aPriority = priority.indexOf(a[0]);
    const bPriority = priority.indexOf(b[0]);
    if (aPriority !== -1 || bPriority !== -1) {
      return (aPriority === -1 ? 99 : aPriority) - (bPriority === -1 ? 99 : bPriority);
    }
    return 0;
  });
  const [topVibe, topScore] = sorted[0];
  const [, secondScore] = sorted[1];
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const isClose = topScore - secondScore <= 2;
  const spansDifferentWorlds = selected.length >= 2 && selectedCategoriesSpanDifferentWorlds(selected);
  const isChameleon = selected.length >= 2 && spansDifferentWorlds && isClose;
  const resultSlug = isChameleon ? "creator_chameleon" : topVibe;
  const resultName = Object.entries(vibeSlugByName).find(([, slug]) => slug === resultSlug)?.[0] || "The Creator Chameleon";

  return {
    vibe: resultSlug,
    thai_title: dnaTypes.find((dna) => dna.name === resultName).thaiTitle,
    confidence: totalScore ? Math.round((topScore / totalScore) * 100) : 0,
    scores,
    spans_different_worlds: spansDifferentWorlds,
    is_close_score: isClose,
    top_score: topScore,
    second_score: secondScore,
    top_vibe: topVibe,
    result_dna: dnaTypes.find((dna) => dna.name === resultName),
  };
}

function selectedCategoriesSpanDifferentWorlds(selected) {
  const primaryGroups = selected.map((category) => categoryVibeGroups[category]?.[0]).filter(Boolean);
  if (new Set(primaryGroups).size <= 1) return false;

  return selected.some((category, index) => {
    const currentGroups = categoryVibeGroups[category] || [];
    return selected.some((otherCategory, otherIndex) => {
      if (index === otherIndex) return false;
      const otherGroups = categoryVibeGroups[otherCategory] || [];
      return !currentGroups.some((group) => otherGroups.includes(group));
    });
  });
}

function bullet(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function createAnalysis() {
  const form = getFormData();
  const vibeResult = calculateVibeResult(form.selectedCategories);
  const dna = vibeResult.result_dna;
  const persona = personaKnowledgeBase[dna.name];
  const primaryCategory = form.selectedCategories[0] || "คอนเทนต์";
  const audienceMix = calculateAudienceMix(form, dna);
  const mainAudience = audienceMix[0];

  const analysis = {
    creator_dna: dna.name,
    vibe: vibeResult.vibe,
    icon: dna.icon,
    code: dna.code,
    thai_title: dna.thaiTitle,
    confidence: vibeResult.confidence,
    vibe_scores: vibeResult.scores,
    top_score: vibeResult.top_score,
    second_score: vibeResult.second_score,
    scoring_result: {
      selected_categories: form.selectedCategories,
      vibe: vibeResult.vibe,
      thai_title: dna.thaiTitle,
      confidence: vibeResult.confidence,
      scores: vibeResult.scores,
      top_score: vibeResult.top_score,
      second_score: vibeResult.second_score,
      spans_different_worlds: vibeResult.spans_different_worlds,
      is_close_score: vibeResult.is_close_score,
      persona_knowledge: persona,
    },
    selected_categories: form.selectedCategories,
    color_theme: { primary: dna.primary, secondary: dna.secondary, gradient: dna.gradient || [], background: "#090711" },
    short_description: dna.description,
    audience_tab: {
      main_audience_type: mainAudience.type,
      audience_mix: audienceMix,
      audience_type: `${mainAudience.type} ที่ติดตามเพราะคอนเทนต์ ${form.selectedCategories.join(" + ")} บน ${form.platform}`,
      why_they_follow: [
        `คอนเทนต์กลุ่ม ${primaryCategory} ตรงกับความสนใจหลักของ${mainAudience.type}`,
        "ได้ไอเดียไปใช้ ตัดสินใจซื้อ หรือเลือกสิ่งที่เหมาะกับตัวเอง",
        `รูปแบบบน ${form.platform} ทำให้ดูง่ายและแชร์ต่อได้`,
      ],
      pain_points: ["ข้อมูลเยอะจนเลือกไม่ถูก", "กลัวซื้อผิดหรือเสียเวลา", "อยากเห็นประสบการณ์จริงก่อนตัดสินใจ"],
      what_they_expect: ["สรุปชัดว่าควรสนใจอะไร", "ข้อดีข้อเสียแบบไม่อวยเกิน", "คำแนะนำที่เอาไปใช้ได้ทันที", "มุมมองที่เข้ากับชีวิตจริงของเขา"],
      expected_content: ["สรุปชัดว่าควรสนใจอะไร", "ข้อดีข้อเสียแบบไม่อวยเกิน", "คำแนะนำที่เอาไปใช้ได้ทันที", "มุมมองที่เข้ากับชีวิตจริงของเขา"],
      high_engagement_content: ["รีวิวหลังใช้จริง", "เทียบให้เห็นภาพ", "ลิสต์สั้น ๆ แบบเซฟเก็บไว้ดู", "คอมเมนต์ถาม-ตอบจากผู้ติดตาม"],
      brand_fit: persona.bestBrandFit,
    },
    overview_tab: {
      personality: `${persona.creatorType} ที่มีแกนชัดจากหมวด ${form.selectedCategories.join(", ")}`,
      creator_type: persona.creatorType,
      not_your_style: persona.notYourStyle.join(", "),
      vibe: persona.vibe.join(" / "),
      communication_style: persona.communicationStyle,
      tone_of_voice: persona.toneOfVoice.join(" / "),
      content_formats: ["Short review", "How to", "Checklist", "Before / After", "เปรียบเทียบตัวเลือก"],
      content_characteristics: ["เห็นประโยชน์เร็ว", "มีมุมส่วนตัว", "อ่านง่าย แชร์ง่าย", "ทำให้คนดูรู้สึกตัดสินใจได้ดีขึ้น"],
      channel_identity: persona.channelIdentity,
      strengths: persona.strengths,
      growth_areas: persona.growthAreas,
      tips_from_buddy_review: ["ทำคอนเทนต์ 70% เพื่อผู้ติดตาม และ 30% เพื่อโชว์ความพร้อมด้านงานแบรนด์", "ทำ Hook ให้เริ่มจากปัญหาจริงของคนดู", "ทุกโพสต์ควรมีประโยคที่คนอยากส่งต่อ", "เก็บผลลัพธ์แคมเปญไว้ทำ media kit"],
    },
    comparison_tab: buildComparisonTab(dna, vibeResult.scores),
    share_card: {
      section_name: "Vibes",
      headline: "VIBES",
      dna_name: dna.name,
      code: dna.code,
      thai_title: dna.thaiTitle,
      identity_line: `ช่องนี้มีเสน่ห์ตรงที่ทำให้${primaryCategory}รู้สึกใกล้ตัวและน่าเชื่อ`,
      you_are: `คุณคือ ${dna.thaiTitle}`,
      description: dna.description,
      traits: ["จริงใจ", "มีมุมชัด", "แชร์ต่อได้"],
      superpower: `เปลี่ยน${primaryCategory}ให้เข้าใจง่ายและน่าเชื่อ`,
      design_direction: "Dark gradient, glassmorphism, premium Buddy Review purple-pink system with DNA accent",
    },
    content_lab: generateContentLab(dna, form, audienceMix),
  };
  localStorage.setItem("buddyReviewLatestVibeScores", JSON.stringify(analysis.scoring_result));
  return analysis;
}

function calculateAudienceMix(form, dna) {
  const platformBoost = {
    TikTok: ["สายเอ็นจอย", "นักตามเทรนด์", "นักช้อปสายคุ้ม"],
    Instagram: ["นักตามเทรนด์", "นักสำรวจ", "สายแรงบันดาลใจ"],
    Facebook: ["สายคอมมูนิตี้", "นักช้อปสายคุ้ม", "นักเรียนรู้"],
    YouTube: ["นักเรียนรู้", "สายลึกเฉพาะทาง", "นักสำรวจ"],
    LinkedIn: ["นักเรียนรู้", "สายแรงบันดาลใจ"],
    X: ["นักเรียนรู้", "สายลึกเฉพาะทาง"],
  }[form.platform] || [];
  const dnaBoost = {
    "The Explorer": ["นักสำรวจ", "สายแรงบันดาลใจ"],
    "The Expert": ["นักเรียนรู้", "สายลึกเฉพาะทาง"],
    "The Trendsetter": ["นักตามเทรนด์", "สายแรงบันดาลใจ"],
    "The Builder": ["นักช้อปสายคุ้ม", "สายแรงบันดาลใจ"],
    "The Entertainer": ["สายเอ็นจอย", "นักตามเทรนด์"],
    "The Nurturer": ["สายคอมมูนิตี้", "สายแรงบันดาลใจ"],
    "The Specialist": ["สายลึกเฉพาะทาง", "นักเรียนรู้"],
    "The Creator Chameleon": ["นักตามเทรนด์", "นักสำรวจ", "สายเอ็นจอย"],
  }[dna.name] || [];

  const weighted = audienceTypes.map((audienceType) => {
    let score = 8;
    score += form.selectedCategories.filter((category) => audienceType.match.includes(category)).length * 18;
    if (platformBoost.includes(audienceType.type)) score += 7;
    if (dnaBoost.includes(audienceType.type)) score += 9;
    if (form.selectedCategories.length === 3 && dna.name === "The Creator Chameleon") score += 5;
    return { ...audienceType, score };
  }).sort((a, b) => b.score - a.score);

  const selectedCount = form.selectedCategories.length === 1 ? 3 : 4;
  let top = weighted.slice(0, selectedCount);
  if (top[0].score / top.reduce((sum, item) => sum + item.score, 0) > 0.65) {
    top = top.map((item, index) => index === 0 ? { ...item, score: item.score * 0.82 } : { ...item, score: item.score * 1.08 });
  }
  const rawTotal = top.reduce((sum, item) => sum + item.score, 0);
  let mix = top.map((item) => ({
    type: item.type,
    percentage: Math.max(8, Math.round((item.score / rawTotal) * 100)),
    reason: item.reason,
  }));
  let diff = 100 - mix.reduce((sum, item) => sum + item.percentage, 0);
  mix[0].percentage += diff;
  if (mix[0].percentage > 65) {
    const excess = mix[0].percentage - 65;
    mix[0].percentage = 65;
    const share = Math.floor(excess / (mix.length - 1));
    mix = mix.map((item, index) => index === 0 ? item : { ...item, percentage: item.percentage + share });
    mix[mix.length - 1].percentage += 100 - mix.reduce((sum, item) => sum + item.percentage, 0);
  }
  return mix.filter((item) => item.percentage >= 8).sort((a, b) => b.percentage - a.percentage);
}

function buildComparisonTab(dna, scores) {
  if (dna.name === "The Creator Chameleon") {
    const mix = buildVibeMix(scores);
    return {
      mode: "chameleon",
      vibe_mix: mix,
      strongest_vibe: mix[0],
      secondary_vibe: mix[1],
      hidden_vibe: mix[2],
      why: `ผลลัพธ์ออกมาเป็น Chameleon เพราะคะแนนกระจายข้ามหลายโลกของคอนเทนต์ ไม่มี Vibe เดียวที่ชนะชัดเจน`,
      opportunity: "Can work with many brand categories",
      risk: "Audience may struggle to define channel identity",
    };
  }

  const relation = vibeRelationshipMap[dna.name];
  const self = comparisonKnowledgeBase[dna.name];
  const similar = comparisonKnowledgeBase[relation.similar];
  const rival = comparisonKnowledgeBase[relation.rival];
  const opposite = comparisonKnowledgeBase[relation.opposite];
  return {
    mode: "relationship",
    similar_vibe: relation.similar,
    rival_vibe: relation.rival,
    opposite_vibe: relation.opposite,
    closest: {
      why: `${dna.name} และ ${relation.similar} ต่างดึงคนด้วยพลังของ ${sharedText(self.audienceComesFor, similar.audienceComesFor)} แต่เล่าคนละจังหวะ`,
      difference: `${dna.name} เด่นที่ ${self.strength}; ${relation.similar} เด่นที่ ${similar.strength}`,
    },
    competitor: {
      why: `${relation.rival} แย่งพื้นที่ความสนใจบางส่วน เพราะ audience อาจเลือกคอนเทนต์ที่ตอบโจทย์ ${rival.audienceComesFor.join(", ")} แทน`,
      budgetOverlap: overlapText(self.brandFit, rival.brandFit),
      audienceOverlap: sharedText(self.audienceComesFor, rival.audienceComesFor),
    },
    opposite: {
      why: `${dna.name} สร้างคุณค่าผ่าน ${self.audienceComesFor.join(", ")} ขณะที่ ${relation.opposite} สร้างคุณค่าผ่าน ${opposite.audienceComesFor.join(", ")}`,
      audienceExpectation: `${dna.name}: ${self.audienceComesFor.join(", ")} / ${relation.opposite}: ${opposite.audienceComesFor.join(", ")}`,
      contentStrategy: `${dna.name} ควรชนะด้วย ${self.strength}; ${relation.opposite} มักชนะด้วย ${opposite.strength}`,
    },
    audienceDifference: {
      yours: self.audienceComesFor,
      theirs: rival.audienceComesFor,
    },
    brandCompetition: {
      yours: self.brandFit,
      theirs: rival.brandFit,
      overlap: overlapText(self.brandFit, rival.brandFit),
    },
    advantage: `${dna.name} ทำได้ดีกว่าในมุม ${self.strength} และเหมาะกับแบรนด์ที่ต้องการ ${self.brandFit.slice(0, 3).join(", ")}`,
    blindSpot: `${relation.rival} มักทำได้ดีกว่าในมุม ${rival.strength}; จุดที่ต้องระวังคือ ${self.weakness}`,
  };
}

function buildVibeMix(scores) {
  const labelBySlug = {
    explorer: "Explorer",
    expert: "Expert",
    trendsetter: "Trendsetter",
    builder: "Builder",
    entertainer: "Entertainer",
    nurturer: "Nurturer",
    specialist: "Specialist",
  };
  const total = Object.values(scores).reduce((sum, score) => sum + score, 0) || 1;
  return Object.entries(scores)
    .filter(([, score]) => score > 0)
    .map(([vibe, score]) => ({ vibe: labelBySlug[vibe], score, percentage: Math.round((score / total) * 100) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function sharedText(a, b) {
  const shared = a.filter((item) => b.includes(item));
  return shared.length ? shared.join(", ") : `${a[0]} vs ${b[0]}`;
}

function overlapText(a, b) {
  const overlap = a.filter((item) => b.includes(item));
  return overlap.length ? overlap.join(", ") : `budgets near ${a[0]} and ${b[0]}`;
}

function generateContentLab(dna, form, audienceMix) {
  const selected = form.selectedCategories;
  const persona = personaKnowledgeBase[dna.name];
  const primaryCategory = selected[0];
  const templates = contentTemplates[dna.name]?.[form.platform] || contentTemplates[dna.name]?.TikTok || ["content idea"];
  const pillarsByDna = {
    "The Explorer": ["Experience Guide", "Local Discovery", "Personal Story", "Practical Tips"],
    "The Expert": ["Education", "Analysis", "Framework", "Opinion"],
    "The Trendsetter": ["Trend Watch", "Style Guide", "Product Discovery", "Culture Signal"],
    "The Builder": ["Growth Lesson", "Product Opportunity", "Deal Breakdown", "Buyer Education"],
    "The Entertainer": ["Relatable Moment", "Reaction", "Challenge", "Storytime"],
    "The Nurturer": ["Community Care", "Routine", "Personal Reflection", "Helpful Reminder"],
    "The Specialist": ["Deep Dive", "Comparison", "Expert Review", "Niche Tutorial"],
    "The Creator Chameleon": ["Mashup", "Experiment", "Creator Diary", "Unexpected Angle"],
  }[dna.name];
  const ratios = selected.length === 1 ? [45, 25, 20, 10] : selected.length === 2 ? [40, 25, 20, 15] : [30, 25, 25, 20];
  const formatRankings = {
    TikTok: ["Short Talking Head", "POV", "Listicle", "Review", "Storytime"],
    Instagram: ["Carousel", "Reel", "Story Series", "Static Post", "Broadcast Channel Prompt"],
    Facebook: ["Long Caption Post", "Album Review", "Community Question", "Short Video", "Live Q&A"],
    YouTube: ["Deep Dive", "Review", "Documentary", "Vlog", "Tutorial"],
    LinkedIn: ["Insight Post", "Framework Carousel", "Founder Lesson", "Market Observation", "Case Breakdown"],
    X: ["Thread", "Hot Take", "Quick Breakdown", "Data Point", "Live Reaction"],
  };
  const playbookNames = ["3 Mistakes People Make", "Before You Choose", "Myth vs Fact", "Worth It or Not", "Beginner Guide", "One Thing People Miss", "I Tried This So You Don’t Have To", "Best Option For", "What Changed My Mind", "Save This Checklist"];
  return {
    pillars: pillarsByDna.map((name, index) => ({
      name,
      ratio: ratios[index],
      why: `เหมาะกับ ${dna.thaiTitle} เพราะช่วยเล่า ${selected.join(" + ")} ในมุมที่ผู้ชม ${audienceMix[0].type} เข้าใจและจดจำได้`,
    })),
    formats: formatRankings[form.platform],
    playbook: playbookNames.map((name, index) => ({
      name,
      hook: `"${hookFormula(name, primaryCategory)}"`,
      structure: ["Problem", "Angle", templates[index % templates.length], "Takeaway"].join(" → "),
      cta: ctaFormula(index),
    })),
    calendar: Array.from({ length: 30 }, (_, index) => ({
      week: Math.min(4, Math.floor(index / 8) + 1),
      title: `${templates[index % templates.length]}: ${selected[index % selected.length]} ในมุม ${dna.thaiTitle}`,
      format: formatRankings[form.platform][index % formatRankings[form.platform].length],
      objective: ["Reach", "Engagement", "Authority", "Conversion", "Brand Fit"][index % 5],
    })),
    brand: {
      categories: persona.bestBrandFit,
      sponsorshipFormats: persona.collaborationStyle,
      collaborationStyle: persona.collaborationStyle.join(", "),
    },
    growth: {
      doMore: [`ทำซีรีส์ประจำเกี่ยวกับ ${primaryCategory}`, "ใช้ format ที่คนจำได้ซ้ำทุกสัปดาห์", "ทำคอนเทนต์ที่เซฟและส่งต่อได้"],
      stopDoing: ["กระจายหัวข้อกว้างเกินไป", "เริ่มโพสต์โดยไม่มี hook", "ขายของก่อนสร้างบริบท"],
      missed: ["แพ็กเกจ sponsorship แบบซีรีส์", "คอนเทนต์เปรียบเทียบที่ช่วยตัดสินใจ", "โพสต์ recap รายสัปดาห์"],
      quickWins: ["ตั้งชื่อซีรีส์ให้จำง่าย", "ทำ template ปก/หัวโพสต์ให้คงที่", "ปิดท้ายด้วยคำถามเดียวที่ตอบง่าย"],
      milestone: `ภายใน 30 วัน สร้าง content system 4 pillars ที่ทำซ้ำได้บน ${form.platform}`,
    },
  };
}

function hookFormula(name, category) {
  if (name.includes("Mistakes")) return `90% ของคนพลาดเรื่อง ${category} ตรงนี้`;
  if (name.includes("Before")) return `ก่อนเลือก ${category} ต้องดู 3 ข้อนี้`;
  if (name.includes("Myth")) return `เรื่อง ${category} ที่หลายคนเข้าใจผิด`;
  if (name.includes("Worth")) return `${category} แบบนี้คุ้มจริงไหม`;
  return `ถ้าคุณสนใจ ${category} โพสต์นี้ควรเซฟไว้`;
}

function ctaFormula(index) {
  return ["คุณเคยเจอแบบนี้ไหม", "เซฟไว้ก่อนตัดสินใจ", "คอมเมนต์ตัวเลือกของคุณ", "ส่งให้คนที่กำลังเลือกอยู่", "อยากให้เทียบอะไรต่อ"][index % 5];
}

function renderCategories() {
  $("categoryGrid").innerHTML = categories
    .map((category) => `<button class="category-chip ${state.selected.includes(category) ? "selected" : ""}" type="button" data-category="${category}">${category}</button>`)
    .join("");
  $("categoryCount").textContent = `เลือกแล้ว ${state.selected.length}/3 หมวดหมู่`;
  $("categoryHint").textContent = state.selected.length ? "พร้อมวิเคราะห์ Creator Vibes จากแพลตฟอร์มและหมวดหมู่ที่เลือก" : "ต้องเลือกอย่างน้อย 1 หมวดหมู่เพื่อวิเคราะห์";
}

function renderHeader(analysis) {
  const form = getFormData();
  const headerBackground = getDnaGradient(analysis.color_theme, "135deg");
  return `
    <div class="profile-head" style="--dna-primary:${analysis.color_theme.primary};--dna-secondary:${analysis.color_theme.secondary};--dna-gradient:${headerBackground}">
      <div class="avatar persona-avatar">${analysis.icon}</div>
      <div>
        <h2>${analysis.icon} ${analysis.creator_dna}</h2>
        <p>${analysis.thai_title}</p>
        <span class="code-pill">${analysis.code} · ${analysis.confidence}% confidence · ${form.platform}</span>
      </div>
    </div>`;
}

function renderResultSummary() {
  const a = state.analysis;
  if (!$("resultSummary")) return;
  if (state.isAnalyzing) {
    $("resultSummary").innerHTML = renderLoadingHero();
    return;
  }
  if (!a) {
    $("resultSummary").innerHTML = `
      <div class="pre-analysis-empty">
        <div class="empty-spark">✦</div>
        <h2>พร้อมค้นหา Creator Vibe ของคุณ?</h2>
        <p>เลือก Platform และหมวดหมู่คอนเทนต์<br>จากนั้นกด "วิเคราะห์ Creator Vibes"</p>
      </div>`;
    return;
  }
  $("resultSummary").innerHTML = `
    <div class="summary-orbit" style="--dna-gradient:${getDnaGradient(a.color_theme, "135deg")}">
      <span>${a.icon}</span>
    </div>
    <div>
      <p class="eyeline">Your Creator Vibe</p>
      <h2>${a.creator_dna}</h2>
      <p>${a.thai_title}</p>
      <div class="summary-chips">
        <span>${a.confidence}% Confidence</span>
        <span>${getFormData().platform}</span>
        ${a.selected_categories.map((category) => `<span>${category}</span>`).join("")}
      </div>
    </div>`;
}

function renderLoadingHero() {
  const progress = Math.min(100, Math.max(0, Math.round(state.loadingProgress)));
  const message = state.loadingComplete ? "พร้อมแล้วสำหรับ Creator Vibes ของคุณ" : loadingMessages[Math.min(state.loadingStep, loadingMessages.length - 1)];
  return `
    <div class="analysis-loading ${state.loadingComplete ? "complete" : ""}">
      <div class="loading-glow"></div>
      <div class="loading-logo">B</div>
      <div class="loading-copy">
        <p class="eyeline">BUDDY REVIEW</p>
        <h2>${state.loadingComplete ? "✨ วิเคราะห์เสร็จแล้ว" : "กำลังวิเคราะห์ Creator Vibes ของคุณ..."}</h2>
        <p>${message}</p>
      </div>
      <div class="loading-progress-wrap">
        <div class="loading-progress-meta">
          <span>${loadingMessages[state.loadingMessage]}</span>
          <strong>${progress}%</strong>
        </div>
        <div class="loading-progress"><i style="width:${progress}%"></i></div>
      </div>
      <div class="loading-steps">
        ${loadingSteps.map((step, index) => `
          <div class="loading-step ${index < state.loadingStep ? "done" : ""} ${index === state.loadingStep ? "active" : ""}" style="--delay:${index * 80}ms">
            <span>${index < state.loadingStep ? "✓" : "○"}</span>
            <p>${step}</p>
          </div>`).join("")}
      </div>
    </div>`;
}

function renderLoadingSkeleton() {
  return `
    <div class="loading-skeleton-stage">
      <div class="skeleton-card skeleton-vibe">
        <div class="skeleton-orb"></div>
        <div class="skeleton-lines">
          <i></i><i></i><i></i>
        </div>
      </div>
      <div class="skeleton-grid">
        <div class="skeleton-card skeleton-chart"><div></div><i></i><i></i><i></i></div>
        <div class="skeleton-card"><i></i><i></i><i></i><i></i></div>
        <div class="skeleton-card"><i></i><i></i><i></i></div>
        <div class="skeleton-card"><i></i><i></i><i></i><i></i></div>
      </div>
    </div>`;
}

function renderTab() {
  const a = state.analysis;
  if (!a || state.isAnalyzing) {
    $("tabContent").innerHTML = "";
    return;
  }
  document.documentElement.style.setProperty("--dna-primary", a.color_theme.primary);
  document.documentElement.style.setProperty("--dna-secondary", a.color_theme.secondary);
  document.documentElement.style.setProperty("--dna-gradient", getDnaGradient(a.color_theme, "135deg"));
  const tab = state.activeTab;
  let html = renderHeader(a);
  if (!state.isAuthenticated && tab !== "overview") {
    html += renderLockedVibesTab(tab);
    $("tabContent").innerHTML = html;
    return;
  }
  if (tab === "audience") {
    html += `<div class="content-stack">
      <div class="audience-dashboard">
        <div class="info-block main-audience-card">
          <h3>Main Audience Type</h3>
          <strong>${a.audience_tab.main_audience_type}</strong>
          <p>${a.audience_tab.audience_mix[0].reason}</p>
        </div>
        <div class="info-block chart-card">
          <h3>Audience Mix</h3>
          ${renderAudiencePie(a.audience_tab.audience_mix)}
        </div>
      </div>
      <div class="info-block"><h3>Engagement by Category</h3>${renderCategoryEngagementComparison(a)}</div>
      <div class="info-block"><h3>Audience Type Percentages</h3>${renderAudienceLegend(a.audience_tab.audience_mix)}</div>
      <div class="info-block"><h3>คนกลุ่มนี้ติดตามเพราะอะไร</h3>${bullet(a.audience_tab.why_they_follow)}</div>
      <div class="info-block"><h3>สิ่งที่ผู้ติดตามคาดหวัง</h3>${bullet(a.audience_tab.expected_content)}</div>
      <div class="info-block"><h3>คอนเทนต์ที่ทำให้ Engage</h3>${bullet(a.audience_tab.high_engagement_content)}</div>
      <div class="info-block"><h3>Brand Category ที่เหมาะ</h3>${bullet(a.audience_tab.brand_fit)}</div>
    </div>`;
  }
  if (tab === "overview") {
    const o = a.overview_tab;
    html += `<div class="content-stack">
      <div class="info-block"><h3>หมวดหมู่ที่เลือก</h3><div class="tag-list">${a.selected_categories.map((c) => `<span class="tag">${c}</span>`).join("")}</div></div>
      <div class="info-block"><h3>All Vibe Scores</h3>${renderVibeScores(a.vibe_scores)}</div>
      ${!state.isAuthenticated ? renderLockedOverviewPreview() : `
      ${["personality:บุคลิก", "creator_type:สายไหน", "not_your_style:ไม่ใช่สายไหน", "vibe:Vibe", "communication_style:วิธีพูด", "tone_of_voice:น้ำเสียง", "channel_identity:ตัวตนของช่อง"].map((pair) => {
        const [key, label] = pair.split(":");
        return `<div class="info-block"><h3>${label}</h3><p>${o[key]}</p></div>`;
      }).join("")}
      <div class="info-block"><h3>รูปแบบคอนเทนต์</h3>${bullet(o.content_formats)}</div>
      <div class="info-block"><h3>ลักษณะคอนเทนต์</h3>${bullet(o.content_characteristics)}</div>
      <div class="info-block"><h3>จุดแข็ง</h3>${bullet(o.strengths)}</div>
      <div class="info-block"><h3>จุดที่พัฒนาได้อีก</h3>${bullet(o.growth_areas)}</div>
      <div class="info-block"><h3>Tips from Buddy Review</h3>${bullet(o.tips_from_buddy_review)}</div>`}
    </div>`;
  }
  if (tab === "comparison") {
    html += renderComparisonTab(a);
  }
  if (tab === "share") {
    html += `<div class="share-tab-layout">
      <div class="share-toolbar">
        <div>
          <p class="eyeline">9:16 Story Card</p>
          <h2>Vibes</h2>
        </div>
        <button class="ghost-button compact" id="downloadCard" type="button">ดาวน์โหลด</button>
      </div>
      <div class="story-card" id="storyCard"></div>
      <div class="content-stack">
        <div class="info-block"><h3>คุณคือ</h3><p>${a.share_card.description}</p></div>
        <div class="info-block"><h3>Superpower</h3><p>${a.share_card.superpower}</p></div>
      </div>
    </div>`;
  }
  if (tab === "contentLab") {
    html += `<div class="content-stack">
      <div class="info-block lab-intro"><p class="eyeline">Content Lab</p><h3>Creator Strategist Report</h3><p>Content Lab ถูกแยกไว้ใน tab นี้เท่านั้น เพื่อให้ Creator Vibes, Audience และ Comparison อ่านเป็นผลลัพธ์ของตัวตน ไม่ปนกับ playbook การทำคอนเทนต์</p></div>
      <div class="content-lab-report" id="contentLab"></div>
    </div>`;
  }
  $("tabContent").innerHTML = html;
  if (tab === "share") renderStoryCard();
  if (tab === "contentLab") renderContentLab();
}

function renderVibeScores(scores) {
  const labels = {
    explorer: "Explorer",
    expert: "Expert",
    trendsetter: "Trendsetter",
    builder: "Builder",
    entertainer: "Entertainer",
    nurturer: "Nurturer",
    specialist: "Specialist",
    creator_chameleon: "Creator Chameleon",
  };
  const maxScore = Math.max(...Object.values(scores), 1);
  return `<div class="vibe-score-list">${Object.entries(scores).map(([vibe, score]) => `
    <div class="vibe-score-row">
      <span>${labels[vibe]}</span>
      <div class="audience-bar"><i style="width:${(score / maxScore) * 100}%"></i></div>
      <strong>${score}</strong>
    </div>`).join("")}</div>`;
}

function renderLockedOverviewPreview() {
  return `<div class="vibes-locked-preview">
    <div class="locked-blur-grid">
      <div class="info-block"><h3>บุคลิก</h3><p>Creator identity, tone และ channel positioning</p></div>
      <div class="info-block"><h3>รูปแบบคอนเทนต์</h3><p>Format, hooks, strengths และ growth areas</p></div>
      <div class="info-block"><h3>Tips from Buddy Review</h3><p>คำแนะนำที่เชื่อมกับ profile, posting, audience และ campaign fit</p></div>
    </div>
    <div class="locked-overlay">
      <div class="locked-overlay-card">
        <h3>ล็อคอินเพื่อปลดล็อก</h3>
        <p>เชื่อม Facebook หรือ TikTok เพื่อดู insight เต็ม, engagement จริง และคำแนะนำที่ใช้รับงานได้แม่นขึ้น</p>
        <div>
          <button class="primary-button compact unlock-action" data-vibes-login type="button">Login</button>
          <button class="secondary-button compact unlock-action" data-vibes-register type="button">Register</button>
        </div>
      </div>
    </div>
  </div>`;
}

function renderLockedVibesTab(tab) {
  const labels = {
    audience: "ผู้ติดตาม",
    comparison: "เปรียบเทียบ",
    share: "Vibes",
    contentLab: "Content Lab",
  };
  const copy = tab === "share"
    ? "ล็อคอินเพื่อสร้างและกดแชร์ Vibes card พร้อมบันทึกไว้ในโปรไฟล์ของคุณ"
    : "ล็อคอินเพื่อปลดล็อกข้อมูลเต็มจาก profile, posting, engagement และ campaign signal";
  return `<div class="content-stack">
    <section class="vibes-tab-gate">
      <p class="eyeline">Members only</p>
      <h2>${labels[tab] || "Creator Vibes"} ถูกล็อกไว้</h2>
      <p>${copy}</p>
      <div class="member-gate-actions">
        <button class="primary-button compact" data-vibes-login type="button">Login</button>
        <button class="secondary-button compact" data-vibes-register type="button">Register</button>
      </div>
    </section>
  </div>`;
}

function renderComparisonTab(analysis) {
  const c = analysis.comparison_tab;
  if (c.mode === "chameleon") {
    return `<div class="content-stack comparison-report">
      <div class="info-block"><h3>CREATOR ECOSYSTEM POSITIONING</h3><p>Vibe นี้เป็น Hybrid Creator จึงไม่ใช้โครงสร้าง Similar / Rival / Opposite แบบ Vibe เดี่ยว ระบบจะแสดง Vibe Mix เพื่อบอกว่าช่องนี้ยืนอยู่ระหว่างโลกคอนเทนต์ใดบ้าง</p></div>
      <div class="info-block"><h3>VIBE MIX</h3>${renderVibeMix(c.vibe_mix)}</div>
      <div class="info-block"><h3>Why Chameleon</h3><p>${c.why}</p></div>
      <div class="comparison-grid">
        <div class="info-block"><h3>Strongest vibe</h3><p>${c.strongest_vibe?.vibe || "-"}</p></div>
        <div class="info-block"><h3>Secondary vibe</h3><p>${c.secondary_vibe?.vibe || "-"}</p></div>
        <div class="info-block"><h3>Hidden vibe</h3><p>${c.hidden_vibe?.vibe || "-"}</p></div>
      </div>
      <div class="comparison-grid">
        <div class="info-block"><h3>Biggest opportunity</h3><p>${c.opportunity}</p></div>
        <div class="info-block"><h3>Biggest risk</h3><p>${c.risk}</p></div>
      </div>
    </div>`;
  }

  return `<div class="content-stack comparison-report">
    <div class="info-block"><h3>CREATOR ECOSYSTEM POSITIONING</h3><p>Where do I sit in the creator ecosystem? รายงานนี้เทียบตำแหน่งของ ${analysis.creator_dna} กับ Vibe ที่ใกล้ แข่ง และตรงข้ามที่สุดในมุม Audience, Brand Opportunity และ Creator Strategy</p></div>
    <div class="info-block"><h3>1. YOUR CLOSEST CREATOR TYPE</h3>
      <p><strong>Similar Vibe:</strong> ${c.similar_vibe}</p>
      <p><strong>Why they are similar:</strong> ${c.closest.why}</p>
      <p><strong>Key difference:</strong> ${c.closest.difference}</p>
    </div>
    <div class="info-block"><h3>2. YOUR BIGGEST CREATOR COMPETITOR</h3>
      <p><strong>Rival Vibe:</strong> ${c.rival_vibe}</p>
      <p><strong>Why you compete:</strong> ${c.competitor.why}</p>
      <p><strong>Brand budget overlap:</strong> ${c.competitor.budgetOverlap}</p>
      <p><strong>Audience overlap:</strong> ${c.competitor.audienceOverlap}</p>
    </div>
    <div class="info-block"><h3>3. YOUR OPPOSITE TYPE</h3>
      <p><strong>Opposite Vibe:</strong> ${c.opposite_vibe}</p>
      <p><strong>Why you are different:</strong> ${c.opposite.why}</p>
      <p><strong>Different audience expectation:</strong> ${c.opposite.audienceExpectation}</p>
      <p><strong>Different content strategy:</strong> ${c.opposite.contentStrategy}</p>
    </div>
    <div class="comparison-grid">
      <div class="info-block"><h3>4. AUDIENCE DIFFERENCE</h3>
        <p><strong>Your audience comes for:</strong></p>${bullet(c.audienceDifference.yours)}
        <p><strong>Their audience comes for:</strong></p>${bullet(c.audienceDifference.theirs)}
      </div>
      <div class="info-block"><h3>5. BRAND COMPETITION</h3>
        <p><strong>Brands that naturally fit you:</strong></p>${bullet(c.brandCompetition.yours)}
        <p><strong>Brands that naturally fit them:</strong></p>${bullet(c.brandCompetition.theirs)}
        <p><strong>Where budgets overlap:</strong> ${c.brandCompetition.overlap}</p>
      </div>
    </div>
    <div class="comparison-grid">
      <div class="info-block"><h3>6. YOUR ADVANTAGE</h3><p>${c.advantage}</p></div>
      <div class="info-block"><h3>7. YOUR BIGGEST BLIND SPOT</h3><p>${c.blindSpot}</p></div>
    </div>
  </div>`;
}

function renderVibeMix(mix) {
  return `<div class="vibe-score-list">${mix.map((item) => `
    <div class="vibe-score-row">
      <span>${item.vibe}</span>
      <div class="audience-bar"><i style="width:${item.percentage}%"></i></div>
      <strong>${item.percentage}%</strong>
    </div>`).join("")}</div>`;
}

function renderCategoryEngagementComparison(analysis) {
  const categoryBenchmarks = {
    "ความงามและสุขภาพ": 4.2,
    แฟชั่น: 3.8,
    Lifestyle: 3.4,
    Technology: 2.9,
    "อาหารและเครื่องดื่ม": 3.6,
    ท่องเที่ยว: 3.7,
    บันเทิง: 4.6,
    "การเงินและธุรกิจ": 2.4,
    กีฬา: 3.1,
    "บ้านและสวน": 2.8,
  };
  const categoryRows = analysis.selected_categories.map((category, index) => {
    const benchmark = categoryBenchmarks[category] || 3.2;
    const categoryScores = Object.values(categoryScoringMatrix[category] || {});
    const categoryFit = categoryScores.length ? Math.max(...categoryScores) : 48;
    const latestPostErs = Array.from({ length: 5 }, (_, postIndex) => {
      const variation = ((categoryFit % 17) - 8) * 0.05 + (4 - postIndex) * 0.12 - index * 0.08;
      return Math.max(0.8, +(benchmark + variation).toFixed(1));
    });
    const yourEr = +(latestPostErs.reduce((sum, value) => sum + value, 0) / latestPostErs.length).toFixed(1);
    const percentile = Math.max(8, Math.min(96, Math.round(50 + ((yourEr - benchmark) / benchmark) * 42)));
    return {
      category,
      benchmark,
      yourEr,
      percentile,
      latestPostErs,
      rankLabel: percentile >= 80 ? "Top tier" : percentile >= 60 ? "Above average" : percentile >= 40 ? "Average range" : "Needs lift",
    };
  }).sort((a, b) => b.percentile - a.percentile);
  return `<div class="category-engagement-list">
    ${categoryRows.map((item, index) => `
      <article>
        <div>
          <strong>#${index + 1} ${item.category}</strong>
          <span>${item.rankLabel}</span>
        </div>
        <div class="category-er-bar">
          <i style="width:${item.percentile}%"></i>
          <b>Avg ER ${item.benchmark}%</b>
          <strong>Your ER ${item.yourEr}%</strong>
        </div>
        <p>คำนวณจาก ER เฉลี่ย 5 โพสต์ล่าสุด: ${item.latestPostErs.map((value) => `${value}%`).join(", ")} · คุณอยู่ในระดับ ${item.percentile}% ของหมวดนี้</p>
      </article>`).join("")}
    <p class="helper">ถ้าล็อกอิน Facebook/TikTok ระบบจะใช้ข้อมูลจริงจากโพสต์, reach, comments, saves, shares และ campaign history แทนค่าประเมิน</p>
  </div>`;
}

function renderAudiencePie(mix) {
  const colors = ["#7c3cff", "#ff3cac", "#00d4ff", "#ffb800", "#00a86b"];
  let start = 0;
  const segments = mix.map((item, index) => {
    const end = start + item.percentage;
    const segment = `${colors[index % colors.length]} ${start}% ${end}%`;
    start = end;
    return segment;
  }).join(", ");
  return `<div class="pie-wrap">
    <div class="donut-chart" style="background: conic-gradient(${segments})">
      <div><strong>${mix[0].percentage}%</strong><span>${mix[0].type}</span></div>
    </div>
    <div class="pie-labels">
      ${mix.map((item, index) => `<span style="--dot:${colors[index % colors.length]}"><em>${item.type}</em><strong>${item.percentage}%</strong></span>`).join("")}
    </div>
  </div>`;
}

function renderAudienceLegend(mix) {
  return `<div class="audience-list">${mix.map((item) => `
    <div class="audience-row">
      <span>${item.type}</span>
      <div class="audience-bar"><i style="width:${item.percentage}%"></i></div>
      <strong>${item.percentage}%</strong>
      <p>${item.reason}</p>
    </div>`).join("")}</div>`;
}

function renderStoryCard() {
  const a = state.analysis;
  const storyCard = $("storyCard");
  if (!storyCard) return;
  storyCard.style.setProperty("--dna-gradient", getDnaGradient(a.color_theme, "135deg"));
  storyCard.innerHTML = `
    <div class="story-inner">
      <div class="story-float story-float-one"></div>
      <div class="story-float story-float-two"></div>
      <div class="story-topline">
        <div>
          <div class="story-logo">BUDDY REVIEW</div>
          <p class="story-title">${a.share_card.headline}</p>
        </div>
        <span class="story-confidence">${a.confidence}%</span>
      </div>
      <div class="story-dna glass-panel">
        <div class="dna-icon">${a.icon}</div>
        <p class="story-kicker">THE</p>
        <h3>${a.share_card.dna_name.replace("The ", "").toUpperCase()}</h3>
        <strong>${a.share_card.thai_title}</strong>
      </div>
      <div class="story-divider"></div>
      <div class="story-quote glass-panel">"${a.share_card.identity_line}"</div>
      <div class="story-traits glass-panel">
        <strong>คุณคือ</strong>
        <div>${a.share_card.description}</div>
      </div>
      <div class="story-superpower glass-panel">
        <strong>SUPERPOWER</strong>
        <span>${a.share_card.superpower}</span>
      </div>
      <div class="story-categories glass-panel">
        <strong>🏷 Categories</strong>
        <div class="story-chip-row">${a.selected_categories.map((category) => `<span>${category}</span>`).join("")}</div>
      </div>
      <div class="story-hash">#BuddyReview<br>#CreatorVibes</div>
    </div>`;
}

function getDnaGradient(colorTheme, angle = "135deg") {
  const stops = colorTheme.gradient?.length ? colorTheme.gradient : [colorTheme.primary, colorTheme.secondary];
  return `linear-gradient(${angle}, ${stops.join(", ")})`;
}

function renderContentLab() {
  const lab = state.analysis.content_lab;
  $("contentLab").innerHTML = `
    <section class="lab-section">
      <h3>1. Recommended Content Pillars</h3>
      <div class="pillar-grid">${lab.pillars.map((pillar) => `
        <article class="idea-card">
          <p class="meta">${pillar.ratio}%</p>
          <h3>${pillar.name}</h3>
          <p>${pillar.why}</p>
        </article>`).join("")}</div>
    </section>
    <section class="lab-section">
      <h3>2. Best Performing Formats</h3>
      <div class="rank-list">${lab.formats.map((format, index) => `<div><strong>#${index + 1}</strong><span>${format}</span></div>`).join("")}</div>
    </section>
    <section class="lab-section">
      <h3>3. Content Playbook</h3>
      <div class="playbook-grid">${lab.playbook.map((item) => `
        <article class="idea-card">
          <h3>${item.name}</h3>
          <p><strong>Hook Formula:</strong> ${item.hook}</p>
          <p><strong>Content Structure:</strong> ${item.structure}</p>
          <p><strong>CTA Formula:</strong> ${item.cta}</p>
        </article>`).join("")}</div>
    </section>
    <section class="lab-section">
      <h3>4. Next 30 Content Ideas</h3>
      ${[1, 2, 3, 4].map((week) => `
        <div class="week-block">
          <h4>Week ${week}</h4>
          <div class="calendar-list">${lab.calendar.filter((item) => item.week === week).map((item) => `
            <div>
              <strong>${item.title}</strong>
              <span>${item.format}</span>
              <em>${item.objective}</em>
            </div>`).join("")}</div>
        </div>`).join("")}
    </section>
    <section class="lab-section">
      <h3>5. Brand Opportunities</h3>
      <div class="tag-list">${lab.brand.categories.map((category) => `<span class="tag">${category}</span>`).join("")}</div>
      <div class="lab-split">
        <div class="info-block"><h3>Most natural sponsorship formats</h3>${bullet(lab.brand.sponsorshipFormats)}</div>
        <div class="info-block"><h3>Best collaboration style</h3><p>${lab.brand.collaborationStyle}</p></div>
      </div>
    </section>
    <section class="lab-section">
      <h3>6. Growth Recommendations</h3>
      <div class="lab-split">
        <div class="info-block"><h3>What to do more</h3>${bullet(lab.growth.doMore)}</div>
        <div class="info-block"><h3>What to stop doing</h3>${bullet(lab.growth.stopDoing)}</div>
        <div class="info-block"><h3>Missed opportunities</h3>${bullet(lab.growth.missed)}</div>
        <div class="info-block"><h3>Quick wins</h3>${bullet(lab.growth.quickWins)}</div>
        <div class="info-block"><h3>Next milestone</h3><p>${lab.growth.milestone}</p></div>
      </div>
    </section>`;
}

function renderAll() {
  renderCategories();
  renderMessengerQuickReplies();
  renderResultSummary();
  updateResultsVisibility();
  if (state.analysis && !state.isAnalyzing) renderTab();
  else $("tabContent").innerHTML = "";
  if (!$("buddyProfilePage").classList.contains("hidden")) renderBuddyProfile(false);
}

function updateResultsVisibility() {
  const hasResults = Boolean(state.analysis && !state.isAnalyzing);
  document.querySelector(".tab-stage")?.classList.toggle("hidden", !hasResults);
}

function clearLoadingTimers() {
  state.loadingTimers.forEach((timer) => clearInterval(timer));
  state.loadingTimers = [];
}

function startAnalysisRun() {
  clearLoadingTimers();
  state.isAnalyzing = true;
  state.analysis = null;
  state.loadingProgress = 0;
  state.loadingStep = 0;
  state.loadingMessage = 0;
  state.loadingComplete = false;
  setAnalyzeButtonState(true);
  updateResultsVisibility();
  renderResultSummary();

  const duration = 1200;
  const startedAt = Date.now();
  const progressTimer = setInterval(() => {
    const elapsed = Date.now() - startedAt;
    const ratio = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - ratio, 2);
    state.loadingProgress = Math.min(99, eased * 100);
    state.loadingStep = Math.min(loadingSteps.length - 1, Math.floor(ratio * loadingSteps.length));
    state.loadingMessage = state.loadingStep;
    renderResultSummary();
  }, 120);
  state.loadingTimers.push(progressTimer);

  setTimeout(() => {
    clearLoadingTimers();
    state.loadingProgress = 100;
    state.loadingStep = loadingSteps.length;
    state.loadingComplete = true;
    state.analysis = createAnalysis();
    state.activeTab = "overview";
    storeLatestAnalysis();
    renderResultSummary();

    setTimeout(() => {
      state.isAnalyzing = false;
      state.loadingComplete = false;
      setAnalyzeButtonState(false);
      updateResultsVisibility();
      renderResultSummary();
      renderTab();
      if (!state.isAuthenticated && !state.authPromptSeen) {
        state.authPromptSeen = true;
        window.setTimeout(() => openAuthModal("category"), 260);
      }
      document.querySelector(".tab-stage")?.classList.add("result-reveal");
      setTimeout(() => {
        document.querySelector(".tab-stage")?.classList.remove("result-reveal");
      }, 360);
    }, 220);
  }, duration);
}

function setAnalyzeButtonState(isLoading) {
  const button = document.querySelector("#creatorForm .primary-button");
  if (!button) return;
  button.disabled = isLoading;
  button.textContent = isLoading ? "กำลังวิเคราะห์..." : "วิเคราะห์ Creator Vibes";
}

function storeLatestAnalysis() {
  try {
    localStorage.setItem("buddyReviewLatestCreatorVibes", JSON.stringify({
      platform: getFormData().platform,
      selectedCategories: [...state.selected],
      analysis: state.analysis,
      savedAt: new Date().toISOString(),
    }));
  } catch {
    // Local storage can be unavailable in some file/browser privacy modes.
  }
}

function renderJobsPage() {
  if (!$("jobsContent")) return;
  if (completeMission("view-fit-job")) renderCampaignProgressSections();
  renderCampaignProgressCard();
  document.querySelectorAll("[data-jobs-tab]").forEach((button) => button.classList.toggle("active", button.dataset.jobsTab === state.jobsTab));
  if (state.jobsTab === "discover") renderJobDiscover();
  if (state.jobsTab === "myJobs") renderMyMarketplaceJobs();
  if (state.jobsTab === "workProfile") renderWorkProfile();
}

function completeMission(id) {
  const mission = userProgression.missions.find((item) => item.id === id && item.status !== "completed");
  if (!mission) return false;
  mission.status = "completed";
  mission.progress = mission.target ?? 1;
  userProgression.creatorXP += mission.rewardXP || 0;
  userProgression.rewardPoints += mission.rewardXP || 0;
  return true;
}

function getCreatorProfileSummary() {
  const profile = getBuddyProfileData();
  const tier = getCurrentTier(userProgression.creatorXP);
  const nextTier = creatorTiers.find((item) => item.level === tier.level + 1);
  const connectedCount = connectedChannels.filter((channel) => channel.connected).length;
  const missionDone = userProgression.missions.filter((mission) => mission.status === "completed").length;
  return {
    name: profile.displayName || profile.creatorName || "mixjp",
    username: profile.socialLinks || "@mixjp",
    avatarText: (profile.displayName || profile.creatorName || "mixjp").slice(0, 1).toUpperCase(),
    tier,
    nextTier,
    connectedCount,
    connectedTotal: connectedChannels.length,
    missionDone,
    missionTotal: userProgression.missions.length,
    profile,
    analysis: state.analysis,
  };
}

function renderCampaignProgressCard() {
  if (!$("campaignProgressCard")) return;
  $("campaignProgressCard").innerHTML = renderRewardWallet("campaign");
}

function renderCampaignProgressSections() {
  renderCampaignProgressCard();
  renderProfileProgressCard();
  renderInfluencerMenu();
  renderHomePage();
  renderNotificationState();
}

function renderHomePage() {
  if (!$("homeConsole")) return;
  const summary = getCreatorProfileSummary();
  const profile = getBuddyProfileData();
  const { tier, nextTier } = summary;
  const progress = nextTier ? Math.min(100, Math.round((userProgression.creatorXP / nextTier.min) * 100)) : 100;
  const vibeTitle = summary.analysis ? `${summary.analysis.icon} ${summary.analysis.creator_dna}` : "ยังไม่ได้วิเคราะห์ Creator Vibes";
  const vibeCopy = summary.analysis ? summary.analysis.share_card.identity_line : "เริ่มวิเคราะห์เพื่อให้ Home จำ vibe ล่าสุดของคุณ";
  $("homeConsole").innerHTML = `
    <section class="home-hero-panel">
      <div class="home-profile-mini">
        <span class="mini-avatar large">${summary.avatarText}</span>
        <div>
          <p class="eyeline">Creator Home</p>
          <h1>${summary.name}</h1>
          <p>${profile.bio || "Portfolio พร้อมรับงาน เริ่มจาก profile, vibe และ campaign ที่เหมาะกับคุณ"}</p>
        </div>
      </div>
      ${renderRewardWallet("home")}
    </section>
    <section class="home-grid">
      <article class="home-card">
        <div class="section-title">
          <div><p class="eyeline">Notification</p><h2>งานใหม่</h2></div>
          <span class="status-pill">${state.notificationsRead ? "อ่านแล้ว" : `${creatorNotifications.length} ใหม่`}</span>
        </div>
        <div class="home-notification-list">
          ${creatorNotifications.slice(0, 2).map((item) => `<button data-home-notification="${item.type}" type="button"><b>${item.title}</b><span>${item.detail}</span></button>`).join("")}
        </div>
      </article>
      <article class="home-card">
        <div class="section-title">
          <div><p class="eyeline">Your Creator Vibe</p><h2>${vibeTitle}</h2></div>
        </div>
        <p>${vibeCopy}</p>
        <button class="secondary-button compact" data-home-route="creator-vibes" type="button">${summary.analysis ? "ดู Vibe ล่าสุด" : "วิเคราะห์ Vibes"}</button>
      </article>
      <article class="home-card">
        <div class="section-title">
          <div><p class="eyeline">Profile Progress</p><h2>${tier.name} · Level ${tier.level}</h2></div>
          <strong>${progress}%</strong>
        </div>
        <div class="tier-progress large"><i style="width:${progress}%"></i></div>
        <div class="profile-summary-pills">
          <span>${userProgression.profileStrength}% Strength</span>
          <span>${summary.missionDone}/${summary.missionTotal} Mission</span>
          <span>${userProgression.creatorXP.toLocaleString()} XP</span>
        </div>
        <button class="primary-button compact" data-home-route="mission" type="button">เปิด Mission</button>
      </article>
      <article class="home-card">
        <div class="section-title">
          <div><p class="eyeline">Portfolio Snapshot</p><h2>${profile.displayName || profile.creatorName || summary.name}</h2></div>
        </div>
        <p>${profile.contactEmail || "เพิ่มอีเมลติดต่อเพื่อให้แบรนด์คุยงานได้ทันที"}</p>
        <button class="secondary-button compact" data-home-route="portfolio" type="button">แก้ Portfolio</button>
      </article>
    </section>`;
}

function renderNotificationState() {
  const unread = !state.isAuthenticated || state.notificationsRead ? 0 : creatorNotifications.length;
  if ($("notificationCount")) {
    $("notificationCount").textContent = unread;
    $("notificationCount").classList.toggle("hidden", unread === 0);
  }
  $("notificationButton")?.classList.toggle("locked", !state.isAuthenticated);
  if (!$("notificationDropdown")) return;
  if (!state.isAuthenticated) {
    $("notificationDropdown").innerHTML = `
      <div class="notification-head">
        <div><p class="eyeline">Members only</p><h3>Login เพื่อดู Updates</h3></div>
      </div>
      <div class="notification-list">
        <button data-notification-login type="button"><b>Login / Register</b><span>รับ campaign และ progress update หลังเข้าสู่ระบบ</span></button>
      </div>`;
    return;
  }
  $("notificationDropdown").innerHTML = `
    <div class="notification-head">
      <div><p class="eyeline">Updates</p><h3>Campaign & Progress</h3></div>
    </div>
    <div class="notification-list">
      ${creatorNotifications.map((item) => `
        <button class="${state.notificationsRead ? "read" : ""}" data-notification-route="${item.type === "campaign" ? "campaign-hub" : "mission"}" type="button">
          <b>${item.title}</b>
          <span>${item.detail}</span>
        </button>`).join("")}
    </div>`;
}

function syncAuthNavigation() {
  $("signupButton")?.classList.toggle("hidden", state.isAuthenticated);
  $("loginButton")?.classList.toggle("hidden", state.isAuthenticated);
  $("influencerMenuButton")?.classList.toggle("hidden", !state.isAuthenticated);
  if (state.isAuthenticated) {
    const summary = getCreatorProfileSummary();
    if ($("navProfileAvatar")) $("navProfileAvatar").textContent = summary.avatarText;
  }
}

function openAuthModal(context = "login") {
  const modal = $("authModal");
  if (!modal) return;
  const title = modal.querySelector("h2");
  const copy = modal.querySelector(".auth-card > p:not(.eyeline)");
  state.authMode = context === "signup" || context === "register" ? "register" : "login";
  if (context === "category") {
    state.authMode = "login";
    title.textContent = "ล็อกอินเพื่อวิเคราะห์ Creator Vibes ได้แม่นขึ้น";
    copy.textContent = "ถ้าเชื่อม Facebook หรือ TikTok ระบบจะดึง engagement, posting history และ audience signal มาช่วยเทียบ category ได้ครบกว่า แต่ข้ามได้";
  } else if (state.authMode === "register") {
    title.textContent = "สมัครสมาชิก Buddy Review";
    copy.textContent = "สร้างบัญชีเพื่อเก็บ Creator Vibes, Portfolio, Mission, Campaign และ Reward ไว้ในโปรไฟล์เดียว";
  } else {
    title.textContent = "เข้าสู่ระบบ Buddy Review";
    copy.textContent = "ล็อกอินเพื่อดึงข้อมูล engagement, posting history, campaign fit และแนะนำงานที่เหมาะกับคุณได้แม่นขึ้น";
  }
  renderAuthEmailForm();
  modal.classList.remove("hidden");
}

function closeAuthModal() {
  $("authModal")?.classList.add("hidden");
}

function renderAuthEmailForm() {
  const form = $("authEmailForm");
  if (!form) return;
  const isRegister = state.authMode === "register";
  form.innerHTML = `
    <label><span>Email</span><input type="email" data-auth-email placeholder="you@example.com" required /></label>
    <label><span>Password</span><input type="password" data-auth-password placeholder="Password" required /></label>
    ${isRegister ? `<label><span>Confirm Password</span><input type="password" data-auth-confirm-password placeholder="Confirm password" required /></label>` : ""}
    <button class="primary-button compact" type="submit">${isRegister ? "Register" : "Login"}</button>
    <button class="auth-mode-switch" data-auth-switch="${isRegister ? "login" : "register"}" type="button">${isRegister ? "มีบัญชีแล้ว? Login" : "ยังไม่มีบัญชี? Register"}</button>`;
}

function renderMemberGate(targetRoute = "mission") {
  const labels = {
    home: "Home",
    mission: "Mission",
    portfolio: "Portfolio",
    "campaign-hub": "Campaign Hub",
  };
  const label = labels[targetRoute] || "Buddy Review";
  return `
    <section class="member-gate">
      <div>
        <p class="eyeline">Members only</p>
        <h2>Login เพื่อเข้า ${label}</h2>
        <p>หน้านี้ใช้ข้อมูลสมาชิกเพื่อ sync profile, campaign, reward, mission และ insight จากทุกหน้าให้คำนวณได้ถูกต้อง</p>
        <div class="member-gate-actions">
          <button class="primary-button compact" data-gate-vibes type="button">กลับไป Creator Vibes</button>
          <button class="secondary-button compact" data-gate-login type="button">Login</button>
          <button class="secondary-button compact" data-gate-register type="button">Register</button>
        </div>
      </div>
    </section>`;
}

function showMemberGate(route, options = {}) {
  const homePage = $("homePage");
  const creatorPage = $("creatorVibesPage");
  const jobsPage = $("jobsPage");
  const profilePage = $("buddyProfilePage");
  const progressPage = $("creatorProgressPage");
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.route === route));
  state.pendingAuthRoute = route;
  homePage.classList.remove("hidden");
  creatorPage.classList.add("hidden");
  jobsPage.classList.add("hidden");
  profilePage.classList.add("hidden");
  progressPage.classList.add("hidden");
  if ($("homeConsole")) $("homeConsole").innerHTML = renderMemberGate(route);
  if (!options.skipHistory) safePushState({ route }, route === "home" ? "/" : `/${route}`);
}

function completeAuth(provider = "Facebook", routeAfterAuth = "") {
  state.isAuthenticated = true;
  state.authProvider = provider;
  state.authPromptSeen = true;
  localStorage.setItem("buddyReviewAuth", "true");
  localStorage.setItem("buddyReviewAuthProvider", provider);
  closeAuthModal();
  syncAuthNavigation();
  renderNotificationState();
  showAutosave(`เชื่อมต่อ ${provider} แล้ว`);
  const targetRoute = routeAfterAuth || state.pendingAuthRoute || getRouteFromLocation();
  state.pendingAuthRoute = "";
  if (targetRoute) {
    setRoute(targetRoute);
    return;
  }
  refreshCurrentAuthenticatedView();
}

function getRouteFromLocation() {
  const path = getAppPathname();
  const hash = window.location.hash;
  if (path === "/mission" || hash === "#/mission" || path === "/creator-progress" || hash === "#/creator-progress") return "mission";
  if (path === "/portfolio" || hash === "#/portfolio" || path === "/buddy-profile" || hash === "#/buddy-profile") return "portfolio";
  if (path === "/campaign-hub" || hash === "#/campaign-hub" || path === "/jobs" || hash === "#/jobs") return "campaign-hub";
  if (path === "/" || hash === "#/" || (!hash && path.endsWith("/index.html"))) return state.isAuthenticated ? "home" : "creator-vibes";
  return "";
}

function refreshCurrentAuthenticatedView() {
  if (!$("creatorVibesPage")?.classList.contains("hidden")) {
    if (state.analysis && !state.isAnalyzing) renderTab();
    renderResultSummary();
    return;
  }
  if (!$("homePage")?.classList.contains("hidden")) {
    renderHomePage();
    return;
  }
  if (!$("creatorProgressPage")?.classList.contains("hidden")) {
    renderProfileProgressCard();
    return;
  }
  if (!$("buddyProfilePage")?.classList.contains("hidden")) {
    renderBuddyProfile(false);
    return;
  }
  if (!$("jobsPage")?.classList.contains("hidden")) {
    renderJobsPage();
  }
}

function renderProfileProgressCard() {
  if (!$("profileProgressCard")) return;
  const summary = getCreatorProfileSummary();
  const profile = getBuddyProfileData();
  const { tier } = summary;
  const nextTier = summary.nextTier;
  const progress = nextTier ? Math.min(100, Math.round((userProgression.creatorXP / nextTier.min) * 100)) : 100;
  const needed = nextTier ? nextTier.min - userProgression.creatorXP : 0;
  const creatorSkills = calculateCreatorSkills(profile, summary.analysis);
  const creatorBadges = calculateCreatorBadges(creatorSkills);
  const unlockedBadges = creatorBadges.filter((badge) => badge.status === "unlocked").length;
  const audienceMix = summary.analysis?.audience_tab?.audience_mix || [];
  $("profileProgressCard").innerHTML = `
    <div class="creator-progress-dashboard">
      <section class="progress-hero-panel">
        <div class="progress-avatar-card">
          <div class="progress-avatar">${summary.avatarText}</div>
          <p>${summary.name}</p>
          <span>${tier.name} · Level ${tier.level}</span>
        </div>
        <div class="progress-hero-copy">
          <p class="eyeline">Creator Progress</p>
          <h2>Profile Progress</h2>
          <p class="progress-lead">ติดตาม XP, Badge, Skill และ Mission เพื่อยกระดับ Portfolio ให้พร้อมรับงานจากแบรนด์</p>
          <div class="xp-meter">
            <div class="progress-meta">
              <strong>${userProgression.creatorXP.toLocaleString()} / ${nextTier ? nextTier.min.toLocaleString() : userProgression.creatorXP.toLocaleString()} XP</strong>
              <span>${progress}%</span>
            </div>
            <div class="tier-progress large"><i style="width:${progress}%"></i></div>
            <p>${nextTier ? `อีก ${needed.toLocaleString()} XP เพื่อไป ${nextTier.name}` : "คุณอยู่ Tier สูงสุดแล้ว"}</p>
          </div>
          <div class="progress-stat-row">
            <span><b>${userProgression.profileStrength}%</b><em>Profile Strength</em></span>
            <span><b>${summary.missionDone}/${summary.missionTotal}</b><em>Mission</em></span>
            <span><b>${unlockedBadges}/${creatorBadges.length}</b><em>Badges</em></span>
            <span><b>${userProgression.creatorStreak.currentDays}</b><em>Day Streak</em></span>
          </div>
        </div>
      </section>
      ${renderLeaderboardDashboard(summary, creatorSkills, creatorBadges)}
      <section class="skill-tracker-card">
        <div class="section-title">
          <div>
            <p class="eyeline">Skill Tracker</p>
            <h2>Creator Skills</h2>
          </div>
          <span class="status-pill">Gamified Profile</span>
        </div>
        <div class="skill-track-list">
          ${creatorSkills.map((skill, index) => `
            <div class="skill-track-row">
              <span class="skill-rank">${index + 1}</span>
              <div>
                <div class="skill-track-meta"><strong>${skill.name}</strong><b>${skill.value}%</b></div>
                <div class="skill-bar"><i style="width:${skill.value}%"></i></div>
              </div>
            </div>`).join("")}
        </div>
      </section>
      <section class="badge-gallery-card">
        <div class="section-title">
          <div>
            <p class="eyeline">Badge Collection</p>
            <h2>Creator Badges</h2>
          </div>
        </div>
        <div class="badge-gallery">
          ${creatorBadges.map((badge) => `
            <article class="creator-badge-card ${badge.status}" data-badge-guide="${badge.name}">
              <div class="badge-orb">${badge.name.split(" ").map((word) => word[0]).join("").slice(0, 2)}</div>
              <div>
                <h3>${badge.name}</h3>
                <p>${badge.description}</p>
                <span>${badge.skill}: ${badge.score}/100</span>
              </div>
              <strong>${badge.status === "unlocked" ? "Earned" : badge.status === "active" ? "In progress" : "ดูวิธีเพิ่มแต้ม"}</strong>
            </article>`).join("")}
        </div>
      </section>
      <section class="audience-progress-card">
        <div class="section-title">
          <div>
            <p class="eyeline">Audience Mix</p>
            <h2>Audience Fit Chart</h2>
          </div>
        </div>
        ${audienceMix.length ? renderAudiencePie(audienceMix) : `<div class="profile-empty-card"><h3>ยังไม่มี Audience Mix</h3><p>วิเคราะห์ Creator Vibes ก่อนเพื่อดึง pie chart มาที่ Profile</p></div>`}
      </section>
      <section class="progress-mission-card">
        <div class="section-title">
          <div>
            <p class="eyeline">Mission Board</p>
            <h2>Next XP moves</h2>
          </div>
        </div>
        <div class="mission-panel always-visible">
          ${userProgression.missions.map((mission) => `
            <button class="mission-row ${mission.status === "completed" ? "done" : ""}" data-mission-action="${mission.id}" type="button">
              <span>${mission.status === "completed" ? "✓" : "○"}</span>
              <div>
                <h3>${mission.title}</h3>
                <p>${mission.progress ?? 0}/${mission.target ?? 1} · +${mission.rewardXP} XP</p>
              </div>
            </button>`).join("")}
        </div>
      </section>
    </div>
    ${renderProgressPanel(tier)}`;
}

function getLeaderboardData(summary, creatorSkills, creatorBadges) {
  const completedMissions = userProgression.missions.filter((mission) => mission.status === "completed").length;
  const unlockedBadges = creatorBadges.filter((badge) => badge.status === "unlocked").length;
  const engagementSkill = creatorSkills.find((skill) => skill.name === "Engagement Pull")?.value || 68;
  const growthSkill = creatorSkills.find((skill) => skill.name === "Growth Momentum")?.value || 72;
  const categoryName = summary.analysis?.selected_categories?.[0] || "Lifestyle";
  const portfolioCount = getPortfolioCardItems().length;
  const rateCardCount = getRateCardItems().length;
  const campaignCount = state.appliedJobs.length;
  const portfolioScore = Math.min(100, portfolioCount * 24 + rateCardCount * 18);
  const postingScore = Math.min(100, completedMissions * 10 + userProgression.creatorStreak.currentDays * 8);
  const engagementScore = Math.min(100, summary.analysis ? engagementSkill : 0);
  const jobScore = Math.min(100, campaignCount * 24 + completedMissions * 8);
  const loginScore = Math.min(100, userProgression.creatorStreak.currentDays * 12);
  const missionScore = Math.round((completedMissions / userProgression.missions.length) * 100);
  const rankingScore = Math.round(
    portfolioScore * 0.2 +
    postingScore * 0.18 +
    engagementScore * 0.22 +
    jobScore * 0.16 +
    loginScore * 0.1 +
    missionScore * 0.14
  );
  const baseRank = Math.max(8, 220 - Math.round(rankingScore * 1.65));
  const previousRank = baseRank + Math.max(-8, Math.round((growthSkill + missionScore - 130) / 3));
  const rankChange = previousRank - baseRank;
  const rankCards = [
    { label: "Overall Rank", rank: baseRank, previous: previousRank, change: rankChange, scope: "ผลงาน + engagement + mission" },
    { label: "Growth Rank", rank: Math.max(6, baseRank - Math.round(growthSkill / 6)), previous: Math.max(12, baseRank - Math.round(growthSkill / 9)), change: Math.round(growthSkill / 8), scope: "XP, streak, profile lift" },
    { label: "Engagement Rank", rank: Math.max(8, 210 - Math.round(engagementScore * 1.7)), previous: Math.max(12, 218 - Math.round(engagementScore * 1.55)), change: 8, scope: "comments, saves, shares" },
    { label: "Category Rank", rank: Math.max(5, baseRank - Math.round(portfolioScore / 5)), previous: Math.max(8, baseRank - Math.round(portfolioScore / 7)), change: Math.round(portfolioScore / 10), scope: categoryName },
    { label: "Weekly Rank", rank: Math.max(4, 180 - Math.round((postingScore + missionScore) * 0.75)), previous: Math.max(7, 185 - Math.round(postingScore * 0.65)), change: Math.max(1, Math.round(missionScore / 12)), scope: "posting + login this week" },
    { label: "Monthly Rank", rank: Math.max(9, 210 - Math.round((rankingScore + jobScore) * 0.75)), previous: Math.max(8, 214 - Math.round((rankingScore + jobScore) * 0.68)), change: Math.round((jobScore - 60) / 5), scope: "campaign work this month" },
  ];
  return {
    categoryName,
    tierName: summary.tier.name,
    currentRank: baseRank,
    previousRank,
    rankChange,
    rankingScore,
    rankFactors: [
      { label: "Portfolio ผลงาน", value: portfolioScore, detail: `${portfolioCount} portfolio · ${rateCardCount} rate card` },
      { label: "Posting Consistency", value: postingScore, detail: `${userProgression.creatorStreak.currentDays} day streak` },
      { label: "Engagement", value: engagementScore, detail: "comments, saves, shares, audience fit" },
      { label: "Campaign Work", value: jobScore, detail: `${campaignCount} งานที่สมัคร/รับงาน` },
      { label: "Login Activity", value: loginScore, detail: "เข้าใช้งานและกลับมาทำต่อ" },
      { label: "Mission Completion", value: missionScore, detail: `${completedMissions}/${userProgression.missions.length} mission สำเร็จ` },
    ],
    rankCards,
    nearby: [
      { rank: baseRank - 2, name: "Nara Reviews", meta: `${categoryName} · ${summary.tier.name}`, points: userProgression.creatorXP + 420 },
      { rank: baseRank - 1, name: "Mint Finds", meta: `${categoryName} · ${summary.tier.name}`, points: userProgression.creatorXP + 180 },
      { rank: baseRank, name: `${summary.name} · You`, meta: `${categoryName} · ${summary.tier.name}`, points: userProgression.creatorXP, active: true },
      { rank: baseRank + 1, name: "Ploy Daily", meta: `${categoryName} · ${summary.tier.name}`, points: Math.max(0, userProgression.creatorXP - 140) },
      { rank: baseRank + 2, name: "Aom Creator", meta: `${categoryName} · ${summary.tier.name}`, points: Math.max(0, userProgression.creatorXP - 360) },
    ],
    rewards: [
      { title: "Top 50 Category", value: "+500 Reward Points", note: "ปลดล็อกเมื่อขึ้นอีก 12 อันดับ" },
      { title: "Top 10 Weekly Growth", value: "Fast-track campaign review", note: "ต้องทำ Mission อีก 2 งาน" },
      { title: "Tier Climber", value: "Priority brand matching", note: `สำหรับ ${summary.tier.name}` },
    ],
    achievements: [
      { title: "Consistency Creator", status: "Earned" },
      { title: "Rising Creator", status: "In progress" },
      { title: "Audience Fit", status: "Next unlock" },
    ],
    season: {
      title: "June Creator Sprint",
      subtitle: "Seasonal Competition",
      progress: Math.min(100, Math.round((completedMissions / userProgression.missions.length) * 100)),
      prize: "Top 25 รับ Bonus Reward + Campaign Boost",
    },
  };
}

function renderRankMovement(change) {
  if (change === 0) return `<span class="rank-movement neutral">0</span>`;
  const isUp = change > 0;
  return `<span class="rank-movement ${isUp ? "up" : "down"}">${isUp ? "▲" : "▼"} ${isUp ? "+" : ""}${change}</span>`;
}

function renderLeaderboardDashboard(summary, creatorSkills, creatorBadges) {
  const board = getLeaderboardData(summary, creatorSkills, creatorBadges);
  return `
    <section class="leaderboard-dashboard-card">
      <div class="leaderboard-head">
        <div>
          <p class="eyeline">Leaderboard</p>
          <h2>Creator Ranking Console</h2>
          <p>Rank วิเคราะห์จากผลงาน, การโพสต์, engagement, การรับงาน, login activity และ mission completion</p>
        </div>
      </div>
      <div class="leaderboard-current-grid">
        <article class="current-rank-card">
          <p>Current Rank</p>
          <h3>#${board.currentRank}</h3>
          <span>Previous Rank: #${board.previousRank}</span>
          ${renderRankMovement(board.rankChange)}
        </article>
        <article class="season-card">
          <p>${board.season.subtitle}</p>
          <h3>${board.season.title}</h3>
          <span>${board.season.prize}</span>
          <div class="tier-progress"><i style="width:${board.season.progress}%"></i></div>
        </article>
      </div>
      <div class="leaderboard-rank-grid">
        ${board.rankCards.map((item) => `
          <article class="rank-metric-card">
            <div>
              <p>${item.label}</p>
              <h3>#${item.rank}</h3>
              <span>${item.scope}</span>
            </div>
            <div>
              ${renderRankMovement(item.change)}
              <small>Last month #${item.previous}</small>
            </div>
          </article>`).join("")}
      </div>
      <div class="leaderboard-detail-grid">
        <article>
          <div class="section-title compact-title"><div><p class="eyeline">Nearby Ranking</p><h3>Creators around you</h3></div></div>
          <div class="nearby-rank-list">
            ${board.nearby.map((item) => `
              <div class="${item.active ? "active" : ""}">
                <strong>#${item.rank}</strong>
                <span><b>${item.name}</b><em>${item.meta}</em></span>
                <small>${item.points.toLocaleString()} XP</small>
              </div>`).join("")}
          </div>
        </article>
        <article>
          <div class="section-title compact-title"><div><p class="eyeline">Badge & Achievement</p><h3>Unlock track</h3></div></div>
          <div class="achievement-list">
            ${board.achievements.map((item) => `<span><b>${item.title}</b><em>${item.status}</em></span>`).join("")}
          </div>
        </article>
        <article>
          <div class="section-title compact-title"><div><p class="eyeline">Reward & Incentive</p><h3>Next rewards</h3></div></div>
          <div class="reward-list">
            ${board.rewards.map((item) => `<div><b>${item.title}</b><strong>${item.value}</strong><span>${item.note}</span></div>`).join("")}
          </div>
        </article>
      </div>
    </section>`;
}

function calculateCreatorSkills(profile, analysis) {
  const completedMissionRatio = userProgression.missions.filter((mission) => mission.status === "completed").length / userProgression.missions.length;
  const connectedRatio = connectedChannels.filter((channel) => channel.connected).length / connectedChannels.length;
  const profileFields = [profile.creatorName, profile.displayName, profile.bio, profile.contactEmail, profile.socialLinks, state.profileImageData];
  const profileCompleteness = Math.round((profileFields.filter(Boolean).length / profileFields.length) * 100);
  const confidence = analysis?.confidence || 45;
  const audienceTop = analysis?.audience_tab?.audience_mix?.[0]?.percentage || 45;
  const nicheFocus = Math.min(100, Math.round(((analysis?.selected_categories?.length || 0) <= 2 ? 72 : 58) + confidence * 0.2));
  const authoritySignal = Math.min(100, Math.round((analysis?.overview_tab?.strengths?.length || 0) * 12 + confidence * 0.35));
  const growthPotential = Math.min(100, Math.round(userProgression.creatorXP / 90 + completedMissionRatio * 28 + connectedRatio * 18));
  return [
    { name: "Content Consistency", value: Math.min(100, Math.round(userProgression.creatorStreak.currentDays * 12 + completedMissionRatio * 45 + 20)) },
    { name: "Niche Focus", value: nicheFocus },
    { name: "Audience Engagement", value: Math.min(100, Math.round(audienceTop + confidence * 0.35)) },
    { name: "Brand Readiness", value: Math.min(100, Math.round(profileCompleteness * 0.65 + connectedRatio * 35)) },
    { name: "Community Trust", value: Math.min(100, Math.round(connectedRatio * 45 + audienceTop * 0.55)) },
    { name: "Authority Signal", value: authoritySignal },
    { name: "Growth Potential", value: growthPotential },
    { name: "Elite Potential", value: Math.min(100, Math.round((profileCompleteness + confidence + nicheFocus + authoritySignal) / 4)) },
  ];
}

function calculateCreatorBadges(skills) {
  const skillMap = Object.fromEntries(skills.map((skill) => [skill.name, skill.value]));
  return creatorBadgeRules.map((rule) => {
    const score = skillMap[rule.skill] || 0;
    return {
      ...rule,
      score,
      status: score >= rule.threshold ? "unlocked" : score >= rule.threshold - 15 ? "active" : "locked",
    };
  });
}

function openBadgeGuide(badgeName) {
  const guide = {
    "Consistency Creator": ["โพสต์ตามตาราง 3-5 ครั้งต่อสัปดาห์", "ทำ content series ให้ต่อเนื่อง", "อัปเดต Portfolio ด้วยผลงานล่าสุด"],
    "Niche Specialist": ["เลือก niche หลักให้ชัดใน Bio", "เพิ่ม case study ที่พิสูจน์ความเชี่ยวชาญ", "ทำคอนเทนต์เปรียบเทียบหรือ framework"],
    "Audience Fit": ["เลือกงานที่ audience ตรงกับหมวดคอนเทนต์", "เพิ่ม Audience Mix และ engagement proof", "ทำ CTA ให้คนตอบกลับหรือแชร์"],
    "Rising Creator": ["สมัครงานที่ match score สูง", "เติม Rate Card และ Portfolio ให้ครบ", "ทำภารกิจ Next XP moves"],
    "Community Builder": ["ตอบคอมเมนต์สม่ำเสมอ", "ตั้งคำถามท้ายคอนเทนต์เพื่อชวนคุย", "รีโพสต์หรือ pin คอมเมนต์จากผู้ติดตาม"],
    "Authority Signal": ["ใส่ insight เฉพาะทางใน Bio/Portfolio", "เพิ่มเคสที่มีผลลัพธ์ชัดเจน", "ทำคอนเทนต์ How To หรือ Analysis"],
    "Elite Potential": ["ทำให้ทุก skill เกิน 80%", "มี portfolio, rate card, audience insight ครบ", "สมัครและส่งงาน campaign อย่างต่อเนื่อง"],
  }[badgeName] || ["ทำภารกิจใน Mission Board", "เพิ่ม Portfolio และ Rate Card", "เพิ่ม engagement กับ audience"];
  $("jobModalCard").innerHTML = `
    <button class="modal-close" data-close-job-modal type="button">×</button>
    <p class="eyeline">Creator Badge</p>
    <h2>${badgeName}</h2>
    <p>ทำสิ่งเหล่านี้เพื่อเพิ่มคะแนนและขยับเข้าใกล้ badge นี้</p>
    ${bullet(guide)}
    <div class="modal-actions">
      <button class="primary-button compact" data-badge-route="missions" type="button">ไปทำ Mission</button>
      <button class="secondary-button compact" data-badge-route="portfolio" type="button">เพิ่ม Portfolio</button>
      <button class="secondary-button compact" data-close-job-modal type="button">ปิด</button>
    </div>`;
  $("jobModal").classList.remove("hidden");
}

function handleMissionAction(missionId) {
  if (missionId === "view-fit-job") {
    setRoute("campaign-hub");
    state.jobsTab = "discover";
    renderJobsPage();
    return;
  }
  if (missionId === "add-portfolio") {
    setRoute("portfolio");
    window.setTimeout(() => $("portfolioItems")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    return;
  }
  if (missionId === "apply-fit-job") {
    setRoute("campaign-hub");
    state.jobsTab = "discover";
    renderJobsPage();
    return;
  }
  if (missionId === "connect-instagram") {
    setRoute("campaign-hub");
    state.jobsTab = "workProfile";
    renderJobsPage();
  }
}

function getRewardCashValue() {
  return Math.floor(userProgression.rewardPoints / 10);
}

function renderRewardWallet(context = "campaign") {
  const cashValue = getRewardCashValue();
  return `
    <section class="reward-wallet-card ${context === "dropdown" ? "compact-wallet" : ""}">
      <div>
        <p class="eyeline">Reward Points</p>
        <h2>${userProgression.rewardPoints.toLocaleString()} แต้ม</h2>
        <p>${userProgression.rewardConversionRate} · ถอนเงินได้ประมาณ ${cashValue.toLocaleString()} บาท</p>
      </div>
      <button class="primary-button compact" data-open-withdraw type="button">ถอนเงิน</button>
    </section>`;
}

function renderWithdrawModal() {
  const cashValue = getRewardCashValue();
  $("withdrawModalCard").innerHTML = `
    <button class="modal-close" data-close-withdraw-modal type="button">×</button>
    <p class="eyeline">Reward Withdrawal</p>
    <h2>เบิกเงินจาก Reward Points</h2>
    <p>ยอดปัจจุบัน ${userProgression.rewardPoints.toLocaleString()} แต้ม · ถอนได้ประมาณ ${cashValue.toLocaleString()} บาท</p>
    <div class="withdraw-account-list">
      ${state.withdrawAccounts.length ? state.withdrawAccounts.map((account, index) => `
        <label class="withdraw-account-option">
          <input type="radio" name="withdrawAccount" value="${index}" ${index === 0 ? "checked" : ""} />
          <span class="account-thumb">${account.image ? `<img src="${account.image}" alt="" />` : account.bank.slice(0, 2)}</span>
          <span><b>${account.bank}</b><em>${account.accountName} · ${account.accountNumber}</em></span>
        </label>`).join("") : `<div class="profile-empty-card compact-empty"><h3>ยังไม่มีบัญชีรับเงิน</h3><p>เพิ่มบัญชีก่อนถอนเงิน</p></div>`}
    </div>
    <div class="withdraw-add-account">
      <h3>เพิ่มบัญชีรับเงิน</h3>
      <div class="profile-form-grid withdraw-form-grid">
        <label class="withdraw-image-field">
          <span>รูปบัญชี</span>
          <div class="account-image-preview" id="withdrawAccountImagePreview">เพิ่มรูปบัญชี</div>
          <input id="withdrawAccountImageInput" type="file" accept="image/*" />
        </label>
        <label><span>ธนาคาร</span><select id="withdrawBank">
          <option>กสิกรไทย</option>
          <option>ไทยพาณิชย์</option>
          <option>กรุงเทพ</option>
          <option>กรุงไทย</option>
          <option>กรุงศรี</option>
          <option>ทหารไทยธนชาต</option>
          <option>ออมสิน</option>
        </select></label>
        <label><span>เลขบัญชี</span><input id="withdrawAccountNumber" inputmode="numeric" placeholder="000-0-00000-0" /></label>
        <label><span>ชื่อบัญชี</span><input id="withdrawAccountName" placeholder="ชื่อ-นามสกุล" /></label>
      </div>
      <button class="secondary-button compact" data-add-withdraw-account type="button">เพิ่มบัญชี</button>
    </div>
    <div class="modal-actions">
      <button class="primary-button compact" data-confirm-withdraw type="button" ${state.withdrawAccounts.length ? "" : "disabled"}>ยืนยันถอนเงิน</button>
      <button class="secondary-button compact" data-close-withdraw-modal type="button">ปิด</button>
    </div>`;
}

function openWithdrawModal() {
  state.withdrawAccountImageData = "";
  renderWithdrawModal();
  $("withdrawModal").classList.remove("hidden");
}

function closeWithdrawModal() {
  $("withdrawModal").classList.add("hidden");
}

function addWithdrawAccount() {
  const bank = $("withdrawBank")?.value || "";
  const accountNumber = $("withdrawAccountNumber")?.value.trim() || "";
  const accountName = $("withdrawAccountName")?.value.trim() || "";
  if (!bank || !accountNumber || !accountName) return;
  state.withdrawAccounts.unshift({
    bank,
    accountNumber,
    accountName,
    image: state.withdrawAccountImageData,
  });
  state.withdrawAccountImageData = "";
  renderWithdrawModal();
}

function confirmWithdraw() {
  if (!state.withdrawAccounts.length) return;
  $("withdrawModalCard").innerHTML = `
    <div class="success-state">
      <div class="empty-spark">✓</div>
      <h2>ส่งคำขอถอนเงินแล้ว</h2>
      <p>ระบบจะโอนเงินประมาณ ${getRewardCashValue().toLocaleString()} บาทไปยังบัญชีที่เลือก</p>
      <button class="primary-button compact" data-close-withdraw-modal type="button">ปิด</button>
    </div>`;
}

function renderCampaignProgressCardContent(tier) {
  const summary = getCreatorProfileSummary();
  const nextTier = summary.nextTier;
  const progress = nextTier ? Math.round((userProgression.creatorXP / nextTier.min) * 100) : 100;
  const needed = nextTier ? nextTier.min - userProgression.creatorXP : 0;
  return `
    <div class="campaign-progress-main">
      <div class="progress-left">
        <div class="tier-icon">${tier.icon}</div>
        <div>
          <p class="eyeline">Creator Progress</p>
          <h2>${tier.name}</h2>
          <p>Level ${tier.level}</p>
          <span class="status-pill">Vibe: ${summary.analysis ? `${summary.analysis.icon} ${summary.analysis.creator_dna}` : "ยังไม่ได้วิเคราะห์"}</span>
          ${summary.analysis ? "" : `<button class="secondary-button compact" data-progress-action="vibes" type="button">ไปวิเคราะห์ Creator Vibes</button>`}
        </div>
      </div>
      <div class="progress-center">
        <div class="progress-meta"><strong>${userProgression.creatorXP.toLocaleString()} / ${nextTier ? nextTier.min.toLocaleString() : userProgression.creatorXP.toLocaleString()} XP</strong><span>${Math.min(progress, 100)}%</span></div>
        <div class="tier-progress"><i style="width:${Math.min(progress, 100)}%"></i></div>
        <p>${nextTier ? `อีก ${needed.toLocaleString()} XP เพื่อไป ${nextTier.icon} ${nextTier.name}` : "คุณอยู่ Tier สูงสุดแล้ว"}</p>
      </div>
      <div class="progress-right">
        <span>แต้มสะสม: ${userProgression.rewardPoints.toLocaleString()}</span>
        <span>Mission: ${summary.missionDone}/${summary.missionTotal}</span>
        <span>Profile Strength: ${userProgression.profileStrength}%</span>
      </div>
    </div>`;
}

function renderProgressPanel(currentTier) {
  if (state.progressPanel === "roadmap") {
    return `<div class="progress-detail-panel tier-roadmap-panel">
      ${creatorTiers.map((item) => {
        const current = item.level === currentTier.level;
        const unlocked = userProgression.creatorXP >= item.min;
        return `<div class="tier-roadmap-item ${current ? "current" : ""} ${unlocked ? "unlocked" : "locked"}">
          <span>${unlocked ? "✓" : "🔒"}</span>
          <div>
            <h3>${item.icon} ${item.name} · Level ${item.level}</h3>
            <p>${item.thaiName} · ${item.description}</p>
            <p>${item.min.toLocaleString()}${item.next ? `-${(item.next - 1).toLocaleString()}` : "+"} XP</p>
            <div class="tag-list">${item.benefits.map((benefit) => `<span class="tag">${benefit}</span>`).join("")}</div>
          </div>
        </div>`;
      }).join("")}
    </div>`;
  }
  if (state.progressPanel === "missions") {
    return `<div class="progress-detail-panel mission-panel">
      ${userProgression.missions.map((mission) => `
        <div class="mission-row ${mission.status === "completed" ? "done" : ""}">
          <span>${mission.status === "completed" ? "✓" : "○"}</span>
          <div>
            <h3>${mission.title}</h3>
            <p>${mission.progress ?? 0}/${mission.target ?? 1} · +${mission.rewardXP} XP</p>
          </div>
        </div>`).join("")}
    </div>`;
  }
  return "";
}

function renderInfluencerMenu() {
  if (!$("influencerDropdown")) return;
  const summary = getCreatorProfileSummary();
  const { tier, nextTier } = summary;
  const progress = nextTier ? Math.round((userProgression.creatorXP / nextTier.min) * 100) : 100;
  const needed = nextTier ? nextTier.min - userProgression.creatorXP : 0;
  const creatorVibe = summary.analysis ? `${summary.analysis.icon} ${summary.analysis.creator_dna}` : "";
  const connectedSummary = summary.connectedCount < summary.connectedTotal ? `<p><b>Connected:</b> ${summary.connectedCount}/${summary.connectedTotal} channels</p>` : "";
  $("navProfileAvatar").textContent = summary.avatarText;
  if ($("navProfileTier")) $("navProfileTier").textContent = `${tier.icon} ${tier.name}`;
  if (document.querySelector(".profile-menu-name")) document.querySelector(".profile-menu-name").textContent = summary.name;
  $("influencerDropdown").innerHTML = `
    <div class="dropdown-profile-head">
      <span class="mini-avatar large">${summary.avatarText}</span>
      <div>
        <h3>${summary.name}${creatorVibe ? `<span class="profile-vibe-chip">${creatorVibe}</span>` : ""}</h3>
        <p>${summary.username}</p>
      </div>
    </div>
    <button class="dropdown-section dropdown-action-section" data-menu-action="work-profile" type="button">
      <p class="eyeline">Profile Summary</p>
      ${summary.analysis ? "" : `<p>ยังไม่ได้วิเคราะห์ Creator Vibes</p>`}
      ${connectedSummary}
      <span class="dropdown-hint">แก้ไข Profile</span>
    </button>
    <button class="dropdown-section dropdown-action-section" data-menu-action="roadmap" type="button">
      <p class="eyeline">Creator Progress</p>
      <h3>${tier.icon} ${tier.name}</h3>
      <p>Level ${tier.level}</p>
      <div class="tier-progress"><i style="width:${Math.min(progress, 100)}%"></i></div>
      <p>${userProgression.creatorXP.toLocaleString()} / ${nextTier ? nextTier.min.toLocaleString() : userProgression.creatorXP.toLocaleString()} XP</p>
      <p>${nextTier ? `อีก ${needed.toLocaleString()} XP เพื่อไป ${nextTier.icon} ${nextTier.name}` : "Tier สูงสุดแล้ว"}</p>
    </button>
    ${renderRewardWallet("dropdown")}
    <div class="dropdown-section dropdown-preferences">
      <p class="eyeline">Display</p>
      <div class="dropdown-control-row">
        <span>Theme</span>
        <div class="theme-toggle compact-toggle" role="group" aria-label="Theme">
          <button class="theme-option" data-theme="light" type="button" aria-pressed="false" aria-label="Light mode">☀️</button>
          <button class="theme-option" data-theme="dark" type="button" aria-pressed="true" aria-label="Dark mode">🌙</button>
        </div>
      </div>
      <div class="dropdown-control-row">
        <span>Language</span>
        <div class="language-toggle compact-toggle" role="group" aria-label="Language">
          <button class="language-option" data-lang="th" type="button" aria-pressed="true">TH</button>
          <button class="language-option" data-lang="en" type="button" aria-pressed="false">EN</button>
        </div>
      </div>
    </div>
    <div class="dropdown-section">
      <p class="eyeline">Mission วันนี้</p>
      <p>${summary.missionDone}/${summary.missionTotal} สำเร็จแล้ว</p>
    </div>
    <button class="ghost-button compact dropdown-logout" type="button">ออกจากระบบ</button>`;
  setTheme(localStorage.getItem("buddyReviewTheme") === "light" ? "light" : "dark");
  setLanguage(state.language);
}

function openInfluencerMenu() {
  renderInfluencerMenu();
  $("influencerDropdown").classList.remove("hidden");
  $("profileMenuBackdrop").classList.remove("hidden");
  $("influencerMenuButton").setAttribute("aria-expanded", "true");
}

function closeInfluencerMenu() {
  $("influencerDropdown").classList.add("hidden");
  $("profileMenuBackdrop").classList.add("hidden");
  $("influencerMenuButton").setAttribute("aria-expanded", "false");
}

function openNotificationMenu() {
  if (state.isAuthenticated) state.notificationsRead = true;
  renderNotificationState();
  renderHomePage();
  $("notificationDropdown").classList.remove("hidden");
  $("profileMenuBackdrop").classList.remove("hidden");
  $("notificationButton").setAttribute("aria-expanded", "true");
}

function closeNotificationMenu() {
  $("notificationDropdown").classList.add("hidden");
  $("profileMenuBackdrop").classList.add("hidden");
  $("notificationButton").setAttribute("aria-expanded", "false");
}

function toggleMessengerPanel(forceOpen) {
  const panel = $("messengerPanel");
  const button = $("messengerFloatButton");
  if (!panel || !button) return;
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : panel.classList.contains("hidden");
  panel.classList.toggle("hidden", !shouldOpen);
  button.classList.toggle("hidden", shouldOpen);
  button.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
}

const buddyAutoReplyTemplates = {
  price: {
    keywords: ["ราคา", "ค่าบริการ", "แพ็กเกจ", "package", "งบประมาณ", "budget", "เรท", "ค่าใช้จ่าย"],
    reply: `สวัสดีค่ะ ขอบคุณที่สนใจบริการของ Buddy Review ค่ะ

โดยทั่วไปเราแนะนำงบประมาณเริ่มต้นที่ 100,000 บาทขึ้นไป เพื่อให้แคมเปญสามารถสร้างผลลัพธ์และประสิทธิภาพได้อย่างเหมาะสม ทั้งในด้านจำนวน Creator, Reach และคุณภาพของ Content

รบกวนขอข้อมูลเพิ่มเติมดังนี้ค่ะ

* ชื่อบริษัท / แบรนด์
* ประเภทสินค้า / บริการ
* เป้าหมายแคมเปญ
* ช่องทางที่ต้องการทำ (TikTok, Facebook, Instagram, YouTube)
* งบประมาณโดยประมาณ
* ระยะเวลาที่ต้องการเริ่มแคมเปญ

ทีมงานจะช่วยแนะนำรูปแบบแคมเปญที่เหมาะสมให้ค่ะ`,
  },
  service: {
    keywords: ["มีบริการอะไรบ้าง", "บริการ", "ทำอะไรได้บ้าง", "ช่วยอะไรได้บ้าง", "บริการของ buddy review", "มีแพ็กเกจอะไรบ้าง", "รับทำอะไรบ้าง"],
    reply: `สวัสดีค่ะ 👋

Buddy Review ให้บริการด้าน Influencer Marketing และ Creator Solution แบบครบวงจร โดยมีบริการหลักดังนี้

✅ Influencer Marketing Campaign
วางแผนและบริหารแคมเปญร่วมกับ Influencer ตั้งแต่ต้นจนจบ

✅ Product Review Campaign
ส่งสินค้าให้ Creator รีวิวเพื่อสร้างการรับรู้และความน่าเชื่อถือ

✅ TikTok Creator Campaign
ทำแคมเปญร่วมกับ TikTok Creator เพื่อเพิ่ม Reach และ Engagement

✅ UGC (User Generated Content)
ผลิตคอนเทนต์จาก Creator สำหรับใช้ในโฆษณาและช่องทางของแบรนด์

✅ Creator Recruitment
คัดเลือก Creator ที่เหมาะสมกับกลุ่มเป้าหมายและงบประมาณ

✅ Campaign Management
ดูแลการประสานงาน บรีฟ ตรวจงาน และติดตามผลแคมเปญ

✅ Campaign Reporting
สรุปผลและวิเคราะห์ Performance ของแคมเปญ

หากสนใจบริการใดเป็นพิเศษ รบกวนแจ้งข้อมูลดังนี้ค่ะ

* ชื่อบริษัท / แบรนด์
* ประเภทสินค้า
* เป้าหมายแคมเปญ
* งบประมาณโดยประมาณ

ทีมงานจะช่วยแนะนำรูปแบบที่เหมาะสมให้ค่ะ`,
  },
  contact: {
    keywords: ["สนใจบริการ", "ติดต่อ", "ติดต่อทีมงาน", "campaign", "แคมเปญ", "จ้างงาน", "จ้างรีวิว"],
    reply: `สวัสดีค่ะ ขอบคุณที่สนใจบริการของ Buddy Review ค่ะ

Buddy Review ช่วยดูแลแคมเปญ Influencer Marketing แบบครบวงจร ตั้งแต่การวางแผน คัดเลือก Creator บริหารงาน ติดตามผล และสรุปรายงาน

รบกวนแจ้งข้อมูลเพิ่มเติมดังนี้ค่ะ

* ชื่อบริษัท / แบรนด์
* ประเภทสินค้า
* เป้าหมายทางการตลาด
* งบประมาณโดยประมาณ
* ช่องทางติดต่อกลับ

ทีมงานจะติดต่อกลับโดยเร็วที่สุดค่ะ`,
  },
  review: {
    keywords: ["รีวิวสินค้า", "ส่งสินค้า", "รีวิว", "ทดลองใช้", "สินค้าให้รีวิว", "product review", "ส่งของ"],
    reply: `สวัสดีค่ะ ขอบคุณที่สนใจใช้บริการรีวิวสินค้ากับ Buddy Review ค่ะ

รบกวนส่งข้อมูลดังนี้เพื่อให้ทีมงานประเมินแคมเปญเบื้องต้นค่ะ

* ชื่อบริษัท / แบรนด์
* ชื่อสินค้า
* รายละเอียดสินค้า
* กลุ่มเป้าหมาย
* Budget ที่ตั้งไว้
* Campaign Brief
* ช่องทางที่ต้องการทำ (TikTok / Facebook / Instagram / YouTube)
* ชื่อผู้ติดต่อ
* เบอร์โทรศัพท์
* อีเมล

เมื่อได้รับข้อมูลครบถ้วนแล้ว ทีมงานจะช่วยประเมิน Creator และรูปแบบแคมเปญที่เหมาะสมให้ค่ะ`,
  },
  creator: {
    keywords: ["influencer", "creator", "kol", "หาอินฟลู", "หา creator", "หา influencer", "ครีเอเตอร์", "อินฟลู"],
    reply: `สวัสดีค่ะ

Buddy Review มี Creator ครอบคลุมหลากหลายหมวดหมู่ เช่น Beauty, Lifestyle, Food, Health, Fashion, Family, Tech และอื่น ๆ

รบกวนแจ้งข้อมูลดังนี้ค่ะ

* ประเภทสินค้า / บริการ
* กลุ่มเป้าหมาย
* งบประมาณ
* จำนวน Creator ที่ต้องการ
* Platform ที่ต้องการทำ

ทีมงานจะช่วยแนะนำ Creator ที่เหมาะสมกับแคมเปญให้ค่ะ`,
  },
  caseStudy: {
    keywords: ["case study", "เคส", "ผลงาน", "ตัวอย่างงาน", "portfolio", "พอร์ต", "ตัวอย่าง"],
    reply: `สวัสดีค่ะ

สามารถดู Case Study และตัวอย่างผลงานของ Buddy Review ได้ที่

https://solutions.buddyreview.co/

หากต้องการตัวอย่างในอุตสาหกรรมเฉพาะ เช่น Beauty, FMCG, Retail, Real Estate, Education หรือ Healthcare สามารถแจ้งเพิ่มเติมได้ค่ะ`,
  },
  register: {
    keywords: ["สมัคร creator", "สมัคร influencer", "ร่วมงาน", "สมัครงานรีวิว", "สมัครเป็น creator", "สมัครเป็น influencer", "ลงทะเบียน creator"],
    reply: `สวัสดีค่ะ

หากสนใจสมัครเป็น Creator กับ Buddy Review สามารถสมัครได้ผ่านเว็บไซต์

https://buddyreview.co/

ทีมงานจะทำการตรวจสอบข้อมูลและติดต่อกลับเมื่อมีแคมเปญที่เหมาะสมค่ะ`,
  },
  smallBudget: {
    keywords: ["งบน้อย", "งบจำกัด", "งบไม่เยอะ", "งบน้อยได้ไหม", "budget น้อย", "ราคาถูก"],
    reply: `สวัสดีค่ะ

เพื่อให้แคมเปญมีประสิทธิภาพและเห็นผลลัพธ์ได้จริง ทาง Buddy Review แนะนำงบประมาณเริ่มต้นที่ประมาณ 100,000 บาทขึ้นไป

อย่างไรก็ตาม หากมีงบประมาณจำกัด สามารถแจ้งงบประมาณและเป้าหมายของแคมเปญเข้ามาได้ค่ะ ทีมงานจะช่วยแนะนำแนวทางที่เหมาะสมที่สุดให้`,
  },
  quotation: {
    keywords: ["ใบเสนอราคา", "quotation", "เสนอราคา", "ขอราคา", "quote", "ใบ quote"],
    reply: `สวัสดีค่ะ

รบกวนส่งข้อมูลดังนี้เพื่อจัดทำใบเสนอราคาเบื้องต้นค่ะ

* ชื่อบริษัท
* เลขผู้เสียภาษี (ถ้ามี)
* ชื่อผู้ติดต่อ
* เบอร์โทรศัพท์
* อีเมล
* รายละเอียดสินค้า / บริการ
* Budget ที่ตั้งไว้
* Campaign Brief
* Timeline แคมเปญ

ทีมงานจะจัดทำใบเสนอราคาและติดต่อกลับค่ะ`,
  },
  timeline: {
    keywords: ["ระยะเวลา", "timeline", "ใช้เวลากี่วัน", "กี่วัน", "เริ่มแคมเปญ", "งานด่วน", "เร่งด่วน"],
    reply: `สวัสดีค่ะ

โดยทั่วไปแนะนำให้เตรียมแผนล่วงหน้าอย่างน้อย 2-4 สัปดาห์ เพื่อให้มีเวลาสำหรับการคัดเลือก Creator, ส่ง Brief, ผลิต Content, ตรวจงาน และเผยแพร่คอนเทนต์

หากเป็นงานเร่งด่วน สามารถแจ้ง Timeline ที่ต้องการได้เลยค่ะ ทีมงานจะประเมินความเป็นไปได้ให้ค่ะ`,
  },
};

const buddyDefaultReply = `สวัสดีค่ะ ขอบคุณที่ติดต่อ Buddy Review ค่ะ

รอสักครู่นะคะ ทีมงานกำลังจะมาตอบในแชทนี้ค่ะ`;

function getBuddyAutoReply(message) {
  const normalized = message.toLowerCase();
  const templatePriority = ["register", "quotation", "smallBudget", "price", "service", "review", "caseStudy", "timeline", "contact", "creator"];
  const matched = templatePriority.map((key) => buddyAutoReplyTemplates[key]).find((template) =>
    template.keywords.some((keyword) => normalized.includes(keyword.toLowerCase()))
  );
  return matched?.reply || buddyDefaultReply;
}

const messengerQuickReplies = [
  { label: "บริการ", message: "มีบริการอะไรบ้าง" },
  { label: "ราคา", message: "ขอทราบราคาและแพ็กเกจ" },
  { label: "รีวิวสินค้า", message: "สนใจส่งสินค้าให้รีวิว" },
  { label: "หา Creator", message: "อยากหา influencer creator kol" },
  { label: "Case Study", message: "ขอดู case study ผลงาน" },
  { label: "ใบเสนอราคา", message: "ขอใบเสนอราคา quotation" },
  { label: "สมัคร Creator", message: "สมัคร creator" },
  { label: "คำถามอื่นๆ", message: "มีคำถามอื่นๆ" },
];

function renderMessengerQuickReplies() {
  const target = $("messengerQuickReplies");
  if (!target) return;
  target.innerHTML = messengerQuickReplies.map((item) =>
    `<button type="button" data-quick-reply="${item.message}">${item.label}</button>`
  ).join("");
}

function sendToConnectedMessenger(message) {
  const payload = {
    channel: "facebook_messenger",
    page: "Buddy Review",
    message,
    createdAt: new Date().toISOString(),
  };
  console.info("Messenger sync placeholder", payload);
  return payload;
}

function handleMessengerMessage(message) {
  const cleanMessage = message.trim();
  if (!cleanMessage) return;
  appendMessengerBubble(cleanMessage, "creator");
  sendToConnectedMessenger(cleanMessage);
  const reply = getBuddyAutoReply(cleanMessage);
  window.setTimeout(() => {
    appendMessengerBubble(reply, "buddy");
  }, 450);
}

function appendMessengerBubble(text, type = "creator") {
  const log = $("messengerChatLog");
  if (!log || !text.trim()) return;
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${type}`;
  bubble.textContent = text.trim();
  log.appendChild(bubble);
  log.scrollTop = log.scrollHeight;
}

function handleProfileMenuAction(action) {
  closeInfluencerMenu();
  if (action === "profile") setRoute("portfolio");
  if (action === "work-profile") {
    setRoute("campaign-hub");
    state.jobsTab = "workProfile";
    renderJobsPage();
  }
  if (action === "missions" || action === "roadmap") {
    setRoute("mission");
    state.progressPanel = action;
    renderProfileProgressCard();
  }
  if (action === "connections") {
    setRoute("campaign-hub");
    state.jobsTab = "workProfile";
    renderJobsPage();
  }
}

function renderJobDiscover() {
  const platforms = ["ทั้งหมด", "Facebook", "Facebook Page", "Instagram", "X (Twitter)", "YouTube", "TikTok", "Lemon8"];
  const visibleJobs = marketplaceJobs.filter((job) => {
    const platformMatch = state.jobPlatformFilter === "ทั้งหมด" || job.platform === state.jobPlatformFilter;
    const searchMatch = !state.jobSearch || `${job.campaignName} ${job.detail} ${job.brandCategory}`.toLowerCase().includes(state.jobSearch.toLowerCase());
    return platformMatch && searchMatch;
  });
  $("jobsContent").innerHTML = `
    <div class="jobs-toolbar">
      <input id="jobSearchInput" placeholder="ค้นหางานใหม่" value="${state.jobSearch}" />
      <strong>${visibleJobs.length} งาน</strong>
    </div>
    <div class="platform-filter-row">
      ${platforms.map((platform) => {
        const count = platform === "ทั้งหมด" ? marketplaceJobs.length : marketplaceJobs.filter((job) => job.platform === platform).length;
        return `<button class="platform-filter ${state.jobPlatformFilter === platform ? "active" : ""}" data-platform-filter="${platform}" type="button">${platform} (${count})</button>`;
      }).join("")}
    </div>
    <div class="campaign-grid">
      ${visibleJobs.map(renderCampaignCard).join("") || `<div class="profile-empty-card"><h3>ไม่พบงานที่ตรงกับตัวกรอง</h3><p>ลองเลือก Platform อื่นหรือค้นหาด้วยชื่อแคมเปญ</p></div>`}
    </div>`;
  $("jobSearchInput")?.addEventListener("input", (event) => {
    state.jobSearch = event.target.value;
    renderJobDiscover();
  });
}

function renderCampaignCard(job) {
  const match = calculateJobMatch(job);
  return `
    <article class="campaign-card" data-open-job="${job.id}">
      <div class="campaign-logo">${platformIcon(job.platform)}</div>
      <div class="campaign-main">
        <div class="campaign-title-row">
          <h3>${job.campaignName}</h3>
          <span class="status-pill">${job.status}</span>
        </div>
        <p>${job.detail}</p>
        <div class="campaign-meta">
          <span>${platformIcon(job.platform)} ${job.platform}</span>
          <span>Follower ${job.followerRequirement}</span>
          <span>เหลือเวลาอีก ${job.daysRemaining} วัน</span>
        </div>
        <div class="campaign-actions">
          ${match ? `<span class="match-pill">Match ${match}%</span>` : `<button class="secondary-button compact" data-route-to-vibes type="button">ไปวิเคราะห์ Creator Vibes</button>`}
          <button class="primary-button compact" type="button">ดูรายละเอียด</button>
        </div>
        ${!match ? `<p class="helper">วิเคราะห์ Creator Vibes เพื่อดูความเหมาะสมของงาน</p>` : ""}
      </div>
    </article>`;
}

function calculateJobMatch(job) {
  if (!state.analysis) return null;
  const form = getFormData();
  const connected = connectedChannels.some((channel) => channel.platform === job.platform && channel.connected);
  const platformScore = form.platform === job.platform ? 35 : 0;
  const categoryScore = state.analysis.selected_categories.includes(job.category) ? 35 : 0;
  const brandFitScore = state.analysis.audience_tab.brand_fit.includes(job.brandCategory) || state.analysis.audience_tab.brand_fit.includes(job.category) ? 20 : 10;
  const connectedScore = connected ? 10 : 0;
  return Math.min(100, platformScore + categoryScore + brandFitScore + connectedScore);
}

function renderMyMarketplaceJobs() {
  $("jobsContent").innerHTML = state.appliedJobs.length ? `
    <div class="campaign-grid">
      ${state.appliedJobs.map((item) => {
        const job = marketplaceJobs.find((candidate) => candidate.id === item.jobId);
        const workflow = getBuddyReviewCampaignWorkflow(job, item);
        return `<article class="campaign-card">
          <div class="campaign-logo">${platformIcon(job.platform)}</div>
          <div class="campaign-main">
            <div class="campaign-title-row"><h3>${job.campaignName}</h3><span class="status-pill ${workflow.tone}">${workflow.status}</span></div>
            <p><b>Brand:</b> ${job.brandCategory}</p>
            <p><b>Platform:</b> ${job.platform}</p>
            <p><b>Selected channel:</b> ${item.channel}</p>
            <p><b>Deliverables:</b> ${job.deliverables.join(", ")}</p>
            <p><b>Due date:</b> รอแบรนด์ยืนยัน</p>
            <p><b>Payment / points:</b> รอรายละเอียดจากแคมเปญ</p>
            ${renderCampaignWorkflowPanel(workflow)}
            <div class="campaign-actions">
              <button class="secondary-button compact" data-open-job="${job.id}" type="button">ดูรายละเอียด</button>
              <button class="primary-button compact" data-content-lab-shortcut="${job.id}" type="button">ดูไอเดียใน Content Lab</button>
            </div>
          </div>
        </article>`;
      }).join("")}
    </div>` : `<div class="profile-empty-card"><h3>ยังไม่มีงานที่สมัคร</h3><p>สมัครแคมเปญในแท็บค้นหางานใหม่ แล้วงานจะมาอยู่ที่นี่</p></div>`;
}

function getBuddyReviewCampaignWorkflow(job, item) {
  const status = item.backendStatus || buddyReviewCampaignBackendStatuses[item.jobId] || item.status || "กำลังพิจารณา";
  const base = {
    source: "อัปเดตจาก Buddy Review Back Office",
    submittedAsset: item.submittedAsset || "https://drive.google.com/review-draft-v1",
    feedbackAsset: item.feedbackAsset || "https://drive.google.com/brand-feedback-v1",
    approvedAsset: item.approvedAsset || "https://drive.google.com/final-approved",
  };
  const workflows = {
    "กำลังพิจารณา": {
      ...base,
      status: "กำลังพิจารณา",
      tone: "reviewing",
      title: "รอ Buddy Review และแบรนด์ตรวจโปรไฟล์",
      copy: "ระบบหลังบ้านกำลังเช็ก profile fit, audience, rate card และช่องทางที่เลือกสมัคร",
    },
    "ต้องส่งงาน": {
      ...base,
      status: "ต้องส่งงาน",
      tone: "action",
      title: "ถึงขั้นตอนส่งงาน",
      copy: `ส่งไฟล์หรือวางลิงก์งาน ${job.deliverables.join(", ")} เพื่อให้ Buddy Review ส่งต่อให้แบรนด์ตรวจ`,
    },
    "ฟีดแบค": {
      ...base,
      status: "ฟีดแบค",
      tone: "feedback",
      title: "มีฟีดแบคจากแบรนด์",
      copy: "Brand: ขอเพิ่ม product benefit ใน 3 วินาทีแรก และใส่ CTA ตอนท้ายคลิป",
      buddyNote: "Buddy Review: โครงงานดีแล้ว แนะนำปรับ hook ให้ชัดขึ้นก่อนส่งรอบถัดไป",
    },
    "รอฟีดแบคอีกรอบ": {
      ...base,
      status: "รอฟีดแบคอีกรอบ",
      tone: "reviewing",
      title: "ส่งงานแก้ไขแล้ว รอฟีดแบคอีกรอบ",
      copy: item.submissionNotes ? `Notes ล่าสุด: ${item.submissionNotes}` : "Buddy Review ได้รับงานแก้ไขแล้ว และกำลังส่งต่อให้แบรนด์ตรวจอีกครั้ง",
      submittedAsset: item.submittedAsset || base.submittedAsset,
    },
    "เสร็จสิ้น": {
      ...base,
      status: "เสร็จสิ้น",
      tone: "done",
      title: "งานนี้ได้รับการ approve แล้ว",
      copy: "ไฟล์หรือลิงก์ด้านล่างคือ version ที่แบรนด์อนุมัติในระบบ Buddy Review",
    },
    "ไม่ผ่าน": {
      ...base,
      status: "ไม่ผ่าน",
      tone: "rejected",
      title: "คุณไม่ได้รับคัดเลือก",
      copy: "แคมเปญนี้เลือก creator คนอื่นแล้ว ระบบจะยังเก็บโปรไฟล์ของคุณไว้สำหรับงานที่ match มากขึ้น",
    },
  };
  if (status === "ดำเนินงาน") return workflows["ต้องส่งงาน"];
  return workflows[status] || workflows["กำลังพิจารณา"];
}

function renderCampaignWorkflowPanel(workflow, options = {}) {
  if (workflow.status === "ต้องส่งงาน") {
    return `
      <div class="campaign-workflow-panel ${workflow.tone}">
        <div><span>${workflow.source}</span><h4>${workflow.title}</h4><p>${workflow.copy}</p></div>
        <div class="submission-grid">
          <label><span>Notes / แก้ไขอะไร</span><textarea data-submission-notes rows="3" placeholder="เช่น เพิ่ม CTA ตอนท้ายคลิป, ปรับ hook ใหม่"></textarea></label>
          <label><span>อัปโหลดไฟล์งาน</span><input data-submission-file type="file" /></label>
          <label><span>หรือลิงก์งานใหม่</span><input data-submission-link placeholder="วาง Google Drive, TikTok draft, Instagram link" /></label>
        </div>
        ${options.detailed ? `<button class="primary-button compact" data-submit-campaign-work="${options.jobId}" type="button">ส่งงานให้ Buddy Review</button>` : ""}
      </div>`;
  }
  if (workflow.status === "ฟีดแบค") {
    return `
      <div class="campaign-workflow-panel ${workflow.tone}">
        <div><span>${workflow.source}</span><h4>${workflow.title}</h4><p>${workflow.copy}</p></div>
        <a href="${workflow.feedbackAsset}" target="_blank" rel="noreferrer">เปิดไฟล์ / ลิงก์ที่ได้รับฟีดแบค</a>
        <p class="buddy-feedback-note">${workflow.buddyNote}</p>
      </div>`;
  }
  if (workflow.status === "เสร็จสิ้น") {
    return `
      <div class="campaign-workflow-panel ${workflow.tone}">
        <div><span>${workflow.source}</span><h4>${workflow.title}</h4><p>${workflow.copy}</p></div>
        <a href="${workflow.approvedAsset}" target="_blank" rel="noreferrer">เปิดไฟล์ / ลิงก์ที่ได้รับ approve</a>
      </div>`;
  }
  if (workflow.status === "รอฟีดแบคอีกรอบ") {
    return `
      <div class="campaign-workflow-panel ${workflow.tone}">
        <div><span>${workflow.source}</span><h4>${workflow.title}</h4><p>${workflow.copy}</p></div>
        <a href="${workflow.submittedAsset}" target="_blank" rel="noreferrer">เปิดไฟล์ / ลิงก์ที่ส่งล่าสุด</a>
      </div>`;
  }
  return `
    <div class="campaign-workflow-panel ${workflow.tone}">
      <div><span>${workflow.source}</span><h4>${workflow.title}</h4><p>${workflow.copy}</p></div>
    </div>`;
}

function submitCampaignWork(jobId) {
  const item = state.appliedJobs.find((candidate) => candidate.jobId === jobId);
  if (!item) return;
  const notes = document.querySelector("[data-submission-notes]")?.value.trim() || "";
  const link = document.querySelector("[data-submission-link]")?.value.trim() || "";
  const fileName = document.querySelector("[data-submission-file]")?.files?.[0]?.name || "";
  item.backendStatus = "รอฟีดแบคอีกรอบ";
  item.submissionNotes = notes || "ส่งงานแก้ไขให้ Buddy Review ตรวจแล้ว";
  item.submittedAsset = link || (fileName ? `ไฟล์แนบ: ${fileName}` : item.submittedAsset || "รอไฟล์จากระบบหลังบ้าน");
  $("jobModalCard").innerHTML = `
    <div class="success-state">
      <div class="empty-spark">✓</div>
      <h2>ส่งงานแล้ว</h2>
      <p>สถานะเปลี่ยนเป็นรอฟีดแบคอีกรอบ</p>
      <button class="primary-button compact" data-close-job-modal type="button">ปิด</button>
    </div>`;
  renderJobsPage();
}

function renderWorkProfile() {
  const profile = getBuddyProfileData();
  $("jobsContent").innerHTML = `
    <div class="work-profile-grid">
      <article class="profile-card work-profile-summary">
        <p class="eyeline">โปรไฟล์รับงาน</p>
        <h2>${userPoints.name}</h2>
        <p>โปรไฟล์พร้อมรับงานหรือยัง?</p>
        <div class="profile-summary-pills">
          <span>${connectedChannels.filter((channel) => channel.connected).length}/${connectedChannels.length} Channels</span>
          <span>Portfolio: ต้องเพิ่มผลงาน</span>
          <span>Rate Card: ต้องกรอกแพ็กเกจ</span>
        </div>
      </article>
      <article class="profile-card">
        <h2>LINE OA connection</h2>
        <p>Status: ${userPoints.lineOAConnected ? "เชื่อมต่อแล้ว" : "ยังไม่ได้เชื่อมต่อ"}</p>
        <button class="primary-button compact" type="button">เริ่มเชื่อมต่อ LINE OA</button>
      </article>
      <article class="profile-card">
        <h2>Contact Information</h2>
        <p>ข้อมูลนี้ sync กับหน้า Portfolio อัตโนมัติ</p>
        <div class="work-contact-form">
          <label><span>Email</span><input data-work-contact="email" type="email" value="${profile.contactEmail}" placeholder="email@example.com" /></label>
          <label><span>Social / DM Link</span><input data-work-contact="social" value="${profile.socialLinks}" placeholder="ลิงก์ช่องหรือช่องทาง DM" /></label>
          <p class="helper" id="workContactSaveHint">แก้ไขแล้วระบบจะบันทึกและ sync ไปหน้า Portfolio</p>
        </div>
      </article>
      <article class="profile-card">
        <div class="section-title">
          <h2>Work Preferences</h2>
          <button class="secondary-button compact" data-open-work-preferences type="button">ตั้งค่า Preferences</button>
        </div>
        <div class="work-preference-summary">
          <p><b>หมวดงาน:</b> ${state.workPreferences.categories || "ยังไม่ได้ตั้งค่า"}</p>
          <p><b>Platform:</b> ${state.workPreferences.platforms || "ยังไม่ได้ตั้งค่า"}</p>
          <p><b>Timeline:</b> ${state.workPreferences.timeline || "ยังไม่ได้ตั้งค่า"}</p>
          <p><b>เงื่อนไข:</b> ${state.workPreferences.terms || "ยังไม่ได้ตั้งค่า"}</p>
        </div>
      </article>
      <article class="profile-card channel-section">
        <div class="section-title"><h2>ช่องทางรีวิว</h2><button class="secondary-button compact" type="button">เพิ่มช่องทางรีวิว</button></div>
        <div class="channel-grid">
          ${connectedChannels.map((channel) => `
            <div class="channel-card ${channel.connected ? "connected" : "disconnected"}">
              <div class="channel-icon">${platformIcon(channel.platform)}</div>
              <h3>${channel.platform}</h3>
              ${channel.username ? `<p>@${channel.username}</p>` : `<p>ยังไม่มี username</p>`}
              <span class="connection-badge">${channel.status}</span>
              <button class="${channel.connected ? "secondary-button" : "primary-button"} compact" type="button">${channel.connected ? "Reconnect" : "เชื่อมต่อ"}</button>
            </div>`).join("")}
        </div>
      </article>
    </div>`;
}

function openWorkPreferencesModal() {
  $("jobModalCard").innerHTML = `
    <button class="modal-close" data-close-job-modal type="button">×</button>
    <p class="eyeline">Work Preferences</p>
    <h2>ตั้งค่า Preferences</h2>
    <p>เลือกหรือพิมพ์ข้อมูลงานที่อยากรับ เพื่อใช้จับคู่แคมเปญใน Campaign Hub</p>
    <div class="preference-modal-form">
      <label><span>หมวดงานที่สนใจ</span><textarea data-pref-field="categories" rows="3" placeholder="Beauty, Fashion, Lifestyle">${state.workPreferences.categories}</textarea></label>
      <label><span>Platform ที่พร้อมรับงาน</span><input data-pref-field="platforms" value="${state.workPreferences.platforms}" placeholder="TikTok, Instagram, YouTube" /></label>
      <label><span>Timeline</span><input data-pref-field="timeline" value="${state.workPreferences.timeline}" placeholder="เช่น รับงานล่วงหน้า 7-14 วัน" /></label>
      <label><span>เงื่อนไขราคา / การใช้งาน</span><textarea data-pref-field="terms" rows="3" placeholder="เช่น usage rights, revision, rush fee">${state.workPreferences.terms}</textarea></label>
    </div>
    <div class="modal-actions">
      <button class="primary-button compact" data-save-work-preferences type="button">บันทึก Preferences</button>
      <button class="secondary-button compact" data-close-job-modal type="button">ปิด</button>
    </div>`;
  $("jobModal").classList.remove("hidden");
}

function saveWorkPreferences() {
  state.workPreferences = {
    categories: document.querySelector("[data-pref-field='categories']")?.value.trim() || "",
    platforms: document.querySelector("[data-pref-field='platforms']")?.value.trim() || "",
    timeline: document.querySelector("[data-pref-field='timeline']")?.value.trim() || "",
    terms: document.querySelector("[data-pref-field='terms']")?.value.trim() || "",
  };
  $("jobModal").classList.add("hidden");
  if (state.jobsTab === "workProfile") renderWorkProfile();
}

function syncWorkContactToPortfolio(target) {
  const type = target.dataset.workContact;
  if (type === "email" && $("profileContactEmail")) $("profileContactEmail").value = target.value;
  if (type === "social" && $("profileSocialLinks")) $("profileSocialLinks").value = target.value;
  refreshPortfolioPreviewFromFields();
  queueAutosave();
  const hint = $("workContactSaveHint");
  if (hint) hint.textContent = "Saved และ sync ไปหน้า Portfolio แล้ว";
}

function openJobModal(jobId) {
  const job = marketplaceJobs.find((item) => item.id === jobId);
  if (!job) return;
  state.selectedJobId = jobId;
  const appliedItem = state.appliedJobs.find((item) => item.jobId === jobId);
  if (appliedItem) {
    const workflow = getBuddyReviewCampaignWorkflow(job, appliedItem);
    $("jobModalCard").innerHTML = `
      <button class="modal-close" data-close-job-modal type="button">×</button>
      <div class="campaign-logo large">${platformIcon(job.platform)}</div>
      <h2>${job.campaignName}</h2>
      <div class="job-detail-grid">
        <p><b>Brand/category:</b> ${job.brandCategory}</p>
        <p><b>Platform:</b> ${job.platform}</p>
        <p><b>Selected channel:</b> ${appliedItem.channel}</p>
        <p><b>Status:</b> ${workflow.status}</p>
      </div>
      <div class="info-block"><h3>Deliverables</h3>${bullet(job.deliverables)}</div>
      ${renderCampaignWorkflowPanel(workflow, { detailed: true, jobId })}
      <div class="modal-actions">
        <button class="secondary-button compact" data-close-job-modal type="button">ปิด</button>
      </div>`;
    $("jobModal").classList.remove("hidden");
    return;
  }
  const channels = connectedChannels.filter((channel) => channel.platform === job.platform);
  $("jobModalCard").innerHTML = `
    <button class="modal-close" data-close-job-modal type="button">×</button>
    <div class="campaign-logo large">${platformIcon(job.platform)}</div>
    <h2>${job.campaignName}</h2>
    <p>${job.brief}</p>
    <div class="job-detail-grid">
      <p><b>Brand/category:</b> ${job.brandCategory}</p>
      <p><b>Platform:</b> ${job.platform}</p>
      <p><b>Follower:</b> ${job.followerRequirement}</p>
      <p><b>Status:</b> ${job.status}</p>
      <p><b>Remaining:</b> เหลือเวลาอีก ${job.daysRemaining} วัน</p>
      <p><b>Reward:</b> รอรายละเอียดจากแคมเปญ</p>
    </div>
    <div class="info-block"><h3>Deliverables</h3>${bullet(job.deliverables)}</div>
    <div class="info-block"><h3>Requirements</h3>${bullet(job.requirements)}</div>
    <h3>เลือกช่องทางที่ต้องการสมัคร</h3>
    <div class="apply-channel-list">
      ${(channels.length ? channels : [{ platform: job.platform, connected: false, status: "ยังไม่ได้เชื่อมต่อช่องทางนี้" }]).map((channel) => `
        <label class="apply-channel ${channel.connected ? "" : "disabled"}">
          <input type="radio" name="applyChannel" value="${channel.platform}${channel.username ? ` @${channel.username}` : ""}" ${channel.connected ? "" : "disabled"} />
          <span>${platformIcon(channel.platform)} ${channel.platform} ${channel.username ? `@${channel.username}` : ""}</span>
          <em>${channel.connected ? "พร้อมสมัคร" : "ยังไม่ได้เชื่อมต่อช่องทางนี้"}</em>
        </label>`).join("")}
    </div>
    <div class="modal-actions">
      ${channels.some((channel) => channel.connected) ? `<button class="primary-button compact" data-confirm-apply="${job.id}" type="button">สมัครงาน</button>` : `<button class="primary-button compact" type="button">เชื่อมต่อช่องทาง</button>`}
      <button class="secondary-button compact" data-close-job-modal type="button">ปิด</button>
    </div>`;
  $("jobModal").classList.remove("hidden");
}

function confirmJobApply(jobId) {
  const selected = document.querySelector("input[name='applyChannel']:checked");
  if (!selected) return;
  if (!state.appliedJobs.some((item) => item.jobId === jobId)) {
    state.appliedJobs.push({ jobId, channel: selected.value });
    completeMission("apply-fit-job");
    renderCampaignProgressSections();
  }
  $("jobModalCard").innerHTML = `
    <div class="success-state">
      <div class="empty-spark">✓</div>
      <h2>สมัครงานเรียบร้อยแล้ว</h2>
      <p>แคมเปญถูกเพิ่มไปที่ งานของฉัน</p>
      <button class="primary-button compact" data-close-job-modal type="button">ปิด</button>
    </div>`;
  renderJobsPage();
}

function platformIcon(platform) {
  const icons = { TikTok: "♪", Instagram: "◎", Facebook: "f", "Facebook Page": "f", YouTube: "▶", "X (Twitter)": "𝕏", Lemon8: "L" };
  return icons[platform] || "•";
}

$("categoryGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  if (state.isAnalyzing) return;
  const category = button.dataset.category;
  if (state.selected.includes(category)) {
    if (state.selected.length === 1) {
      $("categoryHint").textContent = "ต้องเลือกอย่างน้อย 1 หมวดหมู่เพื่อวิเคราะห์";
      return;
    }
    state.selected = state.selected.filter((item) => item !== category);
  } else if (state.selected.length < 3) {
    state.selected.push(category);
  } else {
    $("categoryHint").textContent = "เลือกได้สูงสุด 3 หมวดหมู่";
    return;
  }
  renderCategories();
});

$("creatorForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (state.isAnalyzing) return;
  if (!state.selected.length) {
    $("categoryHint").textContent = "กรุณาเลือกอย่างน้อย 1 หมวดหมู่";
    return;
  }
  startAnalysisRun();
});

$("tabs").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-tab]");
  if (!tab) return;
  if (state.isAnalyzing) return;
  state.activeTab = tab.dataset.tab;
  document.querySelectorAll(".tab").forEach((button) => button.classList.toggle("active", button === tab));
  document.querySelectorAll(".nav-link").forEach((button) => {
    const activeRoute = state.activeTab === "contentLab" ? "content-lab" : "vibes";
    button.classList.toggle("active", button.dataset.route === activeRoute);
  });
  renderTab();
});

$("tabContent")?.addEventListener("click", (event) => {
  if (event.target.closest("[data-vibes-login]")) {
    openAuthModal("login");
    return;
  }
  if (event.target.closest("[data-vibes-register]")) {
    openAuthModal("signup");
  }
});

$("jobsTabs")?.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-jobs-tab]");
  if (!tab) return;
  state.jobsTab = tab.dataset.jobsTab;
  renderJobsPage();
});

$("jobsContent")?.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-platform-filter]");
  if (filter) {
    state.jobPlatformFilter = filter.dataset.platformFilter;
    renderJobDiscover();
    return;
  }
  const vibesCta = event.target.closest("[data-route-to-vibes]");
  if (vibesCta) {
    setRoute("creator-vibes");
    return;
  }
  const contentShortcut = event.target.closest("[data-content-lab-shortcut]");
  if (contentShortcut) {
    const campaignId = contentShortcut.dataset.contentLabShortcut;
    setRoute("creator-vibes", { query: `?tab=content-lab&campaignId=${campaignId}` });
    state.activeTab = "contentLab";
    document.querySelectorAll(".tab").forEach((button) => button.classList.toggle("active", button.dataset.tab === state.activeTab));
    renderTab();
    return;
  }
  const progressAction = event.target.closest("[data-progress-action]");
  if (progressAction) {
    if (progressAction.dataset.progressAction === "profile") setRoute("portfolio");
    if (progressAction.dataset.progressAction === "missions" || progressAction.dataset.progressAction === "roadmap") {
      state.progressPanel = state.progressPanel === progressAction.dataset.progressAction ? "" : progressAction.dataset.progressAction;
      renderJobsPage();
    }
    if (progressAction.dataset.progressAction === "vibes") setRoute("creator-vibes");
    return;
  }
  const open = event.target.closest("[data-open-job]");
  if (open) openJobModal(open.dataset.openJob);
  const openPreferences = event.target.closest("[data-open-work-preferences]");
  if (openPreferences) openWorkPreferencesModal();
});

$("jobsContent")?.addEventListener("input", (event) => {
  const workContact = event.target.closest("[data-work-contact]");
  if (workContact) syncWorkContactToPortfolio(workContact);
});

$("jobModal")?.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-job-modal]")) {
    $("jobModal").classList.add("hidden");
    return;
  }
  const apply = event.target.closest("[data-confirm-apply]");
  if (apply) confirmJobApply(apply.dataset.confirmApply);
  const submitWork = event.target.closest("[data-submit-campaign-work]");
  if (submitWork) submitCampaignWork(submitWork.dataset.submitCampaignWork);
  const savePreferences = event.target.closest("[data-save-work-preferences]");
  if (savePreferences) saveWorkPreferences();
  const badgeRoute = event.target.closest("[data-badge-route]");
  if (badgeRoute) {
    $("jobModal").classList.add("hidden");
    if (badgeRoute.dataset.badgeRoute === "missions") setRoute("mission");
    if (badgeRoute.dataset.badgeRoute === "portfolio") setRoute("portfolio");
  }
});

$("platform")?.addEventListener("change", () => {
  if (state.isAnalyzing) return;
  renderCategories();
});

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-open-withdraw]")) {
    closeInfluencerMenu();
    openWithdrawModal();
    return;
  }
  if (!event.target.closest("#downloadCard")) return;
  if (!state.isAuthenticated) {
    openAuthModal("login");
    return;
  }
  exportCreatorDnaCard();
});

$("withdrawModal")?.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-withdraw-modal]")) {
    closeWithdrawModal();
    return;
  }
  if (event.target.closest("[data-add-withdraw-account]")) {
    addWithdrawAccount();
    return;
  }
  if (event.target.closest("[data-confirm-withdraw]")) {
    confirmWithdraw();
  }
});

$("withdrawModal")?.addEventListener("change", (event) => {
  if (event.target.id !== "withdrawAccountImageInput") return;
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.withdrawAccountImageData = reader.result;
    const preview = $("withdrawAccountImagePreview");
    if (preview) {
      preview.style.backgroundImage = `url('${state.withdrawAccountImageData}')`;
      preview.textContent = "";
    }
  };
  reader.readAsDataURL(file);
});

async function exportCreatorDnaCard() {
  const a = state.analysis;
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 1080, 1920);
  gradient.addColorStop(0, "#08070f");
  gradient.addColorStop(0.45, a.color_theme.primary);
  gradient.addColorStop(1, "#050409");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1920);
  paintDnaAccent(ctx, a.color_theme);
  ctx.fillStyle = "rgba(255,255,255,0.08)";
  roundedRect(ctx, 84, 300, 912, 540, 46);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 44px Kanit, sans-serif";
  ctx.fillText("BUDDY REVIEW", 84, 120);
  ctx.font = "700 40px Kanit, sans-serif";
  ctx.fillStyle = "#ff8cc6";
  ctx.fillText("VIBES", 84, 188);
  ctx.font = "96px Kanit, sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(a.icon, 120, 430);
  ctx.font = "800 76px Kanit, sans-serif";
  ctx.fillText(a.creator_dna.replace("The ", ""), 120, 540);
  ctx.font = "700 44px Kanit, sans-serif";
  ctx.fillStyle = "#ffe8f5";
  ctx.fillText(a.thai_title, 120, 610);
  ctx.font = "500 36px Kanit, sans-serif";
  wrapCanvasText(ctx, `"${a.share_card.identity_line}"`, 120, 695, 820, 48);
  ctx.fillStyle = "rgba(255,255,255,0.14)";
  roundedRect(ctx, 84, 890, 912, 330, 38);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 34px Kanit, sans-serif";
  ctx.fillText("คุณคือ", 128, 960);
  ctx.font = "500 32px Kanit, sans-serif";
  wrapCanvasText(ctx, a.share_card.description, 128, 1012, 820, 42);
  ctx.font = "600 32px Kanit, sans-serif";
  wrapCanvasText(ctx, `Superpower: ${a.share_card.superpower}`, 128, 1120, 820, 42);
  ctx.font = "600 28px Kanit, sans-serif";
  wrapCanvasText(ctx, a.selected_categories.join(" · "), 128, 1195, 820, 36);
  await drawExportPhoto(ctx, a.color_theme);
  ctx.fillStyle = "#ffffff";
  ctx.font = "700 32px Kanit, sans-serif";
  ctx.fillText("#BuddyReview", 84, 1810);
  ctx.fillText("#CreatorVibes", 84, 1854);
  downloadCanvas(canvas, `buddy-review-vibes-${a.code}.png`);
}

function paintDnaAccent(ctx, colorTheme) {
  const stops = colorTheme.gradient?.length ? colorTheme.gradient : [colorTheme.primary, colorTheme.secondary];
  const accent = ctx.createLinearGradient(780, 60, 1040, 430);
  stops.forEach((color, index) => accent.addColorStop(index / Math.max(stops.length - 1, 1), color));
  ctx.save();
  ctx.globalAlpha = 0.55;
  ctx.fillStyle = accent;
  ctx.beginPath();
  ctx.arc(920, 220, 190, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function downloadCanvas(canvas, filename) {
  canvas.toBlob((blob) => {
    if (!blob) {
      const fallback = window.open(canvas.toDataURL("image/png"), "_blank");
      if (!fallback) alert("เปิดไฟล์การ์ดไม่สำเร็จ กรุณาอนุญาต popup แล้วลองดาวน์โหลดอีกครั้ง");
      return;
    }
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }, "image/png");
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  words.forEach((word) => {
    const test = `${line}${word} `;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = `${word} `;
      y += lineHeight;
    } else {
      line = test;
    }
  });
  ctx.fillText(line, x, y);
}

async function drawExportPhoto(ctx, colorTheme) {
  const x = 84;
  const y = 1260;
  const width = 912;
  const height = 470;
  roundedRect(ctx, x, y, width, height, 52);
  ctx.save();
  ctx.clip();
  const photoGradient = ctx.createLinearGradient(x, y, x + width, y + height);
  photoGradient.addColorStop(0, colorTheme.primary);
  photoGradient.addColorStop(1, colorTheme.secondary);
  ctx.fillStyle = photoGradient;
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = "rgba(255,255,255,0.75)";
  ctx.font = "800 130px Kanit, sans-serif";
  ctx.fillText("VIBES", x + 280, y + 300);
  ctx.restore();
}

renderAll();
syncRouteFromPath();

function setRoute(route, options = {}) {
  const homePage = $("homePage");
  const creatorPage = $("creatorVibesPage");
  const jobsPage = $("jobsPage");
  const profilePage = $("buddyProfilePage");
  const progressPage = $("creatorProgressPage");
  const protectedRoutes = ["home", "mission", "portfolio", "campaign-hub"];

  if (protectedRoutes.includes(route) && !state.isAuthenticated) {
    showMemberGate(route, options);
    return;
  }

  if (route === "home") {
    document.querySelectorAll(".nav-link").forEach((button) => button.classList.remove("active"));
    homePage.classList.remove("hidden");
    creatorPage.classList.add("hidden");
    jobsPage.classList.add("hidden");
    profilePage.classList.add("hidden");
    progressPage.classList.add("hidden");
    renderHomePage();
    renderNotificationState();
    if (!options.skipHistory) safePushState({ route }, "/");
    return;
  }

  if (route === "mission") {
    document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.route === "mission"));
    homePage.classList.add("hidden");
    creatorPage.classList.add("hidden");
    jobsPage.classList.add("hidden");
    profilePage.classList.add("hidden");
    progressPage.classList.remove("hidden");
    renderProfileProgressCard();
    if (!options.skipHistory) safePushState({ route }, "/mission");
    return;
  }

  if (route === "portfolio") {
    document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.route === "portfolio"));
    homePage.classList.add("hidden");
    creatorPage.classList.add("hidden");
    jobsPage.classList.add("hidden");
    progressPage.classList.add("hidden");
    profilePage.classList.remove("hidden");
    renderBuddyProfile();
    if (!options.skipHistory) safePushState({ route }, "/portfolio");
    return;
  }

  if (route === "campaign-hub") {
    document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.route === "campaign-hub"));
    homePage.classList.add("hidden");
    creatorPage.classList.add("hidden");
    profilePage.classList.add("hidden");
    progressPage.classList.add("hidden");
    jobsPage.classList.remove("hidden");
    renderJobsPage();
    if (!options.skipHistory) safePushState({ route }, "/campaign-hub");
    return;
  }

  homePage.classList.add("hidden");
  creatorPage.classList.remove("hidden");
  jobsPage.classList.add("hidden");
  profilePage.classList.add("hidden");
  progressPage.classList.add("hidden");
  if (options.query?.includes("tab=content-lab")) state.activeTab = "contentLab";
  else state.activeTab = "overview";
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.route === "creator-vibes"));
  document.querySelectorAll(".tab").forEach((button) => button.classList.toggle("active", button.dataset.tab === state.activeTab));
  renderTab();
  if (!options.skipHistory) safePushState({ route }, `/creator-vibes${options.query || ""}`);
}

function safePushState(stateValue, url) {
  try {
    history.pushState(stateValue, "", withAppBasePath(url));
  } catch {
    const query = url.includes("?") ? url.slice(url.indexOf("?")) : "";
    const fallback = stateValue.route === "home" ? "#/" : stateValue.route === "mission" ? "#/mission" : stateValue.route === "portfolio" ? "#/portfolio" : stateValue.route === "campaign-hub" ? "#/campaign-hub" : `#/creator-vibes${query}`;
    history.pushState(stateValue, "", fallback);
  }
}

function getAppBasePath() {
  if (window.location.protocol === "file:") return "";
  const segments = window.location.pathname.split("/").filter(Boolean);
  if (window.location.hostname.endsWith("github.io") && segments[0]) return `/${segments[0]}`;
  return "";
}

function withAppBasePath(url) {
  const base = getAppBasePath();
  if (!base || url.startsWith("#") || url.startsWith(base)) return url;
  if (url === "/") return `${base}/`;
  return `${base}${url}`;
}

function getAppPathname() {
  let path = window.location.pathname;
  const base = getAppBasePath();
  if (base && (path === base || path.startsWith(`${base}/`))) path = path.slice(base.length) || "/";
  if (path.endsWith("/index.html")) return "/";
  return path || "/";
}

function syncRouteFromPath() {
  const path = getAppPathname();
  if (path === "/" || window.location.hash === "#/" || (!window.location.hash && path.endsWith("/index.html"))) {
    setRoute("home", { skipHistory: true });
  } else if (path === "/mission" || window.location.hash === "#/mission" || path === "/creator-progress" || window.location.hash === "#/creator-progress") {
    setRoute("mission", { skipHistory: true });
  } else if (path === "/portfolio" || window.location.hash === "#/portfolio" || path === "/buddy-profile" || window.location.hash === "#/buddy-profile") {
    setRoute("portfolio", { skipHistory: true });
  } else if (path === "/campaign-hub" || window.location.hash === "#/campaign-hub" || path === "/jobs" || window.location.hash === "#/jobs") {
    setRoute("campaign-hub", { skipHistory: true });
  } else {
    const query = window.location.search || (window.location.hash.includes("?") ? window.location.hash.slice(window.location.hash.indexOf("?")) : "");
    setRoute("creator-vibes", { skipHistory: true, query });
  }
}

document.querySelectorAll(".nav-link").forEach((button) => {
  button.addEventListener("click", () => {
    closeMobileNav();
    setRoute(button.dataset.route);
  });
});

window.addEventListener("popstate", syncRouteFromPath);

const savedTheme = localStorage.getItem("buddyReviewTheme");
setTheme(savedTheme === "light" ? "light" : "dark");
renderInfluencerMenu();
renderNotificationState();
syncAuthNavigation();
applyLanguage(document.body);
updateNavScrollState();
document.addEventListener("click", (event) => {
  const option = event.target.closest("[data-theme]");
  if (!option) return;
  setTheme(option.dataset.theme);
});

document.addEventListener("click", (event) => {
  const option = event.target.closest("[data-lang]");
  if (!option) return;
  setLanguage(option.dataset.lang);
});

$("mobileMenuButton")?.addEventListener("click", () => {
  const isOpen = !document.body.classList.contains("mobile-nav-open");
  document.body.classList.toggle("mobile-nav-open", isOpen);
  $("mobileMenuButton")?.setAttribute("aria-expanded", isOpen ? "true" : "false");
  if (isOpen) {
    closeInfluencerMenu();
    closeNotificationMenu();
  }
});

document.addEventListener("click", (event) => {
  if (!document.body.classList.contains("mobile-nav-open")) return;
  if (event.target.closest("#mobileMenuButton, .main-nav")) return;
  closeMobileNav();
});
new MutationObserver((mutations) => {
  if (isApplyingLanguage || state.language === "th") return;
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) applyLanguage(node);
    });
  });
}).observe(document.body, { childList: true, subtree: true });
window.addEventListener("scroll", updateNavScrollState, { passive: true });

$("campaignProgressCard")?.addEventListener("click", (event) => {
  const action = event.target.closest("[data-progress-action]");
  if (!action) return;
  const value = action.dataset.progressAction;
  if (value === "profile") setRoute("portfolio");
  if (value === "vibes") setRoute("creator-vibes");
  if (value === "roadmap" || value === "missions") {
    state.progressPanel = state.progressPanel === value ? "" : value;
    renderJobsPage();
  }
});

$("profileProgressCard")?.addEventListener("click", (event) => {
  const action = event.target.closest("[data-progress-action]");
  if (!action) return;
  const value = action.dataset.progressAction;
  if (value === "profile") setRoute("portfolio");
  if (value === "vibes") setRoute("creator-vibes");
  if (value === "roadmap" || value === "missions") {
    state.progressPanel = state.progressPanel === value ? "" : value;
    renderProfileProgressCard();
  }
});

$("influencerMenuButton")?.addEventListener("click", () => {
  if (!state.isAuthenticated) {
    openAuthModal("login");
    return;
  }
  const isOpen = !$("influencerDropdown").classList.contains("hidden");
  closeNotificationMenu();
  if (isOpen) closeInfluencerMenu();
  else openInfluencerMenu();
});

$("signupButton")?.addEventListener("click", () => openAuthModal("signup"));
$("loginButton")?.addEventListener("click", () => openAuthModal("login"));
$("authModal")?.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-auth-modal], [data-auth-skip]")) {
    event.preventDefault();
    closeAuthModal();
    return;
  }
  const switchMode = event.target.closest("[data-auth-switch]");
  if (switchMode) {
    state.authMode = switchMode.dataset.authSwitch;
    openAuthModal(state.authMode);
    return;
  }
  const provider = event.target.closest("[data-auth-provider]");
  if (provider) {
    completeAuth(provider.dataset.authProvider);
  }
});

$("authEmailForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const password = event.currentTarget.querySelector("[data-auth-password]")?.value || "";
  const confirmPassword = event.currentTarget.querySelector("[data-auth-confirm-password]")?.value || "";
  if (state.authMode === "register" && password !== confirmPassword) {
    showAutosave("Password ไม่ตรงกัน");
    return;
  }
  completeAuth("Email");
});

$("notificationButton")?.addEventListener("click", () => {
  if (!state.isAuthenticated) {
    openAuthModal("login");
    return;
  }
  const isOpen = !$("notificationDropdown").classList.contains("hidden");
  closeInfluencerMenu();
  if (isOpen) closeNotificationMenu();
  else openNotificationMenu();
});

$("brandHomeButton")?.addEventListener("click", () => setRoute(state.isAuthenticated ? "home" : "creator-vibes"));

$("messengerFloatButton")?.addEventListener("click", () => toggleMessengerPanel());
$("messengerCloseButton")?.addEventListener("click", () => toggleMessengerPanel(false));
$("messengerLoginButton")?.addEventListener("click", (event) => {
  event.currentTarget.textContent = "Connected";
  event.currentTarget.disabled = true;
  appendMessengerBubble("เชื่อม Facebook แล้วค่ะ ส่งข้อความในหน้าต่างนี้ได้เลย", "buddy");
});
$("messengerQuickReplies")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-quick-reply]");
  if (!button) return;
  handleMessengerMessage(button.dataset.quickReply);
});
$("messengerCompose")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("messengerInput");
  if (!input?.value.trim()) return;
  handleMessengerMessage(input.value);
  input.value = "";
});

$("profileMenuBackdrop")?.addEventListener("click", () => {
  closeInfluencerMenu();
  closeNotificationMenu();
});

document.addEventListener("click", (event) => {
  const panel = $("messengerPanel");
  if (!panel || panel.classList.contains("hidden")) return;
  if (event.target.closest("#messengerPanel, #messengerFloatButton")) return;
  toggleMessengerPanel(false);
});

$("influencerDropdown")?.addEventListener("click", (event) => {
  if (event.target.closest(".dropdown-logout")) {
    state.isAuthenticated = false;
    state.authProvider = "";
    localStorage.removeItem("buddyReviewAuth");
    localStorage.removeItem("buddyReviewAuthProvider");
    closeInfluencerMenu();
    syncAuthNavigation();
    renderNotificationState();
    setRoute("creator-vibes");
    return;
  }
  const action = event.target.closest("[data-menu-action]");
  if (action) handleProfileMenuAction(action.dataset.menuAction);
});

$("notificationDropdown")?.addEventListener("click", (event) => {
  if (event.target.closest("[data-notification-login]")) {
    closeNotificationMenu();
    openAuthModal("login");
    return;
  }
  const route = event.target.closest("[data-notification-route]");
  if (route) {
    state.notificationsRead = true;
    closeNotificationMenu();
    renderNotificationState();
    setRoute(route.dataset.notificationRoute);
  }
});

$("homeConsole")?.addEventListener("click", (event) => {
  if (event.target.closest("[data-gate-login]")) {
    openAuthModal("login");
    return;
  }
  if (event.target.closest("[data-gate-register]")) {
    openAuthModal("signup");
    return;
  }
  if (event.target.closest("[data-gate-vibes]")) {
    setRoute("creator-vibes");
    return;
  }
  const route = event.target.closest("[data-home-route]");
  if (route) {
    setRoute(route.dataset.homeRoute);
    return;
  }
  const notice = event.target.closest("[data-home-notification]");
  if (notice) {
    state.notificationsRead = true;
    renderNotificationState();
    setRoute(notice.dataset.homeNotification === "campaign" ? "campaign-hub" : "mission");
  }
});

$("creatorProgressPage")?.addEventListener("click", (event) => {
  const mission = event.target.closest("[data-mission-action]");
  if (mission) {
    handleMissionAction(mission.dataset.missionAction);
    return;
  }
  const badge = event.target.closest("[data-badge-guide]");
  if (badge) openBadgeGuide(badge.dataset.badgeGuide);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeInfluencerMenu();
    closeNotificationMenu();
    closeWithdrawModal();
    $("jobModal")?.classList.add("hidden");
  }
});

function setTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-mode", isLight);
  localStorage.setItem("buddyReviewTheme", isLight ? "light" : "dark");
  document.querySelectorAll(".theme-option").forEach((button) => {
    const active = button.dataset.theme === (isLight ? "light" : "dark");
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function updateNavScrollState() {
  document.body.classList.toggle("nav-scrolled", window.scrollY > 18);
}

function closeMobileNav() {
  document.body.classList.remove("mobile-nav-open");
  $("mobileMenuButton")?.setAttribute("aria-expanded", "false");
}

$("createProfileButton").addEventListener("click", showProfileDashboard);
document.querySelectorAll("[data-create-profile]").forEach((button) => button.addEventListener("click", showProfileDashboard));
["profileCreatorName", "profileDisplayName", "profileBio", "profileContactEmail", "profileSocialLinks", "profilePlatform"].forEach((id) => {
  $(id)?.addEventListener("input", refreshPortfolioPreviewFromFields);
  $(id)?.addEventListener("change", refreshPortfolioPreviewFromFields);
});
$("profilePhotoInput")?.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.profileImageData = reader.result;
    $("profilePhotoPreview").style.backgroundImage = `url('${state.profileImageData}')`;
    $("profilePhotoPreview").textContent = "";
    refreshPortfolioPreviewFromFields();
    queueAutosave();
  };
  reader.readAsDataURL(file);
});
$("exportPdfButton")?.addEventListener("click", exportBuddyProfilePdf);
$("exportPngButton")?.addEventListener("click", exportBuddyProfilePng);
$("savePortfolioButton")?.addEventListener("click", saveBuddyPortfolio);
$("profileDashboard")?.addEventListener("input", (event) => {
  if (event.target.matches("input, textarea, select")) {
    updatePublicProfilePreview();
    queueAutosave();
  }
});
$("profileDashboard")?.addEventListener("change", (event) => {
  if (event.target.matches("input, textarea, select")) {
    updatePublicProfilePreview();
    queueAutosave();
  }
});
$("profileDashboard")?.addEventListener("click", (event) => {
  if (event.target.closest("[data-add-rate-card]")) {
    if (state.rateCardCount >= 6) return;
    state.rateCardCount += 1;
    $("rateCards")?.insertAdjacentHTML("beforeend", renderRateCardBuilderItem(getBuddyProfileData(), state.rateCardCount - 1));
    updatePublicProfilePreview();
    queueAutosave();
    return;
  }
  if (event.target.closest("[data-add-portfolio]")) {
    if (state.portfolioCount >= 6) return;
    state.portfolioCount += 1;
    $("portfolioItems")?.insertAdjacentHTML("beforeend", renderPortfolioBuilderItem(getBuddyProfileData(), state.portfolioCount - 1));
    if (completeMission("add-portfolio")) renderCampaignProgressSections();
    updatePublicProfilePreview();
    queueAutosave();
    return;
  }
  if (event.target.closest("[data-refresh-channel-stats]")) {
    state.channelStatsRefreshing = true;
    if ($("profileChannelStats")) $("profileChannelStats").innerHTML = renderProfileChannelStats();
    window.setTimeout(() => {
      state.channelStatsRefreshing = false;
      if ($("profileChannelStats")) $("profileChannelStats").innerHTML = renderProfileChannelStats();
      showAutosave("อัปเดตข้อมูลช่องทางแล้ว");
    }, 900);
  }
});

function showProfileDashboard() {
  state.buddyProfileCreated = true;
  $("profileEmptyState").classList.add("hidden");
  $("profileDashboard").classList.remove("hidden");
  renderBuddyProfile();
}

function refreshPortfolioPreviewFromFields() {
  const a = state.analysis;
  const profile = getBuddyProfileData();
  if (a && $("mediaKitHeader")) $("mediaKitHeader").innerHTML = renderMediaKitHeader(profile, a);
  updateExportState(profile);
  updatePublicProfilePreview(profile, a);
}

function showAutosave(message = "บันทึกอัตโนมัติแล้ว") {
  const indicator = $("autosaveIndicator");
  if (!indicator) return;
  window.clearTimeout(state.autosaveHideTimer);
  indicator.textContent = message;
  indicator.classList.add("active");
  state.autosaveHideTimer = window.setTimeout(() => {
    indicator.classList.remove("active");
  }, message === "กำลังบันทึก..." ? 1600 : 2600);
}

function queueAutosave() {
  window.clearTimeout(state.autosaveTimer);
  showAutosave("กำลังบันทึก...");
  state.autosaveTimer = window.setTimeout(() => {
    saveBuddyPortfolio({ silent: true });
  }, 650);
}

function saveBuddyPortfolio(options = {}) {
  const payload = {
    profile: getBuddyProfileData(),
    rateCards: getEnteredRateCards(),
    portfolioItems: getEnteredPortfolioItems(),
    testimonials: getTestimonials(),
    savedAt: new Date().toISOString(),
  };
  localStorage.setItem("buddyReviewPortfolio", JSON.stringify(payload));
  const hint = $("portfolioSaveHint");
  if (hint && !options.silent) {
    hint.classList.remove("hidden");
    hint.textContent = `บันทึก Portfolio แล้ว ${new Date().toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" })}`;
  }
  showAutosave(`บันทึกอัตโนมัติแล้ว ${new Date().toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" })}`);
}

function renderBuddyProfile(resetVisibility = true) {
  const a = state.analysis;
  if (!a) {
    if (resetVisibility) {
      $("profileDashboard").classList.toggle("hidden", !state.buddyProfileCreated);
      $("profileEmptyState").classList.toggle("hidden", state.buddyProfileCreated);
    }
    if ($("mediaKitHeader")) $("mediaKitHeader").innerHTML = `<div class="profile-empty-card"><h3>ยังไม่มี Creator Vibes Result</h3><p>วิเคราะห์ Creator Vibes ก่อน เพื่อดึง Vibe, Category, Audience และ Brand Fit มาใช้ใน Portfolio</p></div>`;
    ["creatorScores", "rateCards", "portfolioItems", "profileChannelStats"].forEach((id) => {
      if ($(id)) $(id).innerHTML = renderProfileEmptyCard("เพิ่มข้อมูลของคุณ", "ข้อมูลส่วนนี้จะไม่ถูกสร้างเอง และจะแสดงเมื่อมี Creator Vibes result หรือข้อมูลที่คุณกรอก");
    });
    if ($("publicProfilePreview")) $("publicProfilePreview").innerHTML = `<div class="profile-empty-card"><h3>เพิ่มข้อมูลโปรไฟล์</h3><p>เริ่มจาก Creator Vibes result และข้อมูลที่คุณกรอกเท่านั้น</p></div>`;
    return;
  }
  const profile = getBuddyProfileData();
  document.documentElement.style.setProperty("--dna-primary", a.color_theme.primary);
  if (resetVisibility) {
    $("profileDashboard").classList.toggle("hidden", !state.buddyProfileCreated);
    $("profileEmptyState").classList.toggle("hidden", state.buddyProfileCreated);
  }

  $("profilePlatform").innerHTML = ["TikTok", "Instagram", "Facebook", "YouTube", "LinkedIn", "X"]
    .map((platform) => `<option ${platform === profile.platform ? "selected" : ""}>${platform}</option>`).join("");
  $("profileCategories").value = a.selected_categories.join(", ");
  $("mediaKitHeader").innerHTML = renderMediaKitHeader(profile, a);
  updateExportState(profile);

  const profileFields = [profile.creatorName, profile.displayName, profile.bio, profile.contactEmail, profile.socialLinks, state.profileImageData];
  const completeness = Math.round((profileFields.filter(Boolean).length / profileFields.length) * 100);
  const scoreData = [
    ["Profile Completeness", completeness, completeness >= 80 ? "ข้อมูลโปรไฟล์พร้อมให้แบรนด์อ่านแล้ว" : "โปรไฟล์ยังต้องเติมข้อมูลหลักก่อนส่งให้แบรนด์", "เพิ่มรูป Bio Contact และ Social Links"],
    ["Brand Fit", Math.min(96, Math.round(60 + a.confidence / 3)), `เหมาะกับแบรนด์กลุ่ม ${a.audience_tab.brand_fit.slice(0, 3).join(", ")}`, "เลือกหมวดแบรนด์ที่อยากรับงานให้ชัดใน Bio"],
    ["Content Readiness", Math.min(92, 58 + a.overview_tab.content_formats.length * 6), `สไตล์คอนเทนต์เด่น: ${a.overview_tab.content_formats.slice(0, 2).join(", ")}`, "เพิ่ม Portfolio เพื่อพิสูจน์ผลงานจริง"],
    ["Collaboration Readiness", profile.contactEmail && profile.socialLinks ? 76 : 42, profile.contactEmail ? "มีช่องทางติดต่อแล้ว แต่ยังควรเพิ่ม Rate Card" : "ยังไม่มีช่องทางติดต่อที่แบรนด์ใช้ได้", "เพิ่มแพ็กเกจ Rate Card และช่องทางติดต่อ"],
  ];
  $("creatorScores").innerHTML = scoreData.map(([name, score, text, tip]) => `
    <article class="score-card"><strong>${Math.round(score)}/100</strong><h3>${name}</h3><p>${text}</p><p><b>Tip:</b> ${tip}</p></article>`).join("");

  $("rateCards").innerHTML = renderRateCardBuilder(profile);
  $("portfolioItems").innerHTML = renderPortfolioBuilder(profile);
  $("profileChannelStats").innerHTML = renderProfileChannelStats();

  updatePublicProfilePreview(profile, a);
}

function updatePublicProfilePreview(profile = getBuddyProfileData(), a = state.analysis) {
  if (!$("publicProfilePreview")) return;
  if (!a) {
    $("publicProfilePreview").innerHTML = `<div class="profile-empty-card"><h3>เพิ่มข้อมูลโปรไฟล์</h3><p>เริ่มจาก Creator Vibes result และข้อมูลที่คุณกรอกเท่านั้น</p></div>`;
    return;
  }
  const rateCardItems = getRateCardItems();
  const portfolioCardItems = getPortfolioCardItems();
  const rateCards = getEnteredRateCards();
  const portfolioItems = getEnteredPortfolioItems();
  const socialProfiles = getSocialProfiles(profile);
  const audience = getAudienceAnalytics();
  const brandFit = getCheckedValues("brandFitChoices", a.audience_tab.brand_fit);
  const contentFormats = getCheckedValues("contentFormatChoices", a.overview_tab.content_formats);
  const strengths = getCheckedValues("creatorStrengthChoices", a.overview_tab.strengths);
  $("publicProfilePreview").innerHTML = `
    <div class="export-media-kit" id="mediaKitExport">
      ${renderMediaKitHeader(profile, a)}
      <section class="export-hero-strip">
        <div>
          <p class="eyeline">Export Preview</p>
          <h3>Media kit สำหรับส่งให้แบรนด์</h3>
          <p>${profile.tagline || `${a.icon} ${a.creator_dna} · ${a.thai_title}`}</p>
        </div>
        <div class="export-contact-chip">${profile.contact.email || "เพิ่มช่องทางติดต่อ"}</div>
      </section>
      <section class="export-kpi-strip">
        <span><b>${audience.totalFollowers || "Add"}</b><em>Total Followers</em></span>
        <span><b>${audience.monthlyReach || "Add"}</b><em>Monthly Reach</em></span>
        <span><b>${audience.averageViews || "Add"}</b><em>Avg Views / Post</em></span>
        <span><b>${audience.engagementRate || "Add"}</b><em>Engagement Rate</em></span>
      </section>
      <section class="export-key-hero">
        ${rateCardItems.map((item, index) => renderExportRateCard(item, index)).join("")}
        ${portfolioCardItems.map((item, index) => renderExportPortfolioCard(item, index, profile)).join("")}
      </section>
      <section class="export-about-card">
        <h3>About Creator</h3>
        <p>${profile.bio || "เพิ่ม Short Bio เพื่ออธิบายตัวตน สไตล์คอนเทนต์ และความแตกต่างของคุณ"}</p>
        <div class="media-kit-meta">${socialProfiles.length ? socialProfiles.map((item) => `<span>${item.platform}</span>`).join("") : `<span>เพิ่ม Social Profiles</span>`}</div>
      </section>
      <section class="export-summary-grid">
        <article><h3>Audience Insights</h3><p><b>Age:</b> ${audience.ageDistribution || "เพิ่มข้อมูลอายุผู้ชม"}</p><p><b>Gender:</b> ${audience.genderDistribution || "เพิ่มข้อมูลเพศผู้ชม"}</p><p><b>Interests:</b> ${audience.interests || "เพิ่ม interest หลัก"}</p></article>
        <article><h3>Brand Fit</h3><div class="tag-list">${brandFit.map((item) => `<span class="tag">${item}</span>`).join("")}</div></article>
        <article><h3>Content Capabilities</h3><div class="tag-list">${contentFormats.map((item) => `<span class="tag">${item}</span>`).join("")}</div></article>
      </section>
      <section class="export-detail-split">
        <article><h3>Creator Strengths</h3>${strengths.length ? bullet(strengths) : bullet(a.overview_tab.strengths)}</article>
        <article><h3>Contact Information</h3><div class="media-kit-meta">${Object.entries(profile.contact).filter(([, value]) => value).map(([key, value]) => `<span>${contactLabel(key)}: ${value}</span>`).join("") || `<span>เพิ่มช่องทางติดต่อ</span>`}</div></article>
      </section>
    </div>`;
}

function getRateCardHero() {
  const card = [...document.querySelectorAll("#rateCards .rate-card")].find((item) => {
    const values = [...item.querySelectorAll("input, textarea")].map((field) => field.value?.trim()).filter(Boolean);
    return values.length;
  }) || document.querySelector("#rateCards .rate-card");
  if (!card) return {};
  const inputs = [...card.querySelectorAll("input")].map((input) => input.value.trim());
  return {
    packageName: inputs[0] || card.querySelector("h3")?.textContent?.trim() || "",
    price: inputs[1] || "",
    timeline: inputs[2] || "",
    platform: card.querySelector("[data-rate-platform]")?.value.trim() || card.querySelector("h3")?.textContent?.trim() || "",
    usage: card.querySelector("[data-rate-usage]")?.value.trim() || "",
    revision: card.querySelector("[data-rate-revision]")?.value.trim() || "",
    deliverables: card.querySelector("textarea")?.value.trim() || "",
  };
}

function renderExportRateCard(item, index) {
  return `
    <article class="export-key-card rate-key">
      <p class="eyeline">Rate Card ${index + 1}</p>
      <div class="rate-hero-visual">
        <strong>${item.price || "ใส่ราคา"}</strong>
        <span>${item.platform || "Platform"}</span>
      </div>
      <h3>${item.packageName || `Rate Card ${index + 1}`}</h3>
      <p>${item.deliverables || "กรอก deliverables, timeline, usage rights เพื่อให้แบรนด์ตัดสินใจเร็วขึ้น"}</p>
      <div class="export-mini-facts">
        <span>${item.timeline || "Timeline"}</span>
        <span>${item.usage || "Usage rights"}</span>
        <span>${item.revision || "Revision"}</span>
      </div>
    </article>`;
}

function renderExportPortfolioCard(item, index, profile) {
  return `
    <article class="export-key-card portfolio-key">
      <p class="eyeline">Portfolio ${index + 1}</p>
      <div class="portfolio-hero-visual">
        <span>${item.platform || profile.platform || "Platform"}</span>
        <b>${item.views || "Views"}</b>
      </div>
      <h3>${item.title || `Portfolio item ${index + 1}`}</h3>
      <p>${item.result || item.description || "เพิ่มงานเด่น สถิติ และ key result เพื่อทำให้โปรไฟล์พร้อมแชร์"}</p>
      <div class="export-mini-facts">
        <span>${item.brand || "Brand"}</span>
        <span>${item.likes || "Likes"}</span>
        <span>${item.shares || "Shares"}</span>
      </div>
    </article>`;
}

function getPortfolioHero() {
  const card = [...document.querySelectorAll("#portfolioItems .portfolio-card")].find((item) => {
    const values = [...item.querySelectorAll("input, textarea")].map((field) => field.type === "file" ? "" : field.value?.trim()).filter(Boolean);
    return values.length;
  }) || document.querySelector("#portfolioItems .portfolio-card");
  if (!card) return {};
  const inputs = [...card.querySelectorAll("input")].map((input) => input.value.trim());
  const textareas = [...card.querySelectorAll("textarea")].map((textarea) => textarea.value.trim());
  return {
    title: inputs[1] || "",
    brand: inputs[2] || "",
    platform: inputs[3] || "",
    objective: inputs[4] || "",
    views: inputs[5] || "",
    likes: inputs[6] || "",
    comments: inputs[7] || "",
    shares: inputs[8] || "",
    saves: inputs[9] || "",
    description: textareas[0] || "",
    result: card.querySelector("[data-key-result]")?.value.trim() || textareas[1] || "",
  };
}

function getEnteredRateCards() {
  return getRateCardItems().map((item) => {
    const parts = [item.price, item.platform, item.timeline, item.deliverables, item.usage, item.revision].filter(Boolean).join(" · ");
    return parts ? `${item.packageName}: ${parts}` : `${item.packageName}: เพิ่มราคา deliverables และเงื่อนไข`;
  });
}

function getRateCardItems() {
  const cards = [...document.querySelectorAll("#rateCards .rate-card")];
  return cards.length ? cards.map((card, index) => {
    const [packageName, price, timeline] = [...card.querySelectorAll("input")].map((input) => input.value.trim());
    const deliverables = card.querySelector("textarea")?.value.trim();
    const title = packageName || card.querySelector("h3")?.textContent?.trim() || `Rate Card ${index + 1}`;
    const usage = card.querySelector("[data-rate-usage]")?.value.trim();
    const revision = card.querySelector("[data-rate-revision]")?.value.trim();
    const platform = card.querySelector("[data-rate-platform]")?.value.trim();
    return {
      packageName: title,
      price,
      timeline,
      platform,
      usage,
      revision,
      deliverables,
    };
  }) : [];
}

function getEnteredPortfolioItems() {
  return getPortfolioCardItems().map((item) => {
    const metricLine = [item.views && `${item.views} views`, item.likes && `${item.likes} likes`, item.comments && `${item.comments} comments`, item.shares && `${item.shares} shares`, item.saves && `${item.saves} saves`].filter(Boolean).join(", ");
    const parts = [item.brand, item.platform, item.objective, metricLine, item.result || item.description].filter(Boolean).join(" · ");
    return parts ? `${item.title}: ${parts}` : `${item.title}: เพิ่มแบรนด์ ผลลัพธ์ และ metrics`;
  });
}

function getPortfolioCardItems() {
  const cards = [...document.querySelectorAll("#portfolioItems .portfolio-card")];
  return cards.length ? cards.map((card, index) => {
    const inputs = [...card.querySelectorAll("input")].map((input) => input.value.trim());
    const title = inputs[1] || `Portfolio item ${index + 1}`;
    const textareas = [...card.querySelectorAll("textarea")].map((textarea) => textarea.value.trim());
    const keyResult = card.querySelector("[data-key-result]")?.value.trim();
    return {
      title,
      brand: inputs[2] || "",
      platform: inputs[3] || "",
      objective: inputs[4] || "",
      views: inputs[5] || "",
      likes: inputs[6] || "",
      comments: inputs[7] || "",
      shares: inputs[8] || "",
      saves: inputs[9] || "",
      description: textareas[0] || "",
      result: keyResult || textareas[1] || "",
    };
  }) : [];
}

function getBuddyProfileData() {
  const contactEmail = $("profileContactEmail")?.value.trim() || "";
  return {
    creatorName: $("profileCreatorName")?.value.trim() || "",
    displayName: $("profileDisplayName")?.value.trim() || "",
    tagline: "",
    bio: $("profileBio")?.value.trim() || "",
    contactEmail,
    socialLinks: $("profileSocialLinks")?.value.trim() || "",
    contact: {
      email: contactEmail,
      social: $("profileSocialLinks")?.value.trim() || "",
    },
    platform: $("profilePlatform")?.value || getFormData().platform,
  };
}

function getSocialProfiles(profile = {}) {
  const social = profile.socialLinks || $("profileSocialLinks")?.value.trim() || "";
  return social ? [{ platform: "Social", url: social }] : [];
}

function getAudienceAnalytics() {
  const summary = getCreatorProfileSummary();
  return {
    totalFollowers: connectedChannels.find((channel) => channel.connected)?.followers || "Connected data",
    monthlyReach: summary.analysis ? `${summary.analysis.confidence}% fit` : "",
    averageViews: connectedChannels.find((channel) => channel.connected)?.avgViews || "",
    engagementRate: connectedChannels.find((channel) => channel.connected)?.engagement || "",
    ageDistribution: summary.analysis?.audience_tab?.audience_mix?.map((item) => `${item.type} ${item.percentage}%`).join(", ") || "",
    genderDistribution: "ดึงจาก connected channels",
    interests: summary.analysis?.selected_categories?.join(", ") || "",
  };
}

function getCheckedValues(containerId, fallback = []) {
  const values = [...document.querySelectorAll(`#${containerId} input:checked`)].map((input) => input.value);
  return values.length ? values : fallback;
}

function getTestimonials() {
  return [];
}

function contactLabel(key) {
  return { email: "Email", social: "Social" }[key] || key;
}

function renderMediaKitHeader(profile, analysis) {
  const name = profile.displayName || profile.creatorName || "เพิ่มชื่อโปรไฟล์";
  const audience = getAudienceAnalytics();
  return `
    <div class="media-kit-header">
      <div class="media-avatar" style="${state.profileImageData ? `background-image:url('${state.profileImageData}')` : ""}">${state.profileImageData ? "" : "เพิ่มรูป"}</div>
      <div class="media-kit-copy">
        <div class="vibe-badge-line"><span class="status-pill">${analysis.icon} ${analysis.creator_dna}</span></div>
        <h2>${name}</h2>
        <p class="media-kit-tagline">${profile.tagline || analysis.thai_title}</p>
        <p class="media-kit-bio">${profile.bio || "เพิ่ม Bio เพื่อให้แบรนด์เข้าใจตัวตนและสไตล์คอนเทนต์ของคุณ"}</p>
        <div class="media-kit-kpis">
          <span><b>${audience.totalFollowers || "Add"}</b><em>Followers</em></span>
          <span><b>${audience.monthlyReach || "Add"}</b><em>Monthly Reach</em></span>
          <span><b>${audience.averageViews || "Add"}</b><em>Avg Views</em></span>
          <span><b>${audience.engagementRate || "Add"}</b><em>Engagement</em></span>
        </div>
        <div class="media-kit-meta">
          <span>${analysis.thai_title}</span>
          <span>${profile.platform}</span>
          ${analysis.selected_categories.map((category) => `<span>${category}</span>`).join("")}
        </div>
        <button class="primary-button compact" type="button" ${profile.contactEmail ? "" : "disabled"}>${profile.contactEmail || "เพิ่มช่องทางติดต่อ"}</button>
      </div>
    </div>`;
}

function getCurrentTier(xp) {
  return [...creatorTiers].reverse().find((tier) => xp >= tier.min) || creatorTiers[0];
}

function renderProfileEmptyCard(title, text) {
  return `<article class="profile-empty-card"><h3>${title}</h3><p>${text}</p></article>`;
}

function renderRateCardBuilderItem(profile, index) {
  const platforms = ["TikTok", "Instagram", "Facebook", "YouTube", "X (Twitter)", "Bundle"];
  const platform = profile.platform || platforms[0];
  return `
    <article class="rate-card editable-card">
      <div class="section-title">
        <h3>Rate Card ${index + 1}</h3>
        <span class="status-pill">${platform === profile.platform ? "Main Platform" : "Optional"}</span>
      </div>
      <label><span>Package Name</span><input placeholder="${platform} Review Package" /></label>
      <div class="mini-field-grid">
        <label><span>Price</span><input placeholder="เช่น 15,000 บาท" /></label>
        <label><span>Timeline</span><input placeholder="เช่น 7 วัน" /></label>
        <label><span>Posting Platform</span><select data-rate-platform>${platforms.map((option) => `<option ${option === platform ? "selected" : ""}>${option}</option>`).join("")}</select></label>
        <label><span>Usage Rights</span><input data-rate-usage placeholder="Organic / Paid usage" /></label>
        <label><span>Revision Count</span><input data-rate-revision placeholder="เช่น 1 รอบ" /></label>
      </div>
      <label><span>Deliverables</span><textarea rows="3" placeholder="เช่น 1 Short Review Video, 1 Story Set, usage rights 30 days"></textarea></label>
    </article>`;
}

function renderRateCardBuilder(profile) {
  return `
    <div class="builder-toolbar">
      <p>เริ่มจากแพ็กเกจหลักก่อน แล้วค่อยเพิ่มแพ็กเกจเมื่อพร้อม</p>
      <button class="secondary-button compact" data-add-rate-card type="button">เพิ่ม Rate Card</button>
    </div>
    ${Array.from({ length: state.rateCardCount }, (_, index) => renderRateCardBuilderItem(profile, index)).join("")}`;
}

function renderPortfolioBuilderItem(profile, index) {
  return `
    <article class="portfolio-card editable-card portfolio-builder-card">
      <label class="portfolio-upload">
        <span>รูปผลงาน ${index + 1}</span>
        <div class="portfolio-image-drop">เพิ่มรูปงาน</div>
        <input type="file" accept="image/*" />
      </label>
      <label><span>Campaign / Content Title</span><input placeholder="ชื่องานหรือชื่อคอนเทนต์" /></label>
      <div class="mini-field-grid">
        <label><span>Brand</span><input placeholder="ชื่อแบรนด์" /></label>
        <label><span>Platform</span><input placeholder="${profile.platform}" /></label>
      </div>
      <label><span>Campaign Objective</span><input placeholder="Awareness / Consideration / Conversion" /></label>
      <label><span>Campaign Description</span><textarea rows="3" placeholder="สรุปโจทย์แบรนด์ กลยุทธ์คอนเทนต์ และบทบาทของคุณ"></textarea></label>
      <div class="metric-input-grid">
        <label><span>Views</span><input placeholder="-" /></label>
        <label><span>Likes</span><input placeholder="-" /></label>
        <label><span>Comments</span><input placeholder="-" /></label>
        <label><span>Shares</span><input placeholder="-" /></label>
        <label><span>Saves</span><input placeholder="-" /></label>
      </div>
      <label><span>Key Result</span><textarea data-key-result rows="2" placeholder="Generated 850K views organically within 72 hours."></textarea></label>
    </article>`;
}

function renderPortfolioBuilder(profile) {
  return `
    <div class="builder-toolbar">
      <p>เพิ่มผลงานทีละชิ้นเพื่อให้หน้านี้ไม่แน่นเกินไป</p>
      <button class="secondary-button compact" data-add-portfolio type="button">เพิ่ม Portfolio</button>
    </div>
    ${Array.from({ length: state.portfolioCount }, (_, index) => renderPortfolioBuilderItem(profile, index)).join("")}`;
}

function renderProfileChannelStats() {
  const loading = state.channelStatsRefreshing;
  return `
    <div class="channel-refresh-toolbar">
      <div>
        <h3>Connected Channel Stats</h3>
        <p>ข้อมูลสถิติจะดึงจากช่องทางที่เชื่อมกับโปรไฟล์ ไม่ต้องกรอกเอง</p>
      </div>
      <button class="secondary-button compact" data-refresh-channel-stats type="button" ${loading ? "disabled" : ""}>${loading ? "กำลังรีเฟรช..." : "รีเฟรชข้อมูล"}</button>
    </div>
    ${connectedChannels.map((channel) => `
    <article class="channel-stat-card ${channel.connected ? "connected" : "disconnected"}">
      <div class="section-title">
        <h3>${platformIcon(channel.platform)} ${channel.platform}</h3>
        <span class="connection-badge">${channel.status}</span>
      </div>
      <p>${channel.connected ? `@${channel.username}` : "ยังไม่ได้เชื่อมต่อ"}</p>
      ${loading && channel.connected ? `
        <div class="stats-loading-line"><i></i><span>กำลังดึงข้อมูลล่าสุดจาก ${channel.platform}</span></div>` : channel.connected ? `
        <div class="system-metric-grid">
          <span><b>Followers</b><em>ดึงจากระบบ</em></span>
          <span><b>Avg Views</b><em>ดึงจากระบบ</em></span>
          <span><b>Engagement</b><em>ดึงจากระบบ</em></span>
        </div>` : `<p class="empty-copy">ยังไม่มีข้อมูล เพราะช่องทางนี้ยังไม่ได้เชื่อมต่อกับโปรไฟล์</p>`}
    </article>`).join("")}`;
}

function updateExportState(profile) {
  const ready = Boolean((profile.displayName || profile.creatorName) && profile.bio && profile.contactEmail);
  ["exportPdfButton", "exportPngButton"].forEach((id) => {
    const button = $(id);
    if (button) button.disabled = !ready;
  });
  $("exportHint").textContent = ready ? "พร้อม Export เป็น media kit สำหรับส่งให้แบรนด์" : "กรุณากรอกข้อมูลโปรไฟล์ให้ครบก่อน Export";
}

function exportBuddyProfilePdf() {
  const profile = getBuddyProfileData();
  if (!isProfileExportReady(profile)) {
    alert("กรุณากรอกข้อมูลโปรไฟล์ให้ครบก่อน Export");
    return;
  }
  const win = window.open("", "_blank");
  if (!win) return;
  win.document.write(`
    <!doctype html><html lang="th"><head><meta charset="UTF-8"><title>Portfolio Media Kit</title>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <style>${getExportStyles()}</style></head><body>${$("mediaKitExport").outerHTML}<script>setTimeout(() => window.print(), 300);<\/script></body></html>`);
  win.document.close();
}

async function exportBuddyProfilePng() {
  const profile = getBuddyProfileData();
  if (!isProfileExportReady(profile)) {
    alert("กรุณากรอกข้อมูลโปรไฟล์ให้ครบก่อน Export");
    return;
  }
  const a = state.analysis;
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1520;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const grad = ctx.createLinearGradient(0, 0, 1080, 0);
  grad.addColorStop(0, "#8B5CF6");
  grad.addColorStop(1, "#EC4899");
  ctx.fillStyle = grad;
  roundedRect(ctx, 60, 60, 960, 220, 34);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 42px Kanit, sans-serif";
  ctx.fillText("PORTFOLIO", 96, 125);
  ctx.fillStyle = "#ffffff";
  roundedRect(ctx, 780, 92, 150, 150, 28);
  ctx.fill();
  if (state.profileImageData) {
    try {
      const image = await loadImage(state.profileImageData);
      ctx.save();
      roundedRect(ctx, 780, 92, 150, 150, 28);
      ctx.clip();
      ctx.drawImage(image, 780, 92, 150, 150);
      ctx.restore();
    } catch {
      ctx.fillStyle = "#8B5CF6";
      ctx.font = "700 24px Kanit, sans-serif";
      ctx.fillText("Profile", 810, 175);
    }
  } else {
    ctx.fillStyle = "#8B5CF6";
    ctx.font = "700 24px Kanit, sans-serif";
    ctx.fillText("Profile", 810, 175);
  }
  ctx.font = "800 58px Kanit, sans-serif";
  ctx.fillText(profile.displayName || profile.creatorName, 96, 200);
  ctx.font = "500 30px Kanit, sans-serif";
  ctx.fillText(`${a.icon} ${a.creator_dna} · ${a.thai_title}`, 96, 248);
  ctx.fillStyle = "#18181B";
  ctx.font = "700 34px Kanit, sans-serif";
  ctx.fillText("Creator Vibe", 72, 350);
  ctx.font = "400 27px Kanit, sans-serif";
  wrapCanvasText(ctx, profile.bio, 72, 395, 920, 38);
  const sections = [
    ["Platform", profile.platform],
    ["Categories", a.selected_categories.join(" · ")],
    ["Audience", a.audience_tab.main_audience_type],
    ["Brand Fit", a.audience_tab.brand_fit.join(" · ")],
    ["Content Style", a.overview_tab.content_formats.join(" · ")],
    ["Strengths", a.overview_tab.strengths.join(" · ")],
    ["Rate Card", getEnteredRateCards().join(" / ") || "เพิ่มแพ็กเกจ Rate Card"],
    ["Portfolio", getEnteredPortfolioItems().join(" / ") || "เพิ่มผลงานแรกของคุณ"],
    ["Contact", `${profile.contactEmail} ${profile.socialLinks}`],
  ];
  let y = 500;
  sections.forEach(([title, value]) => {
    ctx.fillStyle = "#FAF5FF";
    roundedRect(ctx, 60, y - 34, 960, 88, 18);
    ctx.fill();
    ctx.strokeStyle = "#E9D5FF";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "#8B5CF6";
    ctx.font = "800 24px Kanit, sans-serif";
    ctx.fillText(title, 88, y);
    ctx.fillStyle = "#18181B";
    ctx.font = "500 25px Kanit, sans-serif";
    wrapCanvasText(ctx, value, 88, y + 34, 880, 31);
    y += 112;
  });
  downloadCanvas(canvas, "portfolio-media-kit.png");
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function isProfileExportReady(profile) {
  return Boolean((profile.displayName || profile.creatorName) && profile.bio && profile.contactEmail);
}

function getExportStyles() {
  return `
    @page { size: A4; margin: 14mm; }
    * { box-sizing: border-box; }
    body { margin:0; font-family: Kanit, sans-serif; color:#18181B; background:#fff; }
    .export-media-kit { display:grid; gap:14px; width:100%; }
    .media-kit-header { display:grid; grid-template-columns:130px 1fr; gap:18px; padding:18px; border:1px solid #E9D5FF; border-radius:18px; background:#FAF5FF; }
    .media-avatar { width:130px; height:130px; border-radius:24px; display:grid; place-items:center; color:#8B5CF6; background:#fff center/cover; border:1px solid #E9D5FF; font-weight:700; }
    .status-pill,.tag,.summary-chips span { display:inline-flex; margin:0 6px 6px 0; border-radius:999px; padding:5px 9px; color:#6D28D9; background:#F3E8FF; font-weight:700; font-size:12px; }
    h2 { margin:6px 0; font-size:30px; } h3 { margin:0 0 6px; color:#8B5CF6; } p { margin:0 0 6px; color:#3F3F46; }
    section { padding:14px; border:1px solid #E9D5FF; border-radius:14px; background:#fff; }
    ul { margin:0; padding-left:18px; color:#3F3F46; }
    .primary-button { display:none; }
  `;
}
