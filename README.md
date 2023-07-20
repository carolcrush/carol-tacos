これはNext.jsを使用して作ったタコスを注文するアプリです。

## 今開発した機能

まず、開発サーバーを実行します：

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてこのアプリのTop Pageが出てきます。

<img width="1413" alt="re1" src="https://github.com/carolcrush/carol-tacos/assets/102743332/c4bb7422-7cbd-4aa7-af20-4cde630e06a7">

<br>

1. 画面の真ん中の`ORDER NOW`ボタンをクリックすると、商品の画面に進みます。
2. 左側はナビバー（固定されている）で、右側は商品の写真、名前と値段です。ナビバーにタコス、サラダ、コーヒー、ソフトドリンクの四つのカテゴリがあります。あるカテゴリをクリックすると、カテゴリの下に下線が表示されます。また、対応する商品のところに移動できます。
3. カーソルが商品の近くに移動したら、数を選ぶセレクトボックスが表示されます。セレクトボックスは数が０である場合は、非表示になり、０ではない場合は、ずっと表示されます。
4. ある商品の数を変更すると、右上のカゴに表示されている合計数も同時に変更されます。
5. カゴのところをクリックすると、注文確認ページに進みます。

<br>
<div><video id="movie" src="https://github.com/carolcrush/carol-tacos/assets/102743332/f4eccc7a-b3a7-4f1c-b408-42baf1c7c26a" autoplay></div>
<script type="text/javascript">
    var vid = document.getElementById("movie");
    vid.playbackRate = 2.5;
</script>

<br>

## これから開発したい機能

- 注文確認ページでは、選択した商品を表示したり、商品の合計金額を表示したりします。
- スマホバージョン
- データベース接続
- 注文履歴ページ
- UI／UX改善
