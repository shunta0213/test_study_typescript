type User = {
    name: string | undefined,
    age: number,
    premiumUser: boolean,
}

const data: string = `
uhyo,25,1
John Smith,17,0
Mary Sue,14,1
`
const tmpArr: string[] = data.split('\n')

const users: User[] = []

for (const word of tmpArr) {
    if (word === "") {
        continue
    }
    const [name, ageString, premiumUserString] = word.split(",")
    const age = Number(ageString)
    const premiumUser = premiumUserString === "1"
    users.push({
        name,
        age,
        premiumUser
    })
}


const premiumMsg: string = `プレミアムユーザーです。`
const nonPremiumMsg: string = `プレミアムユーザーではありません。`

for (const user of users) {
    const msg: string = `${user.name}(${user.age})は`
    console.log(msg, user.premiumUser ? premiumMsg : nonPremiumMsg)
}