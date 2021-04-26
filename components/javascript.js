// 先頭部分で使いたい変数は全て定義するのが定石
// constは再代入不可能　大体は不可能なのでconst

var pokemon = "ライチュウ";
function sing(){
    // JavaScriptは関数内関数内のどこでもvarの宣言を受ける
    // これらの変数は関数のどこで定義しても、先頭で定義下ものとしてみなされる
    // var pokemon;
    console. log(pokemon);
    var pokemon = "ピカチュウ";
    console.log(pokemon);
}
sing();

if (true){
    // if内はスコープがないのでグローバルスコープ扱い
    var test = "hoge";
}
//ブロックスコープではないので、アクセスできる
console.log(test);

if (true) {
    // ブロックスコープになる
    let test2 = "hoge2";
}

//アクセスできない
console.log(test2);

const test3 = "hoge";
test3 = "fuga"; //エラー
console.log(test3);