<script setup>
import { ref, onMounted } from "vue";

const showAIDetectDrawer = ref(false);
const isLoading = ref(false);
const isInterviewQuestionsExpanded = ref(false);
const highlightedElement = ref(null);
const isCopied = ref(false);

// 新增反饋狀態追蹤
const feedbacks = ref({
  item1: { liked: false, disliked: false },
  item2: { liked: false, disliked: false },
  item3: { liked: false, disliked: false },
  item4: { liked: false, disliked: false },
  item5: { liked: false, disliked: false },
});

// 處理用戶反饋
const handleFeedback = (itemId, type) => {
  // 如果用戶點擊已選中的按鈕，則取消選中
  if (type === "like" && feedbacks.value[itemId].liked) {
    feedbacks.value[itemId].liked = false;
  } else if (type === "dislike" && feedbacks.value[itemId].disliked) {
    feedbacks.value[itemId].disliked = false;
  } else {
    // 否則，選中新按鈕並取消另一個按鈕的選中狀態
    feedbacks.value[itemId].liked = type === "like";
    feedbacks.value[itemId].disliked = type === "dislike";
  }
};

const openAIDetectDrawer = () => {
  showAIDetectDrawer.value = true;
  isLoading.value = true;

  // 模擬AI檢測過程，3秒後顯示結果
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};

const closeAIDetectDrawer = () => {
  showAIDetectDrawer.value = false;
  // 清除高亮效果
  if (highlightedElement.value) {
    highlightedElement.value.classList.remove("highlight-content");
    highlightedElement.value = null;
  }
};

// 控制面試問題展開/折疊
const toggleInterviewQuestions = () => {
  isInterviewQuestionsExpanded.value = !isInterviewQuestionsExpanded.value;
};

// 複製文字到剪貼簿
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
    }, 2000);
  });
};

// 增強型定位功能：滾動到指定段落並高亮顯示
const scrollToSection = (sectionId, targetText) => {
  // 清除之前的高亮效果
  if (highlightedElement.value) {
    highlightedElement.value.classList.remove("highlight-content");
  }

  const section = document.getElementById(sectionId);
  if (section) {
    // 如果有提供目標文字，直接尋找並高亮包含該文字的元素
    if (targetText) {
      // 尋找包含特定文本的段落元素
      const paragraphs = section.querySelectorAll("p");
      for (const p of paragraphs) {
        if (p.textContent.includes(targetText)) {
          // 添加高亮效果
          p.classList.add("highlight-content");
          highlightedElement.value = p;

          // 直接滾動到高亮元素，不先滾動到段落頂部
          p.scrollIntoView({ behavior: "smooth", block: "center" });
          return; // 找到目標後直接返回
        }
      }
    }

    // 如果沒有找到匹配文本或沒有提供目標文字，則滾動到段落頂部
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
<template>
  <div class="resume bg-#f3f3f3">
    <header>
      <div
        class="headerBlack bg-#292929 h-30px flex justify-start items-center"
      >
        <div class="py-5px px-8px">
          <a href="#" class="text-white text-14px font-bold">招募管理</a>
        </div>
        <div class="py-5px px-8px">
          <a href="#" class="text-white text-14px">人才管理</a>
        </div>
        <div class="py-5px px-8px">
          <a href="#" class="text-white text-14px">人資市集</a>
        </div>
        <div class="py-5px px-8px">
          <a href="#" class="text-white text-14px">人資充電</a>
        </div>
      </div>
      <div
        class="headerWhite bg-white h-70px flex justify-between items-center px-16px border-b-solid border-b-1px border-b-#eee"
      >
        <div class="py-5px px-8px">
          <div class="text-24px font-bold">104 招募管理</div>
        </div>
        <div class="py-5px px-8px flex items-center">
          <div class="font-bold mr-1">企業HR</div>
          <img
            src="@/assets/images/icon_arrow_right.svg"
            alt="arrow"
            class="rotate-90"
          />
        </div>
      </div>
    </header>
    <nav class="flex items-center px-44px h-40px bg-white">
      <ul class="flex items-center list-none p-0 m-0">
        <li>
          <a
            href="#"
            class="py-10px px-16px text-18px leading-27px text-#292929 font-normal"
            >首頁</a
          >
        </li>
        <li>
          <a
            href="#"
            class="py-10px px-16px text-18px leading-27px text-#292929 font-normal"
            >公司</a
          >
        </li>
        <li>
          <a
            href="#"
            class="py-10px px-16px text-18px leading-27px text-#292929 font-normal"
            >職務</a
          >
        </li>
        <li>
          <a
            href="#"
            class="py-10px px-16px text-18px leading-27px text-#292929 font-normal"
            >查詢</a
          >
        </li>
        <li>
          <a
            href="#"
            class="pt-10px py-7px px-16px text-18px leading-27px font-700 text-#00AFB8 border-b-solid border-b-#00AFB8 border-b-3"
            >履歷</a
          >
        </li>
        <li>
          <a
            href="#"
            class="py-10px px-16px text-18px leading-27px text-#292929 font-normal"
            >聯絡</a
          >
        </li>
        <li>
          <a
            href="#"
            class="py-10px px-16px text-18px leading-27px text-#292929 font-normal"
            >數據</a
          >
        </li>
        <li>
          <a
            href="#"
            class="py-10px px-16px text-18px leading-27px text-#292929 font-normal"
            >購買</a
          >
        </li>
        <li>
          <a
            href="#"
            class="py-10px px-16px text-18px leading-27px text-#292929 font-normal"
            >設定</a
          >
        </li>
        <li>
          <a
            href="#"
            class="py-10px px-16px text-18px leading-27px text-#292929 font-normal"
            >更多</a
          >
        </li>
      </ul>
    </nav>
    <main class="bg-#f3f3f3 py-10 px-6 max-w-1320px mx-auto">
      <div class="pt-5 px-3 pb-20">
        <h2 class="m-0 text-start font-400 h-12 border-b-dashed border-b-#ddd">
          <span>軟體工程師</span>
          <span class="ml-5">應徵履歷</span>
        </h2>
        <div class="py-4 flex justify-between gap-12">
          <div class="w-full">
            <div class="py-6px px-4 flex justify-between bg-#eee">
              <div>應徵日期：2025/05/15 13:20</div>
              <div>代碼：37889955665566</div>
            </div>
            <!-- 履歷區塊 -->
            <section>
              <div
                class="banner bg-[url(https://cdn.104-dev.com.tw/static/images/cprofile/themeDefault/info-default-1.svg)] bg-no-repeat bg-center bg-cover h-270px w-full"
              ></div>
              <div class="relative bg-white pb-4 relative px-6">
                <!-- avatar -->
                <div
                  class="flex justify-center items-center w-32 h-32 rounded-full bg-white absolute -top-8 -translate-y-8"
                >
                  <img
                    src="@/assets/images/avatar.svg"
                    alt=""
                    class="w-30 h-30 object-cover bg-gray-300 rounded-full"
                  />
                </div>
                <!-- name -->
                <div
                  class="absolute -top-10 left-43 text-24px font-bold text-#292929 flex items-center"
                >
                  <div>李冠宇</div>
                  <div
                    class="text-14px leading-20px font-400 text-white ml-3 bg-#292929 opacity-70 px-2 rounded-full"
                  >
                    軟體工程師
                  </div>
                </div>
                <!-- 履歷資訊 -->
                <div class="pt-4 ml-38 text-start pb-15">
                  <p class="leading-28px font-700 mb-1 mt-0">
                    國立清華大學 | 資訊工程學系 碩士
                  </p>
                  <p class="leading-28px font-700 mb-1 mt-0">
                    國立中興大學 | 資訊管理學系 學士
                  </p>
                  <p
                    class="leading-20px text-14px font-700 text-#7e7e7e mb-4 mt-0"
                  >
                    台中市10~11年工作經驗希望職稱：資深軟體工程師
                  </p>
                  <div class="mb-4">
                    <button
                      class="w-32 py-2 bg-#eee border-solid border-1 border-#a9a9a9 font-400 rounded-4px mr-6"
                    >
                      邀約
                    </button>
                    <button
                      class="w-32 py-2 bg-#eee border-solid border-1 border-#a9a9a9 font-400 rounded-4px mr-6"
                    >
                      聊聊
                    </button>
                    <button
                      class="w-32 py-2 bg-#eee border-solid border-1 border-#a9a9a9 font-400 rounded-4px"
                    >
                      聯繫方式
                    </button>
                  </div>
                  <p class="leading-28px text-#7e7e7e">
                    資深軟體工程師、全端開發工程師
                  </p>
                </div>
                <div class="py-6 border-t-solid border-t-#eee">
                  <div class="flex items-center gap-6 mb-2">
                    <p class="m-0 leading-28px font-700 text-start">基本資料</p>
                    <p class="m-0 leading-28px">男、34歲</p>
                  </div>
                  <div class="flex items-center gap-6 mb-2">
                    <p class="m-0 leading-28px font-700 text-start">就業狀態</p>
                    <p class="m-0 leading-28px">積極尋求新事業挑戰</p>
                  </div>
                  <div class="flex items-center gap-6 mb-2">
                    <p class="m-0 leading-28px font-700 text-start">居住地區</p>
                    <p class="m-0 leading-28px">台中市西區公益路***</p>
                  </div>
                  <div class="flex items-center gap-6 mb-2">
                    <p class="m-0 leading-28px font-700 text-start">持有駕照</p>
                    <p class="m-0 leading-28px">普通小型車及重型機車駕照</p>
                  </div>
                  <div class="flex items-center gap-6 mb-2">
                    <p class="m-0 leading-28px font-700 text-start">自備車輛</p>
                    <p class="m-0 leading-28px">自備汽車</p>
                  </div>
                  <div class="flex items-center gap-6 mb-2">
                    <p class="m-0 leading-28px font-700 text-start">特殊身分</p>
                    <p class="m-0 leading-28px">無</p>
                  </div>
                </div>
                <div class="py-6 border-t-solid border-t-#eee">
                  <h2
                    class="m-0 leading-24px text-18px font-700 text-start mb-3"
                  >
                    應徵資訊
                  </h2>
                  <div class="flex items-center gap-6 mb-2">
                    <p class="m-0 leading-28px font-700 text-start">應徵職務</p>
                    <p class="m-0 leading-28px">資深軟體工程師</p>
                  </div>
                  <div class="flex items-center gap-6 mb-2">
                    <p class="m-0 leading-28px font-700 text-start">自我推薦</p>
                    <p class="m-0 leading-28px">
                      您好，我叫李冠宇，近日得知貴公司在徵人，希望能有參加面試的機會，謝謝！
                    </p>
                  </div>
                </div>
              </div>
              <!-- 教育背景 -->
              <div id="education-section" class="bg-white mt-4">
                <div class="px-6 py-3 border-b-solid border-b-#eeeeee">
                  <p class="text-18px font-700 leading-24px m-0 text-start">
                    教育背景
                  </p>
                </div>
                <div class="py-3">
                  <div class="flex items-start justify-between px-6 py-3">
                    <div>
                      <p class="m-0 leading-28px font-700 text-start">
                        國立清華大學
                      </p>
                      <p class="m-0 text-14px leading-24px text-start">
                        資訊工程學系｜碩士畢業
                      </p>
                    </div>
                    <p class="m-0 text-14px leading-20px font-400 text-#7e7e7e">
                      2012/09~2014/06
                    </p>
                  </div>
                  <div class="flex items-start justify-between px-6 py-3">
                    <div>
                      <p class="m-0 leading-28px font-700 text-start">
                        國立中興大學
                      </p>
                      <p class="m-0 text-14px leading-24px text-start">
                        資訊管理學系｜學士畢業
                      </p>
                    </div>
                    <p class="m-0 text-14px leading-20px font-400 text-#7e7e7e">
                      2008/09~2012/06
                    </p>
                  </div>
                </div>
              </div>
              <!-- 專業技能 -->
              <div id="skills-section" class="bg-white mt-4">
                <div class="px-6 py-3 border-b-solid border-b-#eeeeee">
                  <p class="text-18px font-700 leading-24px m-0 text-start">
                    專業技能
                  </p>
                </div>
                <div class="p-6">
                  <div class="mb-4">
                    <p class="m-0 leading-28px font-700 text-start mb-2">
                      高級程式設計
                    </p>
                    <p class="m-0 leading-28px text-start">
                      精通
                      Python、JavaScript、Java，具備跨平台全端開發能力，驅動高效能系統建構。
                    </p>
                  </div>
                  <div class="mb-4">
                    <p class="m-0 leading-28px font-700 text-start mb-2">
                      前端與後端框架
                    </p>
                    <p class="m-0 leading-28px text-start">
                      熟練運用
                      React、Node.js、Django，打造無縫用戶體驗與穩健後端架構。
                    </p>
                  </div>
                  <div class="mb-4">
                    <p class="m-0 leading-28px font-700 text-start mb-2">
                      雲端與 DevOps
                    </p>
                    <p class="m-0 leading-28px text-start">
                      掌握 AWS、Docker、Kubernetes，實現自動化部署與雲端優化。
                    </p>
                  </div>
                  <div class="mb-4">
                    <p class="m-0 leading-28px font-700 text-start mb-2">
                      資料庫管理
                    </p>
                    <p class="m-0 leading-28px text-start">
                      深入操作
                      MySQL、MongoDB，具備大規模資料處理與效能調校經驗。
                    </p>
                  </div>
                  <div>
                    <p class="m-0 leading-28px font-700 text-start mb-2">
                      領導與協作
                    </p>
                    <p class="m-0 leading-28px text-start">
                      卓越的跨部門溝通與專案管理能力，擅長引領團隊實現業務目標。
                    </p>
                  </div>
                </div>
              </div>
              <!-- 工作經驗 -->
              <div id="experience-section" class="bg-white mt-4">
                <div class="px-6 py-3 border-b-solid border-b-#eeeeee">
                  <p class="text-18px font-700 leading-24px m-0 text-start">
                    工作經驗
                  </p>
                </div>
                <div class="py-3">
                  <div class="py-3 px-6 flex gap-6">
                    <p
                      class="m-0 leading-24px text-18px font-700 text-start whitespace-nowrap"
                    >
                      總年資
                    </p>
                    <div>
                      <p class="m-0 leading-24px text-18px font-700 text-start">
                        10~11年工作經驗
                      </p>
                      <p class="m-0 leading-24px text-18px font-700 text-start">
                        資深軟體工程師 (6~7年)、軟體工程師 (3~4年)、實習生
                        (1年(含)以下)
                      </p>
                    </div>
                  </div>
                  <!-- 一個工作經驗 -->
                  <div class="flex py-5 px-6">
                    <div
                      class="bg-#1654B9 text-white rounded-8px box-border w-14 h-14 text-24px font-700 leading-14 text-center overflow-hidden mr-12 flex-shrink-0"
                    >
                      A
                    </div>
                    <div class="border-b-solid border-b-#eeeeee">
                      <div class="flex justify-between gap-6 w-full">
                        <div>
                          <p
                            class="text-start m-0 text-18px leading-24px font-700"
                          >
                            資深軟體工程師
                          </p>
                          <p
                            class="text-start m-0 text-16px leading-28px font-700"
                          >
                            ABC科技股份有限公司（科技業）
                          </p>
                          <p
                            class="text-start m-0 text-14px leading-20px font-400"
                          >
                            資深軟體工程師月薪約 120,000 元
                          </p>
                        </div>
                        <p class="m-0 text-14px leading-20px text-#7e7e7e">
                          2018/01~2024/06
                        </p>
                      </div>
                      <div class="pt-3 pb-6">
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          1. 系統架構設計：主導企業級應用程式架構，運用微服務與
                          AWS 雲端技術，提升系統可擴展性 30%。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          2. 專案領導：帶領 10
                          人開發團隊，負責需求分析、功能規劃與敏捷開發，確保專案如期交付。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          3. 效能優化：重構後端程式碼，縮短 API 響應時間
                          25%，顯著提升用戶滿意度。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          重要專案
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          【數位轉型平台】成效：成功將傳統系統遷移至雲端，降低
                          40% 運營成本，業績增長 15%。
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- 一個工作經驗 -->
                  <div class="flex py-5 px-6">
                    <div
                      class="bg-#6FB823 text-white rounded-8px box-border w-14 h-14 text-24px font-700 leading-14 text-center overflow-hidden mr-12 flex-shrink-0"
                    >
                      X
                    </div>
                    <div class="border-b-solid border-b-#eeeeee w-full">
                      <div class="flex justify-between gap-6 w-full">
                        <div>
                          <p
                            class="text-start m-0 text-18px leading-24px font-700"
                          >
                            軟體工程師
                          </p>
                          <p
                            class="text-start m-0 text-16px leading-28px font-700"
                          >
                            XYZ資訊有限公司（科技業）
                          </p>
                          <p
                            class="text-start m-0 text-14px leading-20px font-400"
                          >
                            軟體工程師月薪約 80,000 元
                          </p>
                        </div>
                        <p
                          class="flex flex-col m-0 text-14px leading-20px text-#7e7e7e"
                        >
                          <span class="text-end">2014/07~2017/12</span>
                          <span class="text-end">3年5個月</span>
                        </p>
                      </div>
                      <div class="pt-3 pb-6">
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          1. 全端開發：開發並維護企業內部管理系統，使用 React 與
                          Node.js 實現動態前端與高效後端。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          2. 流程自動化：導入 CI/CD 流程，縮短部署週期
                          50%，提升團隊開發效率。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          3.
                          跨部門協作：與產品經理及設計團隊合作，確保產品功能符合市場需求。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          重要專案
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          【企業資源管理系統】成效：系統上線後，內部作業效率提升
                          35%，客戶滿意度提高至 90%。
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- 一個工作經驗 -->
                  <div class="flex py-5 px-6">
                    <div
                      class="bg-#00AFB8 text-white rounded-8px box-border w-14 h-14 text-24px font-700 leading-14 text-center overflow-hidden mr-12 flex-shrink-0"
                    >
                      D
                    </div>
                    <div class="w-full">
                      <div class="flex justify-between gap-6 w-full">
                        <div>
                          <p
                            class="text-start m-0 text-18px leading-24px font-700"
                          >
                            軟體開發實習生
                          </p>
                          <p
                            class="text-start m-0 text-16px leading-28px font-700"
                          >
                            DEF科技公司（科技業）
                          </p>
                          <p
                            class="text-start m-0 text-14px leading-20px font-400"
                          >
                            軟體開發實習生月薪約 30,000 元
                          </p>
                        </div>
                        <p
                          class="flex flex-col m-0 text-14px leading-20px text-#7e7e7e"
                        >
                          <span class="text-end">2013/07~2013/08</span>
                          <span class="text-end">2個月</span>
                        </p>
                      </div>
                      <div class="pt-3 pb-6">
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          1. 原型開發：協助開發公司產品原型，使用 Python 與
                          Django 框架實現初步功能。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          2.
                          測試與除錯：執行單元測試，提交錯誤報告，確保產品穩定性。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          3.
                          技術研究：探索新興前端技術，為團隊提供技術可行性報告。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          重要專案
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          【產品原型展示】成果：原型獲得客戶高度評價，促成後續
                          500 萬資金投資。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 求職條件 -->
              <div id="job-requirements-section" class="bg-white mt-4">
                <div class="px-6 py-3 border-b-solid border-b-#eeeeee">
                  <p class="text-18px font-700 leading-24px m-0 text-start">
                    求職條件
                  </p>
                </div>
                <div class="p-6">
                  <div class="pb-6">
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        工作性質
                      </p>
                      <p class="m-0 leading-28px">全職，追求長期穩定發展</p>
                    </div>
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        上班時段
                      </p>
                      <p class="m-0 leading-28px">
                        日班、可配合輪班，具高度靈活性
                      </p>
                    </div>
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        可上班日
                      </p>
                      <p class="m-0 leading-28px">
                        錄取後隨時可上班，立即投入工作
                      </p>
                    </div>
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        希望待遇
                      </p>
                      <p class="m-0 leading-28px">期望月薪 130,000 元起</p>
                    </div>
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        希望地點
                      </p>
                      <p class="m-0 leading-28px">
                        台中市、台北市、其他科技中心城市
                      </p>
                    </div>
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        遠端工作
                      </p>
                      <p class="m-0 leading-28px">高度適應遠端與混合工作模式</p>
                    </div>
                  </div>
                  <div class="py-6 border-t-solid border-t-#eee">
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        希望職稱
                      </p>
                      <p class="m-0 leading-28px">資深軟體工程師</p>
                    </div>
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        希望職類
                      </p>
                      <p class="m-0 leading-28px">軟體工程師</p>
                    </div>
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        希望產業
                      </p>
                      <p class="m-0 leading-28px">科技業、電商</p>
                    </div>
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        希望內容
                      </p>
                      <p class="m-0 leading-28px">
                        系統架構設計、專案管理、技術領導
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 自傳 -->
              <div id="autobiography-section" class="bg-white mt-4">
                <div class="px-6 py-3 border-b-solid border-b-#eeeeee">
                  <p class="text-18px font-700 leading-24px m-0 text-start">
                    自傳
                  </p>
                </div>
                <div class="p-6">
                  <p class="m-0 text-16px leading-28px text-start">
                    本人在資訊科技領域深耕逾十年，畢業於國立中興大學資訊管理學系，並於國立清華大學取得資訊工程碩士學位，奠定堅實的技術基礎。職業生涯始於
                    DEF 科技公司實習，隨後於 XYZ 資訊有限公司及 ABC
                    科技股份有限公司擔任軟體工程師與資深工程師，累積豐富的全端開發、雲端架構與專案管理經驗。我精通多種程式語言與框架，擅長將複雜需求轉化為高效解決方案，曾主導多項關鍵專案，例如
                    ABC 科技的數位轉型平台，成功降低 40%
                    運營成本並提升市場競爭力。
                  </p>
                  <p class="m-0 text-16px leading-28px text-start mt-4">
                    我堅信技術創新與團隊協作是驅動成功的核心，始終以積極的學習態度與卓越的執行力迎接挑戰。未來，我期盼加入貴公司，貢獻我的專業技能與領導經驗，與團隊共同打造具影響力的產品，實現企業願景。
                  </p>
                </div>
              </div>
            </section>
          </div>
          <!-- 側邊欄 -->
          <div class="resume-side w-220px flex flex-col items-center">
            <button
              class="flex justify-center items-center mb-2 px-2 tracking-32px indent-32px min-w-50 text-white h-38px bg-#00afb8 border-solid border-1 border-#00afb8 rounded-4px font-400"
            >
              邀約
            </button>
            <button
              class="flex justify-center items-center mb-2 px-2 tracking-8px indent-8px min-w-50 h-38px bg-#eee border-solid border-1 border-#a9a9a9 rounded-4px font-400"
            >
              感謝函
            </button>
            <button
              class="flex justify-center items-center mb-2 px-2 tracking-32px indent-32px min-w-50 h-38px bg-#eee border-solid border-1 border-#a9a9a9 rounded-4px font-400"
            >
              儲存
            </button>
            <button
              class="flex justify-center items-center px-2 bg-transparent tracking-32px indent-32px min-w-50 h-38px rounded-4px font-400 text-#00afb8"
            >
              轉寄
            </button>
            <button
              class="flex justify-center items-center px-2 bg-transparent tracking-32px indent-32px min-w-50 h-38px rounded-4px font-400 text-#00afb8"
            >
              列印
            </button>
            <button
              class="flex justify-center items-center px-2 bg-transparent tracking-32px indent-32px min-w-50 h-38px rounded-4px font-400 text-#00afb8"
            >
              刪除
            </button>
            <button
              class="flex justify-center items-center px-2 bg-transparent tracking-32px indent-32px min-w-50 h-38px rounded-4px font-400 text-#00afb8"
            >
              備註
            </button>
            <button
              class="flex justify-center items-center px-2 bg-transparent tracking-32px indent-32px min-w-50 h-38px rounded-4px font-400 text-#00afb8"
            ></button>
            <button
              class="flex justify-center items-center px-2 bg-transparent tracking-32px indent-32px min-w-50 h-38px rounded-4px font-400 text-#00afb8"
            >
              失約
            </button>
            <button
              class="flex justify-center items-center px-2 bg-transparent tracking-32px indent-32px min-w-50 h-38px rounded-4px font-400 text-#00afb8"
            >
              封鎖
            </button>
            <button
              class="flex justify-center items-center mt-6 px-2 tracking-8px indent-8px min-w-50 text-white h-38px bg-#00afb8 border-solid border-1 border-#00afb8 rounded-4px font-400"
              @click="openAIDetectDrawer"
            >
              AI檢測
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- AI檢測 Side Drawer (無遮罩層) -->
    <div
      class="side-drawer fixed top-0 right-0 h-full bg-white z-50 w-400px transform transition-transform duration-300 ease-in-out shadow-lg text-start"
      :class="showAIDetectDrawer ? 'translate-x-0' : 'translate-x-full'"
    >
      <div
        class="drawer-header border-b-solid border-b-1px border-b-#eee p-4 flex justify-between items-center"
      >
        <h2 class="text-20px font-bold m-0">檢測結果</h2>
        <button
          class="text-24px hover:bg-#f3f3f3 rounded-full w-8 h-8 flex items-center justify-center"
          @click="closeAIDetectDrawer"
        >
          &times;
        </button>
      </div>
      <div class="drawer-body p-4 overflow-y-auto h-[calc(100%-66px)]">
        <!-- Skeleton loading -->
        <div v-if="isLoading" class="skeleton-container">
          <div class="flex items-center mb-6">
            <div class="skeleton-circle"></div>
            <div class="ml-3">
              <div class="skeleton-line w-3/4"></div>
              <div class="skeleton-line w-1/2 mt-2"></div>
            </div>
          </div>

          <div class="skeleton-block mb-6"></div>

          <div class="flex justify-center items-center mb-6">
            <div class="skeleton-progress"></div>
            <div class="skeleton-percentage ml-2"></div>
          </div>

          <div class="skeleton-line w-full"></div>
          <div class="skeleton-line w-full mt-2"></div>
          <div class="skeleton-line w-3/4 mt-2"></div>

          <div class="skeleton-block mt-6"></div>
          <div class="skeleton-block mt-4"></div>

          <div class="flex items-center justify-between mt-6">
            <div class="skeleton-button"></div>
            <div class="skeleton-button"></div>
            <div class="skeleton-button"></div>
          </div>

          <div class="skeleton-pulse text-center mt-4 text-#888 text-14px">
            正在分析履歷內容...
          </div>
        </div>

        <!-- 實際內容 -->
        <div v-else>
          <p class="text-16px leading-24px mb-4 text-start mt-0">
            查看並點擊相應錨點跳轉到履歷上的對應段落。
          </p>

          <!-- 錨點導航按鈕 -->
          <div class="mb-6 flex flex-wrap gap-2">
            <button
              @click="scrollToSection('education-section')"
              class="text-14px py-1 px-3 bg-#f3f3f3 hover:bg-#e0e0e0 rounded-full"
            >
              教育背景
            </button>
            <button
              @click="scrollToSection('skills-section')"
              class="text-14px py-1 px-3 bg-#f3f3f3 hover:bg-#e0e0e0 rounded-full"
            >
              專業技能
            </button>
            <button
              @click="scrollToSection('experience-section')"
              class="text-14px py-1 px-3 bg-#f3f3f3 hover:bg-#e0e0e0 rounded-full"
            >
              工作經驗
            </button>
            <button
              @click="scrollToSection('job-requirements-section')"
              class="text-14px py-1 px-3 bg-#f3f3f3 hover:bg-#e0e0e0 rounded-full"
            >
              求職條件
            </button>
            <button
              @click="scrollToSection('autobiography-section')"
              class="text-14px py-1 px-3 bg-#f3f3f3 hover:bg-#e0e0e0 rounded-full"
            >
              自傳
            </button>
          </div>

          <!-- 整合後的分析區塊 -->
          <div class="bg-#f8f8f8 p-4 rounded-4px mb-4">
            <h3 class="text-18px font-bold">建議關注內容</h3>
            <div class="mb-2">
              <div class="flex items-start mb-1">
                <span class="font-bold">1.</span>
                <div class="w-full">
                  <div
                    class="border-l-4 border-l-#ff6b6b pl-3 cursor-pointer hover:bg-#f0f0f0 click-area"
                    @click="
                      scrollToSection(
                        'autobiography-section',
                        '我堅信技術創新與團隊協作是驅動成功的核心'
                      )
                    "
                  >
                    <p
                      class="text-14px leading-22px font-bold m-0 flex line-clamp-2"
                    >
                      我堅信技術創新與團隊協作是驅動成功的核心，始終以積極的學習態度與卓越的執行力迎接挑戰。
                      <span class="click-hint ml-2">
                        <img
                          src="@/assets/images/icon_scroll_to.svg"
                          alt="定位指示器"
                        />
                      </span>
                    </p>
                  </div>
                  <div>
                    <p class="text-14px leading-22px mt-1 ml-3 text-#555">
                      關注原因：自傳中出現大量套話與形容詞，如「堅信」「積極」「卓越」等，缺乏個人獨特經歷或具體案例佐證，語調過於制式。
                      <span class="flex justify-end mt-2">
                        <button
                          class="p-1 mx-1 rounded-full hover:bg-#eee transition-colors"
                          @click="handleFeedback('item3', 'like')"
                          :class="{ 'text-#4CAF50': feedbacks.item3.liked }"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            :stroke="
                              feedbacks.item3.liked ? '#4CAF50' : 'currentColor'
                            "
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                            ></path>
                          </svg>
                        </button>
                        <button
                          class="p-1 mx-1 rounded-full hover:bg-#eee transition-colors"
                          @click="handleFeedback('item3', 'dislike')"
                          :class="{ 'text-#F44336': feedbacks.item3.disliked }"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            :stroke="
                              feedbacks.item3.disliked
                                ? '#F44336'
                                : 'currentColor'
                            "
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                            ></path>
                          </svg>
                        </button>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-2">
              <div class="flex items-start mb-1">
                <span class="font-bold">2.</span>
                <div class="w-full">
                  <div
                    class="border-l-4 border-l-#ff6b6b pl-3 cursor-pointer hover:bg-#f0f0f0 click-area"
                    @click="
                      scrollToSection(
                        'autobiography-section',
                        '本人在資訊科技領域深耕逾十年'
                      )
                    "
                  >
                    <p
                      class="text-14px leading-22px font-bold m-0 flex line-clamp-2"
                    >
                      本人在資訊科技領域深耕逾十年，畢業於國立中興大學資訊管理學系，並於國立清華大學取得資訊工程碩士學位，奠定堅實的技術基礎。
                      <span class="click-hint ml-2">
                        <img
                          src="@/assets/images/icon_scroll_to.svg"
                          alt="定位指示器"
                        />
                      </span>
                    </p>
                  </div>
                  <div>
                    <p class="text-14px leading-22px mt-1 ml-3 text-#555">
                      關注原因：使用「深耕逾十年」「奠定堅實的技術基礎」等過於正式與通用的措辭，缺乏個人真實經歷描述，呈現AI生成的特徵。
                      <span class="flex justify-end mt-2">
                        <button
                          class="p-1 mx-1 rounded-full hover:bg-#eee transition-colors"
                          @click="handleFeedback('item4', 'like')"
                          :class="{ 'text-#4CAF50': feedbacks.item4.liked }"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            :stroke="
                              feedbacks.item4.liked ? '#4CAF50' : 'currentColor'
                            "
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                            ></path>
                          </svg>
                        </button>
                        <button
                          class="p-1 mx-1 rounded-full hover:bg-#eee transition-colors"
                          @click="handleFeedback('item4', 'dislike')"
                          :class="{ 'text-#F44336': feedbacks.item4.disliked }"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            :stroke="
                              feedbacks.item4.disliked
                                ? '#F44336'
                                : 'currentColor'
                            "
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                            ></path>
                          </svg>
                        </button>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-2">
              <div class="flex items-start mb-1">
                <span class="font-bold">3.</span>
                <div class="w-full">
                  <div
                    class="border-l-4 border-l-#ff6b6b pl-3 cursor-pointer hover:bg-#f0f0f0 click-area"
                    @click="
                      scrollToSection(
                        'experience-section',
                        '【數位轉型平台】成效'
                      )
                    "
                  >
                    <p
                      class="text-14px leading-22px font-bold m-0 flex line-clamp-2"
                    >
                      【數位轉型平台】成效：成功將傳統系統遷移至雲端，降低 40%
                      運營成本，業績增長 15%。
                      <span class="click-hint ml-2">
                        <img
                          src="@/assets/images/icon_scroll_to.svg"
                          alt="定位指示器"
                        />
                      </span>
                    </p>
                  </div>
                  <div>
                    <p class="text-14px leading-22px mt-1 ml-3 text-#555">
                      關注原因：使用精確數字（40%、15%）誇大專案成果，但缺乏具體細節說明，顯得公式化，是AI生成內容的典型特徵。
                      <span class="flex justify-end mt-2">
                        <button
                          class="p-1 mx-1 rounded-full hover:bg-#eee transition-colors"
                          @click="handleFeedback('item5', 'like')"
                          :class="{ 'text-#4CAF50': feedbacks.item5.liked }"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            :stroke="
                              feedbacks.item5.liked ? '#4CAF50' : 'currentColor'
                            "
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                            ></path>
                          </svg>
                        </button>
                        <button
                          class="p-1 mx-1 rounded-full hover:bg-#eee transition-colors"
                          @click="handleFeedback('item5', 'dislike')"
                          :class="{ 'text-#F44336': feedbacks.item5.disliked }"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            :stroke="
                              feedbacks.item5.disliked
                                ? '#F44336'
                                : 'currentColor'
                            "
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                            ></path>
                          </svg>
                        </button>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-2">
              <div class="flex items-start mb-1">
                <span class="font-bold">4.</span>
                <div class="w-full">
                  <div
                    class="border-l-4 border-l-#ff6b6b pl-3 cursor-pointer hover:bg-#f0f0f0 click-area"
                    @click="
                      scrollToSection(
                        'experience-section',
                        '系統架構設計：主導企業級應用程式架構'
                      )
                    "
                  >
                    <p
                      class="text-14px leading-22px font-bold m-0 flex line-clamp-2"
                    >
                      系統架構設計：主導企業級應用程式架構，運用微服務與 AWS
                      雲端技術，提升系統可擴展性 30%。
                      <span class="click-hint ml-2">
                        <img
                          src="@/assets/images/icon_scroll_to.svg"
                          alt="定位指示器"
                        />
                      </span>
                    </p>
                  </div>
                  <div>
                    <p class="text-14px leading-22px mt-1 ml-3 text-#555">
                      關注原因：敘述過於制式化且使用通用詞彙，缺乏具體說明如何運用微服務架構及實際提升可擴展性的方法和過程。
                      <span class="flex justify-end mt-2">
                        <button
                          class="p-1 mx-1 rounded-full hover:bg-#eee transition-colors"
                          @click="handleFeedback('item1', 'like')"
                          :class="{ 'text-#4CAF50': feedbacks.item1.liked }"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            :stroke="
                              feedbacks.item1.liked ? '#4CAF50' : 'currentColor'
                            "
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                            ></path>
                          </svg>
                        </button>
                        <button
                          class="p-1 mx-1 rounded-full hover:bg-#eee transition-colors"
                          @click="handleFeedback('item1', 'dislike')"
                          :class="{ 'text-#F44336': feedbacks.item1.disliked }"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            :stroke="
                              feedbacks.item1.disliked
                                ? '#F44336'
                                : 'currentColor'
                            "
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                            ></path>
                          </svg>
                        </button>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-2">
              <div class="flex items-start mb-1">
                <span class="font-bold">5.</span>
                <div class="w-full">
                  <div
                    class="border-l-4 border-l-#ff6b6b pl-3 cursor-pointer hover:bg-#f0f0f0 click-area"
                    @click="scrollToSection('skills-section', '高級程式設計')"
                  >
                    <p
                      class="text-14px leading-22px font-bold m-0 flex line-clamp-2"
                    >
                      高級程式設計：精通
                      Python、JavaScript、Java，具備跨平台全端開發能力，驅動高效能系統建構。
                      <span class="click-hint ml-2">
                        <img
                          src="@/assets/images/icon_scroll_to.svg"
                          alt="定位指示器"
                        />
                      </span>
                    </p>
                  </div>
                  <div>
                    <p class="text-14px leading-22px mt-1 ml-3 text-#555">
                      關注原因：堆砌多種技術關鍵字但未提及實際應用場景，「精通」、「高效能系統建構」等表述過於抽象，缺乏可驗證的專案實例。
                      <span class="flex justify-end mt-2">
                        <button
                          class="p-1 mx-1 rounded-full hover:bg-#eee transition-colors"
                          @click="handleFeedback('item2', 'like')"
                          :class="{ 'text-#4CAF50': feedbacks.item2.liked }"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            :stroke="
                              feedbacks.item2.liked ? '#4CAF50' : 'currentColor'
                            "
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                            ></path>
                          </svg>
                        </button>
                        <button
                          class="p-1 mx-1 rounded-full hover:bg-#eee transition-colors"
                          @click="handleFeedback('item2', 'dislike')"
                          :class="{ 'text-#F44336': feedbacks.item2.disliked }"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            :stroke="
                              feedbacks.item2.disliked
                                ? '#F44336'
                                : 'currentColor'
                            "
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                            ></path>
                          </svg>
                        </button>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-#f8f8f8 p-4 rounded-4px mb-4">
            <h3 class="text-18px font-bold">整體分析</h3>
            <ul class="pl-4 text-14px leading-22px text-#555 mt-3 mb-2">
              <li class="mb-2">
                <p class="font-bold m-0">重複性修辭：</p>
                <p class="m-0 mt-1">
                  多次強調「高效」「創新」「團隊協作」等概念，缺乏個性化細節與具體案例，表現出AI生成的重複模式。
                </p>
              </li>
              <li class="mb-2">
                <p class="font-bold m-0">過於正式的語氣：</p>
                <p class="m-0 mt-1">
                  使用如「深耕逾十年」「奠定堅實的技術基礎」「卓越的執行力」等誇張且通用的措辭，缺乏真實的個人風格。
                </p>
              </li>
              <li class="mb-2">
                <p class="font-bold m-0">通用化描述：</p>
                <p class="m-0 mt-1">
                  自傳與工作經驗使用廣泛適用的陳述，如「將複雜需求轉化為高效解決方案」「期盼貢獻專業技能」，是AI常見的生成模式。
                </p>
              </li>
              <li class="mb-2">
                <p class="font-bold m-0">技術描述浮泛：</p>
                <p class="m-0 mt-1">
                  列舉大量技術關鍵字（Python、AWS、Docker等），但缺乏對技術掌握程度的細微差別描述與應用場景。
                </p>
              </li>
              <li class="mb-2">
                <p class="font-bold m-0">時間線矛盾：</p>
                <p class="m-0 mt-1">
                  聲稱有10-11年工作經驗，但所列職位時間總和與學歷期間存在重疊，在時間線上難以自圓其說。
                </p>
              </li>
              <li class="mb-2">
                <p class="font-bold m-0">數據使用異常：</p>
                <p class="m-0 mt-1">
                  多處使用精確數字（30%、40%、35%、90%），但未提供背景與計算方法，過於整齊的數據模式不符合實際專案的複雜性。
                </p>
              </li>
            </ul>
          </div>
          <!-- 面試建議問題 -->
          <div class="bg-#f8f8f8 p-4 rounded-4px mb-10">
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="toggleInterviewQuestions"
            >
              <h3 class="text-18px font-bold my-0">建議提問問題</h3>
              <div
                class="transform transition-transform duration-300"
                :class="isInterviewQuestionsExpanded ? 'rotate-180' : ''"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>

            <div
              class="interview-questions-container"
              :class="{ expanded: isInterviewQuestionsExpanded }"
            >
              <div class="interview-questions-content">
                <template v-if="isInterviewQuestionsExpanded">
                  <p class="text-14px leading-22px mb-3">
                    以下是針對該履歷內容的建議問題，可直接複製使用：
                  </p>

                  <div
                    class="p-3 bg-white rounded-4px mb-2 border-l-4 border-l-#00AFB8 relative group cursor-pointer hover:bg-#f9f9f9"
                    @click="
                      copyToClipboard(
                        '您提到在ABC科技時提升系統可擴展性30%，能否詳細說明當時的系統架構是什麼，面臨哪些具體挑戰，以及您如何量化這個改善效果？'
                      )
                    "
                  >
                    <div
                      class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00AFB8"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect
                          x="9"
                          y="9"
                          width="13"
                          height="13"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path
                          d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-14px leading-22px mb-1 font-bold">
                      請求具體技術細節：
                    </p>
                    <p
                      class="text-14px leading-22px pl-2 border-l-2 border-transparent"
                    >
                      "您提到在ABC科技時提升系統可擴展性30%，能否詳細說明當時的系統架構是什麼，面臨哪些具體挑戰，以及您如何量化這個改善效果？"
                    </p>
                  </div>

                  <div
                    class="p-3 bg-white rounded-4px mb-2 border-l-4 border-l-#00AFB8 relative group cursor-pointer hover:bg-#f9f9f9"
                    @click="
                      copyToClipboard(
                        '您履歷上列出多種技術能力，包括React、Node.js、AWS等，能否舉一個您最熟悉的技術棧，並分享一個您運用它克服的最困難技術問題？'
                      )
                    "
                  >
                    <div
                      class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00AFB8"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect
                          x="9"
                          y="9"
                          width="13"
                          height="13"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path
                          d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-14px leading-22px mb-1 font-bold">
                      驗證技術深度：
                    </p>
                    <p
                      class="text-14px leading-22px pl-2 border-l-2 border-transparent"
                    >
                      "您履歷上列出多種技術能力，包括React、Node.js、AWS等，能否舉一個您最熟悉的技術棧，並分享一個您運用它克服的最困難技術問題？"
                    </p>
                  </div>

                  <div
                    class="p-3 bg-white rounded-4px border-l-4 border-l-#00AFB8 relative group cursor-pointer hover:bg-#f9f9f9"
                    @click="
                      copyToClipboard(
                        '關於數位轉型平台專案，您提到降低40%運營成本，這個數字是如何計算出來的？能否分享實施過程中遇到的三個最大阻力，以及您個人是如何克服的？'
                      )
                    "
                  >
                    <div
                      class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00AFB8"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect
                          x="9"
                          y="9"
                          width="13"
                          height="13"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path
                          d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-14px leading-22px mb-1 font-bold">
                      探索數據背後的故事：
                    </p>
                    <p
                      class="text-14px leading-22px pl-2 border-l-2 border-transparent"
                    >
                      "關於數位轉型平台專案，您提到降低40%運營成本，這個數字是如何計算出來的？能否分享實施過程中遇到的三個最大阻力，以及您個人是如何克服的？"
                    </p>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 複製狀態提示 -->
    <div v-if="isCopied" class="copy-success">已複製到剪貼簿！</div>
  </div>
</template>

<style lang="scss">
.drawer-overlay {
  backdrop-filter: blur(1px);
}

.side-drawer {
  overscroll-behavior: contain;
  border-left: 1px solid #eee;
}

/* 點擊提示樣式 */
.click-area {
  position: relative;
  transition: all 0.3s ease;
  border-radius: 4px;

  .click-hint {
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background-color: #f0f0f0;

    .click-hint {
      opacity: 1;
    }
  }
}

/* 內容高亮樣式 */
.highlight-content {
  background-color: rgba(255, 235, 59, 0.5);
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(255, 235, 59, 0.5);
}

/* Skeleton Loading 樣式 */
.skeleton-container {
  padding: 12px 0;
}

.skeleton-line {
  height: 16px;
  border-radius: 4px;
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.skeleton-block {
  height: 80px;
  border-radius: 8px;
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.skeleton-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.skeleton-progress {
  width: 70%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.skeleton-percentage {
  width: 40px;
  height: 24px;
  border-radius: 4px;
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.skeleton-button {
  width: 80px;
  height: 32px;
  border-radius: 16px;
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.skeleton-pulse {
  animation: pulse 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* 複製狀態提示 */
.copy-success {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  z-index: 1000;
}

/* 面試問題滑動效果 */
.interview-questions-container {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-in-out;
  overflow: hidden;
}

.interview-questions-container.expanded {
  grid-template-rows: 1fr;
}

.interview-questions-content {
  min-height: 0;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
