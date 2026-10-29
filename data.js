//地图配置
const mapPieces = [
    {
        file: 'map/map1.png',
        x: 0,
        y: 0,
        width: 1774,
        height: 2048
    },
    {
        file: 'map/map2.png',
        x: 885,
        y: -1546,
        width: 1774,
        height: 2048
    },
    {
        file: 'map/map2.png',
        x: 885,
        y: 1546,
        width: 1774,
        height: 2048
    },
    {
        file: 'map/map3.png',
        x: 1770,
        y: 0,
        width: 1774,
        height: 2048
    },
    {
        file: 'map/map3.png',
        x: -1770,
        y: 0,
        width: 1774,
        height: 2048
    },

   ];

// 标点、资源和生物数据
const regionsData = [
    {
        id: 'mistwood',
        name: '测试点1',
        icon: 'icon/safe.png',
        x: 664,
        y: 684,
        unlocked: true,
        description: '测试测试测试',
        resources: ['石头'],
        creatures: ['小动物'],
        dangerLevel: 1
    },
    {
        id: 'windplain',
        name: '测试点2',
        icon: 'icon/sign.png',
        x: 2177,
        y: -418,
        unlocked: true,
        description: '视野开阔。',
        resources: ['雨林树'],
        creatures: ['飞鸟'],
        dangerLevel: 2
    }
];