!function($){"use strict";$(function(){if($("#cmb2-metabox-cb_timeframe-custom-fields").length){const typeInput=$("#timeframe-repetition"),startDateInput=$("#start-date_date"),startDateTimeInput=$("#start-date_time"),endDateInput=$("#end-date_date"),endDateTimeInput=$("#end-date_time"),gridInput=$("#grid"),repetitionInput=$("#repetition"),weekdaysInput=$("#weekdays1"),startTimeInput=$("#start-time"),endTimeInput=$("#end-time"),repConfigTitle=$("#title-timeframe-rep-config"),repetitionStartInput=$("#repetition-start"),repetitionEndInput=$("#repetition-end"),fullDayInput=$("#full-day"),repSet=[repConfigTitle,fullDayInput,startTimeInput,endTimeInput,repetitionInput,weekdaysInput,repetitionStartInput,repetitionEndInput],noRepSet=[fullDayInput,startDateInput,startDateTimeInput,endDateInput,endDateTimeInput,gridInput];typeInput.change(function(e){const selectedType=e.target.options[e.target.selectedIndex].value;"rep"==selectedType&&($.each(noRepSet,function(){console.log($(this).parents(".cmb-row ")),$(this).parents(".cmb-row ").hide()}),$.each(repSet,function(){console.log($(this).parents(".cmb-row ")),$(this).parents(".cmb-row ").show()})),"norep"==selectedType&&($.each(repSet,function(){console.log($(this).parents(".cmb-row ")),$(this).parents(".cmb-row ").hide()}),$.each(noRepSet,function(){console.log($(this).parents(".cmb-row ")),$(this).parents(".cmb-row ").show()}))})}})}(jQuery);