# blackboard

簡易黒板システム。

## require

node

## usage

```sh
$ make init
$ make start
node app.js
listening on 4002
```

nginx の下流に入れるなどして使おう。
ポート 4002 は app.js にハードコーディング。ダサい。

## todo

* ゼミモード（誰でも上書きできる）とクラスルームモード（先生だけが上書きできる）。
* shift+return でサブミット。
* lambda, define, cond の入力スニペット。
* textarea のフォントサイズを大きくしたい。
* code を色付きで。
* 入力あったデータをデータベースに保存。
* port を引数で取りたいぞ。

## done

* HTML エスケープ
* (bbs を mt などに改名する)

---
hkimura, 2017-03-26, 2017-03-29.
