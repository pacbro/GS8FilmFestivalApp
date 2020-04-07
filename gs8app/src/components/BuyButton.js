    /*<![CDATA[*/
    (function () {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
    ShopifyBuyInit();
} else {
    loadScript();
}
} else {
    loadScript();
}
    function loadScript() {
    const script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
}
    function ShopifyBuyInit() {
    const client = ShopifyBuy.buildClient({
    domain: 'georgetown-super-8-film.myshopify.com',
    storefrontAccessToken: '7fc4cfa077d2441dae9b6022264dfe34',
});
    ShopifyBuy.UI.onReady(client).then(function (ui) {
    ui.createComponent('product', {
    id: '4596277706890',
    node: document.getElementById('product-component-1583192884225'),
    moneyFormat: '%24%7B%7Bamount%7D%7D',
    options: {
    "product": {
    "styles": {
    "product": {
    "@media (min-width: 601px)": {
    "max-width": "calc(25% - 20px)",
    "margin-left": "20px",
    "margin-bottom": "50px"
}
},
    "button": {
    ":hover": {
    "background-color": "#b21717"
},
    "background-color": "#c61919",
    ":focus": {
    "background-color": "#b21717"
}
}
},
    "text": {
    "button": "Add to cart"
}
},
    "productSet": {
    "styles": {
    "products": {
    "@media (min-width: 601px)": {
    "margin-left": "-20px"
}
}
}
},
    "modalProduct": {
    "contents": {
    "img": false,
    "imgWithCarousel": true,
    "button": false,
    "buttonWithQuantity": true
},
    "styles": {
    "product": {
    "@media (min-width: 601px)": {
    "max-width": "100%",
    "margin-left": "0px",
    "margin-bottom": "0px"
}
},
    "button": {
    ":hover": {
    "background-color": "#b21717"
},
    "background-color": "#c61919",
    ":focus": {
    "background-color": "#b21717"
}
}
},
    "text": {
    "button": "Add to cart"
}
},
    "cart": {
    "styles": {
    "button": {
    ":hover": {
    "background-color": "#b21717"
},
    "background-color": "#c61919",
    ":focus": {
    "background-color": "#b21717"
}
}
},
    "text": {
    "total": "Subtotal",
    "button": "Checkout"
}
},
    "toggle": {
    "styles": {
    "toggle": {
    "background-color": "#c61919",
    ":hover": {
    "background-color": "#b21717"
},
    ":focus": {
    "background-color": "#b21717"
}
}
}
}
},
});
});
}
})();
    /*]]>*/