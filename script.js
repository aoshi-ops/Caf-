(function () {
  "use strict";

  var SHOW_RESET_BUTTON = false;

  var lastNote = {
    title: "桜間の最後のメモ",
    body: "サウンドルームまで、ちゃんと見に来てくれて、ありがとうございます。\n一緒に考えて欲しい。って言ったのは、嘘じゃなくて、でも、私の中で実はもう答えはでてるんです。\n\n祭壇の隅に、ぬいぐるみがあったでしょう？　きっとあれが、祭壇を、サウンドルームを通してジュジュに影響を与えているんだと思います。\n\nあれが何なのかはわかりませんが、今のcaféの状況から見ても、海や、コンビニや、学校…いろんな景色、色んな物語、色んな世界が、あの紫色のぬいぐるみには籠っているのだと思います。\n\nなんだか、不思議と嫌な感じはしません。おかしな世界に繋がってしまっているようでとても怖いけど、気付いたら、いつものジュジュが戻ってくるような…そんな感じもします。\n\n今、短いとも長いともわからないこのひと時、不思議な世界と混ざったジュジュを楽しむのもいいのかもしれません。\n\nここまで読んでくれて、ありがとうございます。\n読んでくれた貴方がいると信じてるから、一人で不安を覚える気分が少しは和らいでいます。いつか、元に戻ったジュジュでもお会いできることをお祈りしております。\n\n桜間"
  };

  var pages = {
    "1f": {
      passwords: ["読書", "さんげの箱", "月島"],
      notes: [
        {
          title: "桜間のメモ 01",
          body: "こんにちは。私はcaféジュジュスタッフの〈桜間〉と申します。\n\n単刀直入に、最近何かお店全体がおかしい気がするんです。みんなが気が付かない内に当たり前が上書きされて行ってるような…。とにかく、どうしようもない違和感がある。\n\nもし、本当に何かが変わっていってしまっているのだとしたら…今の、私の知っているジュジュの姿をお店のあちこちに痕跡として残して、誰かが見つけてくれたら、元のジュジュの姿を憶えていてくれたら嬉しいなと思って、こんな細工をしました。\n\n手始めに、次のメモは私の趣味をパスワードにしています。スタッフに「桜間というスタッフは今日いますか？」と聞いてみてください。ジュジュのスタッフは皆お喋りだから、すんなり教えてくれると思います。"
        },
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
      passwords: ["0416", "ジュジュ丸", "月島"],
      notes: [
        {
          title: "桜間のメモ 01",
          body: "こんにちは。私はcaféジュジュスタッフの〈桜間〉と申します。\n\n単刀直入に、最近何かお店全体がおかしい気がするんです。みんなが気が付かない内に当たり前が上書きされて行ってるような…。とにかく、どうしようもない違和感がある。\n\nもし、本当に何かが変わっていってしまっているのだとしたら…今の、私の知っているジュジュの姿をお店のあちこちに痕跡として残して、誰かが見つけてくれたら、元のジュジュの姿を憶えていてくれたら嬉しいなと思って、こんな細工をしました。\n\n手始めに、次のメモは私の誕生日をパスワードにしています。赤いドレスを着たお人形「生き人形」の近くに大きなトランクケースが置いてあると思います。そこに四桁の数字を張り付けてあるので探しください。"
        },
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
      passwords: ["東京", "ジュジュ丸", "月島"],
      notes: [
        {
          title: "桜間のメモ 01",
          body: "こんにちは。私はcaféジュジュスタッフの〈桜間〉と申します。\n\n単刀直入に、最近何かお店全体がおかしい気がするんです。みんなが気が付かない内に当たり前が上書きされて行ってるような…。とにかく、どうしようもない違和感がある。\n\nもし、本当に何かが変わっていってしまっているのだとしたら…今の、私の知っているジュジュの姿をお店のあちこちに痕跡として残して、誰かが見つけてくれたら、元のジュジュの姿を憶えていてくれたら嬉しいなと思って、こんな細工をしました。\n\n手始めに、次のメモは私の出身地をパスワードにしています。白い大きなキャビネットの側面に張り付けてありますので、探してみてください。"
        },
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

  var pageId = document.body.dataset.page;
  var page = pages[pageId];
  var notesEl = document.getElementById("notes");
  var form = document.getElementById("unlock-form");
  var input = document.getElementById("password");
  var error = document.getElementById("error-message");
  var resetButton = document.getElementById("reset-button");
  var storageKey = "sakurama-note-progress:" + pageId;

  if (!page) {
    return;
  }

  var progress = Math.max(0, Math.min(readProgress(), page.notes.length - 1));

  function normalize(value) {
    return value
      .normalize("NFKC")
      .replace(/[\s\u3000]/g, "")
      .toLowerCase();
  }

  function readProgress() {
    var saved = Number(localStorage.getItem(storageKey));
    return Number.isFinite(saved) ? saved : 0;
  }

  function saveProgress() {
    localStorage.setItem(storageKey, String(progress));
  }

  function render() {
    notesEl.innerHTML = "";

    page.notes.slice(0, progress + 1).forEach(function (note) {
      var article = document.createElement("article");
      var title = document.createElement("h1");
      var body = document.createElement("p");

      article.className = "note";
      body.className = "note-body";
      title.textContent = note.title;
      body.textContent = note.body;

      article.appendChild(title);
      article.appendChild(body);
      notesEl.appendChild(article);
    });

    form.hidden = progress >= page.notes.length - 1;
    input.value = "";
    error.textContent = "";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var expected = page.passwords[progress];
    if (normalize(input.value) !== normalize(expected)) {
      error.textContent = "違うようです。";
      return;
    }

    progress += 1;
    saveProgress();
    render();

    window.requestAnimationFrame(function () {
      var unlockedNotes = notesEl.querySelectorAll(".note");
      unlockedNotes[unlockedNotes.length - 1].scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  if (SHOW_RESET_BUTTON) {
    resetButton.hidden = false;
    resetButton.addEventListener("click", function () {
      progress = 0;
      saveProgress();
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  render();
}());
