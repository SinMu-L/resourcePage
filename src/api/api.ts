import service from ".";

// 卡片列表
export function getResrouces() {
    return service({
        method: 'POST',
        url: '/v1/action/find',
        data: {
            "dataSource": "coolresource",
            "database": "coolresource",
            "collection": "resource",
        }
    })
}


export function addResource() {
    return service({
        method: 'POST',
        url: '/v1/action/insertOne',
        data: {
            "dataSource": "coolresource",
            "database": "coolresource",
            "collection": "resource",
            "document": {
                src: "https://pinia.vuejs.org",
                name: "Pinia",
                desc: "符合直觉的 Vue.js 状态管理库",
                tab: ["学习"],
                category: "",
                icon: "https://pinia.vuejs.org/logo.svg"
            }
        }
    })
}