/**
 * プルダウンによってラジオボタンを活性・非活性にします。
 * プルダウン（value = 4月上旬中旬下旬、label = 4月）
 * ラジオボタン（上旬value = 0、中旬value = 1、下旬value = 2）
 * で定義しておくこと
 */
$('[id^="deliveryDate"]').change(function () {
    var value = $(this).val();

    var early = $(this).parent().next().children('input').eq(0);
    var mid = $(this).parent().next().children('input').eq(1);
    var late = $(this).parent().next().children('input').eq(2);

    disabled(early, mid, late);
    removed(early, mid, late);
    enabled(value, early, mid, late);
});

/**
 * ラジオボタンを非活性にします。
 * @param  {Element} early 上旬
 * @param  {Element} mid 中旬
 * @param  {Element} late 下旬
 */
function disabled(early, mid, late) {
    early.prop('disabled', true);
    mid.prop('disabled', true);
    late.prop('disabled', true);
}

/**
 * ラジオボタンのチェックを取り除きます。
 * @param  {Element} early 上旬
 * @param  {Element} mid 中旬
 * @param  {Element} late 下旬
 */
function removed(early, mid, late) {
    early.prop('checked', false);
    mid.prop('checked', false);
    late.prop('checked', false);
}

/**
 * プルダウンの値により活性化にします。
 * @param  {Element} value 月プルダウン
 * @param  {Element} early 上旬
 * @param  {Element} mid 中旬
 * @param  {Element} late 下旬
 */
function enabled(value, early, mid, late) {
    if (value.indexOf('上旬') >= 0) {
        early.prop('disabled', false);
    }
    if (value.indexOf('中旬') >= 0) {
        mid.prop('disabled', false);
    }
    if (value.indexOf('下旬') >= 0) {
        late.prop('disabled', false);
    }
}