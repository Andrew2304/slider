$(document).ready(function() {
    const items = [
        {id: 0, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/df/fb/b7/76/6d/dd/dfb76-pvlmquith-content-mytv.jpg'},
        {id: 1, image: 'http://s7742.cdn.mytvnet.vn/vimages/310x465/cf/f1/14/42/28/87/cf142-pnstth-content-mytv.jpg'},
        {id: 2, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/f0/09/91/19/97/70/f0919-pchuyntnhphps-content-mytv.jpg'},
        {id: 3, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/f6/68/8a/a5/59/9d/f68a5-pmbusiungu-content-mytv.jpg'},
        {id: 4, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/43/36/63/3a/aa/a6/4363a-pluongkiepnhanduyenluongthehoan-content-mytv.jpg'},
        {id: 5, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/66/6a/a4/48/83/3b/66a48-pbtngsntrt-content-mytv.jpg'},
        {id: 6, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/12/20/08/8a/aa/a4/1208a-psnlng-content-mytv.jpg'},
        {id: 7, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/e6/64/42/2d/d7/7b/e642d-ptnbngphongthnphn2-content-mytv.jpg'},
        {id: 8, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/e3/3c/c8/89/98/8f/e3c89-pgiicutnggia-content-mytv.jpg'},
        {id: 9, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/9f/fe/ea/a9/94/4b/9fea9-pnnhncatilquyns-content-mytv.jpg'},
        {id: 10, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/df/fb/b7/76/6d/dd/dfb76-pvlmquith-content-mytv.jpg'},
        {id: 11, image: 'http://s7742.cdn.mytvnet.vn/vimages/310x465/cf/f1/14/42/28/87/cf142-pnstth-content-mytv.jpg'},
        {id: 12, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/f0/09/91/19/97/70/f0919-pchuyntnhphps-content-mytv.jpg'},
        {id: 13, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/f6/68/8a/a5/59/9d/f68a5-pmbusiungu-content-mytv.jpg'},
        {id: 14, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/43/36/63/3a/aa/a6/4363a-pluongkiepnhanduyenluongthehoan-content-mytv.jpg'},
        {id: 15, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/66/6a/a4/48/83/3b/66a48-pbtngsntrt-content-mytv.jpg'},
        {id: 16, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/12/20/08/8a/aa/a4/1208a-psnlng-content-mytv.jpg'},
        {id: 17, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/e6/64/42/2d/d7/7b/e642d-ptnbngphongthnphn2-content-mytv.jpg'},
        {id: 18, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/e3/3c/c8/89/98/8f/e3c89-pgiicutnggia-content-mytv.jpg'},
        {id: 19, image: 'http://s128162.cdn.mytvnet.vn/vimages/310x465/9f/fe/ea/a9/94/4b/9fea9-pnnhncatilquyns-content-mytv.jpg'},
    ];

    let indexCurrent = 0;
    let indexSliderCurrent = 0;
    let length = items.length;

    init();

    function init() {
        _renderItems(items, indexCurrent);
    }

    function _getIndexActive (length, indexCurrent) {
        let index = indexCurrent;
        if (indexCurrent > 2 && indexCurrent < length - 3) {
            index = 2;
        }
        return index;
    }
    function _renderItems (items, indexCurrent) {
        let html = '';

        const records = _getItems(items, indexCurrent);

        console.log('----');
        console.log('records', records);
        let indexActive = _getIndexActive(length, indexCurrent);

        console.log('indexActive', indexActive);

        records.map((item, index) => {
            const activeClass = index === indexActive%5 ? 'active' : '';
            html += `
                <div class="item ${activeClass}">
                    <image src="${item.image}"></image>
                </div>
                `;
        })

        $('.content-1').html(html);
    }

    function _getItems (items, indexCurrent) {
        console.log('--');
        const length = items.length;
        let records = [];

        let start = 0;

        if (indexCurrent > 2) {
            start = indexCurrent + 5 > length ? length - 5 : indexCurrent - 2;
        }
        
        let end = start + 5;
        // const start = indexCurrent < 3 ? 0 : indexCurrent;
        // const end = start + 5;

        console.log('getIndex', start, end);
        for (let index = start; index < end; index++) {
            const item = items[index];

            records.push(item);
            console.log('index: ' + index);
        }

        return records;
    }

    function _checkShow (params) {
        // console.log('params', params);
        let { indexCurrent, index, length, lengthRight, lengthLeft } = params;
        let status = 1;
        // if (indexCurrent < 3 && index < (3 - indexCurrent)) return 1;
        if (index < indexCurrent) return 0;
        if (lengthRight > 4) return 0;

        return status;
    }

    $(window).keypress(function(e) {
        var key = e.which;

        if(key == 119) _handleInput('UP');
        if(key == 49) _handleInput('LEFT');
        if(key == 115) _handleInput('DOWN');
        if(key == 50) _handleInput('RIGHT');

        console.log(key);
    });

    function _handleInput(type) {
        console.log('length', length);
        if (type == 'RIGHT') {
            if (indexCurrent < length - 1) {
                indexCurrent++; // increment
            }
        }
        if (type == 'LEFT') {
            if (indexCurrent > 0) {
                indexCurrent--; // decrement
            }
        }
        console.log('indexCurrent', indexCurrent);
        _renderItems (items, indexCurrent);
    }
})