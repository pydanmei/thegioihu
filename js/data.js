/* =========================
   data.js
   Chứa: GROUPS, GENRE_INFO, TAG_INFO, GENRES, TAGS, COMICS
   ========================= */

// ===== NHÓM DỊCH =====
const GROUPS = [
  {
    id: "py-danmei",
    name: "Py Danmei",
    founded: "Hoạt động từ trước 2020",
    motto:
      "Chúng tớ là một nhóm nhỏ các bạn (hủ) với niềm đam mê truyện boylove bất diệt. We love what we do, and we do it with passion.",
    about:
      "Py Danmei là nhóm dịch BL/yaoi được thành lập sau khi Py rời nhóm Ship of The Dream (blogtruyen.com, đã dừng hoạt động). Tại đây, Py tiếp tục dịch truyện vì đam mê và lưu giữ vì kỷ niệm, với nhiều dự án đa dạng từ dễ thương đến nặng đô.",
    members: [
      "Py — Boss, Translator, Editor, PR (từng thuộc nhóm Ship of The Dream)",
      "Furu — Phó Boss, Editor",
      "Color — E-Translator",
      "Deer — E-Translator"
    ],
    links: [
      { label: "Facebook", url: "https://www.facebook.com/pydanmei" },
      { label: "Email", url: "mailto:pydanmeii@gmail.com" },
      { label: "Trang WordPress cũ", url: "https://pydanmei.wordpress.com" }
    ]
  },
  {
    id: "guest-scans",
    name: "Guest / Scan khác",
    founded: "Các nhóm hợp tác",
    motto: "Ghi credit đầy đủ cho từng nhóm.",
    about:
      "Dùng cho các dự án mà Py phối hợp hoặc dựa trên bản eng từ những nhóm khác (ví dụ, bạn có thể chỉnh sửa theo credit thật của từng truyện).",
    members: ["Các nhóm eng / raw provider"],
    links: []
  }
];

// ===== THỂ LOẠI CHÍNH (3 LOẠI) + TAG =====

// 3 genre chính
const GENRE_INFO = {
  "Shounen ai": {
    label: "Shounen ai",
    desc: "Tình cảm nhẹ nhàng, thiên về cảm xúc, rất ít hoặc không có cảnh 18+ rõ ràng."
  },
  "Yaoi": {
    label: "Yaoi",
    desc: "Tình cảm có yếu tố 16+–18+, có cảnh thân mật/giường chiếu ở mức vừa phải."
  },
  "Hard yaoi": {
    label: "Hard yaoi",
    desc: "Nội dung nặng, nhiều cảnh 18+, smut/H, có thể kèm kink, cưỡng ép, bạo lực..."
  },
  "Shounen": {
    label: "Shounen",
    desc: "Truyện không có yếu tố couple, chỉ dành đọc vui..."
  },
  "Shoujo": {
    label: "Shoujo",
    desc: "Truyện nam x nữ."
  }
};

// Tag phụ (dùng cho lọc + hiển thị)
const TAG_INFO = {
  "School life": {
    label: "School life / Học đường",
    desc: "Bối cảnh chính là trường học, học sinh – sinh viên."
  },
  "Romance": {
    label: "Romance / Lãng mạn",
    desc: "Tập trung vào tình yêu, crush, tỏ tình, hẹn hò..."
  },
  "Comedy": {
    label: "Comedy / Hài hước",
    desc: "Nhiều tình huống vui vẻ, gây cười, không khí tương đối nhẹ nhàng."
  },
  "Drama": {
    label: "Drama",
    desc: "Cảm xúc nặng, có xung đột, tổn thương, dằn vặt."
  },
  "Psychological": {
    label: "Psychological / Tâm lý",
    desc: "Đào sâu tâm lý nhân vật, đôi khi có yếu tố méo mó / ám ảnh."
  },
  "Omegaverse": {
    label: "Omegaverse / ABO",
    desc: "Thế giới ABO (Alpha / Beta / Omega), thường có bản năng, phát tình, đánh dấu..."
  },
  "Oneshot": {
    label: "Oneshot",
    desc: "Truyện ngắn chỉ 1 chương hoặc 1 phần."
  },
  "Doujinshi": {
    label: "Doujinshi",
    desc: "Truyện fanmade dựa trên series có sẵn (anime/manga/game...)."
  },
  "18+": {
    label: "18+",
    desc: "Có nội dung người lớn, chỉ dành cho độc giả đã đủ 18 tuổi."
  },
  "Horror": {
    label: "Horror / Kinh dị",
    desc: "Có yếu tố ma quỷ, ghê rợn, bối cảnh đáng sợ."
  },
  "Dark": {
    label: "Dark",
    desc: "Không khí nặng, có bạo lực, cưỡng ép, ám ảnh."
  },
  "Hypnosis": {
    label: "Hypnosis / Thôi miên",
    desc: "Nhân vật bị tác động bởi thôi miên / mất kiểm soát."
  },
  "BDSM": {
    label: "BDSM",
    desc: "Có yếu tố bạo dâm, trói buộc, chơi kink."
  },
  "Bondage": {
    label: "Bondage / Trói buộc",
    desc: "Nhân vật bị trói, ràng buộc về mặt thể xác."
  },
  "Hardcore": {
    label: "Hardcore",
    desc: "Cảnh H rất nặng, không che đậy nhiều."
  },
  "Supernatural": {
    label: "Siêu nhiên",
    desc: "Có yếu tố ma, quỷ, thần linh, năng lực đặc biệt..."
  },
  "Fantasy": {
    label: "Fantasy / Giả tưởng",
    desc: "Thế giới hoặc yếu tố không có trong đời thực."
  },
  "Mystery": {
    label: "Mystery / Bí ẩn",
    desc: "Có điều tra, bí ẩn, cảm giác 'có gì đó không ổn'."
  },
  "Teacher": {
    label: "Thầy trò",
    desc: "Quan hệ giữa giáo viên – học sinh hoặc người hướng dẫn – học trò."
  },
  "Mature": {
    label: "Mature",
    desc: "Không khí người lớn, nội dung chín chắn, đôi khi buồn."
  },
  "Short Story": {
    label: "Truyện ngắn",
    desc: "Truyện ngắn ít chương, đọc nhanh."
  },
  "Animal Characteristic": {
    label: "Tai thú / Đặc điểm động vật",
    desc: "Nhân vật có tai, đuôi, đặc điểm giống động vật."
  },
  "Mindbreak": {
    label: "mind-break",
    desc: "Nhân vật bị tác động và không còn bình thường nữa"
  }
};

// Danh sách để render chips
const GENRES = Object.keys(GENRE_INFO);
const TAGS = Object.keys(TAG_INFO);

// Một phần list truyện từ blog cũ của Py
const COMICS = [
  {
    id: "chu-ac-quy-va-cau-be-ca-hat",
    title: "Chú Ác Quỷ Và Cậu Bé Ca Hát",
    originalTitle: "悪魔さんとお歌 / Akumasan To Outa",
    author: "Im; Makoto Morishita",
    cover: "images/chu-ac-quy-cover.jpg",
    adult: false,
    genre: "Shounen",
    tags: ["Demon", "Comedy", "Music", "Heartwarming"],
    groupId: "py-danmei",
    updated: "2021-09-01",
    status: "Đã hoàn thành",
    summary:
      "Hetappi-chan, cậu bé bị đuổi khỏi Thánh Ca Đoàn vì hát kém. Chú Ác Quỷ đến để giết cậu lại bất ngờ trở thành thầy dạy nhạc. Giữa đêm tối, một ác quỷ và một cậu bé lập nên mối quan hệ kỳ lạ nhưng đầy ấm áp quanh những bản thánh ca.",
    relatedIds: ["giac-mo", "tinh-yeu-tham-lang"],
    pages: [
      "images/chu-ac-quy/1.jpg",
      "images/chu-ac-quy/2.jpg",
      "images/chu-ac-quy/3.jpg",
      "images/chu-ac-quy/4.jpg"
    ]
  },
  {
    id: "cho-muc",
    title: "Chó Mực",
    originalTitle: "Black Dog / 黒い犬 / Kuroi Inu",
    author: "KAMO",
    cover: "images/cho-muc-cover.jpg",
    adult: true,
    genre: "Yaoi",
    tags: ["Comedy", "School life", "Romance", "18+", "Manga"],
    groupId: "py-danmei",
    updated: "2022-06-22",
    status: "Đã hoàn thành",
    summary:
      'Một câu chuyện dễ thương về Kei và "chú cún con" đặc biệt của cậu – vừa hài hước vừa ấm áp.',
    relatedIds: ["tinh-yeu-tham-lang", "toi-khong-de-vut-mat-mua-xuan"],
    pages: ["images/cho-muc/1.jpg", "images/cho-muc/2.jpg"]
  },
  {
    id: "cung-dan-anh",
    title: "Cùng Đàn Anh",
    originalTitle: "With Senpai, Senpai, to.",
    author: "Unknown",
    cover: "images/cung-dan-anh-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["18+", "Dark", "Oneshot", "Rape", "NTR", "Mindbreak"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary: "Tất cả bắt đầu bằng một buổi gặp mặt…",
    relatedIds: [],
    pages: ["images/cung-dan-anh/1.jpg"]
  },
  {
    id: "daiya-no-ace-dj-ngay-xui-xeo-cua-sawamura-eijun",
    title: "Daiya no Ace dj – Ngày Xui Xẻo Của Sawamura Eijun",
    originalTitle:
      "Daiya no A | Ace of Diamond dj, Daiya no Ace dj – Aru hi no Sawamura Jun no sainan; Daiya no Ace dj – Sawamura Eijun’s Unfortunate Day",
    author: "DigDug (Shippo)",
    cover: "images/ngay-xui-xeo-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["Doujinshi", "18+", "Yaoi", "Drama", "Oneshot", "Rape"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary:
      "Kazuya Miyuki x Eijun Sawamura. Ngày nọ, Eijun bỗng bị kẹt khi cố chui qua một khe tường…",
    relatedIds: [],
    pages: ["images/ngay-xui-xeo/1.jpg"]
  },
  {
    id: "giac-mo",
    title: "Giấc Mơ",
    originalTitle: "ソムニア, Somnia",
    author: "KURAKA Sui",
    cover: "images/giac-mo-cover.png",
    adult: true,
    genre: "Yaoi",
    tags: ["Drama", "Psychological", "Oneshot", "18+"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary:
      "Một chàng trai mắc bệnh nặng, chẳng còn sống được bao lâu, đem lòng yêu vị bác sĩ của mình và muốn trao hết mọi thứ cho người ấy – dù luôn bị đối xử lạnh nhạt.",
    relatedIds: [],
    pages: ["images/giac-mo/1.jpg"]
  },
  {
    id: "haga-muon-bi-can",
    title: "Haga Muốn Bị Cắn",
    originalTitle:
      "羽賀くんは噛まれたい, Haga-kun wa Kamaretai, Quiero morder a Haga-kun",
    author: "SAKISHITA Senmu",
    cover: "images/haga-cover.jpg",
    adult: true,
    genre: "Yaoi",
    tags: ["Omegaverse", "Comedy", "18+"],
    groupId: "py-danmei",
    updated: "2021-11-13",
    status: "Đã hoàn thành",
    summary:
      'Câu chuyện về một anh chàng trông coi nhà giam và một tù nhân đầy bí ẩn, với rất nhiều tình huống dở khóc dở cười xoay quanh "những vết cắn".',
    relatedIds: ["dam-chim-trong-duc-vong"],
    pages: ["images/haga/1.jpg"]
  },
  {
    id: "bup-be-cua-nguoi",
    title: "Búp Bê Của Người",
    originalTitle: "Dareka no Ningyou, The Doll of Another",
    author: "Kume (Minakami)",
    cover: "images/bup-be-cua-nguoi-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["Teacher", "Oneshot", "18+", "Rape"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary: "Em chính là búp bê của tôi…",
    relatedIds: [],
    pages: ["images/bup-be-cua-nguoi/1.jpg"]
  },
  {
    id: "can-ho-ma",
    title: "Căn Hộ Ma",
    originalTitle: "Danshoku Rei no Sumu Apato",
    author: "Chimple Island (Chimple Hotter)",
    cover: "images/can-ho-ma-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["Horror", "18+", "Dark", "Oneshot", "Mindbreak", "Rape"],
    groupId: "py-danmei",
    updated: "2021-??-??",
    status: "Đã hoàn thành",
    summary:
      "Một căn hộ nơi có một hồn ma nam cư ngụ, và những vị khách ghé qua đều phải trả giá theo những cách khác nhau.",
    relatedIds: [],
    pages: ["images/can-ho-ma/1.jpg"]
  },
  {
    id: "summer-war-dj-thoi-mien-kazuma-kun",
    title: "Summer War dj – Thôi Miên Kazuma-kun",
    originalTitle: "Kazuma-kun o Saimin de Oyome-san ni Shimasu",
    author: "Seki Sabato (Tsukuru)",
    cover: "images/thoi-mien-kazuma-kun-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["Doujinshi", "Hypnosis", "18+", "Oneshot", "Rape"],
    groupId: "py-danmei",
    updated: "2021-??-??",
    status: "Đã hoàn thành",
    summary: "Kazuma-kun liên tục nhận được những email kì lạ...",
    relatedIds: [],
    pages: ["images/thoi-mien-kazuma-kun/1.jpg"]
  },
  {
    id: "tinh-yeu-tham-lang",
    title: "Tình Yêu Thầm Lặng",
    originalTitle: "無口な想いは恋となる, Mukuchi na Omoi wa Koi to Naru",
    author: "Edanaka",
    cover: "images/tinh-yeu-tham-lang-cover.jpg",
    adult: true,
    genre: "Shounen ai",
    tags: ["Romance", "School life"],
    groupId: "py-danmei",
    updated: "2021-10-30",
    scanlator: "Pink Cherry Blossom Scans",
    status: "Đã hoàn thành",
    summary:
      "Yuki trở nên trầm lặng sau một sự cố thời cấp hai. Kawai – cậu bạn luôn tỏa sáng giữa lớp – là người duy nhất kéo cậu ra khỏi vỏ ốc, và cũng là người khiến trái tim cậu rung động.",
    relatedIds: ["cho-muc", "toi-se-khong-de-vut-mat-mua-xuan-cua-minh-dau"],
    pages: ["images/tinh-yeu-tham-lang/1.jpg"]
  },
  {
    id: "toi-se-khong-de-vut-mat-mua-xuan-cua-minh-dau",
    title: "Tôi Sẽ Không Để Vụt Mất Mùa Xuân Của Mình Đâu!",
    originalTitle: "俺のアオハルは渡さない, Ore no Aoharu wa Watasanai",
    author: "KATOU Susu",
    cover: "images/mua-xuan-cover.jpg",
    adult: true,
    genre: "Shounen ai",
    tags: ["Comedy", "School life", "Romance", "Manga"],
    groupId: "py-danmei",
    updated: "2021-05-17",
    status: "Đã hoàn thành",
    summary:
      "Subaru – hoàng tử ngầu lòi nhất trường – thực ra là một con nghiện truyện shoujo. Khi Jinnai, người bạn cũ và là người duy nhất biết bí mật đó, chuyển đến lớp, kế hoạch thanh xuân hoàn hảo của Subaru bắt đầu chệch hướng. “Tôi sẽ không để cậu phá hủy kế hoạch thanh xuân hoàn hảo của tôi đâu!”.\nNhưng vì một lí do nào đó, trái tim “thiếu nữ” của cậu lại không ngừng rung động khi ở bên Jinnai!",
    relatedIds: ["tinh-yeu-tham-lang"],
    pages: ["images/mua-xuan/1.jpg"]
  },
  {
    id: "dam-chim-trong-duc-vong",
    title: "Đắm Chìm Trong Dục Vọng",
    originalTitle: "Ijiwaru na Tsukai no Netsu ni Oborete",
    author: "Sakuraba Yurin",
    cover: "images/dam-chim-cover.jpg",
    adult: true,
    genre: "Yaoi",
    tags: ["Omegaverse", "18+", "Drama"],
    groupId: "py-danmei",
    updated: "2024-01-08",
    status: "Đang tiến hành",
    summary:
      "Một câu chuyện ABO xoay quanh giao dịch, ràng buộc và ham muốn – nơi ranh giới giữa lựa chọn và ép buộc không còn rõ ràng.",
    relatedIds: ["haga-muon-bi-can"],
    pages: ["images/dam-chim/1.jpg"]
  },
  {
    id: "anh-lua",
    title: "Ánh Lửa",
    originalTitle: "Fire",
    author: "Kuromutu (Kuroda Mutu)",
    cover: "images/anh-lua-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["BDSM", "Bondage", "Hardcore", "Oneshot", "18+"],
    groupId: "py-danmei",
    updated: "2021-09-27",
    status: "Đã hoàn thành",
    summary: "Vì em gái, tôi phải...",
    relatedIds: [],
    pages: []
  },
  {
    id: "anh-lua-2",
    title: "Ánh Lửa 2",
    originalTitle: "Fire 2",
    author: "Kuromutu (Kuroda Mutu)",
    cover: "images/anh-lua-2-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["BDSM", "Bondage", "Hardcore", "Oneshot", "18+"],
    groupId: "py-danmei",
    updated: "2021-09-27",
    status: "Đã hoàn thành",
    summary: "Vì em gái, tôi phải...",
    relatedIds: [],
    pages: []
  },
  {
    id: "free-ji-my-nhan-ngu-cua-tuong-lai",
    title: "Free! dj – Mỹ Nhân Ngư Của Tương Lai",
    originalTitle:
      "Free! dj – Mermaid Future (人魚のミライ), Ningyo no Mirai",
    author: "Oshidori torinet",
    cover: "images/my-nhan-ngu-cover.jpg",
    adult: false,
    genre: "Shounen ai",
    tags: ["Doujinshi", "Oneshot", "Supernatural"],
    groupId: "py-danmei",
    updated: "2021-05-13",
    status: "Đã hoàn thành",
    summary:
      "Haru là một 'chàng tiên cá' và Rin cảm thấy điều đó thật tuyệt vời ♥",
    relatedIds: [
      "free-ji-cuc-cung",
      "free-ji-ngay-he-ngay-dai",
      "free-ji-cu-giu-lay-neu-cau-muon"
    ],
    pages: []
  },
  {
    id: "free-ji-ngay-he-ngay-dai",
    title: "Free! dj – Ngày Hè Ngây Dại",
    originalTitle:
      "Free! dj – Awkward Summer Love, Bukyou Natsukoi",
    author: "ANCOCOCO/ Sakura Hitsuji",
    cover: "images/ngay-he-ngay-dai-cover.jpg",
    adult: false,
    genre: "Shounen ai",
    tags: ["Doujinshi", "Oneshot", "School life"],
    groupId: "py-danmei",
    updated: "2021-05-13",
    status: "Đã hoàn thành",
    summary: "Rin Matsuoka x Haruka Nanase ♥",
    relatedIds: [
      "free-ji-cu-giu-lay-neu-cau-muon",
      "free-ji-my-nhan-ngu-cua-tuong-lai"
    ],
    pages: []
  },
  {
    id: "free-ji-cuc-cung",
    title: "Free! dj – Cục Cưng! Cục Cưng! Cục Cưng!",
    originalTitle: "Free! dj – Baby Baby Baby",
    author: "phenomena (AKIHOSHI Umi)",
    cover: "images/cuc-cung-cover.jpg",
    adult: false,
    genre: "Shounen ai",
    tags: ["Doujinshi", "Oneshot", "School life"],
    groupId: "py-danmei",
    updated: "2021-05-13",
    status: "Đã hoàn thành",
    summary: "Rin Matsuoka x Haruka Nanase ♥",
    relatedIds: [
      "free-ji-cu-giu-lay-neu-cau-muon",
      "free-ji-my-nhan-ngu-cua-tuong-lai"
    ],
    pages: []
  },
  {
    id: "free-ji-cu-giu-lay-neu-cau-muon",
    title: "Free! dj – Cứ Giữ Lấy Nếu Cậu Muốn!",
    originalTitle: "Free! dj – Be Jealous if You Want!",
    author: "Nightlight",
    cover: "images/cu-giu-lay-cover.jpg",
    adult: false,
    genre: "Shounen ai",
    tags: ["Doujinshi", "Oneshot", "School life"],
    groupId: "py-danmei",
    updated: "2021-05-13",
    status: "Đã hoàn thành",
    summary: "♥",
    relatedIds: ["free-ji-my-nhan-ngu-cua-tuong-lai"],
    pages: []
  },
  {
    id: "free-ji-bi-mat-trong-phong-tam",
    title: "Free! dj – Bí Mật Trong Phòng Tắm",
    originalTitle:
      "Free! dj – Himitsu no Shower Room / Secret Shower Room",
    author: "2bit",
    cover: "images/bi-mat-trong-phong-tam-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["Doujinshi", "Oneshot", "School life"],
    groupId: "py-danmei",
    updated: "2021-05-13",
    status: "Đã hoàn thành",
    summary: "Rin Matsuoka x Haruka Nanase ♥",
    relatedIds: [
      "free-ji-cu-giu-lay-neu-cau-muon",
      "free-ji-my-nhan-ngu-cua-tuong-lai"
    ],
    pages: []
  },
  {
    id: "free-ji-phong-thay-do",
    title: "Free! dj – Phòng Thay Đồ",
    originalTitle:
      "Free! dj – OSANANAJIMI TO SHICHAKUSHITSU NI IRU TO / When I Get into the Dressing Room with My Childhood Friends",
    author: "Kenashi Ai! / Mimisuke",
    cover: "images/phong-thay-do-cover.jpg",
    adult: true,
    genre: "Yaoi",
    tags: ["Doujinshi", "Oneshot", "NP", "Comedy"],
    groupId: "py-danmei",
    updated: "2021-05-13",
    status: "Đã hoàn thành",
    summary:
      "Makoto x Rin x Haruka. Câu chuyện về 3 chàng trai trong một phòng thử đồ… =)))))))) ♥",
    relatedIds: [
      "free-ji-cu-giu-lay-neu-cau-muon",
      "free-ji-my-nhan-ngu-cua-tuong-lai"
    ],
    pages: []
  },
  {
    id: "free-ji-phong-doi",
    title: "Free! dj – Phòng Đôi",
    originalTitle: "Free! dj – Room For Two, Futari Gurashi",
    author: "Kenashi Ai! / Mimisuke",
    cover: "images/phong-doi-cover.jpg",
    adult: false,
    genre: "Shounen ai",
    tags: ["Doujinshi", "Oneshot", "NP"],
    groupId: "py-danmei",
    updated: "2021-05-13",
    status: "Đã hoàn thành",
    summary: "Rin Matsuoka x Haruka Nanase ♥",
    relatedIds: [
      "free-ji-cu-giu-lay-neu-cau-muon",
      "free-ji-my-nhan-ngu-cua-tuong-lai"
    ],
    pages: []
  },
  {
    id: "free-ji-mot-ngay-buon-cua-thieu-nien",
    title: "Free! dj – Một Ngày Buồn Của Thiếu Niên",
    originalTitle: "Free! dj – Seishun Melancholy One Day",
    author: "Mitsumata / Mitsuko",
    cover: "images/mot-ngay-buon-cover.jpg",
    adult: false,
    genre: "Shounen ai",
    tags: ["Doujinshi", "Oneshot", "Romance"],
    groupId: "py-danmei",
    updated: "2021-05-13",
    status: "Đã hoàn thành",
    summary: "Uozumi x Minami ♥ Uozumi sau giải đấu cấp quận…",
    relatedIds: [
      "free-ji-cu-giu-lay-neu-cau-muon",
      "free-ji-my-nhan-ngu-cua-tuong-lai"
    ],
    pages: []
  },
  {
    id: "free-ji-yeu-them-lan-nua",
    title: "Free! dj – Yêu Thêm Lần Nữa",
    originalTitle: "Free! dj – One More Romance, Mou Ichido Koi wo Suru",
    author: "Overrunner / Rihara",
    cover: "images/yeu-them-lan-nua-cover.jpg",
    adult: false,
    genre: "Shounen ai",
    tags: ["Doujinshi", "Oneshot", "School life", "Drama"],
    groupId: "py-danmei",
    updated: "2021-05-13",
    status: "Đã hoàn thành",
    summary: "Rin Matsuoka x Haruka Nanase ♥",
    relatedIds: [
      "free-ji-cu-giu-lay-neu-cau-muon",
      "free-ji-my-nhan-ngu-cua-tuong-lai"
    ],
    pages: []
  },
  {
    id: "super-danganronpa-2-trung-hoc-xuat-sac-kun",
    title: "Super Danganronpa 2 dj – Trung Học Xuất Sắc-kun",
    originalTitle:
      "Super Danganronpa 2 dj - Buchi Oka Yobi Gakka-kun",
    author: "Usamimi Syndrome (Erutasuku)",
    cover: "images/trung-hoc-xuat-sac-kun-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["Doujinshi", "Fantasy", "Hypnosis", "18+", "NP"],
    groupId: "py-danmei",
    updated: "2021-11-15",
    status: "Đã hoàn thành",
    summary: "Quá trình khai phá tài năng của Hinata-kun...",
    relatedIds: [],
    pages: []
  },
  {
    id: "daiya-no-ace-dj-loi-thi-tham",
    title: "Daiya no Ace dj – Lời Thì Thầm",
    originalTitle: "Diamond no Ace dj – Murmur, Ace of Diamond",
    author: "VS (masa)",
    cover: "images/loi-thi-tham-cover.jpg",
    adult: false,
    genre: "Shounen ai",
    tags: ["Romance", "Doujinshi", "Oneshot"],
    groupId: "py-danmei",
    updated: "2021-12-01",
    status: "Đã hoàn thành",
    summary:
      "Kazuya Miyuki x Eijun Sawamura. Một doujinshi nhẹ nhàng của Daiya no Ace, chủ yếu xoay quanh những khoảnh khắc tình cảm dịu dàng.",
    relatedIds: [],
    pages: []
  },
  {
    id: "meo-yeu",
    title: "Mèo Yêu",
    originalTitle: "ネコ★また, Neko Mata",
    author: "KAMON Saeko",
    cover: "images/meo-yeu-cover.jpg",
    adult: true,
    genre: "Yaoi",
    tags: ["Fantasy", "Mature", "Romance", "School life", "Supernatural"],
    groupId: "py-danmei",
    updated: "2021-05-17",
    status: "Đã hoàn thành",
    summary:
      "Kimura, một chàng trai nhút nhát, được thầy nhờ dạy kèm cho Shouhei. Nhờ sự giúp đỡ của mèo Kuro, một đêm kì lạ đã thay đổi tất cả…",
    relatedIds: [],
    pages: []
  },
  {
    id: "attack-on-titan-dj-hac-giay",
    title: "Attack on Titan dj - Hạc Giấy",
    originalTitle: "Attack on Titan dj - IF",
    author: "Unknown",
    cover: "images/hac-giay-cover.jpg",
    adult: false,
    genre: "Shounen ai",
    tags: ["Drama", "Doujinshi", "Oneshot"],
    groupId: "py-danmei",
    updated: "2021-01-01",
    status: "Đã hoàn thành",
    summary:
      "Một đoản truyện đầy cảm xúc, mô tả một khả năng 'nếu như' giữa hai người con trai.",
    relatedIds: [],
    pages: []
  },
  {
    id: "bi-thoi-mien-toi-tro-thanh-phu-nu-cua-thay",
    title: "Bị Thôi Miên Tôi Trở Thành Phụ Nữ Của Thầy",
    originalTitle:
      "Mesuochi Saiminkyouiku, Degenerating into a Female Hypnotism Education",
    author: "Usamimi Syndrome (Erutasuku)",
    cover: "images/thanh-phu-nu-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["Hypnosis", "18+", "Hardcore", "Oneshot"],
    groupId: "py-danmei",
    updated: "2024-01-08",
    status: "Đã hoàn thành",
    summary:
      "Một giáo viên đã phát minh ra app thôi miên để trị cậu học trò hư hỏng của mình… ❤",
    relatedIds: [],
    pages: ["images/thanh-phu-nu/1.jpg"]
  },
  {
    id: "alpha-rac-roi",
    title: "Alpha rắc rối",
    originalTitle: "Alpha Komplex",
    author: "Picricacid (Saiki Makiko)",
    cover: "images/alpha-rac-roi-cover.jpg",
    adult: true,
    genre: "Shounen ai",
    tags: ["Omegaverse", "Romance", "Oneshot"],
    groupId: "py-danmei",
    updated: "2024-01-08",
    status: "Đã hoàn thành",
    summary: "Tình cảm của một cặp Alpha sẽ như thế nào…?!",
    relatedIds: ["alpha-rac-roi"],
    pages: ["images/alpha-rac-roi/1.jpg"]
  },
  {
    id: "hetalia-dj-ky-dieu-sau-cung",
    title: "Hetalia dj – Kỳ Diệu Sau Cùng",
    originalTitle: "Hetalia dj – Dead Loss Wonder | Dead Loss Wander",
    author: "DELTA+8 (Mitaka)",
    cover: "images/ky-dieu-sau-cung-cover.jpg",
    adult: true,
    genre: "Yaoi",
    tags: ["Comedy", "Drama", "Oneshot", "Hardcore", "Doujinshi"],
    groupId: "py-danmei",
    updated: "2021-05-17",
    status: "Đã hoàn thành",
    summary:
      "America x Pirate England (US x UK). Trên đường về thì bị bắt cóc…",
    relatedIds: [],
    pages: ["images/ky-dieu-sau-cung/1.jpg"]
  },
  {
    id: "hoozuki-reitetsu-dj-ai-tinh-troi-buoc",
    title: "Hoozuki no Reitetsu dj – Ái Tình Trói Buộc",
    originalTitle:
      "Hoozuki no Reitetsu dj - Aigan Shinjuu / Hoozuki no Reitetsu",
    author: "Contrast High (Kourimiya)",
    cover: "images/ai-tinh-troi-buoc-cover.jpg",
    adult: true,
    genre: "Yaoi",
    tags: ["Oneshot", "Doujinshi"],
    groupId: "py-danmei",
    updated: "2021-05-17",
    status: "Đã hoàn thành",
    summary:
      "Hoozuki x Hakutaku. Chuyện về một chàng thần thú và tiểu quỷ…..",
    relatedIds: [],
    pages: ["images/ai-tinh-troi-buoc/1.jpg"]
  },
  {
    id: "hypnosis-mic-dj-dap-an",
    title: "Hypnosis Mic dj – Đáp Án",
    originalTitle: "Hypnosis Mic dj – Answer",
    author: "W.R.S (Takiyoshi)",
    cover: "images/dap-an-cover.jpg",
    adult: true,
    genre: "Yaoi",
    tags: ["Oneshot", "Omegaverse", "Doujinshi", "Hardcore"],
    groupId: "py-danmei",
    updated: "2024-01-08",
    status: "Đã hoàn thành",
    summary: "Sự hiểu lầm bắt đầu bằng một trò đùa...",
    relatedIds: [],
    pages: ["images/dap-an/1.jpg"]
  },
  {
    id: "le-vat-cua-ac-than",
    title: "Lễ Vật Của Ác Thần",
    originalTitle:
      "Jashin no Ikenie Ani Omoi no Otouto Hen; Offering to the Evil God - Little Brother's Affection for Big Brother",
    author: "Usamimi Syndrome (Erutasuku)",
    cover: "images/le-vat-cua-ac-than-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["Oneshot", "Hardcore", "Rape", "Mindbreak", "18+", "HET"],
    groupId: "py-danmei",
    updated: "2024-01-08",
    status: "Đã hoàn thành",
    summary: "Em trai nhỏ muốn cứu anh trai nhưng...",
    relatedIds: ["hypnosis-mic-dj-dap-an"],
    pages: []
  },
  {
    id: "yowamushi-pedal-dj-am-thanh-vun-vo",
    title: "Yowamushi Pedal dj – Âm Thanh Vụn Vỡ",
    originalTitle: "Yowamushi Pedal dj – Âm Thanh Vụn Vỡ",
    author: "Hone Shaburi Tei (Nakaore poukubittsu)",
    cover: "images/am-thanh-vun-vo-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["Doujinshi", "18+", "Oneshot", "Rape", "NP", "Somnophilia"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary:
      "Không nên mất cảnh giác, kể cả trong lúc ngủ… vì bạn không biết điều gì sẽ xảy đến với mình đâu...",
    relatedIds: [],
    pages: []
  },
  {
    id: "phuong-thuc-thoi-mien",
    title: "Phương Thức Thôi Miên",
    originalTitle: "催眠取取; さいみんさくしゆ; Saimin Sakushu",
    author: "Sioyaki Ayu",
    cover: "images/phuong-thuc-thoi-mien-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["18+", "Oneshot", "Rape", "Hypnosis", "Somnophilia"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary: "Tưởng là…",
    relatedIds: [],
    pages: []
  },
  {
    id: "phong-vip",
    title: "Phòng VIP",
    originalTitle:
      "VIP Room (Otokonoko Heaven’s Door 1) / Phòng VIP (Cánh Cửa Thiên Đường Của Đàn Ông 1)",
    author: "MTNO",
    cover: "images/phong-vip-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["18+", "Oneshot", "Rape", "NP"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary: "Căn phòng bí mật của đàn ông...",
    relatedIds: [],
    pages: []
  },
  {
    id: "bua-tiec-chao-mung",
    title: "Bữa Tiệc Chào Mừng",
    originalTitle: "Buta ga Itta Kyoushitsu",
    author: "Service Boy (Hontoku)",
    cover: "images/bua-tiec-chao-mung-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["18+", "Oneshot", "Rape", "NP"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary: "Bữa tiệc chào mừng học sinh mới...",
    relatedIds: [],
    pages: []
  },
  {
    id: "cai-tao-playboy",
    title: "Cải Tạo Playboy",
    originalTitle:
      "Otokonoko VS Yarichin ~Yarisute Shippai! Mesuinu Choukyou Taikyuusen!",
    author: "Yamamoto Manami",
    cover: "images/cai-tao-playboy-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["18+", "Oneshot", "Rape", "Hardcore", "Mindbreak"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary:
      "Câu chuyện về một cậu Playboy với sở thích hại đời gái nhà lành cuối cùng cũng tìm được chân lý của đời mình…",
    relatedIds: [],
    pages: []
  },
  {
    id: "chuyen-buyt-muon",
    title: "Chuyến Buýt Muộn",
    originalTitle: "Yokujou Non-stop Bus",
    author: "Kume (Minakami Riku)",
    cover: "images/chuyen-buyt-muon-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["18+", "Oneshot", "Rape"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary:
      "Phải cẩn thận khi đi một mình trong một chuyến tàu/buýt muộn…",
    relatedIds: [],
    pages: []
  },
  {
    id: "con-doi",
    title: "Cơn Đói",
    originalTitle: "Harapeko Saimin",
    author: "Akaeboshi (Binto)",
    cover: "images/con-doi-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["18+", "Oneshot", "Rape", "Hypnosis"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary: "Được cậu bạn cùng lớp mời đến nhà ăn pizza…",
    relatedIds: [],
    pages: []
  },
  {
    id: "dich-vu-9900-won",
    title: "“Dịch Vụ” 9900 Won",
    originalTitle: "All for 9900 Won",
    author: "Yayameme / Xiang",
    cover: "images/dich-vu-9900-won-cover.jpg",
    adult: true,
    genre: "Yaoi",
    tags: ["18+", "Manhwa", "Rape"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary:
      "Sau khi tìm được công việc thích hợp, Myeongwoo được phân làm nhân viên tiếp thị quảng cáo sản phẩm của công ty. Nhưng trong lúc làm việc cậu không may bị một tên tự cao tự đại từ một công ty có tầm ảnh hưởng bắt gặp, hắn ta đã thẳng thừng bác bỏ sản phẩm được cho là “máy ảnh chất lượng cao của Trung Quốc” của cậu! Sau khi quá chén, bằng một cách vi diệu nào đó cậu lại tỉnh dậy tại nhà cái tên kiêu ngạo kia và phát hiện bí mật của hắn... Liệu chuyện này sẽ dẫn tới điều gì đây…",
    relatedIds: [],
    pages: []
  },
  {
    id: "daiya-no-ace-dj-khe-uoc-halloween",
    title: "Daiya no Ace dj – Khế Ước Halloween",
    originalTitle:
      "Daiya no A / Ace of Diamond dj / Daiya no Ace dj – Halloween Engage",
    author: "DigDug (Shippo)",
    cover: "images/khe-uoc-halloween-cover.jpg",
    adult: true,
    genre: "Yaoi",
    tags: ["Doujinshi", "18+", "Oneshot", "Hypnosis", "Fantasy", "Demon", "Hardcore"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary:
      "Kazuya Miyuki x Eijun Sawamura. Dụ ác quỷ vào tròng (hay bị ác quỷ lừa?)…",
    relatedIds: [],
    pages: []
  },
  {
    id: "daiya-no-ace-dj-meo-con-cua-toi",
    title: "Daiya no Ace dj – Mèo Con Của Tôi",
    originalTitle: "Ace of Diamond / Daiya no Ace dj – my own cat",
    author: "DigDug (Shippo)",
    cover: "images/meo-con-cua-toi-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["Doujinshi", "18+", "Oneshot", "Rape", "Mindbreak", "Hardcore"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary: "Kazuya Miyuki x Eijun Sawamura. Em chính là mèo con của anh… <3",
    relatedIds: [],
    pages: []
  },
  {
    id: "lieu-phap-thoi-mien",
    title: "Liệu Pháp Thôi Miên",
    originalTitle: "Suyasuya Hypnotherapy",
    author: "DigDug (Shippo)",
    cover: "images/lieu-phap-thoi-mien-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["Hypnosis", "18+", "Oneshot", "Rape", "Hardcore"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary: "Câu chuyện về một cậu bé bị mất ngủ…",
    relatedIds: [],
    pages: []
  },
  {
    id: "boku-dake-ga-inai-machi-dj-thoi-mien-than-ky",
    title: "Boku Dake ga Inai Machi dj – Thôi Miên Thần Kỳ",
    originalTitle:
      "Boku Dake ga Inai Machi dj – Hypno Wonder Land",
    author: "Akaeboshi (Binto)",
    cover: "images/thoi-mien-than-ky-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["Hypnosis", "18+", "Oneshot", "Doujinshi", "Mindbreak", "Rape"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary: "Bắt cóc / cầm tù play… <3",
    relatedIds: [],
    pages: []
  },
  {
    id: "nguoi-ban-trai-dac-biet",
    title: "Người Bạn Trai Đặc Biệt",
    originalTitle:
      "他的特别男友 / 彼の特別な彼 / His Special Boyfriend / Kare no Tokubetsu na Kare",
    author: "Narusaka Rin",
    cover: "images/nguoi-ban-trai-dac-biet-cover.jpg",
    adult: false,
    genre: "Yaoi",
    tags: ["Comedy", "Romance", "School life"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary:
      "Mặc dù rất đẹp trai, tất cả những gì Hiraoka Tatsuya muốn là một cuộc sống bình thường và yên bình. Nhưng rồi, cuộc sống của cậu lại bị đảo lộn bởi học sinh chuyển trường, Suruga Daichi, một diễn viên nổi tiếng. Là Chủ tịch hội học sinh, cậu được phân công “chăm sóc” anh ta. Điều gì sẽ xảy ra đây…..?",
    relatedIds: [],
    pages: []
  },
  {
    id: "toi-da-bien-mat-khong-bao-gio-tro-ve",
    title: "Tôi Đã Biến Mất, Không Bao Giờ Trở Về",
    originalTitle: "Kieta Boku wa Kaerenai / I Disappeared Never to Return",
    author: "Goya",
    cover: "images/toi-da-bien-mat-cover.jpg",
    adult: true,
    genre: "Hard yaoi",
    tags: ["Rape", "Hypnosis", "Mindbreak", "18+", "Oneshot", "Hardcore"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary: "Công nghệ hiện đại có thể làm rất nhiều thứ…",
    relatedIds: [],
    pages: []
  },
  {
    id: "tinh-yeu-cam-ky",
    title: "Tình Yêu Cấm Kỵ",
    originalTitle: "秘恋 / Hikoi / Hiren / Immoral Love",
    author: "COSMIQ (Mio Junta) / 三尾じゅん太",
    cover: "images/tinh-yeu-cam-ky-cover.jpg",
    adult: false,
    genre: "Yaoi",
    tags: ["Brother", "Drama"],
    groupId: "py-danmei",
    updated: "2021-12-23",
    status: "Đã hoàn thành",
    summary:
      "Khi Touya có giấc mộng xuân đầu tiên, Naoto quyết định dạy em trai mình cách tự sướng và bắn. Không ngờ rằng, hành động không hề trong sáng này lại dẫn đến một điều khác… Nhìn thấy người anh của mình “tự sướng” đã khiến cậu bé Touya nảy sinh ham muốn với anh trai, biết rằng đó là một điều cấm kỵ, cậu chỉ dám cất giữ nó ở trong tim. Đến một ngày, cậu phát hiện người anh Naoto của mình thế nhưng cũng có một bí mật chôn giấu, điều này đã phơi bày tất cả. Bây giờ, cả hai phải làm thế nào để gìn giữ sự bình yên của gia đình đây…?",
    relatedIds: [],
    pages: []
  },
  {
    id: "ten-khong-dau",
    title: "Tên truyện tiếng Việt",
    originalTitle: "Tên gốc / Romaji / Eng",
    author: "Tên tác giả",
    cover: "images/ten-khong-dau/cover.jpg",
    adult: true,
    genre: "Yaoi",
    tags: ["School life", "Romance", "Oneshot", "18+", "Omegaverse"],
    groupId: "py-danmei", // hoặc "Nhóm ẩn danh"
    updated: "2025-01-01",
    status: "Đã hoàn thành",
    summary: "Vài dòng giới thiệu về truyện...",
    relatedIds: ["id-truyen-khac-neu-muon-gioi-thieu"],
    pages: [
      "images/ten-khong-dau/1.jpg",
      "images/ten-khong-dau/2.jpg"
    ]
  }
];

