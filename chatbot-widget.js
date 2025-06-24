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

        
        "X": "https://x.com/luckyPandaCoin",
        "Blueskye Address": "https://x.com/luckyPandaCoin",
        "Chain": "https://bsky.app/profile/luckypandacoin.bsky.social",
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
         "What is Lucky Panda Coin?": "The Lucky Panda Coin is a meme coin on the Solana Blockchain, bringing fun and rewards to the crypto world!",
  "Why is Lucky Panda Coin different?": "We give away 88,888 coins daily! Just guess the Lucky Panda’s location in our daily picture, share the post on X, and you’re eligible for a random daily drawing. Check it out: https://x.com/luckyPandaCoin",
        "Is Lucky Panda Coin just another dog or cat coin trying to ride the meme wave?": "Nah, pandas are the ultimate meme champs—cute, clumsy, and ready to roll! Lucky Panda Coin brings bamboo-fueled fun to crypto with a community all about good vibes and easy investing.",
  "What’s stopping Lucky Panda Coin from crashing like my last Tinder date?": "Unlike your love life, we’ve got a solid community and AI-powered blockchain tech to keep things steady. Pandas don’t ghost—they nap and come back stronger!",
  "Can I buy a real panda with Lucky Panda Coin?": "Tempting, but no. Pandas are too busy munching bamboo to care about crypto. Join our community and maybe adopt a virtual panda—way less cleanup!",
  "Why should I trust a coin named after a bear that can’t even climb trees properly?": "Pandas might stumble, but they land on their feet! Lucky Panda Coin is built on trust, transparency, and a community that’s got your back—no tree-climbing required.",
  "Is this coin going to make me rich or just make me laugh?": "Why choose? Jump into the Lucky Panda crew for laughs galore, and who knows—the moon’s looking pretty cozy for pandas these days!",
  "What’s the deal with all this AI stuff? Is Lucky Panda Coin run by robots?": "No robots, just smart tech! We use AI to keep crypto simple and secure, so you can focus on the fun while we handle the geeky bits.",
  "How do I know Lucky Panda Coin isn’t a scam like my cousin’s ‘investment’ in magic beans?": "No magic beans here! Lucky Panda Coin is legit with real blockchain tech and an open community. Check our whitepaper—it’s way better than your cousin’s schemes.",
  "Can I use Lucky Panda Coin to buy bamboo for my pet panda?": "Pet panda? Fancy! You can’t buy bamboo directly, but trade Lucky Panda Coin in our community marketplace—maybe snag some panda snacks instead!",
  "Is Lucky Panda Coin going to be the next Bitcoin or just another crypto wannabe?": "Bitcoin’s cool, but we’re the cuddly underdog! Lucky Panda Coin carves its own path with memes, community, and a dash of AI magic. Hop on!",
  "What’s the point of Lucky Panda Coin if I can’t flex it on my Instagram?": "Oh, you can flex! Mint some Lucky Panda NFTs, join our community challenges, and show off your panda pride. Your Insta’s about to get cuter!",
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
        "Total supply": "The total supply of Lucky Panda Coin is 2,930,000,000 coins.",
"Token burn": "We burn 0.2% of every transaction making the coin deflationary!",
"Blockchain used": "Lucky Panda Coin is built on the Solana blockchain.",
"Contract": "The contract address will be announced at launch.",
"Taxes": "There's a 0.8% fee for administrative and marketing expenses.",

"Utility": "Currently used for giveaways and trading, with future payment integrations planned.",
"Staking": "Staking options are not currently available.",
"NFT plans": "Yes, we're exploring an exclusive NFT collection for our community.",
"Merch use": "Visit our merchandise store: https://www.etsy.com/shop/luckypandacoinshop",
"Partnerships": "We're working on strategic partnerships - stay tuned!",

"Giveaway details": "We giveaway 88,888 coins every day for five years!",
"Join community": "Join us on Telegram, Twitter, and Bluesky for updates!",
"Team anonymity": "The team remains semi-anonymous but engages regularly with the community.",
"Team members": "Our focus is on building rather than personal fame.",
"Celebrity backing": "Currently we don't have any celebrity endorsements.",

"CEX listings": "We plan to start with DEXs and work towards major exchange listings.",
"First DEX": "Will be available on Solana DEXs like Raydium and Orca.",
"Listing roadmap": "Exchange listings are part of our development roadmap.",
"How to buy": "Buy on Solana-based DEXs at launch.",
"Liquidity locks": "Liquidity is ensured through pools and strategic partnerships.",

"Next milestones": "Focusing on community building and exchange listings.",
"Cross-chain": "Cross-chain compatibility is in our future plans.",
"Mobile app": "We recommend using Phantom wallet or other Solana-compatible wallets.",
"Hype strategy": "Through daily giveaways and interactive community events.",
"Charity": "We're planning to partner with charities for special events.",

"Panda theme": "Pandas represent luck and our fun, rewarding community spirit!",
"Find Panda game": "Our 'Where in the World is the Lucky Panda?' is coming soon!",
"Meme contests": "Community engagement is key - stay tuned for announcements!",
"Community stories": "Our community surprises us daily with their creativity!",
"Pizza topping": "Extra bamboo, of course - the panda's favorite! 🐼🎋",
"X": "https://x.com/luckyPandaCoin",
  "Blueskye Address": "https://x.com/luckyPandaCoin",
  "What is a meme coin?": "A meme coin is a cryptocurrency inspired by internet memes, jokes, or cultural trends. It’s often fun and community-driven!",
  "How do meme coins work?": "Meme coins work like other cryptocurrencies—they're digital tokens on a blockchain that people can buy, sell, or use.",
  "Are meme coins real money?": "Meme coins aren't traditional money, but they can have real value and be traded for other cryptocurrencies or goods.",
  "What makes meme coins valuable?": "Value comes from community support, scarcity, popularity, and sometimes utility or hype.",
  "Why do people buy meme coins?": "People buy meme coins for fun, to support a project, or in hopes the value goes up with popularity.",
  "Are meme coins safe?": "Like all crypto, meme coins carry risk. Always use trusted wallets and research the project before investing.",
  "What’s the point of a meme coin?": "Meme coins can build community, reward participation, spread joy, or even support real-world causes—plus, they're fun!",
  "How is this meme coin different from others?": "Lucky Panda Coin gives away 88,888 coins daily through a fun picture-spotting contest and supports global community fun.",
  "How do meme coins get popular?": "They get popular through memes, social media, giveaways, and strong community vibes!",
  "Is this meme coin just a joke?": "It started with fun, but Lucky Panda Coin has real daily giveaways, a smart contract, and a growing community.",
  "How do you give the coins away?": "We do a random daily drawing if you correctly find the Lucky Panda in the day's image!",
  "How do you do the giveaways?": "We do a random daily drawing, just correctly find the Lucky Panda in the day's image and share the post!",

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
        "Suministro total": "El suministro total es de 2.930.000.000 monedas.",
"Quema tokens": "¡Quemamos un 0,2% de cada transacción haciéndola deflacionaria!",
"Blockchain español": "Está construido sobre la blockchain de Solana.",
"Contrato español": "La dirección del contrato se anunciará en el lanzamiento.",
"Impuestos": "Hay una tarifa del 0.8% para gastos administrativos y marketing.",

"Utilidad español": "Actualmente para sorteos y trading, con futuras integraciones de pago.",
"Staking español": "Todavía no ofrecemos staking.",
"Planes NFT": "Sí, estamos explorando una colección NFT exclusiva.",
"Usar merch": "Visita nuestra tienda: https://www.etsy.com/shop/luckypandacoinshop",
"Alianzas": "Estamos trabajando en alianzas estratégicas - ¡atentos!",

"Detalles sorteo": "¡Regalamos 88,888 monedas todos los días durante cinco años!",
"Unirse comunidad": "¡Únete en Telegram, Twitter y Bluesky para actualizaciones!",
"Equipo anónimo": "El equipo permanece semi-anónimo pero interactúa regularmente.",
"Miembros equipo": "Nos enfocamos en construir más que en fama personal.",
"Celebridades español": "Actualmente no tenemos endorsements por celebridades.",

"Listados CEX": "Planeamos comenzar con DEXs y avanzar hacia exchanges principales.",
"Primer DEX": "Estará disponible en DEXs de Solana como Raydium y Orca.",
"Hoja ruta listados": "Los listados de exchanges son parte de nuestro desarrollo.",
"Cómo comprar": "Compra en DEXs basados en Solana al lanzamiento.",
"Bloqueos liquidez": "La liquidez se asegura mediante pools y alianzas.",

"Próximos hitos": "Enfocados en construcción comunitaria y listados de exchanges.",
"Cross-chain español": "La compatibilidad cross-chain está en nuestros planes.",
"App móvil": "Recomendamos Phantom u otras billeteras compatibles con Solana.",
"Estrategia hype": "A través de sorteos diarios y eventos comunitarios interactivos.",
"Caridad español": "Planeamos asociarnos con ONGs para eventos especiales.",

"Tema panda": "¡Los pandas representan la suerte y nuestro espíritu comunitario divertido!",
"Juego panda": "Próximamente nuestro '¿Dónde está el Panda Afortunado?'",
"Concursos memes": "¡La participación comunitaria es clave - atentos a anuncios!",
"Historias comunidad": "¡Nuestra comunidad nos sorprende diariamente con su creatividad!",
"Topping pizza": "¡Bambú extra, por supuesto - el favorito de los pandas! 🐼🎋",
"¿Qué es una moneda meme?": "Una moneda meme es una criptomoneda inspirada en memes de Internet, bromas o tendencias culturales. ¡Suele ser divertida y dirigida por la comunidad!",
  "¿Cómo funcionan las monedas meme?": "Funcionan como otras criptomonedas: son tokens digitales en una blockchain que puedes comprar, vender o usar.",
  "¿Las monedas meme son dinero real?": "No son dinero tradicional, pero pueden tener valor real y usarse para intercambios.",
  "¿Qué hace valiosas a las monedas meme?": "El valor viene del apoyo de la comunidad, la escasez, la popularidad y a veces su utilidad.",
  "¿Por qué la gente compra monedas meme?": "Por diversión, para apoyar un proyecto o con la esperanza de que aumenten su valor.",
  "¿Son seguras las monedas meme?": "Como todas las criptos, tienen riesgos. Usa billeteras confiables e infórmate bien antes de invertir.",
  "¿Cuál es el propósito de una moneda meme?": "Pueden reunir comunidades, premiar la participación y alegrar el día. ¡Y son divertidas!",
  "¿En qué se diferencia esta moneda de otras?": "Lucky Panda Coin regala 88,888 monedas cada día en un divertido concurso visual y fomenta la comunidad global.",
  "¿Cómo se hacen populares las monedas meme?": "Gracias a memes, redes sociales, sorteos y una comunidad fuerte.",
  "¿Esta moneda meme es solo una broma?": "Empezó con humor, pero Lucky Panda Coin tiene sorteos reales, contrato inteligente y una comunidad activa.",
  "¿Cómo regalan las monedas?": "Hacemos un sorteo diario si encuentras correctamente al Lucky Panda en la imagen del día.",
  "¿Cómo hacen los sorteos?": "Hacemos un sorteo diario. ¡Solo encuentra al Lucky Panda en la imagen del día y comparte la publicación!",

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
        "总供应量": "总供应量为 29.3 亿枚硬币。",
"代币销毁": "每笔交易销毁 0.2%，实现通缩机制！",
"区块链": "基于 Solana 区块链构建。",
"合约中文": "合约地址将在发布时公布。",
"税收": "收取 0.8% 用于管理及营销费用。",

"实用性": "目前用于赠品和交易，正在规划未来支付集成。",
"质押中文": "目前暂无质押选项。",
"NFT 计划": "正在探索为社区推出专属 NFT 系列。",
"使用周边": "访问我们的周边商店：https://www.etsy.com/shop/luckypandacoinshop",
"合作伙伴": "我们正在进行战略合作 - 敬请期待！",

"赠品详情": "每天赠送 88,888 枚硬币，持续五年！",
"加入社区中文": "加入 Telegram、Twitter 和 Bluesky 获取最新资讯！",
"团队匿名": "团队保持半匿名状态，但会定期与社区互动。",
"团队成员": "我们更关注建设而非个人名誉。",
"名人支持": "目前没有名人背书。",

"中心化交易所": "计划从去中心化交易所开始，逐步在主要交易所上市。",
"首批 DEX": "将在基于 Solana 的 DEX（如 Raydium 和 Orca）上线。",
"上线路线图": "交易所上市是我们发展路线图的一部分。",
"如何购买中文": "发布时可在基于 Solana 的 DEX 购买。",
"流动性锁定": "通过流动性池和战略合作伙伴确保流动性。",

"下一阶段": "专注于社区建设和交易所上线。",
"跨链中文": "未来计划支持跨链。",
"移动应用": "建议使用 Phantom 或其他兼容 Solana 的钱包。",
"热度策略": "通过每日赠品和互动社区活动保持热度。",
"慈善中文": "计划与公益组织合作举办特别活动。",

"熊猫主题": "熊猫代表幸运和我们有趣、有回报的社区精神！",
"找熊猫游戏": "我们的'荣幸熊猫在哪里？'即将推出！",
"表情包大赛": "社区参与是关键 - 请关注公告！",
"社区故事": "我们的社区每天都在用创造力给我们惊喜！",
"披萨配料": "当然是额外竹子 - 熊猫的最爱！🐼🎋",
"什么是meme币？": "Meme币是一种受互联网梗图、笑话或文化潮流启发的加密货币，通常以趣味和社区驱动为特点！",
  "meme币是如何运作的？": "它们和其他加密货币一样，在区块链上可以买卖或使用的数字代币。",
  "meme币是真正的钱吗？": "不是传统意义上的货币，但可以具有实际价值并进行交易。",
  "meme币的价值来自哪里？": "来自社区支持、稀缺性、流行度以及实用性或炒作。",
  "人们为什么购买meme币？": "出于好玩、支持项目或希望价值上涨的目的。",
  "meme币安全吗？": "加密货币都有风险。使用可信的钱包并做好研究。",
  "meme币的意义是什么？": "它们可以聚集社区、奖励参与、传播快乐，甚至支持公益！",
  "这个meme币和其他有什么不同？": "幸运熊猫币每天通过图像寻找游戏送出88,888枚币，支持全球社区互动。",
  "meme币如何变得流行？": "通过梗图、社交媒体、赠币活动和强大的社区支持。",
  "这个币只是个玩笑吗？": "最初是为了乐趣，但现在Lucky Panda Coin有真实的日常赠币、智能合约和活跃社区。",
  "你们怎么发币的？": "每天通过图像找熊猫的小游戏进行随机抽奖发放！",
  "你们是怎么做赠币活动的？": "每天举办随机抽奖。找到当天图片中的Lucky Panda并分享即可参与！",

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
        "取引手数料": "管理費・マーケティング費用として 0.8% がかかります。",
       "総供給量": "29億3千万コインです。",
"トークン焼却": "取引の0.2%をバーンし、デフレコインにしています！",
"使用ブロックチェーン": "Solana ブロックチェーン上に構築。",
"コントラクト日本語": "発売日に発表されます。",
"税金": "管理費・マーケティング費用として0.8%がかかります。",

"ユーティリティ": "現在はギブアウェイと取引に使用、将来の支払い統合を計画中。",
"ステーキング日本語": "現在は未提供です。",
"NFT計画": "コミュニティ向けのNFTコレクションを検討中です。",
"グッズ利用": "グッズストアへ: https://www.etsy.com/shop/luckypandacoinshop",
"パートナーシップ": "戦略的提携を進めています - お楽しみに！",

"ギブアウェイ詳細": "5年間、毎日88,888コインを配布します！",
"コミュニティ参加日本語": "Telegram、Twitter、Blueskyで最新情報をゲット！",
"チーム匿名性": "チームは半匿名ですが、頻繁に交流しています。",
"チームメンバー": "個人の名声よりも構築に重点を置いています。",
"有名人支援": "現在、有名人の推薦はありません。",

"CEX上場": "まずDEXから開始し、大手取引所上場を目指します。",
"最初のDEX": "RaydiumやOrcaなどのSolanaベースのDEXで利用可能。",
"上場ロードマップ": "取引所上場は開発ロードマップの一部です。",
"購入方法": "発売時にSolanaベースのDEXで購入可能。",
"流動性ロック": "流動性プールと提携で確保しています。",

"次の目標": "コミュニティ構築と取引所上場に注力。",
"クロスチェーン日本語": "将来的なクロスチェーン互換性を計画中。",
"モバイルアプリ": "PhantomウォレットまたはSolana対応ウォレットを推奨。",
"戦略的宣伝": "毎日のギブアウェイとインタラクティブなイベントを通じて。",
"慈善活動": "特別イベントのためにNGOと提携予定。",

"パンダテーマ": "パンダは幸運と、楽しくやりがいのあるコミュニティ精神を象徴！",
"パンダ探しゲーム": "『ラッキーパンダはどこにいる？』近日公開！",
"ミームコンテスト": "コミュニティ参加が鍵 - 発表をお待ちください！",
"コミュニティストーリー": "創造性で日々驚かせてくれるコミュニティです！",
"ピザトッピング": "もちろん竹追加 - パンダのお気に入り！🐼🎋"
  "ミームコインとは？": "ミームコインは、インターネットのミームやジョーク、文化的トレンドから生まれた暗号通貨です。多くの場合、楽しくてコミュニティ主導です！",
  "ミームコインはどうやって動くの？": "他の暗号通貨と同じように、ブロックチェーン上で使えるデジタルトークンです。",
  "ミームコインは本物のお金？": "伝統的なお金ではないけど、本当の価値があり、取引にも使えます。",
  "ミームコインの価値は何で決まるの？": "コミュニティの支持、希少性、人気、実用性や話題性が価値を生みます。",
  "なぜミームコインを買うの？": "楽しさのため、プロジェクトを応援したり、価値上昇を期待して買う人もいます。",
  "ミームコインは安全？": "すべての暗号通貨と同じでリスクがあります。信頼できるウォレットを使って、よく調べましょう。",
  "ミームコインの目的は？": "コミュニティを育てたり、楽しさや参加報酬を届けたりします。しかも楽しい！",
  "このコインは他と何が違う？": "Lucky Panda Coinは、毎日画像からパンダを探して88,888枚を配布するユニークな企画があります！",
  "ミームコインはどうやって人気になるの？": "ミーム、SNS、プレゼント、そして強いコミュニティ力で人気が出ます！",
  "このコインは冗談なの？": "最初は楽しいジョークでしたが、今では本格的な企画、スマートコントラクト、成長中のコミュニティがあります！",
  "どうやってコインを配ってるの？": "画像の中のLucky Pandaを見つけると、ランダム抽選で毎日配布します！",
  "プレゼント企画はどうやるの？": "画像からLucky Pandaを見つけて投稿をシェアすれば、抽選に参加できます！",
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

    // Toggle chat visibility and add default message
    function toggleChat() {
        container.classList.toggle("hidden");
        if (!container.classList.contains("hidden")) {
            container.classList.add("show");
            if (log.innerHTML.trim() === "") {
                log.innerHTML = `<div class="bot-message"><strong>Bot:</strong> Hi there! I'm Lucky Panda's assistant! 🐼<br>¡Hola! Soy el asistente de Lucky Panda. 🐼<br>你好！我是幸运熊猫的助手！🐼<br>こんにちは！ラッキーパンダのアシスタントです！🐼</div>`;
                log.scrollTop = log.scrollHeight;
            }
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