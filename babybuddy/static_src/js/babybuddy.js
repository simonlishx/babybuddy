if (typeof jQuery === 'undefined') {
  throw new Error('Baby Buddy requires jQuery.')
}
if (typeof moment === 'undefined') {
  throw new Error('Baby Buddy requires moment.js.')
}

/**
 * Baby Buddy Namespace
 *
 * Default namespace for the Baby Buddy app.
 *
 * @type {{}}
 */
var BabyBuddy = function () {
    return {};
}();

/**
 * Datetime Picker.
 *
 * Provides modifications and defaults for the base datetime picker widget.
 *
 * @type {{init: BabyBuddy.DatetimePicker.init}}
 */
BabyBuddy.DatetimePicker = function ($, moment) {
    return {
        init: function (element, options) {
            var defaultOptions = {
                allowInputToggle: true,
                buttons: { showToday: true, showClose: true },
                defaultDate: 'now',
                format: 'L LT',
                ignoreReadonly: true,
                locale: moment.locale(),
                useCurrent: false
            };
            element.datetimepicker($.extend(defaultOptions, options));
        }
    };
}(jQuery, moment);

/**
 * Pull to refresh.
 *
 * @type {{init: BabyBuddy.PullToRefresh.init, onRefresh: BabyBuddy.PullToRefresh.onRefresh}}
 */
BabyBuddy.PullToRefresh = function(ptr) {
    return {
        init: function () {
            ptr.init({
                mainElement: 'body',
                onRefresh: this.onRefresh
            });
        },

        onRefresh: function() {
            window.location.reload();
        }
    };
}(PullToRefresh);
