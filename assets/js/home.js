// jquery command to select all the checkboxes on clicking on select all
$("#selectallbtn").click(function() {
    $("input[type=checkbox]").prop('checked',true);
});
// jquery command to deselect all the checkboxes on clicking on deselect all
$("#Deselectallbtn").click(function() {
    $("input[type=checkbox]").prop('checked',false);
});
