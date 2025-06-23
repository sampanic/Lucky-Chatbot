document.addEventListener("DOMContentLoaded", function () {
    const icon = document.getElementById("chatbot-icon");
    const container = document.getElementById("chatbot-container");
    const closeBtn = document.getElementById("close-chatbot");
    const input = document.getElementById("chatbot-input");
    const send = document.getElementById("chatbot-send");
    const log = document.getElementById("chatbot-log");

    // Initialize chat as closed
    container.classList.add("hidden");

    const faq = {
    // ================== ENGLISH ==================
    "Hello|Hi|Hey": `Hey there! I'm the Lucky Panda Coin's personal assistant! 🐼✈️
While our fuzzy friends are off exploring the world, I'm here to help you with:

🎁 Daily giveaways – 88,888 coins a day (that's a lot of bamboo!)
💰 Token details
🏦 Wallet info
📈 Trading & more

I speak English, Español, 中文, and 日本語!
Just ask away — I’m quicker than a panda spotting snacks! 🤪`,

    // ================== SPANISH GREETINGS ==================
    "Hola|Buenas|Oye": `¡Hola! Soy el asistente personal de Lucky Panda Coin! 🐼✈️
Mientras nuestros amigos peludos exploran el mundo, estoy aquí para ayudarte con:

🎁 Sorteos diarios – 88,888 monedas al día (¡eso es mucho bambú!)
💰 Detalles del token
🏦 Información sobre billeteras
📈 Trading y más

¡Hablo Español, English, 中文 y 日本語!
Solo pregunta — ¡soy más rápido que un panda viendo snacks! 🤪`,

    // ================== CHINESE GREETINGS ==================
    "你好|嗨|嘿": `嘿！我是幸运熊猫币的个人助手！🐼✈️
在我们毛茸茸的朋友探索世界的同时，我在这里帮助你：

🎁 每日赠币 – 每天 88,888 枚（那可是很多竹子！）
💰 代币信息
🏦 钱包说明
📈 交易与更多

我会说 中文, English, Español 和 日本語！
尽管问吧——我比熊猫发现零食还快！🤪`,

    // ================== JAPANESE GREETINGS ==================
    "こんにちは|やあ|こんばんは": `やあ！私はLucky Panda Coinのパーソナルアシスタントです！🐼✈️
パンダたちが世界を探検している間、あなたをサポートします：

🎁 毎日のギブアウェイ – 1日88,888コイン（竹がたっぷり！）
💰 トークンの詳細
🏦 ウォレット情報
📈 取引など

日本語、English、Español、中文が話せます！
何でも聞いてください — パンダがおやつを見つけるより速いです！🤪`,

        "Chain": "Solana blockchain.",
        "Giveaways": "We giveaway 88,888 coins every day for five years!",
        "Launch date": "Lucky Panda Coin is expected to launch in Q3 2025.",
        "Major exchanges": "We plan to start with decentralized exchanges and work towards listing on major exchanges.",
        "Buy": "You will be able to buy Lucky Panda Coin on Solana blockchain-based DEXs like Raydium and Orca.",
        "Tokenomics": "The tokenomics of Lucky Panda Coin include daily giveaways, strategic reserves, and community rewards.",
        "Whitepaper": "Yes! Our whitepaper is available on our official website.",
        "Contract address": "The contract address will be announced at launch.",
        "Minimum amount": "No, you can buy any amount of Lucky Panda Coin based on the available liquidity.",
        "Presale": "There are no current plans for a presale.",
        "Win giveaway": "If you win, the coins will be sent directly to your wallet.",
        "Team doxxed": "The team remains semi-anonymous but regularly engages with the community.",
        "Roadmap": "The roadmap includes exchange listings, community events, and partnerships.",
        "Join community": "Join us on Telegram, Twitter, and Bluesky for the latest updates!",
        "Trading fees": "There are minimal trading fees, depending on the exchange you use.",
        "Price prediction": "We don't speculate on price, but our focus is on growing the community and adoption.",
        "Release date": "The release date is the third quarter of 2025.",
        "Website": "Visit our official website: www.luckypandacoin.net",
        "Mine": "No, Lucky Panda Coin is not a mineable cryptocurrency. It is distributed through giveaways and trading.",
        "NFT collection": "Yes, we are exploring the possibility of launching an exclusive NFT collection for our community.",
        "Physical assets": "No, Lucky Panda Coin is purely a digital asset with no physical backing.",
        "Payments": "Currently, Lucky Panda Coin is mainly for giveaways and trading, but we are looking into future payment integrations.",
        "Report scam": "Please report scams to our official channels on X & Bluesky and be cautious of impersonators.",
        "Merchandise store": "We do...https://www.etsy.com/shop/luckypandacoinshop",
        "Community": "You can join us on Twitter, Bluesky, and Telegram to stay updated and participate in giveaways.",
        "Twitter address": "The Twitter address for Lucky Panda Coin is https://x.com/luckyPandaCoin.",
        "X address": "The X address for Lucky Panda Coin is https://x.com/luckyPandaCoin.",
        "Bluesky address": "The Bluesky address for Lucky Panda Coin is https://bsky.app/profile/luckypandacoin.bsky.social.",
        "What is this": "Introducing Lucky Panda Coin, the ultimate party, giveaway, and contest cryptocurrency that's taking the world by storm! At the heart of our community is the thrilling 'Where in the World is the Lucky Panda?'",
        "What is Lucky Panda Coin": "The Lucky Panda Coin is a meme-based cryptocurrency with a fun and rewarding twist.",
        "Symbol": "The symbol for The Lucky Panda Coin is $LUCKY8.",
        "Total supply": "The total supply of The Lucky Panda Coin is 2,930,000,000 coins.",
        "Wallet": "You can store The Lucky Panda Coin in Phantom Wallet.",
        "Unique": "The Lucky Panda Coin is unique because it gives away 88,888 coins every day for five years.",
        "Earn": "You can earn The Lucky Panda Coin through daily giveaways.",
        "Daily coins": "88,888 coins are given away daily for five years.",
        "Blockchain": "The Lucky Panda Coin is built on the Solana blockchain.",
        "Whitepaper available": "Yes, there is a whitepaper explaining the vision and details of The Lucky Panda Coin on our website, LuckyPandaCoin.net.",
        "Exchanges": "The Lucky Panda Coin will initially be available on decentralized exchanges compatible with Solana blockchain.",
        "Participate giveaways": "Details on participation are announced on our official channels.",
        "Deflationary": "We burn 0.2% of every transaction making the Lucky Panda Coin deflationary!",
        "Security measures": "The Lucky Panda Coin leverages the security features of the Solana blockchain and audits are conducted regularly.",
        "Staking options": "Staking options for The Lucky Panda Coin are not currently available.",
        "Connect Phantom": "Simply download Phantom Wallet, create an account, and connect it to the Solana network.",
        "Roadmap details": "The roadmap includes community building, exchange listings, and unique events over the next five years.",
        "Community rewards": "The Lucky Panda Coin rewards its community through daily giveaways and interactive events.",
        "Learn more": "Visit our official website LuckyPandaCoin.net and follow our social media channels for updates.",
        "Minimum transaction": "The minimum transaction amount is 1 Lucky Panda Coin.",
        "Liquidity": "Liquidity is ensured through liquidity pools and strategic partnerships.",
        "Pump and dump": "We have two wallets, the Marketing & Giveaway wallet and the Developer wallet, making the Lucky Panda Coin wallets easy to monitor.",
        "Celebrity endorsements": "Currently, we do not have any celebrity endorsements.",
        "Community updates": "The community is updated daily through our official channels.",
        "Charitable initiatives": "Yes, we are planning to partner with charities for special events.",
        "Governance": "Decisions are made, with community feedback.",
        "Market relevance": "We focus on continuous innovation and community engagement.",
        "Mobile wallet": "We suggest using Phantom wallet or any Solana blockchain compatible wallet.",
        "Validator process": "We do not have a need for this service.",
        "Geographic restrictions": "There are no geographic restrictions for buying or trading Lucky Panda Coin.",
        "Institutional investors": "We are working on partnerships and providing detailed project reports.",
        "Whale manipulation": "Anti-whale mechanisms and continuous monitoring are in place.",
        "Cross-chain": "Yes, cross-chain compatibility is in our future plans.",
        "Transaction speed": "Our transaction speed is comparable to leading meme cryptocurrencies.",
        "Credit card": "Not at this time.",
        "Regulations": "We have a legal team to ensure compliance with regulations.",
        "Referral program": "Yes, we are working on several referral programs with rewards.",
        "Transparency": "We will try to regularly publish updates.",
        "Meme coin": "A meme coin is a cryptocurrency inspired by internet memes and cultural trends.",
        "Developer tokens": "The total owned by the developers is 6.5%, with 5.5% for the giveaways and marketing.",
        "Circulation": "The total circulation of The Lucky Panda Coin is 2,930,000,000 coins.",
        "Transaction fees": "0.8% fee for administrative and marketing expenses",

        // ================== SPANISH ==================
        "Cadena": "Blockchain de Solana.",
        "Sorteos": "¡Regalamos 88,888 monedas todos los días durante cinco años!",
        "Fecha lanzamiento": "Lucky Panda Coin se lanzará en el tercer trimestre de 2025.",
        "Exchanges principales": "Planeamos comenzar con exchanges descentralizados y luego listarnos en exchanges principales.",
        "Comprar": "Podrás comprar Lucky Panda Coin en DEXs basados en Solana como Raydium y Orca.",
        "Tokenomics español": "Los tokenomics incluyen sorteos diarios, reservas estratégicas y recompensas para la comunidad.",
        "Whitepaper español": "¡Sí! Nuestro whitepaper está disponible en nuestro sitio web oficial.",
        "Dirección contrato": "La dirección del contrato se anunciará en el lanzamiento.",
        "Monto mínimo": "No, puedes comprar cualquier cantidad según la liquidez disponible.",
        "Preventa": "Actualmente no hay planes de preventa.",
        "Ganar sorteo": "Si ganas, las monedas se enviarán directamente a tu billetera.",
        "Equipo doxxed": "El equipo permanece semi-anónimo, pero interactúa regularmente con la comunidad.",
        "Hoja ruta": "La hoja de ruta incluye listados, eventos comunitarios y asociaciones.",
        "Unirse comunidad": "¡Únete a nosotros en Telegram, Twitter y Bluesky para las últimas novedades!",
        "Tarifas trading": "Las tarifas de trading son mínimas, según el exchange que uses.",
        "Predicción precio": "No especulamos sobre el precio; nuestro enfoque es el crecimiento y adopción comunitaria.",
        "Fecha liberación": "La fecha de lanzamiento es el tercer trimestre de 2025.",
        "Sitio web": "Visita nuestro sitio oficial: www.luckypandacoin.net",
        "Minar": "No, no se puede minar. Se distribuye mediante sorteos y trading.",
        "Colección NFT": "Sí, estamos explorando lanzarla para nuestra comunidad.",
        "Activos físicos": "No, es un activo digital sin respaldo físico.",
        "Pagos": "Por ahora es solo para sorteos y trading, pero evaluamos integraciones futuras.",
        "Reportar estafa": "Reporta estafas en nuestros canales oficiales en X y Bluesky, y ten cuidado con impostores.",
        "Tienda merch": "Sí… https://www.etsy.com/shop/luckypandacoinshop",
        "Comunidad español": "Puedes unirte en Twitter, Bluesky y Telegram para estar al día y participar en sorteos.",
        "Twitter dirección": "https://x.com/luckyPandaCoin",
        "X dirección": "https://x.com/luckyPandaCoin",
        "Bluesky dirección": "https://bsky.app/profile/luckypandacoin.bsky.social",
        "Qué es esto": "Presentamos Lucky Panda Coin: la criptomoneda de fiestas, sorteos y concursos que está revolucionando el mundo. ¡Vive el reto '¿Dónde está el Panda Afortunado?'!",
        "Qué es Lucky Panda": "Es una criptomoneda meme con un toque divertido y gratificante.",
        "Símbolo": "El símbolo es $LUCKY8.",
        "Suministro total": "El suministro total es de 2.930.000.000 monedas.",
        "Billetera": "Puedes usar Phantom Wallet.",
        "Único": "Regalamos 88.888 monedas cada día durante cinco años.",
        "Ganar": "Participando en sorteos diarios.",
        "Monedas diarias": "88.888 monedas diarias durante cinco años.",
        "Blockchain español": "Está construido sobre la blockchain de Solana.",
        "Whitepaper disponible": "Sí, disponible en LuckyPandaCoin.net.",
        "Exchanges listados": "En exchanges descentralizados compatibles con Solana.",
        "Participar sorteos": "Los detalles se anuncian en nuestros canales oficiales.",
        "Deflacionaria": "¡Sí! Quemamos un 0,2% de cada transacción.",
        "Medidas seguridad": "Aprovechamos la seguridad de Solana y realizamos auditorías regulares.",
        "Opciones staking": "Todavía no ofrecemos staking.",
        "Conectar Phantom": "Descarga Phantom, crea cuenta y conéctala a Solana.",
        "Hoja ruta detalles": "Incluye construcción comunitaria, listados de exchange y eventos únicos para los próximos cinco años.",
        "Recompensas comunidad": "Con sorteos diarios y eventos interactivos.",
        "Aprender más": "Visita LuckyPandaCoin.net y síguenos en redes.",
        "Transacción mínima": "1 Lucky Panda Coin.",
        "Liquidez español": "Con pools de liquidez y asociaciones.",
        "Pump and dump español": "Usamos dos wallets (Marketing/Giveaway y Desarrollador) para monitoreo.",
        "Endosos famosos": "No tenemos endorsements por celebridades.",
        "Actualizaciones comunidad": "La comunidad se actualiza diariamente en canales oficiales.",
        "Iniciativas benéficas": "Sí, planeamos eventos especiales con ONG.",
        "Gobernanza español": "Se toma con feedback comunitario.",
        "Relevancia mercado": "Innovación continua y compromiso comunitario.",
        "Billetera móvil": "Recomendamos Phantom o cualquier compatible con Solana.",
        "Proceso validador": "No hay planes para esto.",
        "Restricciones geográficas": "No hay restricciones de compra o trading.",
        "Inversores institucionales": "Trabajamos en asociaciones y reportes detallados.",
        "Manipulación whales": "Implementamos mecanismos anti-ballena y monitoreo continuo.",
        "Compatibilidad cross-chain": "Sí, está en nuestros planes futuros.",
        "Velocidad transacción": "Comparable a las principales meme coins.",
        "Tarjeta crédito": "Por ahora no.",
        "Regulaciones español": "Contamos con un equipo legal para asegurar cumplimiento.",
        "Programa referidos": "Sí, estamos desarrollando varios.",
        "Transparencia español": "Publicaremos actualizaciones regularmente.",
        "Meme coin español": "Una criptomoneda inspirada en memes de internet y tendencias culturales.",
        "Tokens desarrolladores": "Los desarrolladores poseen un 6,5%, de los cuales un 5,5% es para marketing y sorteos.",
        "Circulación español": "Hay 2.930.000.000 coins en circulación.",
        "Tarifas transacción": "Tarifa del 0.8% para gastos administrativos y marketing.",

        // ================== CHINESE ==================
        "链": "Solana 区块链。",
        "赠品": "我们每天赠送 88,888 枚硬币，持续五年！",
        "发布日期": "预计将在 2025 年第三季度发布。",
        "主要交易所": "我们计划从去中心化交易所开始，然后逐步在主要交易所上市。",
        "购买": "你可以在基于 Solana 的 DEX（如 Raydium 和 Orca）购买。",
        "代币经济学": "包括每日赠品、战略储备和社区奖励。",
        "白皮书": "有！我们的白皮书在官网上可查阅。",
        "合约地址": "合约地址将在发布时公布。",
        "最低数量": "没有最低购买限制，取决于流动性。",
        "预售": "目前暂无预售计划。",
        "赢得赠品": "如果中奖，硬币会直接发送到你的钱包。",
        "团队实名": "团队保持半匿名状态，但会定期与社区互动。",
        "路线图": "包括交易所上市、社区活动和战略合作。",
        "加入社区": "加入我们的 Telegram、Twitter 和 Bluesky 获取最新资讯！",
        "交易费用": "交易费用很低，按使用交易所决定。",
        "价格预测": "我们不进行价格预测，重点在社区增长和采用。",
        "发行日期": "发行时间为 2025 年第三季度。",
        "官网": "访问我们的官网：www.luckypandacoin.net",
        "挖矿": "不可以。Lucky Panda Coin 不可挖矿，只通过赠品和交易分发。",
        "NFT 系列": "会的，我们正在探索为社区推出专属 NFT 系列。",
        "实物资产": "没有，它是一种纯数字资产，没有实物支持。",
        "支付": "目前主要用于赠品和交易，但我们正在研究未来支付集成。",
        "举报诈骗": "请通过我们在 X 和 Bluesky 的官方渠道举报，并注意骗子。",
        "周边商店": "有哦… https://www.etsy.com/shop/luckypandacoinshop",
        "社区中文": "请访问 LuckyPandaCoin.net 并关注社交媒体。",
        "Twitter 地址": "https://x.com/luckyPandaCoin",
        "X 地址": "https://x.com/luckyPandaCoin",
        "Bluesky 地址": "https://bsky.app/profile/luckypandacoin.bsky.social",
        "这是什么": "介绍 Lucky Panda Coin —— 引领派对、赠品和竞赛的加密货币，惊艳全球！加入'荣幸熊猫在哪里？'挑战吧！",
        "Lucky Panda 是什么": "这是一款带有趣味和奖励机制的表情包加密货币。",
        "符号": "符号是 $LUCKY8。",
        "总供应量": "总供应量为 29.3 亿枚硬币。",
        "推荐钱包": "推荐使用 Phantom Wallet。",
        "特别之处": "每天赠送 88,888 枚硬币，持续五年。",
        "如何获得": "参与每日赠品即可。",
        "每日赠送": "每日赠送 88,888 枚硬币，连续五年。",
        "区块链": "基于 Solana 区块链构建。",
        "白皮书可用": "有，请访问 LuckyPandaCoin.net",
        "交易所上线": "在兼容 Solana 的去中心化交易所上线。",
        "参与赠品": "参与细节将在官方渠道公布。",
        "通缩币": "是的，每笔交易会销毁 0.2%。",
        "安全措施": "借助 Solana 的安全特性，并定期接受审计。",
        "质押选项": "目前暂无质押选项。",
        "连接 Phantom": "下载 Phantom，创建帐户并连接 Solana。",
        "路线图详情": "未来五年包括社区建设、交易所上线及特色活动。",
        "社区奖励": "通过每日赠品和互动活动。",
        "了解更多": "请访问 LuckyPandaCoin.net 并关注社交媒体。",
        "最小交易量": "最低可交易 1 枚 Lucky Panda Coin。",
        "流动性中文": "通过流动性池和战略合作伙伴。",
        "拉高出货": "使用市场/赠品钱包与开发者钱包双重监控机制。",
        "名人代言": "没有名人背书。",
        "社区更新频率": "每天在官方渠道进行更新。",
        "慈善计划": "有，计划与公益组织合作举办活动。",
        "治理结构": "以社区反馈为基础做决策。",
        "市场相关性": "专注于持续创新和社区参与。",
        "移动钱包": "建议使用 Phantom 或其他兼容 Solana 的钱包。",
        "验证人流程": "暂无此计划。",
        "地域限制": "购买和交易无地域限制。",
        "机构投资": "我们正在进行合作并提供详尽的项目报告。",
        "鲸鱼操控": "已实施反鲸机制并持续监控。",
        "跨链兼容": "是的，未来计划支持跨链。",
        "交易速度": "与主流 meme 币相当。",
        "信用卡计划": "暂时没有。",
        "监管合规": "我们有法律团队确保符合监管。",
        "推荐计划": "是的，正在开发多项。",
        "透明度中文": "努力定期发布更新。",
        "迷因币": "受互联网迷因和文化趋势启发的加密货币。",
        "开发者代币": "开发者持有 6.5%，其中 5.5% 用于市场营销和赠品。",
        "流通量": "共有 29.3 亿枚代币在流通中。",
        "交易手续费": "收取 0.8% 用于管理及营销费用。",

        // ================== JAPANESE ==================
        "チェーン": "Solana ブロックチェーン。",
        "プレゼント": "5年間、毎日 88,888 コインを配布します！",
        "発売日": "2025年第3四半期に発売予定です。",
        "大手取引所": "まず分散型取引所から開始し、大手にも上場を目指します。",
        "購入": "Solana ベースの DEX（Raydium、Orca など）で購入できます。",
        "トークノミクス": "毎日のプレゼント、戦略的リザーブ、コミュニティ報酬が含まれます。",
        "ホワイトペーパー": "はい、公式サイトで入手可能です。",
        "コントラクトアドレス": "発売日に発表されます。",
        "最低購入額": "流動性に応じた任意の量を購入できます。",
        "プレセール": "現時点では予定していません。",
        "プレゼント当選": "当選したら、コインは直接ウォレットに送られます。",
        "チームドックス": "チームは半匿名ですが、コミュニティと頻繁に交流しています。",
        "ロードマップ": "取引所リスト、コミュニティイベント、パートナーシップが含まれます。",
        "コミュニティ参加": "Telegram、Twitter、Bluesky で最新情報をゲット！",
        "取引手数料": "使用する取引所によって非常に低いです。",
        "価格予測": "価格は予測しません。コミュニティ拡大と採用に重点を置いています。",
        "リリース日": "2025年第3四半期です。",
        "ウェブサイト": "公式サイト: www.luckypandacoin.net",
        "マイニング": "できません。ギブアウェイと取引を通じて配布されます。",
        "NFTコレクション": "はい、コミュニティ向けに検討中です。",
        "実物資産": "いいえ、純粋にデジタル資産です。",
        "支払い": "現時点ではギブアウェイと取引のみですが、将来の統合を検討中です。",
        "詐欺報告": "X と Bluesky の公式チャネルで報告し、詐欺に注意してください。",
        "グッズストア": "あります… https://www.etsy.com/shop/luckypandacoinshop",
        "コミュニティ": "Twitter、Bluesky、Telegram で参加可能。",
        "Twitterアドレス": "https://x.com/luckyPandaCoin",
        "Xアドレス": "https://x.com/luckyPandaCoin",
        "Blueskyアドレス": "https://bsky.app/profile/luckypandacoin.bsky.social",
        "これは何": "Lucky Panda Coin は、パーティ・ギブアウェイ・コンテスト向けの究極の暗号通貨です。『ラッキーパンダはどこにいる？』チャレンジに参加しよう！",
        "ラッキーパンダとは": "楽しく報酬があるミームコインです。",
        "シンボル": "$LUCKY8 です。",
        "総供給量": "29億3千万コインです。",
        "ウォレット": "Phantom Wallet を推奨します。",
        "特別": "5年間、毎日 88,888 コインを配布！",
        "稼ぐ方法": "毎日のギブアウェイに参加してください。",
        "毎日配布": "5年間、毎日 88,888 コイン。",
        "ブロックチェーン": "Solana ブロックチェーン上に構築。",
        "ホワイトペーパーあり": "はい、LuckyPandaCoin.net にて。",
        "取引所": "Solana に対応する DEX にて。",
        "ギブアウェイ参加": "公式チャネルで詳細発表。",
        "デフレコイン": "はい、取引の 0.2% をバーンします。",
        "セキュリティ": "Solana のセキュリティ機能を活用、定期監査あり。",
        "ステーキング": "現在は未提供です。",
        "Phantom接続": "Phantom をダウンロードし、アカウントを作成して Solana に接続してください。",
        "ロードマップ詳細": "今後5年間にコミュニティ構築、取引所上場、ユニークイベントを予定。",
        "コミュニティ報酬": "毎日のギブアウェイとインタラクティブイベント。",
        "詳細を知る": "LuckyPandaCoin.net を訪れて、SNS もチェック！",
        "最小取引量": "1 Lucky Panda Coin から。",
        "流動性": "流動性プールと提携で確保しています。",
        "ポンプアンドダンプ防止": "マーケ・ギブアウェイ用と開発用の二つのウォレットで監視。",
        "有名人推薦": "いいえ、現在はありません。",
        "コミュニティ更新": "公式チャネルで毎日更新！",
        "チャリティ計画": "はい、今後 NGO とイベントを予定。",
        "ガバナンス": "コミュニティのフィードバックに基づいて決定します。",
        "市場関連性": "継続的な革新とコミュニティ参加に専念。",
        "モバイルウォレット": "Phantom または Solana 対応ウォレット推奨。",
        "検証者プロセス": "現時点では計画なし。",
        "地理的制限": "購入・取引ともに制限なし。",
        "機関投資家": "提携と詳細なプロジェクト報告を進めています。",
        "ホエール操作防止": "アンチホエール機能と監視体制あり。",
        "クロスチェーン": "はい、将来的に対応予定。",
        "トランザクション速度": "主要ミームコインと同等速度です。",
        "カード発行": "現時点はありません。",
        "規制順守": "法務チームを置いて順守を保証。",
        "紹介プログラム": "はい、いくつか計画中です。",
        "透明性": "定期的にアップデートを公開します。",
        "ミームコイン": "インターネットのミームや文化トレンドから派生した暗号通貨。",
        "開発者所有": "開発者は合計 6.5%、その内 5.5% がマーケ・ギブアウェイ用です。",
        "流通トークン": "29.3 億トークンが流通中です。",
        "取引手数料": "管理費・マーケティング費用として 0.8% がかかります。"
    };

    function getBotResponse(userInput) {
        userInput = userInput.toLowerCase().trim();
        const words = userInput.split(/\s+/).filter(word => word.length > 0);
        const wordCount = words.length;

        if (wordCount === 0) return "Please ask a question!";

        // Check for single or two-word matches
        for (let key in faq) {
            const keywords = key.split("|");
            for (let keyword of keywords) {
                if (wordCount === 1 && words[0] === keyword.toLowerCase()) {
                    return faq[key];
                } else if (wordCount === 2 && words.some(word => keyword.toLowerCase().includes(word))) {
                    return faq[key];
                }
            }
        }

        // Fallback to partial match if no exact match
        for (let key in faq) {
            const keywords = key.split("|");
            for (let keyword of keywords) {
                if (words.some(word => keyword.toLowerCase().includes(word))) {
                    return faq[key];
                }
            }
        }

        return "Sorry, I didn't understand that. Try rephrasing the question...";
    }

    // Toggle chat visibility
    function toggleChat() {
        container.classList.toggle("hidden");
        if (!container.classList.contains("hidden")) {
            container.classList.add("show");
        } else {
            container.classList.remove("show");
        }
    }

    // Event listeners
    icon.addEventListener("click", toggleChat);
    closeBtn.addEventListener("click", toggleChat);

    function sendMessage() {
        const userInput = input.value.trim();
        if (userInput === "") return;
        
        const response = getBotResponse(userInput);
        log.innerHTML += `<div class="user-message"><strong>You:</strong> ${userInput}</div>`;
        log.innerHTML += `<div class="bot-message"><strong>Bot:</strong> ${response.replace(/\n/g, '<br>')}</div>`;
        input.value = "";
        log.scrollTop = log.scrollHeight;
    }

    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });
    
    send.addEventListener("click", sendMessage);
});