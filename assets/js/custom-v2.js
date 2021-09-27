"use strict";

$(document).ready(function () {
    console.log('data', sampleData);
    // const items = [
    //     {
    //         id: 0,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/df/fb/b7/76/6d/dd/dfb76-pvlmquith-content-mytv.jpg",
    //     },
    //     {
    //         id: 1,
    //         image: "http://s7742.cdn.mytvnet.vn/vimages/310x465/cf/f1/14/42/28/87/cf142-pnstth-content-mytv.jpg",
    //     },
    //     {
    //         id: 2,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/f0/09/91/19/97/70/f0919-pchuyntnhphps-content-mytv.jpg",
    //     },
    //     {
    //         id: 3,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/f6/68/8a/a5/59/9d/f68a5-pmbusiungu-content-mytv.jpg",
    //     },
    //     {
    //         id: 4,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/43/36/63/3a/aa/a6/4363a-pluongkiepnhanduyenluongthehoan-content-mytv.jpg",
    //     },
    //     {
    //         id: 5,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/66/6a/a4/48/83/3b/66a48-pbtngsntrt-content-mytv.jpg",
    //     },
    //     {
    //         id: 6,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/12/20/08/8a/aa/a4/1208a-psnlng-content-mytv.jpg",
    //     },
    //     {
    //         id: 7,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/e6/64/42/2d/d7/7b/e642d-ptnbngphongthnphn2-content-mytv.jpg",
    //     },
    //     {
    //         id: 8,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/e3/3c/c8/89/98/8f/e3c89-pgiicutnggia-content-mytv.jpg",
    //     },
    //     {
    //         id: 9,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/9f/fe/ea/a9/94/4b/9fea9-pnnhncatilquyns-content-mytv.jpg",
    //     },
    //     {
    //         id: 10,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/df/fb/b7/76/6d/dd/dfb76-pvlmquith-content-mytv.jpg",
    //     },
    //     {
    //         id: 11,
    //         image: "http://s7742.cdn.mytvnet.vn/vimages/310x465/cf/f1/14/42/28/87/cf142-pnstth-content-mytv.jpg",
    //     },
    //     {
    //         id: 12,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/f0/09/91/19/97/70/f0919-pchuyntnhphps-content-mytv.jpg",
    //     },
    //     {
    //         id: 13,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/f6/68/8a/a5/59/9d/f68a5-pmbusiungu-content-mytv.jpg",
    //     },
    //     {
    //         id: 14,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/43/36/63/3a/aa/a6/4363a-pluongkiepnhanduyenluongthehoan-content-mytv.jpg",
    //     },
    //     {
    //         id: 15,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/66/6a/a4/48/83/3b/66a48-pbtngsntrt-content-mytv.jpg",
    //     },
    //     {
    //         id: 16,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/12/20/08/8a/aa/a4/1208a-psnlng-content-mytv.jpg",
    //     },
    //     {
    //         id: 17,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/e6/64/42/2d/d7/7b/e642d-ptnbngphongthnphn2-content-mytv.jpg",
    //     },
    //     {
    //         id: 18,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/e3/3c/c8/89/98/8f/e3c89-pgiicutnggia-content-mytv.jpg",
    //     },
    //     {
    //         id: 19,
    //         image: "http://s128162.cdn.mytvnet.vn/vimages/310x465/9f/fe/ea/a9/94/4b/9fea9-pnnhncatilquyns-content-mytv.jpg",
    //     },
    // ];

    let records = [];
    const length = sampleData.length;
    for (let index = 0; index < length; index++) {
        const item = sampleData[index];
        const record = {
            name: `${item.SHORTCUT_TYPE_NAME} ${index}`,
            itemLength: item.POSTER_LAYOUT == 3 ? 7 : 5,
            layoutType: item.POSTER_LAYOUT,
            items: item.data.map(item => {
                return {id: item.CONTENT_ID, image: item.CONTENT_IMAGE_URL};
            }),
        };

        records.push(record);
    }

    console.log('records', records);

    const options = {
        element: "#box",
    };
    Slider.render(records, options);

    // console.log('Slider', Slider);

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

        Slider.handleInput(type);
    }
});
