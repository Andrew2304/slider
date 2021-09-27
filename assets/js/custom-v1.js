"use strict";

$(document).ready(function () {
    const items = [
        {
            id: 0,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/df/fb/b7/76/6d/dd/dfb76-pvlmquith-content-mytv.jpg",
        },
        {
            id: 1,
            image: "http://s7742.cdn.mytvnet.vn/vimages/310x465/cf/f1/14/42/28/87/cf142-pnstth-content-mytv.jpg",
        },
        {
            id: 2,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/f0/09/91/19/97/70/f0919-pchuyntnhphps-content-mytv.jpg",
        },
        {
            id: 3,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/f6/68/8a/a5/59/9d/f68a5-pmbusiungu-content-mytv.jpg",
        },
        {
            id: 4,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/43/36/63/3a/aa/a6/4363a-pluongkiepnhanduyenluongthehoan-content-mytv.jpg",
        },
        {
            id: 5,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/66/6a/a4/48/83/3b/66a48-pbtngsntrt-content-mytv.jpg",
        },
        {
            id: 6,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/12/20/08/8a/aa/a4/1208a-psnlng-content-mytv.jpg",
        },
        {
            id: 7,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/e6/64/42/2d/d7/7b/e642d-ptnbngphongthnphn2-content-mytv.jpg",
        },
        {
            id: 8,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/e3/3c/c8/89/98/8f/e3c89-pgiicutnggia-content-mytv.jpg",
        },
        {
            id: 9,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/9f/fe/ea/a9/94/4b/9fea9-pnnhncatilquyns-content-mytv.jpg",
        },
        {
            id: 10,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/df/fb/b7/76/6d/dd/dfb76-pvlmquith-content-mytv.jpg",
        },
        {
            id: 11,
            image: "http://s7742.cdn.mytvnet.vn/vimages/310x465/cf/f1/14/42/28/87/cf142-pnstth-content-mytv.jpg",
        },
        {
            id: 12,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/f0/09/91/19/97/70/f0919-pchuyntnhphps-content-mytv.jpg",
        },
        {
            id: 13,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/f6/68/8a/a5/59/9d/f68a5-pmbusiungu-content-mytv.jpg",
        },
        {
            id: 14,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/43/36/63/3a/aa/a6/4363a-pluongkiepnhanduyenluongthehoan-content-mytv.jpg",
        },
        {
            id: 15,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/66/6a/a4/48/83/3b/66a48-pbtngsntrt-content-mytv.jpg",
        },
        {
            id: 16,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/12/20/08/8a/aa/a4/1208a-psnlng-content-mytv.jpg",
        },
        {
            id: 17,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/e6/64/42/2d/d7/7b/e642d-ptnbngphongthnphn2-content-mytv.jpg",
        },
        {
            id: 18,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/e3/3c/c8/89/98/8f/e3c89-pgiicutnggia-content-mytv.jpg",
        },
        {
            id: 19,
            image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/9f/fe/ea/a9/94/4b/9fea9-pnnhncatilquyns-content-mytv.jpg",
        },
    ];

    let data = [];
    for (let index = 0; index < 15; index++) {
        const record = {
            name: `Row ${index}`,
            itemLength: index % 2 == 0 ? 7 : 5,
            // items: [items[index], items[index + 1], items[index + 2], items[index + 3], items[index + 4], ...items],
            items: items,
        };

        data.push(record);
    }

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

        renderInitHTMLRow: (element) => {
            console.log("----renderInitHTMLRow");
            let html = `
                <div class="content content-0"></div>
                <div class="content content-1"></div>`;

            $(`${element}`).html(html);
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
                    <div class="item ${activeClass}">
                    <image src="${item.image}"></image>
                </div>
                `;
            });

            $(`.content-${selectRow - currentRow}`).html(html);
        },
        init: (records = [], options = {}) => {
            console.log("----init");
            const element = options.element;

            Slider.setConfig(records, options);
            Slider.getConfig();
            Slider.renderInitHTMLRow(element);
            Slider.renderContents();
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
        getFilterItems: ({ items, length, selectIndex, itemLength }) => {
            console.log("----getFilterItems");
            const currentActiveIndex = parseInt(itemLength / 2);

            let records = [];
            let start = 0;

            if (selectIndex > currentActiveIndex) {
                start = selectIndex - currentActiveIndex;

                if (selectIndex + currentActiveIndex >= length) {
                    start = length - itemLength - 1;
                }
            }

            const end = start + itemLength - 1;

            // console.log('selectIndex', selectIndex);
            // console.log('currentActiveIndex', currentActiveIndex);
            // console.log('length', length);
            // console.log('getIndex', start, end);

            for (let index = start; index <= end; index++) {
                const item = items[index];
                records.push(item);
            }

            return records;
        },
    };

    // init();

    // Slider.setRecords(data);
    const options = {
        element: "#box",
    };
    Slider.init(data, options);

    // console.log('records', records);
    // console.log('currentRow', currentRow);
    // console.log('currentIndex', currentIndex);

    $(window).keypress(function (e) {
        var key = e.which;

        if (key == 51) _handleInput("UP");
        if (key == 49) _handleInput("LEFT");
        if (key == 52) _handleInput("DOWN");
        if (key == 50) _handleInput("RIGHT");

        console.log("key", key);
    });

    function _handleInput(type) {
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
});
