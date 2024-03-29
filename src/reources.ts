import axios from "axios";

interface Resource{
    src: string,
    name: string,
    desc: string,
    tab: string[],
    category: string,
    icon: string
}

async function reqest_api(url: string, data: object) {
    const myHeaders = new Headers();
    myHeaders.append("api-key", "qI26ILyCN4JATPJ12L3XKX7uN91bmkirDTLIbVWk6ZVrr9tYcdaX7zbxFZaeIpYs");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(data)
    const res = await fetch(url, {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    })
    return await res.text()

}

async function getAllResources() {

    const url = "/api/action/find"
    const body = {
        "dataSource": "coolresource",
        "database": "coolresource",
        "collection": "resource"
      }
    const data = await reqest_api(url,body)

    return data


}

async function addResource() {
    const url = "/api/action/insertOne"
    const body = {
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
    const data = await reqest_api(url,body)
    return true
}

export { getAllResources,addResource }

export default {
    data: [
        {
            src: "https://pinia.vuejs.org",
            name: "Pinia",
            desc: "符合直觉的 Vue.js 状态管理库",
            tab: ["学习"],
            category: "",
            icon: "https://pinia.vuejs.org/logo.svg"
        },
        {
            src: "https://mklab.vercel.app/FCGames/",
            name: "FC 游戏在线玩",
            desc: "FC 游戏在线玩",
            tab: ["游戏"],
            category: "",
            icon: ""
        },
    ]
}

