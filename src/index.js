import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createincompleteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//未完了リストから指定の要素を削除
const deleteFromIncomplete = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createincompleteList = (text) => {
  // divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.className = "list-row-li";

  const p = document.createElement("p");
  p.innerText = text;

  //完了ボタンタグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親の要素(li)を未完了リストから削除
    const ssssss = completeButton.parentNode;
    deleteFromIncomplete(ssssss.parentNode);

    // 完了したTODOに作成する
    const addTarget = completeButton.parentNode;

    //ToDO内容のtextを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;
    const aaaaaaaa = addTarget.parentNode;

    //pタグ作成
    const p = document.createElement("p");
    p.innerText = text;

    //button タグ作成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(li)を完了リストから削除
      const deleteTarget = backbutton.parentNode;
      const deleteTarget2 = deleteTarget.parentNode;

      document.getElementById("complete-list").removeChild(deleteTarget2);

      //テキスト取得
      const text = backbutton.parentNode.firstElementChild.innerText;
      createincompleteList(text);
    });

    //divタグの要素に各要素を追加
    addTarget.appendChild(p);
    addTarget.appendChild(backbutton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(aaaaaaaa);
  });

  //削除ボタンタグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親の要素(li)を未完了リストから削除
    const ssssss = deleteButton.parentNode;
    deleteFromIncomplete(ssssss.parentNode);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  li.appendChild(div);
  document.getElementById("incomplete-list").appendChild(li);
};
