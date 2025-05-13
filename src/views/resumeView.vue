<script setup>
import { ref, onMounted } from "vue";

const showAIDetectDrawer = ref(false);
const isLoading = ref(false);

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
};

// 將段落錨點功能實現為方法
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
<template>
  <div class="resume">
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
    <main class="bg-#f3f3f3 py-10">
      <div class="pt-5 px-3 pb-20">
        <h2 class="m-0 text-start font-400 h-12 border-b-dashed border-b-#ddd">
          <span>行銷企劃</span>
          <span class="ml-5">應徵履歷</span>
        </h2>
        <div class="py-4 flex justify-between gap-6">
          <div class="w-906px">
            <div class="py-6px px-4 flex justify-between bg-#eee">
              <div>應徵日期：2025/05/15 13:20</div>
              <div>代碼：37889955665566</div>
            </div>
            <!-- 履歷區塊 -->
            <section>
              <div
                class="banner bg-[url(https://cdn.104-dev.com.tw/static/images/cprofile/themeDefault/info-default-1.svg)] bg-no-repeat bg-center bg-cover h-270px w-full"
              ></div>
              <div class="bg-white pb-4 relative px-6">
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
                <!-- 履歷資訊 -->
                <div class="pt-4 ml-38 text-start pb-15">
                  <p class="leading-28px font-700 mb-1 mt-0">
                    國立臺北大學 | 古生物學教授
                  </p>
                  <p class="leading-28px font-700 mb-1 mt-0">
                    New York University | 哲學系 博士畢業
                  </p>
                  <p
                    class="leading-20px text-14px font-700 text-#7e7e7e mb-4 mt-0"
                  >
                    美國紐約州16~17年工作經驗希望職稱：我今天要準時下班
                  </p>
                  <div class="mb-4">
                    <button
                      class="w-32 h-38px bg-#eee border-solid border-1 border-#a9a9a9 font-400 rounded-4px mr-6"
                    >
                      邀約
                    </button>
                    <button
                      class="w-32 h-38px bg-#eee border-solid border-1 border-#a9a9a9 font-400 rounded-4px mr-6"
                    >
                      聊聊
                    </button>
                    <button
                      class="w-32 h-38px bg-#eee border-solid border-1 border-#a9a9a9 font-400 rounded-4px"
                    >
                      聯繫方式
                    </button>
                  </div>
                  <p class="leading-28px text-#7e7e7e">考古學家、大學教授</p>
                </div>
                <div class="py-6 border-t-solid border-t-#eee">
                  <div class="flex items-center gap-6 mb-2">
                    <p class="m-0 leading-28px font-700 text-start">基本資料</p>
                    <p class="m-0 leading-28px">男、44歲</p>
                  </div>
                  <div class="flex items-center gap-6 mb-2">
                    <p class="m-0 leading-28px font-700 text-start">就業狀態</p>
                    <p class="m-0 leading-28px">仍在職</p>
                  </div>
                  <div class="flex items-center gap-6 mb-2">
                    <p class="m-0 leading-28px font-700 text-start">居住地區</p>
                    <p class="m-0 leading-28px">美國紐約州中央公***</p>
                  </div>
                  <div class="flex items-center gap-6 mb-2">
                    <p class="m-0 leading-28px font-700 text-start">持有駕照</p>
                    <p class="m-0 leading-28px">輕型機車駕照</p>
                  </div>
                  <div class="flex items-center gap-6 mb-2">
                    <p class="m-0 leading-28px font-700 text-start">自備車輛</p>
                    <p class="m-0 leading-28px">輕型機車</p>
                  </div>
                  <div class="flex items-center gap-6 mb-2">
                    <p class="m-0 leading-28px font-700 text-start">特殊身分</p>
                    <p class="m-0 leading-28px">外籍人士 身心障礙</p>
                  </div>
                  <div class="flex items-center gap-6 mb-2">
                    <p class="m-0 leading-28px font-700 text-start">身障類別</p>
                    <p class="m-0 leading-28px">視覺障礙(輕度)</p>
                  </div>
                  <div class="flex items-center gap-6 mb-2">
                    <p class="m-0 leading-28px font-700 text-start">身障證明</p>
                    <p class="m-0 leading-28px">沒有身心障礙證明</p>
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
                    <p class="m-0 leading-28px">行銷企劃</p>
                  </div>
                  <div class="flex items-center gap-6 mb-2">
                    <p class="m-0 leading-28px font-700 text-start">自我推薦</p>
                    <p class="m-0 leading-28px">
                      您好，我叫 Chris
                      Webber，近日得知貴公司在徵人，希望能有參加面試的機會，謝謝！
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
                        New York University
                      </p>
                      <p class="m-0 text-14px leading-24px text-start">
                        哲學系｜博士畢業
                      </p>
                    </div>
                    <p class="m-0 text-14px leading-20px font-400 text-#7e7e7e">
                      2020/06~2022/06
                    </p>
                  </div>
                  <div class="flex items-start justify-between px-6 py-3">
                    <div>
                      <p class="m-0 leading-28px font-700 text-start">
                        台灣首府大學
                      </p>
                      <p class="m-0 text-14px leading-24px text-start">
                        考古學系｜碩士畢業
                      </p>
                    </div>
                    <p class="m-0 text-14px leading-20px font-400 text-#7e7e7e">
                      2010/01~2015/02
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
                        16~17年工作經驗
                      </p>
                      <p class="m-0 leading-24px text-18px font-700 text-start">
                        教授／副教授／助理教授 (12~13年)、其他研究人員
                        (5~6年)、儲備幹部 (1~2年)、品管／品保工程師
                        (1年(含)以下)
                      </p>
                    </div>
                  </div>
                  <!-- 一個工作經驗 -->
                  <div class="flex py-5 px-6">
                    <div
                      class="bg-#1654B9 text-white rounded-8px box-border w-14 h-14 text-24px font-700 leading-14 text-center overflow-hidden mr-12"
                    >
                      國
                    </div>
                    <div class="border-b-solid border-b-#eeeeee w-full">
                      <div class="flex justify-between gap-6 w-full">
                        <div>
                          <p
                            class="text-start m-0 text-18px leading-24px font-700"
                          >
                            古生物學教授
                          </p>
                          <p
                            class="text-start m-0 text-16px leading-28px font-700"
                          >
                            國立臺北大學（大專校院教育事業）
                          </p>
                          <p
                            class="text-start m-0 text-14px leading-20px font-400"
                          >
                            教授／副教授／助理教授月薪26,000元/年薪600,000元
                          </p>
                        </div>
                        <p class="m-0 text-14px leading-20px text-#7e7e7e">
                          2011/12~仍在職
                        </p>
                      </div>
                      <div class="pt-3 pb-6">
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          1.
                          分析需求：研究市場趨勢、蒐集對手資訊，分析出對公司有利的策略。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          2.
                          專案開發：與開發團隊緊密配合，管控專案進度；可行性評估、功能規劃、規格撰寫、測試驗收。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          3.
                          追蹤成效：觀測用戶反饋、數據，並持續營運產品，進行下一代產品規劃。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          重要專案
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          【電商類商品頁改版】成效：商品頁轉換率成長21%，業績成長4.3%
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          【商品後台改版】成果：增加商品設定手機呈現、數據分析，為後台最高客戶滿意度專案
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- 一個工作經驗 -->
                  <div class="flex py-5 px-6">
                    <div
                      class="bg-#6FB823 text-white rounded-8px box-border w-14 h-14 text-24px font-700 leading-14 text-center overflow-hidden mr-12"
                    >
                      國
                    </div>
                    <div class="border-b-solid border-b-#eeeeee w-full">
                      <div class="flex justify-between gap-6 w-full">
                        <div>
                          <p
                            class="text-start m-0 text-18px leading-24px font-700"
                          >
                            古文物研究員
                          </p>
                          <p
                            class="text-start m-0 text-16px leading-28px font-700"
                          >
                            國立歷史博物館（圖書館／博物館類似機構 500人以上）
                          </p>
                          <p
                            class="text-start m-0 text-14px leading-20px font-400"
                          >
                            其他研究人員需負擔管理責任，且直接管理人數約4人以下月薪26,000元
                          </p>
                        </div>
                        <p
                          class="flex flex-col m-0 text-14px leading-20px text-#7e7e7e"
                        >
                          <span class="text-end">2005/01~2010/01</span>
                          <span class="text-end">5年1個月</span>
                        </p>
                      </div>
                      <div class="pt-3 pb-6">
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          1.
                          分析需求：研究市場趨勢、蒐集對手資訊，分析出對公司有利的策略。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          2.
                          專案開發：與開發團隊緊密配合，管控專案進度；可行性評估、功能規劃、規格撰寫、測試驗收。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          3.
                          追蹤成效：觀測用戶反饋、數據，並持續營運產品，進行下一代產品規劃。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          重要專案
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          【電商類商品頁改版】成效：商品頁轉換率成長21%，業績成長4.3%
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          【商品後台改版】成果：增加商品設定手機呈現、數據分析，為後台最高客戶滿意度專案
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- 一個工作經驗 -->
                  <div class="flex py-5 px-6">
                    <div
                      class="bg-#00AFB8 text-white rounded-8px box-border w-14 h-14 text-24px font-700 leading-14 text-center overflow-hidden mr-12"
                    >
                      1
                    </div>
                    <div class="w-full">
                      <div class="flex justify-between gap-6 w-full">
                        <div>
                          <p
                            class="text-start m-0 text-18px leading-24px font-700"
                          >
                            行銷專案經理
                          </p>
                          <p
                            class="text-start m-0 text-16px leading-28px font-700"
                          >
                            聯合行銷顧問股份有限公司
                          </p>
                          <p
                            class="text-start m-0 text-14px leading-20px font-400"
                          >
                            行銷企劃月薪26,000元/年薪600,000元
                          </p>
                        </div>
                        <p
                          class="flex flex-col m-0 text-14px leading-20px text-#7e7e7e"
                        >
                          <span class="text-end">2021/03~2024/04</span>
                          <span class="text-end">3年1個月</span>
                        </p>
                      </div>
                      <div class="pt-3 pb-6">
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          1.
                          主導10項品牌推廣專案，平均專案達成率98%，協助客戶品牌社群互動率提升60%。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          2.
                          分析市場數據，調整行銷策略，三個月內提升客戶網站自然流量成長180%。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          3.
                          跨部門協調，確保專案按時交付，並帶領團隊達成年度營收成長12%。
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          重要專案
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          【電商類商品頁改版】成效：商品頁轉換率成長21%，業績成長4.3%
                        </p>
                        <p
                          class="m-0 text-start leading-28px font-400 text-#212529"
                        >
                          【商品後台改版】成果：增加商品設定手機呈現、數據分析，為後台最高客戶滿意度專案
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
                      <p class="m-0 leading-28px">
                        全職、實習、寒暑假工讀、兼職
                      </p>
                    </div>
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        上班時段
                      </p>
                      <p class="m-0 leading-28px">
                        日班、晚班、大夜班、假日班、週三、可配合輪班
                      </p>
                    </div>
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        可上班日
                      </p>
                      <p class="m-0 leading-28px">錄取後隨時可上班</p>
                    </div>
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        希望待遇
                      </p>
                      <p class="m-0 leading-28px">依公司規定</p>
                    </div>
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        希望地點
                      </p>
                      <p class="m-0 leading-28px">美國紐約州</p>
                    </div>
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        遠端工作
                      </p>
                      <p class="m-0 leading-28px">只能遠端工作</p>
                    </div>
                  </div>
                  <div class="py-6 border-t-solid border-t-#eee">
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        希望職稱
                      </p>
                      <p class="m-0 leading-28px">我今天要準時下班</p>
                    </div>
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        希望職類
                      </p>
                      <p class="m-0 leading-28px">教授／副教授／助理教授</p>
                    </div>
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        希望產業
                      </p>
                      <p class="m-0 leading-28px">大專校院教育事業</p>
                    </div>
                    <div class="flex items-center gap-6 mb-2">
                      <p class="m-0 leading-28px font-700 text-start">
                        希望內容
                      </p>
                      <p class="m-0 leading-28px">教大學生考古</p>
                    </div>
                  </div>
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
      class="side-drawer fixed top-0 right-0 h-full bg-white z-50 w-400px transform transition-transform duration-300 ease-in-out shadow-lg"
      :class="showAIDetectDrawer ? 'translate-x-0' : 'translate-x-full'"
    >
      <div
        class="drawer-header border-b-solid border-b-1px border-b-#eee p-4 flex justify-between items-center"
      >
        <h2 class="text-20px font-bold">AI 檢測結果</h2>
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
          <p class="text-16px leading-24px mb-4">
            這裡是 AI
            檢測結果的內容，您可以查看檢測結果並點擊相應錨點跳轉到履歷上的對應段落。
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
          </div>

          <!-- 檢測摘要 -->
          <div class="bg-#f8f8f8 p-4 rounded-4px mb-4">
            <h3 class="text-18px font-bold mb-2">檢測摘要</h3>
            <p class="text-14px leading-22px">
              履歷內容疑似使用AI生成，可信度評分為 75%。
            </p>
          </div>

          <!-- 可疑段落 -->
          <div class="bg-#f8f8f8 p-4 rounded-4px mb-4">
            <h3 class="text-18px font-bold mb-2">可疑段落</h3>
            <div class="border-l-4 border-l-#ff6b6b pl-3 py-1 mb-2">
              <p class="text-14px leading-22px">
                主導10項品牌推廣專案，平均專案達成率98%，協助客戶品牌社群互動率提升60%。
              </p>
              <button
                @click="scrollToSection('experience-section')"
                class="text-12px text-#00afb8 mt-1"
              >
                跳轉到相關段落 →
              </button>
            </div>
            <div class="border-l-4 border-l-#ff6b6b pl-3 py-1">
              <p class="text-14px leading-22px">
                分析市場數據，調整行銷策略，三個月內提升客戶網站自然流量成長180%。
              </p>
              <button
                @click="scrollToSection('experience-section')"
                class="text-12px text-#00afb8 mt-1"
              >
                跳轉到相關段落 →
              </button>
            </div>
          </div>

          <!-- AI檢測詳細分析 -->
          <div class="bg-#f8f8f8 p-4 rounded-4px mb-4">
            <h3 class="text-18px font-bold mb-2">詳細分析</h3>
            <p class="text-14px leading-22px mb-2">
              此履歷的用詞風格、數據呈現和段落結構顯示了以下特徵：
            </p>
            <ul class="pl-5 list-disc">
              <li class="text-14px leading-22px mb-1">
                工作經驗描述中包含過於精確的數據 (98%, 60%, 180%)
              </li>
              <li class="text-14px leading-22px mb-1">
                專業詞彙連續使用頻率異常
              </li>
              <li class="text-14px leading-22px mb-1">
                段落結構高度一致，顯示模板化特徵
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
</style>
