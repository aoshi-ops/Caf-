(function () {
  "use strict";

  var SHOW_RESET_BUTTON = false;
  var ROUTE_KEY = "sakurama-route";
  var UNLOCKED_KEY = "sakurama-unlocked-count";

  var commonFirstNote = {
    title: "桜間のメモ 01",
    body: "こんにちは。私はcaféジュジュスタッフの〈桜間〉と申します。\n\n単刀直入に、最近何かお店全体がおかしい気がするんです。みんなが気が付かない内に当たり前が上書きされて行ってるような…。とにかく、どうしようもない違和感がある。\n\nもし、本当に何かが変わっていってしまっているのだとしたら…今の、私の知っているジュジュの姿をお店のあちこちに痕跡として残して、誰かが見つけてくれたら、元のジュジュの姿を憶えていてくれたら嬉しいなと思って、こんな細工をしました。\n\n手始めに、次のメモは私に関係する何かをパスワードにしています。店内のどこかに残した痕跡か、スタッフとの会話の中で見つかると思います。"
  };

  var lastNote = {
    title: "桜間の最後のメモ",
    body: "サウンドルームまで、ちゃんと見に来てくれて、ありがとうございます。\n一緒に考えて欲しい。って言ったのは、嘘じゃなくて、でも、私の中で実はもう答えはでてるんです。\n\n祭壇の隅に、ぬいぐるみがあったでしょう？　きっとあれが、祭壇を、サウンドルームを通してジュジュに影響を与えているんだと思います。\n\nあれが何なのかはわかりませんが、今のcaféの状況から見ても、海や、コンビニや、学校…いろんな景色、色んな物語、色んな世界が、あの紫色のぬいぐるみには籠っているのだと思います。\n\nなんだか、不思議と嫌な感じはしません。おかしな世界に繋がってしまっているようでとても怖いけど、気付いたら、いつものジュジュが戻ってくるような…そんな感じもします。\n\n今、短いとも長いともわからないこのひと時、不思議な世界と混ざったジュジュを楽しむのもいいのかもしれません。\n\nここまで読んでくれて、ありがとうございます。\n読んでくれた貴方がいると信じてるから、一人で不安を覚える気分が少しは和らいでいます。いつか、元に戻ったジュジュでもお会いできることをお祈りしております。\n\n桜間"
  };

  var routes = {
    "1f": {
      firstPassword: "読書",
      passwords: ["読書", "さんげの箱", ["月島", "つきしま", "深海", "みうみ", "旧宮", "ふるみや"]],
      notes: [
        commonFirstNote,
        {
          title: "桜間のメモ 02",
          body: "よかった。このメモ、ちゃんと開けたんですね。私の存在ごと消えてしまっていたらどうしようかと思ってました。\n\nスタッフから聞いたかとは思うのですが、私は少し前から体調不良でジュジュに出勤するのが難しくなってしまっています。今は療養のため完全に休みを頂いていますが、それまでも体調の関係で出勤の頻度は少しずつ落ちていっていました。今考えれば、私が違和感に気が付けたのは、たまにしか出勤しなかったからなのかもしれません。それくらい…徐々に変化していったのかも…。\n\n次のメモのパスワードは〈レジのグッズの棚〉の辺りを探せばわかると思います。剥がされたりしたら嫌だから隅っこの方に張り付けてあります。"
        },
        {
          title: "桜間のメモ 03",
          body: "思えば…そう、変化が始まったのは、誰かが悪ふざけで、サウンドルームの祭壇にあれを置いてからだったのかも…。\n\nサウンドルームは、呪物に籠った呪いを、物語を、ある意味では再現するための場所だから…もしかしたら、あれが祭壇に置かれた時、何かがジュジュ全体に影響を及ぼし始めたのだとしたら…？\n\n怖い。一人で考えるのは怖い。から、これを読んでるあなたも一緒に、どうしてこうなったのか、考えてみて欲しいんです。\n\n次のパスワードのヒントは〈裏階段〉に貼ってあります。できればどうか…お願いします。"
        },
        lastNote
      ]
    },
    "2f-01": {
      firstPassword: ["1113", "11/13", "11月13日"],
      passwords: ["1113", "ジュジュ丸", ["月島", "つきしま", "深海", "みうみ", "旧宮", "ふるみや"]],
      notes: [
        commonFirstNote,
        {
          title: "桜間のメモ 02",
          body: "よかった。このメモ、ちゃんと開けたんですね。私の存在ごと消えてしまっていたらどうしようかと思ってました。\n\n私は少し前から体調不良でジュジュに出勤するのが難しくなってしまっているんです。今は療養のため完全に休みを頂いていますが、それまでも体調の関係で出勤の頻度は少しずつ落ちていっていました。今考えれば、私が違和感に気が付けたのは、たまにしか出勤しなかったからなのかもしれません。それくらい…徐々に変化していったのかも…。\n\n次のメモのパスワードは〈ある、常連の方のニックネーム〉にしています。依然、お店に呪物を譲ってくださった方で、自己紹介がてら本人がそういっていたこともあって、スタッフは皆、彼の事をニックネームで呼んでいるんです。\n\nエアレジオーダーから無料メニューのガムシロップとシュガースティックを二個ずつ注文してみてください。届けに来たスタッフに「いつも友人がお世話になってます」と言っていただければ、パスワードがわかると思います。"
        },
        {
          title: "桜間のメモ 03",
          body: "思えば…そう、変化が始まったのは、誰かが悪ふざけで、サウンドルームの祭壇にあれを置いてからだったのかも…。\n\nサウンドルームは、呪物に籠った呪いを、物語を、ある意味では再現するための場所だから…もしかしたら、あれが祭壇に置かれた時、何かがジュジュ全体に影響を及ぼし始めたのだとしたら…？\n\n怖い。一人で考えるのは怖い。から、これを読んでるあなたも一緒に、どうしてこうなったのか、考えてみて欲しいんです。\n\n次のパスワードのヒントは〈サウンドルームのエアコンの横〉に貼ってあります。できればどうか…お願いします。"
        },
        lastNote
      ]
    },
    "2f-02": {
      firstPassword: "杉並区",
      passwords: ["杉並区", "ジュジュ丸", ["月島", "つきしま", "深海", "みうみ", "旧宮", "ふるみや"]],
      notes: [
        commonFirstNote,
        {
          title: "桜間のメモ 02",
          body: "よかった。このメモ、ちゃんと開けたんですね。私の存在ごと消えてしまっていたらどうしようかと思ってました。\n\n私は少し前から体調不良でジュジュに出勤するのが難しくなってしまっているんです。今は療養のため完全に休みを頂いていますが、それまでも体調の関係で出勤の頻度は少しずつ落ちていっていました。今考えれば、私が違和感に気が付けたのは、たまにしか出勤しなかったからなのかもしれません。それくらい…徐々に変化していったのかも…。\n\n次のメモのパスワードは〈ある、常連の方のニックネーム〉にしています。依然、お店に呪物を譲ってくださった方で、自己紹介がてら本人がそういっていたこともあって、スタッフは皆、彼の事をニックネームで呼んでいるんです。\n\nエアレジオーダーから無料メニューのガムシロップとシュガースティックを二個ずつ注文してみてください。届けに来たスタッフに「いつも友人がお世話になってます」と言っていただければ、パスワードがわかると思います。"
        },
        {
          title: "桜間のメモ 03",
          body: "思えば…そう、変化が始まったのは、誰かが悪ふざけで、サウンドルームの祭壇にあれを置いてからだったのかも…。\n\nサウンドルームは、呪物に籠った呪いを、物語を、ある意味では再現するための場所だから…もしかしたら、あれが祭壇に置かれた時、何かがジュジュ全体に影響を及ぼし始めたのだとしたら…？\n\n怖い。一人で考えるのは怖い。から、これを読んでるあなたも一緒に、どうしてこうなったのか、考えてみて欲しいんです。\n\n次のパスワードのヒントは〈サウンドルームのエアコンの横〉に貼ってあります。できればどうか…お願いします。"
        },
        lastNote
      ]
    }
  };

  var noteLabels = ["メモ 01", "メモ 02", "メモ 03", "最後のメモ"];
  var view = document.body.dataset.view;

  function normalize(value) {
    return value
      .normalize("NFKC")
      .replace(/[\s\u3000]/g, "")
      .toLowerCase();
  }

  function getRouteId() {
    return localStorage.getItem(ROUTE_KEY);
  }

  function getRoute() {
    return routes[getRouteId()] || null;
  }

  function getUnlockedCount() {
    var saved = Number(localStorage.getItem(UNLOCKED_KEY));
    if (!Number.isFinite(saved)) {
      return 1;
    }
    return Math.max(1, Math.min(saved, 4));
  }

  function setUnlockedCount(count) {
    localStorage.setItem(UNLOCKED_KEY, String(Math.max(1, Math.min(count, 4))));
  }

  function findRouteByFirstPassword(value) {
    return Object.keys(routes).find(function (routeId) {
      return passwordMatches(value, routes[routeId].firstPassword);
    });
  }

  function passwordMatches(value, expected) {
    if (Array.isArray(expected)) {
      return expected.some(function (candidate) {
        return normalize(value) === normalize(candidate);
      });
    }

    return normalize(value) === normalize(expected);
  }

  function resolveNotes() {
    var route = getRoute();
    if (route) {
      return route.notes;
    }

    return [
      commonFirstNote,
      { title: "桜間のメモ 02", body: "" },
      { title: "桜間のメモ 03", body: "" },
      lastNote
    ];
  }

  function shortPreview(text) {
    return text.replace(/\s+/g, " ").slice(0, 48);
  }

  function renderList() {
    var list = document.getElementById("memo-list");
    var resetButton = document.getElementById("reset-button");
    var unlockedCount = getUnlockedCount();
    var notes = resolveNotes();

    list.innerHTML = "";

    notes.forEach(function (note, index) {
      var unlocked = index < unlockedCount;
      var row = document.createElement(unlocked ? "a" : "button");
      var body = document.createElement("span");
      var title = document.createElement("span");
      var preview = document.createElement("span");
      var meta = document.createElement("span");

      row.className = "memo-row" + (unlocked ? "" : " locked");
      if (unlocked) {
        row.href = "memo.html?id=" + index;
      } else {
        row.type = "button";
        row.dataset.unlockIndex = String(index);
        row.setAttribute("aria-label", noteLabels[index] + "を解除");
      }

      body.className = "memo-row-body";
      title.className = "memo-row-title";
      preview.className = "memo-row-preview";
      meta.className = "memo-row-meta";

      title.textContent = noteLabels[index];
      preview.textContent = unlocked ? shortPreview(note.body) : "ロックされています";
      meta.textContent = unlocked ? ">" : "🔒";

      body.appendChild(title);
      body.appendChild(preview);
      row.appendChild(body);
      row.appendChild(meta);
      list.appendChild(row);
    });

    if (SHOW_RESET_BUTTON) {
      resetButton.hidden = false;
      resetButton.addEventListener("click", function () {
        localStorage.removeItem(ROUTE_KEY);
        localStorage.removeItem(UNLOCKED_KEY);
        renderList();
      });
    }
  }

  function openUnlockDialog(index) {
    var dialog = document.getElementById("unlock-dialog");
    var title = document.getElementById("unlock-title");
    var help = document.getElementById("unlock-help");
    var input = document.getElementById("password");
    var error = document.getElementById("error-message");

    dialog.dataset.unlockIndex = String(index);
    title.textContent = noteLabels[index] + "のロック";
    help.textContent = "パスワードを入力してください。";
    input.value = "";
    error.textContent = "";
    dialog.showModal();
    input.focus();
  }

  function handleUnlock(event) {
    event.preventDefault();

    var dialog = document.getElementById("unlock-dialog");
    var input = document.getElementById("password");
    var error = document.getElementById("error-message");
    var index = Number(dialog.dataset.unlockIndex);
    var unlockedCount = getUnlockedCount();

    if (index !== unlockedCount) {
      error.textContent = "先に前のメモを開いてください。";
      return;
    }

    if (index === 1 && !getRouteId()) {
      var routeId = findRouteByFirstPassword(input.value);
      if (!routeId) {
        error.textContent = "違うようです。";
        return;
      }

      localStorage.setItem(ROUTE_KEY, routeId);
      setUnlockedCount(2);
      dialog.close();
      renderList();
      window.location.href = "memo.html?id=1";
      return;
    }

    var route = getRoute();
    if (!route || !passwordMatches(input.value, route.passwords[index - 1])) {
      error.textContent = "違うようです。";
      return;
    }

    setUnlockedCount(index + 1);
    dialog.close();
    renderList();
    window.location.href = "memo.html?id=" + index;
  }

  function setupListView() {
    var list = document.getElementById("memo-list");
    var form = document.getElementById("unlock-form");
    var cancel = document.getElementById("cancel-button");
    var dialog = document.getElementById("unlock-dialog");

    renderList();

    list.addEventListener("click", function (event) {
      var row = event.target.closest("[data-unlock-index]");
      if (!row) {
        return;
      }

      openUnlockDialog(Number(row.dataset.unlockIndex));
    });

    form.addEventListener("submit", handleUnlock);
    cancel.addEventListener("click", function () {
      dialog.close();
    });
  }

  function setupDetailView() {
    var detail = document.getElementById("memo-detail");
    var params = new URLSearchParams(window.location.search);
    var index = Number(params.get("id"));
    var unlockedCount = getUnlockedCount();
    var notes = resolveNotes();
    var note = notes[index];

    if (!Number.isInteger(index) || index < 0 || index >= notes.length || index >= unlockedCount) {
      detail.innerHTML = '<h1>ロックされたメモ</h1><p class="note-body">このメモはまだ開けません。</p>';
      return;
    }

    detail.innerHTML = "";

    var title = document.createElement("h1");
    var body = document.createElement("p");
    title.textContent = note.title;
    body.className = "note-body";
    body.textContent = note.body;

    detail.appendChild(title);
    detail.appendChild(body);
  }

  if (view === "list") {
    setupListView();
  }

  if (view === "detail") {
    setupDetailView();
  }
}());
