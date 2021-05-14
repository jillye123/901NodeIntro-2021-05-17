

const TableHelper = function (settings) {
    this.data = settings.data;
    this.columnMap = settings.columnMap;
    this.containerId = settings.containerId;
    let table = '<table>',
        endTable = '</table>';

    this.render = function () {
        if (this.data && this.data.length) {
            //Change caller to TableHelper instance
            table += renderHeader.call(this, true);
            table += renderRows.call(this, true) + endTable; 
            renderTable.call(this); 
        }
    };

    const renderHeader = function (renderThead) {
        let tr = '<tr>';
        for (let prop in this.data[0]) {
            tr += '<th>' + getColumnName.call(this, prop) + '</th>';
        }
        tr += '</tr>';
        if (renderThead) tr = '<thead>' + tr + '</thead>';
        return tr;
    },

    renderRows = function (renderTbody) {
        let rows = '';
        for (let i = 0, len = this.data.length; i < len; i++) {
            rows += '<tr>';
            let row = this.data[i];
            for (let prop in row) {
                rows += '<td>' + row[prop] + '</td>';
            }
            rows += '</tr>';
        }
        if (renderTbody) rows = '<tbody>' + rows + '</tbody>';
        return rows;
    },

    renderTable = function () {
        let container = document.getElementById(this.containerId);
        if (container) {
            table += '<div class="rowCount">' + this.data.length + ' rows</div>';
            container.innerHTML = table;
        }
    },

    getColumnName = function(prop) {
        if (!this.columnMap) return prop;

        //Grab the value that matches the prop
        let val = this.columnMap.filter(function(map) { 
            if (map[prop])  { 
                return true;
            }
            return false;
        });

        if (val && val.length) return val[0][prop];
        else return prop;
    };
};

