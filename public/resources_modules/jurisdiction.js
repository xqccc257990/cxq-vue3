function jurisdictionBtn(router, buttons) {
    var tempShowButtons = [];
    if (router && buttons && router.meta.btnId && JSON.parse(localStorage.getItem('userInfo'))) {
        var userMenuInfos = JSON.parse(localStorage.getItem('userInfo'))['userMenuInfos'];
        var nowRouterBtnId = router.meta.btnId;
        var allBtnId = [];
        if (userMenuInfos && userMenuInfos.length) {
            userMenuInfos.forEach(function (item) {
                item.childMenus.forEach(function (chidItem) {
                    chidItem.childMenus.forEach(function (btnItem) {
                        if (nowRouterBtnId[btnItem.menuId] == 0 || nowRouterBtnId[btnItem.menuId] == 1 || nowRouterBtnId[btnItem.menuId] == 2) {
                            allBtnId.push(nowRouterBtnId[btnItem.menuId]);
                        }
                    });
                });
            });
        } 
        buttons.forEach(function (item) {
            var tempType = item.type;

            if (item.color == "danger" || item.name == '删除') {
                tempType = 2;
            }

            if (allBtnId.indexOf(tempType) != -1) {
                tempShowButtons.push(item);
            }
        });
    } else {
        return buttons;
    }

    return tempShowButtons;
}