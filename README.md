# blackboard

簡易黒板システム。

## require

* node
* npm
* express, socket.io

## usage

```sh
$ make init
$ make start
node app.js
listening on 4002
```

nginx の下流に入れるなどして使おう。
ポート 4002 は app.js にハードコーディング。ダサい。

## FIXME

* js スクリプトを別ファイルとすると動かないのはなぜ？
* else が入らない。
* in/out の位置とバランス。in はもう少し小さくても良い。
* ゼミモード（誰でも上書きできる）とクラスルームモード（先生だけが上書きできる）。
* textarea のフォントサイズを大きくしたい。
* submit できるユーザを制限する。
* code を色付きで。
* 入力あったデータをデータベースに保存。
* port を引数で取りたいぞ。

## FIXED

* lambda, define, cond の入力スニペット。
* shift+return でサブミット。
* HTML エスケープ
* bbs のプロジェクト名を micro-twitter に改名、mt.melt.kyutech.ac.jp でサービス。

---
hkimura, release 0.4.2, 2017-03-30
