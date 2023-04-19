$(function() {
    'use strict';

    $('.cast').on('input', function() {
        var $field = $(this).closest('.casting');
        if (this.value) {
            $field.addClass('field--not-empty');
        } else {
            $field.removeClass('field--not-empty');
        }
    });

});

