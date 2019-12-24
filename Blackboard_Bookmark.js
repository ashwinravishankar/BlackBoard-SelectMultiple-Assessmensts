javascript: (function () {
    var table = document.getElementById('listContainer_databody');
    var names_List = [
        'Sample Name 1',
        'Sample Name 2',
        'Sample Name 3',
        'Sample Name 4',
        'Sample Name 5',
    ];

    var i = 0;

    for (var row_c = 0, num_r = table.rows.length; row_c < num_r; row_c++) {
        var row = table.rows[row_c];
        for (var col_c = 0, num_c = row.cells.length; col_c < num_c; col_c++) {
            if (col_c == 1) {
                var textToSearch = (row.cells[col_c].innerHTML).toString();
                var currentName = textToSearch.substr(0, textToSearch.indexOf('  <input'));
                if (currentName === names_List[i]) {
                    var firstCell = row.cells[0];
                    var checkBox = firstCell.children[0].children[0];
                    checkBox.click();
                    i++;
                }
            }
        }
    };
    document.getElementById('bottom_Submit').click();
})
()

