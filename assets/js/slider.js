"use strict";

const Slider = {
    records: [],
    indexes: [],
    currentRow: 0,
    currentIndex: 0,
    currentActiveIndex: 2,
    currentItemLength: 5,

    setConfig: (records, options) => {
        Slider.records = records;
        Slider.indexes = Array(records.length).fill(0);
    },
    setCurrentRow: (row) => {
        Slider.currentRow = row;
    },
    setCurrentIndexes: (row = 0, index = 0) => {
        Slider.indexes[row].currentIndex = index;
    },
    setCurrentIndex: (index = 0) => {
        Slider.currentIndex = index;
        Slider.indexes[Slider.currentRow] = index;
    },
    setCurrentRow: (row = 0) => {
        Slider.currentRow = row;
    },
    setCurrentActiveIndex: (row = 0) => {
        Slider.currentActiveIndex = Math.round(records[row] / 2);
    },

    getConfig: () => {
        console.log("records", Slider.records);
        console.log("indexes", Slider.indexes);
        console.log("currentRow", Slider.currentRow);
        console.log("currentIndex", Slider.currentIndex);
        console.log("currentActiveIndex", Slider.currentActiveIndex);
    },
    getRecords: (row = null) => {
        return row !== null ? Slider.records[row].items : Slider.records;
    },
    getCurrentRow: () => {
        return Slider.currentRow;
    },
    getCurrentIndexes: (row = null) => {
        return row !== null ? Slider.indexes[row] : Slider.indexes;
    },
    getCurrentIndex: (row = null) => {
        if (row === null) row = Slider.currentRow;
        return Slider.indexes[row];
    },
    getIndexLength: (row = null) => {
        if (row === null) row = Slider.currentRow;
        return Slider.records[row].items.length;
    },
    getRowLength: (row = null) => {
        return Slider.indexes.length;
    },
    getItemLength: (row = null) => {
        return records[row].itemLength;
    },
    getActiveIndex: ({ length, selectIndex, itemLength }) => {
        console.log("----getActiveIndex");
        let index = selectIndex;
        const currentActiveIndex = parseInt(itemLength / 2);

        // console.log("selectIndex", selectIndex);
        // console.log("currentActiveIndex", currentActiveIndex);

        if (
            selectIndex > currentActiveIndex &&
            selectIndex < length - currentActiveIndex
        ) {
            index = currentActiveIndex;
        }
        if (selectIndex >= length - currentActiveIndex) {
            // console.log('currentIndex1', selectIndex);
            index =
                currentActiveIndex -
                length +
                selectIndex +
                currentActiveIndex +
                1;
        }

        // console.log('index', index);
        return index % itemLength;
    },
    getFilterItems: ({ items, length, selectIndex, itemLength }) => {
        console.log("----getFilterItems");
        const currentActiveIndex = parseInt(itemLength / 2);

        let records = [];
        let start = 0;

        if (selectIndex > currentActiveIndex) {
            start = selectIndex - currentActiveIndex;

            if (length  == itemLength) {
                start = 0;
            } else if (selectIndex + currentActiveIndex >= length) {
                start = length - itemLength - 1;
            }
        }

        const end = start + itemLength - 1;

        console.log('selectIndex', selectIndex);
        console.log('currentActiveIndex', currentActiveIndex);
        console.log('length', length);
        console.log('getIndex', start, end);

        for (let index = start; index <= end; index++) {
            const item = items[index];
            records.push(item);
        }

        return records;
    },
    getUrlImages: (urlImages = []) => {
        urlImages.map((url) => {
            fetch(url);
        })
    },

    render: (records = [], options = {}) => {
        console.log("----init");
        const element = options.element;

        Slider.setConfig(records, options);
        Slider.getConfig();
        Slider.renderInitHTMLRows(element);
        Slider.renderContents();

        let urlImages = [];
        records.map(record => {
            record.items.map((item) => {
                urlImages.push(item.image);
            })
        });
        Slider.getUrlImages(urlImages);
    },
    renderInitHTMLRows: (element) => {
        console.log("----renderInitHTMLRows");
        let html = `
            <div class="content content-0"></div>
            <div class="content content-1"></div>`;

        $(`${element}`).html(html);
    },
    renderContents: () => {
        console.log("----renderContents");
        const lengthRow = Slider.getRowLength();

        const currentRow = Slider.currentRow;
        const currentIndex = Slider.currentIndex;

        // console.log('lengthRow', lengthRow);
        // console.log('currentRow', currentRow);
        // console.log('currentIndex', currentIndex);

        if (currentRow < lengthRow - 1) {
            Slider.renderRow(currentRow, 0);
            Slider.renderRow(currentRow + 1, 0);
        }
    },
    renderRow: (row = 0, selectIndex = 0) => {
        console.log('----');
        console.log("----renderRow");
        const currentRow = Slider.currentRow;
        const selectRow = row === null ? currentRow : row;
        const record = Slider.records[selectRow];
        const items = record.items;
        const length = items.length;
        const itemLength = record.itemLength;
        const filterItems = Slider.getFilterItems({
            items,
            length,
            selectIndex,
            itemLength,
        });
        const indexActive = Slider.getActiveIndex({
            length,
            selectIndex,
            itemLength,
        });

        // console.log('row', row);
        // console.log('selectIndex', selectIndex);
        // console.log('items', items);
        // console.log('itemLength', itemLength);
        // console.log("indexActive1", indexActive);

        let html = `<p class="title">${record.name}</p>`;
        filterItems.map((item, index) => {
            // console.log('index', index);
            const activeClass =
                index == indexActive && row == currentRow ? "active" : "";
            // console.log('item', item);
            html += `
                <div class="item ${activeClass} div-${itemLength} layout-type-${record.layoutType}">
                <image src="${item.image}"></image>
            </div>
            `;
        });

        $(`.content-${selectRow - currentRow}`).html(html);
    },
    
    handleInput: (type = 'RIGHT') => {
        console.log(
            "------------------------------_handleInput----------------------------------"
        );
        const lengthRow = Slider.getRowLength();
        const lengthIndex = Slider.getIndexLength();

        let currentRow = Slider.getCurrentRow();
        let currentIndex = Slider.getCurrentIndex();

        let selectRow = currentRow;
        let selectIndex = currentIndex;

        // console.log('lengthIndex', lengthIndex);
        // console.log('lengthRow', lengthRow);
        // console.log('currentIndex', currentIndex);
        // console.log('currentRow', currentRow);

        if (type == "RIGHT") {
            if (selectIndex < lengthIndex - 1) {
                selectIndex++; // increment
            }
        }
        if (type == "LEFT") {
            if (selectIndex > 0) {
                selectIndex--; // decrement
            }
        }

        if (type == "DOWN") {
            if (selectRow < lengthRow - 1) {
                selectRow++; // increment
            }
        }
        if (type == "UP") {
            if (selectRow > 0) {
                selectRow--; // decrement
            }
        }

        // console.log("selectIndex", selectIndex);
        // console.log("selectRow", selectRow);

        if (selectRow !== currentRow) {
            // console.log("render row");
            Slider.setCurrentRow(selectRow);
            Slider.setCurrentIndex(0);
            Slider.renderContents();
        }

        if (selectIndex !== currentIndex) {
            // console.log("render index");
            Slider.setCurrentIndex(selectIndex);
            Slider.renderRow(selectRow, selectIndex);
        }
    }
};
